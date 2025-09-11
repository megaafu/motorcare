"use client";

import { Accordion } from "@mantine/core";
import { IconPlus, IconSearch } from "@tabler/icons-react";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import Autocomplete from "react-google-autocomplete";
import { useTranslations } from "next-intl";
import MapWrapper from "./MapWrapper";

interface PlaceCordinate {
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

const MOZ_BOUNDS: [[number, number], [number, number]] = [
  [-26.9, 30.2],
  [-10.3, 41.5],
];

const Mapp = () => {
  const t = useTranslations("Contacts");
  const GOOGLE_MAPS_API_KEY = "AIzaSyAD-sDFj__5UcpWyxXU-VuxgqFK3XtVwC8";

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

  const [location, setLocation] = useState<PlaceCordinate>({
    lat: -25.964677970962004,
    lng: 32.56043422890941,
    name: "Maputo",
  });

  const [filteredMarkers, setFilteredMarkers] = useState<Dealer[]>(allMarkers);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePlaceSelected = (place: any) => {
    if (!place.geometry) return;

    const searchPlace: PlaceCordinate = {
      name: place.formatted_address,
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    };

    setLocation(searchPlace);

    // Filter markers based on proximity (within ~300km radius)
    const filtered = allMarkers.filter((marker) => {
      const distance = getDistance(
        searchPlace.lat,
        searchPlace.lng,
        marker.lat,
        marker.lng
      );
      return distance <= 300; // kilometers
    });

    setFilteredMarkers(filtered.length > 0 ? filtered : allMarkers);
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

  const mapMarkers = filteredMarkers.map((dealer) => ({
    position: [dealer.lat, dealer.lng] as [number, number],
    iconUrl: "/images/location.svg",
    iconSize: [28, 28] as [number, number],
    popupContent: `
      <div class="p-2">
        <p class="font-bold">${dealer.description}</p>
        <p>${dealer.address}</p>
        <p>${t("phone")}: ${dealer.phone}</p>
        <p>${t("email")}: info@mz.motorcare.com</p>
      </div>
    `,
  }));

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
              className="w-full border px-10 py-3 lg:py-4 pl-10"
              placeholder={t("address")}
              apiKey={GOOGLE_MAPS_API_KEY}
              onPlaceSelected={handlePlaceSelected}
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <IconSearch size={20} />
            </div>
          </div>
        </form>
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
            <Accordion.Item key={`${loc.name}${index}`} value={loc.name}>
              <Accordion.Control>{loc.name.toUpperCase()}</Accordion.Control>
              <Accordion.Panel className="space-y-2 bg-slate-200 pt-2 ">
                <p>{t("phone")}: {loc.phone}</p>
                <p>{t("email")}: info@mz.motorcare.com</p>
                <p>{t("physical")}: {loc.address}</p>
                <p>{t("working_hour")}:</p>
                <p >{t("mon-fri")}: {loc.workingHour["mon-fri"]}</p>
                <p >{t("sat")}: {loc.workingHour["sat"]}</p>
                <p >{t("sun")}: {loc.workingHour["sun"]}</p>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>

      {/* Map */}
      <div className="h-full order-1 sm:order-2 flex-1">
        <MapWrapper
          center={[location.lat, location.lng]}
          zoom={5}
          markers={mapMarkers}
          bounds={MOZ_BOUNDS}
          className="border border-gray-200"
        />
      </div>
    </div>
  );
};

export default Mapp;

