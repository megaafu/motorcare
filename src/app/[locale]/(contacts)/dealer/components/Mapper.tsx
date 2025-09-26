"use client";

import { Accordion } from "@mantine/core";
import { IconPlus, IconSearch } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import Autocomplete from "react-google-autocomplete";
import { useTranslations } from "next-intl";
import MapWrapper from "./MapWrapper";

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

const Mapp = () => {
  const t = useTranslations("Contacts");
  const GOOGLE_MAPS_API_KEY = "AIzaSyAD-sDFj__5UcpWyxXU-VuxgqFK3XtVwC8";

  // Mozambique bounds for Google Maps
  const MOZ_BOUNDS = {
    north: -10.3,
    east: 41.5,
    south: -26.9,
    west: 30.2,
  };

  const allMarkers: Dealer[] = [
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
  ];

  const [location, setLocation] = useState<PlaceCoordinate>({
    lat: -25.964677970962004,
    lng: 32.56043422890941,
    name: "Maputo",
  });

  const [filteredMarkers, setFilteredMarkers] = useState<Dealer[]>(allMarkers);
  const [isGoogleMapsLoaded, setIsGoogleMapsLoaded] = useState(false);
  const [closestDealer, setClosestDealer] = useState<Dealer | null>(null);

  useEffect(() => {
    const checkGoogleMaps = () => {
      if (typeof window !== 'undefined' && window.google && window.google.maps) {
        setIsGoogleMapsLoaded(true);
        return true;
      }
      return false;
    };

    // Check immediately
    if (checkGoogleMaps()) return;

    // If not loaded, check every 100ms for up to 5 seconds
    const interval = setInterval(() => {
      if (checkGoogleMaps()) {
        clearInterval(interval);
      }
    }, 100);

    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const handlePlaceSelected = (place: google.maps.places.PlaceResult) => {
    if (!place.geometry || !place.geometry.location) return;

    const searchPlace: PlaceCoordinate = {
      name: place.formatted_address,
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    };

    setLocation(searchPlace);

    // Find the closest dealer
    let closest: Dealer | null = null;
    let minDistance = Infinity;

    allMarkers.forEach((dealer) => {
      const distance = getDistance(
        searchPlace.lat,
        searchPlace.lng,
        dealer.lat,
        dealer.lng
      );

      if (distance < minDistance) {
        minDistance = distance;
        closest = dealer;
      }
    });

    setClosestDealer(closest);

    // Show all dealers but highlight the closest one by sorting
    const sortedMarkers = [...allMarkers].sort((a, b) => {
      const distanceA = getDistance(searchPlace.lat, searchPlace.lng, a.lat, a.lng);
      const distanceB = getDistance(searchPlace.lat, searchPlace.lng, b.lat, b.lng);
      return distanceA - distanceB;
    });

    setFilteredMarkers(sortedMarkers);
  };

  // Haversine Formula for distance in kilometers
  const getDistance = (
    lat1: number,
    lng1: number,
    lat2: number,
    lng2: number
  ) => {
    const R = 6371; // Radius of Earth in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  };


  const mapMarkers: MapMarker[] = filteredMarkers.map((dealer) => ({
    position: { lat: dealer.lat, lng: dealer.lng },
    iconUrl: dealer === closestDealer ? "/images/location-active.svg" : "/images/location.svg",
    iconSize: { width: dealer === closestDealer ? 35 : 28, height: dealer === closestDealer ? 35 : 28 },
    popupContent: `
      <div class="p-2">
        <p class="font-bold text-sm">${dealer.description} ${dealer === closestDealer ? '<span class="text-green-600">(Closest)</span>' : ''}</p>
        <p class="text-xs">${dealer.address}</p>
        <p class="text-xs">${t("phone")}: ${dealer.phone}</p>
        <p class="text-xs">${t("email")}: info@mz.motorcare.com</p>
        <p class="text-xs text-green-600">Distance: ${getDistance(location.lat, location.lng, dealer.lat, dealer.lng).toFixed(1)}km</p>
      </div>
    `,
  }));

  if (!isGoogleMapsLoaded) {
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

        {closestDealer && (
          <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="font-bold text-green-800 text-sm mb-2">
              {t("closest_dealer")}:
            </p>
            <p className="font-semibold text-green-700">{closestDealer.description}</p>
            <p className="text-xs text-green-600">{closestDealer.address}</p>
            <p className="text-xs text-green-600">
              Distance: {getDistance(location.lat, location.lng, closestDealer.lat, closestDealer.lng).toFixed(1)}km
            </p>
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
          {filteredMarkers.map((loc, index) => (
            <Accordion.Item
              key={`${loc.name}${index}`}
              value={loc.name}
              className={loc === closestDealer ? "border-2 border-green-500" : ""}
            >
              <Accordion.Control>
                <div className="flex items-center justify-between">
                  <span className="font-medium">
                    {loc.name.toUpperCase()}
                    {loc === closestDealer && <span className="ml-2 text-green-600 text-xs">(Closest)</span>}
                  </span>
                  <span className="text-xs text-gray-500">
                    {getDistance(location.lat, location.lng, loc.lat, loc.lng).toFixed(1)}km
                  </span>
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
          ))}
        </Accordion>
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
