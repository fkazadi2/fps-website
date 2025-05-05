"use client";

import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import { Calendar, ChevronRight, Search, Filter } from "lucide-react";
import { useState } from "react";

export default function Communiques() {
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
                Presse
              </h1>
            </div>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl">
              Consultez les dernières annonces et déclarations officielles du Fonds de Promotion de la Santé.
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
                    placeholder="Rechercher un communiqué..."
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
                  <option value="">Tous les thèmes</option>
                  <option value="csu">CSU</option>
                  <option value="programmes">Programmes</option>
                  <option value="partenariats">Partenariats</option>
                  <option value="resultats">Résultats</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Liste des communiqués */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-10">
              {/* Communiqué 1 */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100">
                <div className="lg:flex">
                  <div className="lg:w-3/4 p-8">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>15 mai 2024</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      Le FPS lance un nouveau programme de soutien aux structures sanitaires rurales
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Le Fonds de Promotion de la Santé a officiellement lancé ce mercredi un nouveau programme visant à renforcer les capacités des structures sanitaires dans les zones rurales de la RDC. Ce programme, doté d'un budget de 5 millions de dollars, ciblera 200 centres de santé dans 5 provinces prioritaires.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Programmes
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Rural
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Financement
                      </span>
                    </div>
                    <div className="mt-4">
                      <Link href="/actualites/communiques/programme-structures-rurales" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-500">
                        Lire la suite <ChevronRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                  <div className="lg:w-1/4 bg-blue-100 flex items-center justify-center p-8">
                    <div className="text-center text-blue-700">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto w-16 h-16 mb-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                      </svg>
                      <span className="block">Communiqué officiel</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Communiqué 2 */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100">
                <div className="lg:flex">
                  <div className="lg:w-3/4 p-8">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>28 avril 2024</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      Bilan de la Campagne Nationale de Sensibilisation sur la CSU
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Après trois mois d'activités intensives à travers tout le territoire national, le FPS a présenté aujourd'hui le bilan de sa campagne de sensibilisation sur la Couverture Santé Universelle. Plus de 5 millions de personnes ont été touchées par cette initiative qui visait à informer la population sur ses droits et les mécanismes d'accès aux soins.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        CSU
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Sensibilisation
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Résultats
                      </span>
                    </div>
                    <div className="mt-4">
                      <Link href="/actualites/communiques/bilan-campagne-csu" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-500">
                        Lire la suite <ChevronRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                  <div className="lg:w-1/4 bg-blue-100 flex items-center justify-center p-8">
                    <div className="text-center text-blue-700">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto w-16 h-16 mb-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                      </svg>
                      <span className="block">Communiqué officiel</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Communiqué 3 */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100">
                <div className="lg:flex">
                  <div className="lg:w-3/4 p-8">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>10 avril 2024</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      Signature d'un accord de partenariat entre le FPS et l'UNICEF
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Le Fonds de Promotion de la Santé et l'UNICEF ont signé ce mardi un accord de partenariat pour renforcer la prise en charge des soins maternels et infantiles en RDC. Ce partenariat, d'une durée de 3 ans, permettra d'étendre le programme de gratuité des soins à 15 nouvelles zones de santé.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Partenariats
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Santé maternelle et infantile
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        UNICEF
                      </span>
                    </div>
                    <div className="mt-4">
                      <Link href="/actualites/communiques/partenariat-fps-unicef" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-500">
                        Lire la suite <ChevronRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                  <div className="lg:w-1/4 bg-blue-100 flex items-center justify-center p-8">
                    <div className="text-center text-blue-700">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto w-16 h-16 mb-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                      </svg>
                      <span className="block">Communiqué officiel</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Communiqué 4 */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100">
                <div className="lg:flex">
                  <div className="lg:w-3/4 p-8">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>18 mars 2024</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      Publication du Rapport Annuel 2023 du FPS
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Le Fonds de Promotion de la Santé vient de publier son rapport annuel pour l'année 2023, mettant en lumière les avancées significatives réalisées dans la mise en œuvre de la CSU en RDC. Ce rapport détaille les différents programmes financés, les résultats obtenus et les défis rencontrés.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Rapport
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Résultats
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        2023
                      </span>
                    </div>
                    <div className="mt-4">
                      <Link href="/actualites/communiques/rapport-annuel-2023" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-500">
                        Lire la suite <ChevronRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                  <div className="lg:w-1/4 bg-blue-100 flex items-center justify-center p-8">
                    <div className="text-center text-blue-700">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto w-16 h-16 mb-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                      </svg>
                      <span className="block">Communiqué officiel</span>
                    </div>
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