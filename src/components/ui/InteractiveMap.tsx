"use client";

import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";
import dynamic from "next/dynamic";

// Données des régions d'intervention
const regions = [
  { 
    id: 1, 
    name: "Kinshasa", 
    coordinates: [-4.4419, 15.2663], 
    projects: 12, 
    beneficiaries: "1.2M", 
    focus: "Santé maternelle",
    description: "Programmes de santé maternelle et infantile, renforcement des services de soins primaires"
  },
  { 
    id: 2, 
    name: "Lubumbashi", 
    coordinates: [-11.6642, 27.4799], 
    projects: 8, 
    beneficiaries: "850K", 
    focus: "Contrôle des maladies",
    description: "Lutte contre le paludisme et les maladies hydriques, amélioration des infrastructures sanitaires"
  },
  { 
    id: 3, 
    name: "Goma", 
    coordinates: [-1.6801, 29.2285], 
    projects: 6, 
    beneficiaries: "480K", 
    focus: "Accès aux soins",
    description: "Amélioration de l'accès aux soins dans les zones affectées par les conflits, support aux réfugiés"
  },
  { 
    id: 4, 
    name: "Matadi", 
    coordinates: [-5.8167, 13.4500], 
    projects: 5, 
    beneficiaries: "320K", 
    focus: "Santé infantile",
    description: "Programmes de vaccination, nutrition infantile et éducation sanitaire dans les écoles"
  },
  { 
    id: 5, 
    name: "Kisangani", 
    coordinates: [0.5167, 25.2000], 
    projects: 7, 
    beneficiaries: "540K", 
    focus: "Prévention",
    description: "Prévention des maladies tropicales, formation des agents de santé communautaires"
  },
  { 
    id: 6, 
    name: "Bukavu", 
    coordinates: [-2.5070, 28.8600], 
    projects: 4, 
    beneficiaries: "290K", 
    focus: "Nutrition",
    description: "Programmes de lutte contre la malnutrition, sécurité alimentaire et éducation nutritionnelle"
  }
];

// Chargement dynamique de la carte pour éviter les erreurs de SSR
const MapComponent = dynamic(() => import("./MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="aspect-[4/3] bg-blue-50 rounded-xl flex items-center justify-center">
      <div className="animate-pulse text-blue-600">Chargement de la carte...</div>
    </div>
  )
});

export default function InteractiveMap() {
  const [activeRegion, setActiveRegion] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  
  // Pour éviter les erreurs d'hydratation
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const handleRegionClick = (regionId: number) => {
    setActiveRegion(activeRegion === regionId ? null : regionId);
  };
  
  if (!isMounted) {
    return null;
  }
  
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[var(--primary)] sm:text-4xl">
            Nos zones d'intervention
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Le FPS est présent dans toutes les provinces de la RDC
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-2/3 relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <MapComponent 
                regions={regions} 
                activeRegion={activeRegion} 
                onRegionClick={handleRegionClick} 
              />
            </div>
          </div>
          
          <div className="w-full lg:w-1/3 p-6 bg-blue-50 rounded-xl shadow-inner sticky top-24">
            {activeRegion ? (
              <div>
                {regions.filter(r => r.id === activeRegion).map(region => (
                  <div key={region.id} className="space-y-4">
                    <h3 className="text-2xl font-bold text-blue-700">{region.name}</h3>
                    <p className="text-gray-700">{region.description}</p>
                    <div className="space-y-3">
                      <div className="flex justify-between pb-2 border-b border-blue-200">
                        <span className="text-gray-600">Projets actifs</span>
                        <span className="font-semibold text-gray-900">{region.projects}</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-blue-200">
                        <span className="text-gray-600">Bénéficiaires</span>
                        <span className="font-semibold text-gray-900">{region.beneficiaries}</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-blue-200">
                        <span className="text-gray-600">Focus principal</span>
                        <span className="font-semibold text-gray-900">{region.focus}</span>
                      </div>
                    </div>
                    <div className="pt-2">
                      <button className="text-blue-600 font-medium hover:underline">
                        Voir tous les projets →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6">
                <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Sélectionnez une région</h3>
                <p className="text-gray-600">
                  Cliquez sur un marqueur sur la carte pour voir les détails des projets dans cette région.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 