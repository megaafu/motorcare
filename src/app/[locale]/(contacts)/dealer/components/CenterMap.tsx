import { useEffect } from "react";
import { useMap } from "react-leaflet";

const RecenterAutomatically = ({ lat, lng }: { lat: number; lng: number }) => {
  const map = useMap();

  useEffect(() => {
    map.setView([lat, lng]);
  }, [lat, lng, map]);

  return null;
};

export default RecenterAutomatically;

