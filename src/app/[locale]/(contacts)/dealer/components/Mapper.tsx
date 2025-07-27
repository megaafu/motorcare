"use client";

import { Accordion, Button, Card, Text } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import Autocomplete from "react-google-autocomplete";
import { useTranslations } from "next-intl";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import RecenterAutomatically from "./CenterMap";

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

  const customIcon = new Icon({
    iconUrl: "/images/location.svg",
    iconSize: [28, 28],
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

  return (
    <div className="mb-[10-vh] flex h-[calc(100vh-220px)]">
      {/* SIDEBAR */}
      <div
        className="w-[400px] min-w-[300px] max-w-[500px] overflow-y-auto bg-white p-8 shadow-md"
        onWheel={(e) => e.stopPropagation()}
      >
        <p className="mb-6 text-2xl font-bold">{t("find_dealer")}</p>

        <form method="post" className="mb-8 space-y-4">
          <Autocomplete
            className="w-full border px-2 py-4"
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
          className="space-y-4"
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
              <Accordion.Panel className="space-y-1 bg-slate-200 pt-2">
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
      <div className="h-full flex-1">
        <MapContainer
          key={`${location.lat}-${location.lng}`} 
          center={[-25.9686, 32.5804]}
          style={{ height: "100%", width: "100%" }}
          zoom={6}
          minZoom={5}
          maxZoom={16}
          maxBounds={MOZ_BOUNDS}
          maxBoundsViscosity={1.0}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {markers.map((marker, index) => (
            <Marker
              key={`${marker.name}${index}`}
              position={[marker.lat, marker.lng]}
              icon={customIcon}
            >
              <Popup>
                <Card shadow="sm" padding="sm" withBorder>
                  <Text size="sm">
                    <p className="font-bold text-black">{marker.description}</p>
                    <span className="text-black">{marker.address}</span>
                  </Text>
                </Card>
              </Popup>
            </Marker>
          ))}

          <RecenterAutomatically lat={location.lat} lng={location.lng} />
        </MapContainer>
      </div>
    </div>
  );
};

export default Mapp;
