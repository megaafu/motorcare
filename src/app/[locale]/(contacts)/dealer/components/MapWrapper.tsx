'use client';

import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MarkerData {
  position: [number, number];
  iconUrl: string;
  iconSize: [number, number];
  popupContent: string;
}

const MapWrapper = ({
  center,
  zoom,
  markers,
  className = '',
}: {
  center: [number, number];
  zoom: number;
  markers: MarkerData[];
  className?: string;
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const [, setMounted] = useState(false);

  // Define bounds of Mozambique (rough rectangle)
  const mozambiqueBounds = L.latLngBounds(
    [-26.9, 30.1], // Southwest (Lat, Lng)
    [-10.3, 41.3]  // Northeast (Lat, Lng)
  );

useEffect(() => {
  if (!mapContainer.current || mapRef.current) return;

  // Define Mozambique bounds
  const mozambiqueBounds = L.latLngBounds(
    [-26.9, 30.2], // Southwest corner (approximate)
    [-10.3, 41.5]  // Northeast corner (approximate)
  );

  const map = L.map(mapContainer.current, {
    center,
    zoom,
    zoomControl: true,
    scrollWheelZoom: false,
    maxBounds: mozambiqueBounds,
    maxBoundsViscosity: 1.0, // Prevent panning outside bounds
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  markers.forEach(({ position, iconUrl, iconSize, popupContent }) => {
    const customIcon = L.icon({
      iconUrl,
      iconSize: window.innerWidth < 768 ? [iconSize[0] / 1.5, iconSize[1] / 1.5] : iconSize,
    });

    L.marker(position, { icon: customIcon })
      .addTo(map)
      .bindPopup(popupContent);
  });

  mapRef.current = map;
  setMounted(true);

  return () => {
    map.remove();
    mapRef.current = null;
  };
}, []);


  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView(center, zoom);
    }
  }, [center, zoom]);

  return (
    <div
      ref={mapContainer}
      className={`w-full ${className}`}
      style={{
        height: 'calc(100vh - 240px)',
        maxHeight: '100vh',
      }}
    />
  );
};

export default MapWrapper;
