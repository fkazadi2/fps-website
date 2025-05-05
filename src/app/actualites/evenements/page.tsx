"use client";

import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import { Calendar, ChevronRight, Search, MapPin } from "lucide-react";
import { useState } from "react";

export default function Evenements() {
  return (
    <MainLayout>
      <div className="bg-white">
        {/* En-tête de la page */}
        <div className="bg-blue-50 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col space-y-2">
              <Link href="/actualites" className="text-blue-600 hover:text-blue-500">
                &larr; Retour aux actualités
              </Link>
              <h1 className="text-3xl font-extrabold text-blue-700 sm:text-4xl">
                Événements
              </h1>
            </div>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl">
              Calendrier des événements organisés par le FPS et autres rendez-vous importants dans le domaine de la santé.
            </p>
          </div>
        </div>

        {/* Section de filtrage */}
        <section className="bg-white py-8 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Rechercher un événement..."
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <select className="block w-full sm:w-auto pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                  <option value="upcoming">Événements à venir</option>
                  <option value="past">Événements passés</option>
                  <option value="all">Tous les événements</option>
                </select>
                <select className="block w-full sm:w-auto pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                  <option value="">Tous les types</option>
                  <option value="conference">Conférences</option>
                  <option value="atelier">Ateliers</option>
                  <option value="formation">Formations</option>
                  <option value="inauguration">Inaugurations</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Événements à venir */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Événements à venir</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Événement 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
                <div className="h-48 bg-blue-100 relative">
                  <div className="absolute top-0 left-0 bg-blue-600 text-white px-3 py-2 rounded-br-lg">
                    <div className="text-center">
                      <span className="block text-xl font-bold">26</span>
                      <span className="block text-sm">Mai</span>
                    </div>
                  </div>
                  <div className="w-full h-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 text-blue-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-2">
                    Conférence
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Conférence Nationale sur la CSU</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">26-27 mai 2024</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">Hôtel Pullman, Kinshasa</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Conférence nationale rassemblant les acteurs clés de la santé pour faire le point sur les avancées de la CSU en RDC et définir les prochaines priorités stratégiques.
                  </p>
                  <div className="mt-4">
                    <Link href="/actualites/evenements/conference-nationale-csu" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-500">
                      En savoir plus <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Événement 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
                <div className="h-48 bg-blue-100 relative">
                  <div className="absolute top-0 left-0 bg-blue-600 text-white px-3 py-2 rounded-br-lg">
                    <div className="text-center">
                      <span className="block text-xl font-bold">15</span>
                      <span className="block text-sm">Juin</span>
                    </div>
                  </div>
                  <div className="w-full h-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 text-blue-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-2">
                    Formation
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Atelier de formation des agents de santé</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">15-19 juin 2024</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">Centre de formation INRB, Kinshasa</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Formation destinée aux agents de santé sur les protocoles de prise en charge des femmes enceintes et des nouveau-nés dans le cadre du programme de gratuité des soins.
                  </p>
                  <div className="mt-4">
                    <Link href="/actualites/evenements/atelier-formation-agents" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-500">
                      En savoir plus <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Événement 3 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
                <div className="h-48 bg-blue-100 relative">
                  <div className="absolute top-0 left-0 bg-blue-600 text-white px-3 py-2 rounded-br-lg">
                    <div className="text-center">
                      <span className="block text-xl font-bold">10</span>
                      <span className="block text-sm">Juil</span>
                    </div>
                  </div>
                  <div className="w-full h-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 text-blue-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-2">
                    Inauguration
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Inauguration du Centre de santé modèle FPS</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">10 juillet 2024</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">Quartier Binza, Kinshasa</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Cérémonie d'inauguration du nouveau centre de santé modèle financé par le FPS pour servir de référence en matière de qualité des soins et de mise en œuvre de la CSU.
                  </p>
                  <div className="mt-4">
                    <Link href="/actualites/evenements/inauguration-centre" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-500">
                      En savoir plus <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Événement 4 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
                <div className="h-48 bg-blue-100 relative">
                  <div className="absolute top-0 left-0 bg-blue-600 text-white px-3 py-2 rounded-br-lg">
                    <div className="text-center">
                      <span className="block text-xl font-bold">25</span>
                      <span className="block text-sm">Juil</span>
                    </div>
                  </div>
                  <div className="w-full h-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 text-blue-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 mb-2">
                    Atelier
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Atelier de planification stratégique</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">25-27 juillet 2024</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">Siège du FPS, Kinshasa</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Atelier de planification visant à définir les axes stratégiques du FPS pour la période 2025-2027 et à évaluer les progrès réalisés dans l'atteinte des objectifs actuels.
                  </p>
                  <div className="mt-4">
                    <Link href="/actualites/evenements/atelier-planification" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-500">
                      En savoir plus <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Événements passés */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Événements passés</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Événement passé 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                <div className="h-32 bg-gray-100 relative">
                  <div className="absolute top-0 left-0 bg-gray-600 text-white px-3 py-2 rounded-br-lg">
                    <div className="text-center">
                      <span className="block text-sm font-bold">15</span>
                      <span className="block text-xs">Mars</span>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-2">
                    Conférence
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Forum sur le financement de la santé</h3>
                  <div className="flex items-center text-gray-600 mb-1 text-xs">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>15 mars 2024</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-3 text-xs">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>Ministère de la Santé, Kinshasa</span>
                  </div>
                  <div className="mt-2">
                    <Link href="/actualites/evenements/forum-financement" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-500 text-sm">
                      Voir les détails <ChevronRight className="ml-1 w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Événement passé 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                <div className="h-32 bg-gray-100 relative">
                  <div className="absolute top-0 left-0 bg-gray-600 text-white px-3 py-2 rounded-br-lg">
                    <div className="text-center">
                      <span className="block text-sm font-bold">28</span>
                      <span className="block text-xs">Fév</span>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-2">
                    Formation
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Formation sur la gestion financière</h3>
                  <div className="flex items-center text-gray-600 mb-1 text-xs">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>28 février - 3 mars 2024</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-3 text-xs">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>Siège du FPS, Kinshasa</span>
                  </div>
                  <div className="mt-2">
                    <Link href="/actualites/evenements/formation-gestion-financiere" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-500 text-sm">
                      Voir les détails <ChevronRight className="ml-1 w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Événement passé 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                <div className="h-32 bg-gray-100 relative">
                  <div className="absolute top-0 left-0 bg-gray-600 text-white px-3 py-2 rounded-br-lg">
                    <div className="text-center">
                      <span className="block text-sm font-bold">10</span>
                      <span className="block text-xs">Jan</span>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 mb-2">
                    Atelier
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Consultation communautaire sur la CSU</h3>
                  <div className="flex items-center text-gray-600 mb-1 text-xs">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>10 janvier 2024</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-3 text-xs">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>Matadi, Kongo Central</span>
                  </div>
                  <div className="mt-2">
                    <Link href="/actualites/evenements/consultation-matadi" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-500 text-sm">
                      Voir les détails <ChevronRight className="ml-1 w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 shadow-md transition-colors">
                Voir plus d'événements passés
              </button>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
} 