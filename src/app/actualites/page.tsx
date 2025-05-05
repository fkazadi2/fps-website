import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, ChevronRight } from "lucide-react";

export default function Actualites() {
  return (
    <MainLayout>
      <div className="bg-white">
        {/* En-tête de la page */}
        <div className="bg-fps-primary-light py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-extrabold text-[#005bb0] sm:text-4xl">
              Actualités
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl">
              Restez informé des dernières nouvelles, événements et activités du Fonds de Promotion de la Santé en RDC.
            </p>
          </div>
        </div>

        {/* Section: Communiqués de presse */}
        <section id="communiques" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#005bb0] mb-8">Presse</h2>
            <div className="space-y-12">
              {/* Communiqué 1 */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
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
                    <div className="mt-4">
                      <button className="inline-flex items-center text-[#005bb0] font-medium hover:text-[#F8C03E]">
                        Lire la suite <ChevronRight className="ml-1 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="lg:w-1/4 bg-fps-primary-light flex items-center justify-center p-8">
                    <div className="text-center text-[#005bb0]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto w-16 h-16 mb-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                      </svg>
                      <span className="block">Communiqué officiel</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Communiqué 2 */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
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
                    <div className="mt-4">
                      <button className="inline-flex items-center text-[#005bb0] font-medium hover:text-[#F8C03E]">
                        Lire la suite <ChevronRight className="ml-1 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="lg:w-1/4 bg-fps-primary-light flex items-center justify-center p-8">
                    <div className="text-center text-[#005bb0]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto w-16 h-16 mb-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                      </svg>
                      <span className="block">Communiqué officiel</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Communiqué 3 */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
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
                    <div className="mt-4">
                      <button className="inline-flex items-center text-[#005bb0] font-medium hover:text-[#F8C03E]">
                        Lire la suite <ChevronRight className="ml-1 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="lg:w-1/4 bg-fps-primary-light flex items-center justify-center p-8">
                    <div className="text-center text-[#005bb0]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto w-16 h-16 mb-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                      </svg>
                      <span className="block">Communiqué officiel</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <button className="px-6 py-3 bg-[#e10000] text-white rounded-md hover:bg-fps-danger-dark shadow-md transition-colors">
                Voir tous les communiqués
              </button>
            </div>
          </div>
        </section>

        {/* Section: Événements */}
        <section id="evenements" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#005bb0] mb-8">Événements à venir</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Événement 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-fps-primary-light relative">
                  <div className="absolute top-0 left-0 bg-[#e10000] text-white px-3 py-2 rounded-br-lg">
                    <div className="text-center">
                      <span className="block text-xl font-bold">26</span>
                      <span className="block text-sm">Mai</span>
                    </div>
                  </div>
                  <div className="w-full h-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 text-[#005bb0]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
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
                    Conférence nationale rassemblant les acteurs clés de la santé pour faire le point sur les avancées de la CSU en RDC.
                  </p>
                  <div className="mt-4">
                    <Link href="/actualites/evenements/conference-nationale-csu" className="inline-flex items-center text-[#005bb0] font-medium hover:text-[#F8C03E]">
                      En savoir plus <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Événement 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-fps-primary-light relative">
                  <div className="absolute top-0 left-0 bg-[#e10000] text-white px-3 py-2 rounded-br-lg">
                    <div className="text-center">
                      <span className="block text-xl font-bold">15</span>
                      <span className="block text-sm">Juin</span>
                    </div>
                  </div>
                  <div className="w-full h-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 text-[#005bb0]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
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
                    Formation destinée aux agents de santé sur les protocoles de prise en charge des femmes enceintes et des nouveau-nés.
                  </p>
                  <div className="mt-4">
                    <Link href="/actualites/evenements/atelier-formation-agents" className="inline-flex items-center text-[#005bb0] font-medium hover:text-[#F8C03E]">
                      En savoir plus <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Événement 3 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-fps-primary-light relative">
                  <div className="absolute top-0 left-0 bg-[#e10000] text-white px-3 py-2 rounded-br-lg">
                    <div className="text-center">
                      <span className="block text-xl font-bold">10</span>
                      <span className="block text-sm">Juil</span>
                    </div>
                  </div>
                  <div className="w-full h-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 text-[#005bb0]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
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
                    Cérémonie d'inauguration du nouveau centre de santé modèle financé par le FPS pour servir de référence en matière de qualité des soins.
                  </p>
                  <div className="mt-4">
                    <Link href="/actualites/evenements/inauguration-centre" className="inline-flex items-center text-[#005bb0] font-medium hover:text-[#F8C03E]">
                      En savoir plus <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <button className="px-6 py-3 bg-[#e10000] text-white rounded-md hover:bg-fps-danger-dark shadow-md transition-colors">
                Voir tous les événements
              </button>
            </div>
          </div>
        </section>

        {/* Section: Galerie média */}
        <section id="galerie" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#005bb0] mb-8">Galerie média</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Photos récentes</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* Emplacement pour 8 images */}
                {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                  <div key={index} className="bg-fps-primary-light aspect-square rounded-lg overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-[#005bb0]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Vidéos</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Emplacement pour 2 vidéos */}
                {[1, 2].map((index) => (
                  <div key={index} className="bg-fps-primary-light aspect-video rounded-lg overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#005bb0]">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link href="/actualites/galerie" className="px-6 py-3 bg-[#e10000] text-white rounded-md hover:bg-fps-danger-dark shadow-md transition-colors inline-block">
                Voir toute la galerie
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
} 