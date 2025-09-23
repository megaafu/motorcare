// components/GoogleMapsProvider.tsx
'use client';

import { useEffect, useState } from 'react';

declare global {
  interface Window {
    googleMapsLoaded: boolean;
    googleMapsCallback?: () => void;
  }
}

export default function GoogleMapsProvider({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if already loaded
    if (window.google && window.google.maps) {
      setIsLoaded(true);
      return;
    }

    // Check if already loading
    if (window.googleMapsLoaded) {
      return;
    }

    const loadGoogleMaps = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAD-sDFj__5UcpWyxXU-VuxgqFK3XtVwC8&libraries=places&callback=googleMapsCallback`;
      script.async = true;
      script.defer = true;

      window.googleMapsCallback = () => {
        setIsLoaded(true);
        window.googleMapsLoaded = true;
      };

      document.head.appendChild(script);
    };

    loadGoogleMaps();
  }, []);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg">Loading map...</div>
      </div>
    );
  }

  return <>{children}</>;
}
