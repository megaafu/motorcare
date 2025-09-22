"use client";

import { GoogleMap, Marker } from "@react-google-maps/api";
import { useCallback, useRef, useState } from "react";

interface MarkerData {
  position: { lat: number; lng: number };
  iconUrl?: string;
  iconSize?: { width: number; height: number };
}

interface MapWrapperProps {
  center: { lat: number; lng: number };
  zoom?: number;
  markers?: MarkerData[];
  bounds?: { north: number; south: number; east: number; west: number };
  className?: string;
}

const containerStyle = {
  width: "100%",
  height: "100%",
};

export default function MapWrapper({
  center,
  zoom = 6,
  markers = [],
  bounds,
  className,
}: MapWrapperProps) {
  const mapRef = useRef<google.maps.Map | null>(null);
  const [currentZoom, setCurrentZoom] = useState(zoom);
  const [mapType, setMapType] = useState<google.maps.MapTypeId>(google.maps.MapTypeId.ROADMAP);

  // when map is loaded, fit to bounds if provided
  const onLoad = useCallback(
    (map: google.maps.Map) => {
      mapRef.current = map;

      // Add zoom change listener
      google.maps.event.addListener(map, 'zoom_changed', () => {
        setCurrentZoom(map.getZoom() || zoom);
      });

      if (bounds) {
        const mozBounds = new google.maps.LatLngBounds(
          { lat: bounds.south, lng: bounds.west },
          { lat: bounds.north, lng: bounds.east }
        );
        map.fitBounds(mozBounds);
      } else {
        map.setCenter(center);
        map.setZoom(zoom);
      }
    },
    [bounds, center, zoom]
  );

  // Control handlers
  const zoomIn = useCallback(() => {
    if (mapRef.current) {
      const currentZoom = mapRef.current.getZoom() || zoom;
      mapRef.current.setZoom(currentZoom + 1);
    }
  }, [zoom]);

  const zoomOut = useCallback(() => {
    if (mapRef.current) {
      const currentZoom = mapRef.current.getZoom() || zoom;
      mapRef.current.setZoom(currentZoom - 1);
    }
  }, [zoom]);

  const resetView = useCallback(() => {
    if (mapRef.current) {
      if (bounds) {
        const mozBounds = new google.maps.LatLngBounds(
          { lat: bounds.south, lng: bounds.west },
          { lat: bounds.north, lng: bounds.east }
        );
        mapRef.current.fitBounds(mozBounds);
      } else {
        mapRef.current.setCenter(center);
        mapRef.current.setZoom(zoom);
      }
    }
  }, [bounds, center, zoom]);

  const toggleMapType = useCallback(() => {
    if (mapRef.current) {
      const newMapType = mapType === google.maps.MapTypeId.ROADMAP 
        ? google.maps.MapTypeId.SATELLITE 
        : google.maps.MapTypeId.ROADMAP;
      
      setMapType(newMapType);
      mapRef.current.setMapTypeId(newMapType);
    }
  }, [mapType]);

  const getCurrentLocation = useCallback(() => {
    if (navigator.geolocation && mapRef.current) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          
          mapRef.current?.setCenter(pos);
          mapRef.current?.setZoom(15);
          
          // Add a temporary marker for current location
          new google.maps.Marker({
            position: pos,
            map: mapRef.current,
            title: "Your Location",
            icon: {
              url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
              scaledSize: new google.maps.Size(32, 32),
            },
          });
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Unable to get your location. Please check your browser permissions.");
        }
      );
    }
  }, []);

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Custom Controls Container */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 bg-white p-2 rounded-lg shadow-md">
        {/* Zoom Controls */}
        <div className="flex flex-col gap-2">
          <button
            onClick={zoomIn}
            className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
            title="Zoom In"
          >
            <span className="text-lg font-bold">+</span>
          </button>
          <button
            onClick={zoomOut}
            className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
            title="Zoom Out"
          >
            <span className="text-lg font-bold">-</span>
          </button>
        </div>
      </div>

      {/* Google Map */}
      <GoogleMap
        mapContainerStyle={containerStyle}
        onLoad={onLoad}
        options={{
          zoomControl: false, // We're using custom zoom controls
          mapTypeControl: false, // We're using custom map type control
          streetViewControl: false,
          fullscreenControl: false,
          scaleControl: false,
          rotateControl: false,
          // Map styling
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }],
            },
          ],
        }}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker.position}
            icon={
              marker.iconUrl
                ? {
                    url: marker.iconUrl,
                    scaledSize: new google.maps.Size(
                      marker.iconSize?.width ?? 28,
                      marker.iconSize?.height ?? 28
                    ),
                  }
                : undefined
            }
          />
        ))}
      </GoogleMap>

      {/* Zoom level display at bottom right */}
      <div className="absolute bottom-4 right-4 z-10 bg-white px-2 py-1 rounded-md text-xs border border-gray-300 shadow-sm">
        Zoom: {currentZoom}
      </div>
    </div>
  );
}