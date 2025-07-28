"use client";

import { Accordion, Button, Card, Text } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { Icon } from "leaflet";
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

const MOZ_BOUNDS: [[number, number], [number, number]] = [
  [-27.0, 29.0], // SW
  [-10.0, 41.5], // NE
];

const Mapp = () => {
  const t = useTranslations("Contacts");
  const GOOGLE_MAPS_API_KEY = "AIzaSyAD-sDFj__5UcpWyxXU-VuxgqFK3XtVwC8";

  const [location, setLocation] = useState<PlaceCordinate>({
    lat: -19.831767430887417,
    lng: 34.842768295566614,
    name: "Beira",
  });

  const markers = [
    {
      name: "Maputo",
      lat: -25.964677970962004,
      lng: 32.56043422890941,
      phone: "21 35 08 00",
      description: "Sede: Maputo",
      address: "Rua Kanwalanga N.141",
    },
    {
      name: "Beira",
      lat: -19.831767430887417,
      lng: 34.842768295566614,
      phone: "23 32 65 03",
      description: "Delegação da Beira",
      address: "Av. Samora Machel, n.3024, Beira",
    },
    {
      name: "Moatize",
      lat: -16.058213944734714,
      lng: 33.71656936815897,
      phone: "25 24 22 20",
      description: "Delegação de Moatize",
      address: "E.N.7 Unidade 25 de Setembro, Chithatha Moatize, Tete",
    },
    {
      name: "Nampula",
      lat: -15.103817890661702,
      lng: 39.26370586526631,
      phone: "26 21 72 51",
      description: "Delegação da Nampula",
      address: "Rua da França, Parcela 3, Bairro da Carrupeia",
    },
    {
      name: "Pemba",
      lat: -13.009611051159483,
      lng: 40.53329661075185,
      phone: "27 22 07 71",
      description: "Delegação de Pemba",
      address: "E.N.106 Bairro do Alto Giongone",
    },
  ];

  const mapMarkers = markers.map((dealer) => ({
    position: [dealer.lat, dealer.lng] as [number, number],
    iconUrl: "/images/location.svg",
    iconSize: [28, 28] as [number, number],
    popupContent: `
      <div class="p-2">
        <p class="font-bold">${dealer.description}</p>
        <p>${dealer.address}</p>
        <p>Phone: ${dealer.phone}</p>
        <p>Email: info@mz.motorcare.com</p>
      </div>
    `,
  }));

  return (
    <div className="mb-[10vh] flex lg:h-[calc(100vh-240px)] gap-5 flex-col lg:flex-row">
      <div
        className="w-full order-2 sm:order-1  bg-white p-4 shadow-md lg:h-full lg:w-[400px] lg:min-w-[300px] lg:max-w-[500px] lg:p-8"
        onWheel={(e) => e.stopPropagation()}
      >
        <p className="mb-4 text-xl font-bold lg:text-2xl">{t("find_dealer")}</p>

        <form method="post" className="mb-6 space-y-4">
          <Autocomplete
            className="w-full border px-2 py-3 text-sm lg:py-4"
            placeholder={t("address")}
            apiKey={GOOGLE_MAPS_API_KEY}
            onPlaceSelected={(place) => {
              const searchPlace: PlaceCordinate = {
                name: place.formatted_address,
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng(),
              };
              setLocation(searchPlace);
            }}
          />

          <Button className="w-full bg-primary" radius="xs" size="md">
            {t("search")}
          </Button>
        </form>

        <Accordion
          multiple
          variant="separated"
          className="space-y-2 lg:space-y-4"
          chevron={<IconPlus size="1rem" />}
          styles={{
            chevron: {
              "&[data-rotate]": { transform: "rotate(45deg)" },
            },
          }}
        >
          {markers.map((loc, index) => (
            <Accordion.Item key={`${loc.name}${index}`} value={loc.name}>
              <Accordion.Control>{loc.name.toUpperCase()}</Accordion.Control>
              <Accordion.Panel className="space-y-1 bg-slate-200 pt-2 text-sm">
                <p>
                  {t("phone")}: {loc.phone}
                </p>
                <p>{t("email")}: info@mz.motorcare.com</p>
                <p>
                  {t("physical")}: {loc.address}
                </p>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>

      {/* MAP */}
      <div className="h-full order-1 sm:order-2 flex-1">
        <MapWrapper
          center={[location.lat, location.lng]}
          zoom={5}
          markers={mapMarkers}
          className="border border-gray-200"
        />
      </div>
    </div>
  );
};

export default Mapp;
