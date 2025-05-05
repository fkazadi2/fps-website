"use client";

import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import { Search, Calendar, Filter } from "lucide-react";
import { useState } from "react";

export default function Galerie() {
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
                Galerie photo
              </h1>
            </div>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl">
              Découvrez en images les événements et activités du FPS à travers la République Démocratique du Congo.
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
                    placeholder="Rechercher dans la galerie..."
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <select className="block w-full sm:w-auto pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                  <option value="">Toutes les années</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                </select>
                <select className="block w-full sm:w-auto pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                  <option value="">Toutes les catégories</option>
                  <option value="evenements">Événements</option>
                  <option value="activites">Activités de terrain</option>
                  <option value="formations">Formations</option>
                  <option value="inaugurations">Inaugurations</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Albums photo récents */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Albums photo récents</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Album 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <div className="h-64 bg-gray-200 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <img
                      src="/placeholder.jpg"
                      alt="Conférence Nationale sur la CSU"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 p-4 z-20">
                    <div className="flex items-center text-white mb-1">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">25-26 mai 2024</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Conférence Nationale sur la CSU</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 mb-4">
                    Photos de la conférence nationale sur la Couverture Santé Universelle qui s'est tenue à Kinshasa.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      28 photos
                    </span>
                    <Link href="/actualites/galerie/conference-csu-2024" className="text-blue-600 font-medium hover:text-blue-500">
                      Voir l'album
                    </Link>
                  </div>
                </div>
              </div>

              {/* Album 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <div className="h-64 bg-gray-200 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <img
                      src="/placeholder.jpg"
                      alt="Visite du centre de santé de Kintambo"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 p-4 z-20">
                    <div className="flex items-center text-white mb-1">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">15 avril 2024</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Visite du centre de santé de Kintambo</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 mb-4">
                    Visite du Directeur Général du FPS au centre de santé de Kintambo pour évaluer l'impact des financements.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      15 photos
                    </span>
                    <Link href="/actualites/galerie/visite-kintambo" className="text-blue-600 font-medium hover:text-blue-500">
                      Voir l'album
                    </Link>
                  </div>
                </div>
              </div>

              {/* Album 3 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <div className="h-64 bg-gray-200 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <img
                      src="/placeholder.jpg"
                      alt="Formation des agents de santé"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 p-4 z-20">
                    <div className="flex items-center text-white mb-1">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">28 mars 2024</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Formation des agents de santé à Lubumbashi</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 mb-4">
                    Session de formation des agents de santé sur les protocoles de prise en charge des femmes enceintes et des enfants.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      22 photos
                    </span>
                    <Link href="/actualites/galerie/formation-lubumbashi" className="text-blue-600 font-medium hover:text-blue-500">
                      Voir l'album
                    </Link>
                  </div>
                </div>
              </div>

              {/* Album 4 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <div className="h-64 bg-gray-200 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <img
                      src="/placeholder.jpg"
                      alt="Signature de l'accord avec l'UNICEF"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 p-4 z-20">
                    <div className="flex items-center text-white mb-1">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">10 avril 2024</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Signature de l'accord avec l'UNICEF</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 mb-4">
                    Cérémonie officielle de signature de l'accord de partenariat entre le FPS et l'UNICEF pour la santé maternelle et infantile.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      12 photos
                    </span>
                    <Link href="/actualites/galerie/signature-unicef" className="text-blue-600 font-medium hover:text-blue-500">
                      Voir l'album
                    </Link>
                  </div>
                </div>
              </div>

              {/* Album 5 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <div className="h-64 bg-gray-200 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <img
                      src="/placeholder.jpg"
                      alt="Campagne de sensibilisation au Kasaï"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 p-4 z-20">
                    <div className="flex items-center text-white mb-1">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">20 février 2024</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Campagne de sensibilisation au Kasaï</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 mb-4">
                    Campagne de sensibilisation sur la CSU menée par les équipes du FPS dans plusieurs localités de la province du Kasaï.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      35 photos
                    </span>
                    <Link href="/actualites/galerie/campagne-kasai" className="text-blue-600 font-medium hover:text-blue-500">
                      Voir l'album
                    </Link>
                  </div>
                </div>
              </div>

              {/* Album 6 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <div className="h-64 bg-gray-200 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <img
                      src="/placeholder.jpg"
                      alt="Distribution de médicaments à l'Est"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 p-4 z-20">
                    <div className="flex items-center text-white mb-1">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">5 janvier 2024</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Distribution de médicaments à l'Est</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 mb-4">
                    Distribution de médicaments essentiels aux centres de santé des zones touchées par l'insécurité dans l'Est de la RDC.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      18 photos
                    </span>
                    <Link href="/actualites/galerie/distribution-est" className="text-blue-600 font-medium hover:text-blue-500">
                      Voir l'album
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="mt-10">
              <div className="flex justify-between items-center">
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 bg-white rounded-md hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                  &larr; Précédent
                </button>
                <div className="flex space-x-2">
                  <button className="inline-flex items-center justify-center w-8 h-8 border border-blue-600 bg-blue-600 text-white rounded-md">1</button>
                  <button className="inline-flex items-center justify-center w-8 h-8 border border-gray-300 text-gray-700 bg-white rounded-md hover:bg-gray-50 transition-colors">2</button>
                  <button className="inline-flex items-center justify-center w-8 h-8 border border-gray-300 text-gray-700 bg-white rounded-md hover:bg-gray-50 transition-colors">3</button>
                </div>
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 bg-white rounded-md hover:bg-gray-50 transition-colors">
                  Suivant &rarr;
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
} 