"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Types pour nos props
interface Region {
  id: number;
  name: string;
  coordinates: number[];
  projects: number;
  beneficiaries: string;
  focus: string;
  description: string;
}

interface MapComponentProps {
  regions: Region[];
  activeRegion: number | null;
  onRegionClick: (regionId: number) => void;
}

// Composant pour centrer la carte sur la région active
function ChangeMapView({ center }: { center: [number, number] }) {
  const map = useMap();
  
  useEffect(() => {
    if (center) {
      map.setView(center, 7);
    }
  }, [center, map]);
  
  return null;
}

export default function MapComponent({ regions, activeRegion, onRegionClick }: MapComponentProps) {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
    
    // Injecter les styles CSS de Leaflet
    if (typeof window !== "undefined") {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css";
      link.integrity = "sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==";
      link.crossOrigin = "";
      
      if (!document.querySelector('link[href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"]')) {
        document.head.appendChild(link);
      }
    }
    
    // Corriger l'icône par défaut de Leaflet
    if (L.Icon && L.Icon.Default) {
      const DefaultIconProto = L.Icon.Default.prototype as any;
      if (DefaultIconProto._getIconUrl) {
        delete DefaultIconProto._getIconUrl;
      }
      
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: '/images/marker-icon-2x.png',
        iconUrl: '/images/marker-icon.png',
        shadowUrl: '/images/marker-shadow.png',
      });
    }
  }, []);
  
  // Obtenir les coordonnées du centre
  const activeRegionData = activeRegion ? regions.find(r => r.id === activeRegion) : null;
  const centerCoords: [number, number] = activeRegionData 
    ? [activeRegionData.coordinates[0], activeRegionData.coordinates[1]]
    : [-4.322447, 15.307045]; // Centré sur Kinshasa par défaut
  
  if (!loaded) {
    return (
      <div className="w-full h-[500px] bg-blue-50 flex items-center justify-center">
        <div className="animate-pulse text-blue-600">Chargement de la carte...</div>
      </div>
    );
  }
  
  return (
    <div className="w-full h-[500px]">
      <MapContainer 
        center={[-4.322447, 15.307045]} 
        zoom={5} 
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <ChangeMapView center={centerCoords} />
        
        {regions.map((region) => (
          <Marker 
            key={region.id}
            position={[region.coordinates[0], region.coordinates[1]] as [number, number]}
            eventHandlers={{
              click: () => {
                onRegionClick(region.id);
              }
            }}
          >
            <Popup>
              <div className="text-center p-1">
                <strong className="text-blue-700">{region.name}</strong>
                <div className="text-sm text-gray-600">{region.projects} projets actifs</div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
} 