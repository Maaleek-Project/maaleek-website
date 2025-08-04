import React, { useEffect, useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

// Note: This is a placeholder for Mapbox. In a real implementation, you would use:
// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

interface MapProps {
  className?: string;
}

const Map = ({ className = '' }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isTokenSet, setIsTokenSet] = useState(false);

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      setIsTokenSet(true);
      // Here you would initialize the actual Mapbox map
      // mapboxgl.accessToken = mapboxToken;
      // initializeMap();
    }
  };

  // Placeholder map initialization
  useEffect(() => {
    if (isTokenSet && mapContainer.current) {
      // This is where you would initialize the real Mapbox map
      // pointing to Abidjan coordinates: [4.0167, 5.3333]
      console.log('Map would be initialized here with token:', mapboxToken);
    }
  }, [isTokenSet, mapboxToken]);

  if (!isTokenSet) {
    return (
      <div className={`bg-muted/30 rounded-lg p-6 ${className}`}>
        <div className="text-center space-y-4">
          <MapPin className="h-12 w-12 text-primary mx-auto" />
          <h3 className="text-lg font-semibold">Carte interactive</h3>
          <p className="text-muted-foreground text-sm">
            Pour afficher la carte de notre emplacement à Abidjan, veuillez entrer votre token Mapbox public.
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <Input
              placeholder="Votre token Mapbox public"
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              type="password"
            />
            <Button onClick={handleTokenSubmit} disabled={!mapboxToken.trim()}>
              Charger
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Obtenez votre token sur{' '}
            <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              mapbox.com
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <div ref={mapContainer} className="w-full h-64 rounded-lg bg-muted/30 flex items-center justify-center">
        <div className="text-center space-y-2">
          <MapPin className="h-8 w-8 text-primary mx-auto" />
          <p className="text-sm font-medium">Saush - Abidjan, Côte d'Ivoire</p>
          <p className="text-xs text-muted-foreground">Carte Mapbox chargée ici</p>
        </div>
      </div>
    </div>
  );
};

export default Map;