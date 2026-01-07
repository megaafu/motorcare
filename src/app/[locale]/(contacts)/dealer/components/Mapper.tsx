"use client";

import { Accordion } from "@mantine/core";
import { IconPlus, IconSearch } from "@tabler/icons-react";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import Autocomplete from "react-google-autocomplete";
import { useTranslations } from "next-intl";
import MapWrapper from "./MapWrapper";
import { get } from "http";

interface PlaceCoordinate {
  name: string | undefined;
  lat: number;
  lng: number;
}

interface Dealer {
  name: string;
  lat: number;
  lng: number;
  phone: string;
  description: string;
  address: string;
  workingHour: {
    "mon-fri": string;
    sat: string;
    sun: string;
  };
}

interface MapMarker {
  position: { lat: number; lng: number };
  iconUrl: string;
  iconSize: { width: number; height: number };
  popupContent: string;
}

interface DistanceInfo {
  dealer: Dealer;
  roadDistance: number | null;
  roadDuration: number | null;
  straightDistance: number;
  isExactRoadDistance: boolean;
}

const Mapp = () => {
  const t = useTranslations("Contacts");
  const GOOGLE_MAPS_API_KEY = "AIzaSyAD-sDFj__5UcpWyxXU-VuxgqFK3XtVwC8";

  const MOZ_BOUNDS = {
    north: -10.3,
    east: 41.5,
    south: -26.9,
    west: 30.2,
  };

  const ROAD_DISTANCE_FACTORS: Record<string, number> = {
    "Maputo-Beira": 1.35,
    "Maputo-Moatize": 1.4,
    "Maputo-Nampula": 1.45,
    "Maputo-Pemba": 1.5,
    "Beira-Moatize": 1.25,
    "Beira-Nampula": 1.3,
    "Beira-Pemba": 1.35,
    "Moatize-Nampula": 1.2,
    "Moatize-Pemba": 1.3,
    "Nampula-Pemba": 1.15,
  };
const allMarkers: Dealer[] = useMemo(() => [
  {
    name: "Maputo",
    lat: -25.964677970962004,
    lng: 32.56043422890941,
    phone: "21 35 08 00",
    description: "Sede: Maputo",
    address: "Rua Kanwalanga N.141",
    workingHour: {
      "mon-fri": "7:30 - 16:30",
      sat: t("closed"),
      sun: t("closed"),
    },
  },
  {
    name: "Beira",
    lat: -19.831767430887417,
    lng: 34.842768295566614,
    phone: "23 32 65 03",
    description: "Delegação da Beira",
    address: "Av. Samora Machel, n.3024, Beira",
    workingHour: {
      "mon-fri": "7:30 - 16:30",
      sat: "7:30 - 11:30",
      sun: t("closed"),
    },
  },
  {
    name: "Moatize",
    lat: -16.058213944734714,
    lng: 33.71656936815897,
    phone: "25 24 22 20",
    description: "Delegação de Moatize",
    address: "E.N.7 Unidade 25 de Setembro, Chithatha Moatize, Tete",
    workingHour: {
      "mon-fri": "7:30 - 16:30",
      sat: "7:30 - 11:30",
      sun: t("closed"),
    },
  },
  {
    name: "Nampula",
    lat: -15.103817890661702,
    lng: 39.26370586526631,
    phone: "26 21 72 51",
    description: "Delegação da Nampula",
    address: "Rua da França, Parcela 3, Bairro da Carrupeia",
    workingHour: {
      "mon-fri": "7:30 - 16:30",
      sat: "7:30 - 11:30",
      sun: t("closed"),
    },
  },
  {
    name: "Pemba",
    lat: -13.009611051159483,
    lng: 40.53329661075185,
    phone: "27 22 07 71",
    description: "Delegação de Pemba",
    address: "E.N.106 Bairro do Alto Giongone",
    workingHour: {
      "mon-fri": "7:30 - 16:30",
      sat: "7:30 - 11:30",
      sun: t("closed"),
    },
  },
], [t]);

  const MAPUTO_CITY_CENTER = useMemo(() => ({
    lat: -25.969248,
    lng: 32.573424,
    name: "Maputo City Center"
  }), []);

  const [location, setLocation] = useState<PlaceCoordinate>(MAPUTO_CITY_CENTER);
  const [filteredMarkers, setFilteredMarkers] = useState<Dealer[]>(allMarkers);
  const [isGoogleMapsLoaded, setIsGoogleMapsLoaded] = useState(false);
  const [closestDealer, setClosestDealer] = useState<Dealer | null>(allMarkers[0]);
  const [distanceInfo, setDistanceInfo] = useState<DistanceInfo[]>([]);
  const [isLoadingDistances, setIsLoadingDistances] = useState(false);
  const distanceServiceRef = useRef<google.maps.DistanceMatrixService | null>(null);
  const [apiStatus, setApiStatus] = useState<'not_loaded' | 'loading' | 'loaded' | 'error'>('not_loaded');

  const getStraightDistance = useCallback((
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): number => {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  }, []);

  const getEstimatedRoadDistance = useCallback((originName: string, destinationName: string, straightDistance: number): number => {
    const key1 = `${originName}-${destinationName}`;
    const key2 = `${destinationName}-${originName}`;
    const factor = ROAD_DISTANCE_FACTORS[key1] || ROAD_DISTANCE_FACTORS[key2] || 1.3;
    
    return straightDistance * factor;
  }, []);

  const calculateEstimatedDistances = useCallback((origin: PlaceCoordinate) => {
    const originName = origin.name?.includes("Maputo") ? "Maputo" : "Custom";
    
    const distances: DistanceInfo[] = allMarkers.map((dealer) => {
      const straightDistance = getStraightDistance(
        origin.lat,
        origin.lng,
        dealer.lat,
        dealer.lng
      );

      let roadDistance: number;
      
      if (originName === "Maputo" || dealer.name === "Maputo") {
        const otherCity = originName === "Maputo" ? dealer.name : "Maputo";
        roadDistance = getEstimatedRoadDistance("Maputo", otherCity, straightDistance);
      } else {
        roadDistance = straightDistance * 1.3;
      }

      return {
        dealer,
        roadDistance,
        roadDuration: Math.round(roadDistance / 60 * 60),
        straightDistance,
        isExactRoadDistance: false,
      };
    });

    setDistanceInfo(distances);

    let closest: Dealer | null = null;
    let minDistance = Infinity;

    distances.forEach((info) => {
      if (info.roadDistance! < minDistance) {
        minDistance = info.roadDistance!;
        closest = info.dealer;
      }
    });

    setClosestDealer(closest);

    const sortedMarkers = [...allMarkers].sort((a, b) => {
      const infoA = distances.find(d => d.dealer.name === a.name)!;
      const infoB = distances.find(d => d.dealer.name === b.name)!;
      return infoA.roadDistance! - infoB.roadDistance!;
    });

    setFilteredMarkers(sortedMarkers);
  }, [allMarkers, getStraightDistance, getEstimatedRoadDistance]);

  useEffect(() => {
    const initGoogleMaps = async () => {
      try {
        if (typeof window !== 'undefined' && window.google && window.google.maps) {
          setIsGoogleMapsLoaded(true);
          distanceServiceRef.current = new google.maps.DistanceMatrixService();
          setApiStatus('loaded');
          calculateEstimatedDistances(MAPUTO_CITY_CENTER);
          return;
        }

        setApiStatus('loading');

        if (!document.querySelector('script[src*="maps.googleapis.com"]')) {
          const script = document.createElement('script');
          script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
          script.async = true;
          script.defer = true;
          script.onload = () => {
            if (window.google && window.google.maps) {
              setIsGoogleMapsLoaded(true);
              distanceServiceRef.current = new google.maps.DistanceMatrixService();
              setApiStatus('loaded');
              calculateEstimatedDistances(MAPUTO_CITY_CENTER);
            }
          };
          
          script.onerror = () => {
            setApiStatus('error');
            calculateEstimatedDistances(MAPUTO_CITY_CENTER);
          };
          
          document.head.appendChild(script);
        }
      } catch (error) {
        console.error("Error initializing Google Maps:", error);
        setApiStatus('error');
        calculateEstimatedDistances(MAPUTO_CITY_CENTER);
      }
    };

    initGoogleMaps();
  }, [allMarkers,getStraightDistance, getEstimatedRoadDistance]);

 const calculateGoogleRoadDistances = async (origin: PlaceCoordinate): Promise<boolean> => {
  if (!distanceServiceRef.current || apiStatus !== 'loaded') {
    return false;
  }

  try {
    const response = await new Promise<google.maps.DistanceMatrixResponse>((resolve, reject) => {
      distanceServiceRef.current!.getDistanceMatrix(
        {
          origins: [{ lat: origin.lat, lng: origin.lng }],
          destinations: allMarkers.map(dealer => ({ lat: dealer.lat, lng: dealer.lng })),
          travelMode: google.maps.TravelMode.DRIVING,
          unitSystem: google.maps.UnitSystem.METRIC,
        },
        (response, status) => {
          if (status === google.maps.DistanceMatrixStatus.OK && response) {
            resolve(response);
          } else {
            reject(new Error(`Google Maps API error: ${status}`));
          }
        }
      );
    });

    const distances: DistanceInfo[] = allMarkers.map((dealer, index) => {
      const element = response.rows[0].elements[index];
      const straightDistance = getStraightDistance(
        origin.lat,
        origin.lng,
        dealer.lat,
        dealer.lng
      );

      if (element.status === "OK") {
        return {
          dealer,
          roadDistance: element.distance.value / 1000,
          roadDuration: element.duration.value / 60,
          straightDistance,
          isExactRoadDistance: true,
        };
      } else {
        const estimatedRoadDistance = getEstimatedRoadDistance(
          origin.name?.includes("Maputo") ? "Maputo" : "Custom",
          dealer.name,
          straightDistance
        );
        
        return {
          dealer,
          roadDistance: estimatedRoadDistance,
          roadDuration: Math.round(estimatedRoadDistance / 60 * 60),
          straightDistance,
          isExactRoadDistance: false,
        };
      }
    });

    setDistanceInfo(distances);

    let closest: Dealer | null = null;
    let minDistance = Infinity;

    distances.forEach((info) => {
      if (info.roadDistance! < minDistance) {
        minDistance = info.roadDistance!;
        closest = info.dealer;
      }
    });

    setClosestDealer(closest);

    const sortedMarkers = [...allMarkers].sort((a, b) => {
      const infoA = distances.find(d => d.dealer.name === a.name)!;
      const infoB = distances.find(d => d.dealer.name === b.name)!;
      return infoA.roadDistance! - infoB.roadDistance!;
    });

    setFilteredMarkers(sortedMarkers);
    return true;
  } catch (error) {
    console.error("Error calculating Google road distances:", error);
    return false;
  }
};

  const handlePlaceSelected = async (place: google.maps.places.PlaceResult) => {
    if (!place.geometry || !place.geometry.location) return;

    const searchPlace: PlaceCoordinate = {
      name: place.formatted_address || place.name || "Selected Location",
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    };

    setLocation(searchPlace);
    setIsLoadingDistances(true);

    try {
      const success = await calculateGoogleRoadDistances(searchPlace);
      
      if (!success) {
        calculateEstimatedDistances(searchPlace);
      }
    } catch (error) {
      console.error("Error in handlePlaceSelected:", error);
      calculateEstimatedDistances(searchPlace);
    } finally {
      setIsLoadingDistances(false);
    }
  };

  const getDistanceForDealer = (dealer: Dealer) => {
    const info = distanceInfo.find(d => d.dealer.name === dealer.name);
    
    if (!info) {
      const straightDistance = getStraightDistance(location.lat, location.lng, dealer.lat, dealer.lng);
      const estimatedRoadDistance = getEstimatedRoadDistance(
        location.name?.includes("Maputo") ? "Maputo" : "Custom",
        dealer.name,
        straightDistance
      );
      
      return {
        distance: estimatedRoadDistance,
        formatted: `${estimatedRoadDistance.toFixed(0)}km (estimated)`,
        isExact: false,
      };
    }

    return {
      distance: info.roadDistance,
      formatted: `${info.roadDistance!.toFixed(0)}km${info.isExactRoadDistance ? '' : ' (estimated)'}`,
      isExact: info.isExactRoadDistance,
    };
  };

  const mapMarkers: MapMarker[] = filteredMarkers.map((dealer) => {
    const distanceInfo = getDistanceForDealer(dealer);
    const isClosest = closestDealer && dealer.name === closestDealer.name;
    
    return {
      position: { lat: dealer.lat, lng: dealer.lng },
      iconUrl: isClosest ? "/images/location-active.svg" : "/images/location.svg",
      iconSize: { width: isClosest ? 35 : 28, height: isClosest ? 35 : 28 },
      popupContent: `
        <div class="p-2">
          <p class="font-bold text-sm">${dealer.description} ${isClosest ? '<span class="text-green-600">(Closest)</span>' : ''}</p>
          <p class="text-xs">${dealer.address}</p>
          <p class="text-xs">${t("phone")}: ${dealer.phone}</p>
          <p class="text-xs">${t("email")}: info@mz.motorcare.com</p>
          <p class="text-xs text-green-600">Distance: ${distanceInfo.formatted}</p>
        </div>
      `,
    };
  });

  if (!isGoogleMapsLoaded && apiStatus === 'loading') {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg">Loading map...</div>
      </div>
    );
  }

  return (
    <div className="mb-5 flex lg:h-[calc(100lvh-80px)] overflow-y-scroll gap-5 flex-col lg:flex-row">
      {/* Sidebar */}
      <div
        className="w-full order-2 sm:order-1 bg-white p-4 shadow-md lg:h-full lg:w-[400px] lg:min-w-[300px] lg:max-w-[500px] lg:p-8"
        onWheel={(e) => e.stopPropagation()}
      >
        <p className="mb-4 text-xl font-bold lg:text-2xl">
          {t("find_dealer")}
        </p>

        <form className="mb-6 space-y-4">
          <div className="relative">
            <Autocomplete
              className="w-full border px-10 py-3 lg:py-4 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={t("address")}
              apiKey={GOOGLE_MAPS_API_KEY}
              onPlaceSelected={handlePlaceSelected}
              options={{
                types: ["geocode", "establishment"],
                componentRestrictions: { country: "mz" },
                bounds: MOZ_BOUNDS,
                strictBounds: true,
              }}
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <IconSearch size={20} />
            </div>
          </div>
        </form>

        {isLoadingDistances && (
          <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-blue-800 text-sm">Calculating accurate road distances...</p>
          </div>
        )}

        <Accordion
          multiple={false}
          variant="separated"
          className="space-y-4 lg:space-y-6"
          chevron={<IconPlus size="1rem" />}
          styles={{
            chevron: { "&[data-rotate]": { transform: "rotate(45deg)" } },
          }}
        >
          {filteredMarkers.map((loc, index) => {
            const distanceInfo = getDistanceForDealer(loc);
            const isClosest = closestDealer && loc.name === closestDealer.name;
            
            return (
              <Accordion.Item
                key={`${loc.name}${index}`}
                value={loc.name}
                className={isClosest ? "border-2 border-green-500" : ""}
              >
                <Accordion.Control>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">
                      {loc.name.toUpperCase()}
                      {isClosest && <span className="ml-2 text-green-600 text-xs">(Closest)</span>}
                    </span>
                    <div className="text-xs text-gray-500 flex flex-col items-end">
                      <span>{distanceInfo.formatted}</span>
                      {isLoadingDistances && (
                        <span className="text-blue-500 text-[10px]">Calculating...</span>
                      )}
                    </div>
                  </div>
                </Accordion.Control>
                <Accordion.Panel className="space-y-2 bg-slate-100 p-4 rounded-b-md">
                  <p className="font-semibold">{loc.description}</p>
                  <p className="text-sm">{loc.address}</p>
                  <p className="text-sm">{t("phone")}: {loc.phone}</p>
                  <p className="text-sm">{t("email")}: info@mz.motorcare.com</p>
                  <div className="mt-3 pt-2 border-t border-gray-200">
                    <p className="text-sm font-medium">{t("working_hour")}:</p>
                    <p className="text-sm">{t("mon-fri")}: {loc.workingHour["mon-fri"]}</p>
                    <p className="text-sm">{t("sat")}: {loc.workingHour["sat"]}</p>
                    <p className="text-sm">{t("sun")}: {loc.workingHour["sun"]}</p>
                  </div>
                </Accordion.Panel>
              </Accordion.Item>
            );
          })}
        </Accordion>

        {apiStatus === 'error' && (
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-800 text-xs">
              <strong>Note:</strong> Google Maps API not available. Showing estimated road distances.
              Real road distances are typically 30-50% longer than straight-line distances.
            </p>
          </div>
        )}
      </div>

      {/* Map */}
      <div className="h-full order-1 sm:order-2 flex-1">
        <MapWrapper
          center={{ lat: location.lat, lng: location.lng }}
          zoom={filteredMarkers.length === 1 ? 16 : 6}
          markers={mapMarkers}
          bounds={MOZ_BOUNDS}
          className="border border-gray-200 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Mapp;