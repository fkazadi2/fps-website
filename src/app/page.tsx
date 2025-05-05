import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";
import HeroSlider from "@/components/ui/HeroSlider";
import StatsSection from "@/components/ui/StatsSection";
import InteractiveMap from "@/components/ui/InteractiveMap";
import NewsHighlights from "@/components/ui/NewsHighlights";
import CSUProgressSection from "@/components/ui/CSUProgressSection";
import TestimonialsCarousel from "@/components/ui/TestimonialsCarousel";
import PartnersSection from "@/components/ui/PartnersSection";
import MediaGallery from "@/components/ui/MediaGallery";
import EventsSection from "@/components/ui/EventsSection";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Slider Section */}
      <HeroSlider />

      {/* Featured Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-[var(--primary)] sm:text-4xl">
              Notre mission
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Promouvoir la santé publique en République Démocratique du Congo
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="bg-fps-primary-light overflow-hidden shadow rounded-lg">
              <div className="px-6 py-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[var(--primary)] text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Éducation Sanitaire</h3>
                <p className="mt-3 text-gray-600">
                  Promouvoir l&apos;éducation sanitaire pour améliorer les comportements et pratiques de santé.
                </p>
                <div className="mt-4">
                  <Link href="/programmes#education" className="inline-flex items-center text-[var(--primary)] hover:underline">
                    En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-fps-primary-light overflow-hidden shadow rounded-lg">
              <div className="px-6 py-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[var(--primary)] text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Prévention</h3>
                <p className="mt-3 text-gray-600">
                  Développer des programmes de prévention des maladies et de promotion de modes de vie sains.
                </p>
                <div className="mt-4">
                  <Link href="/programmes#prevention" className="inline-flex items-center text-[var(--primary)] hover:underline">
                    En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-fps-primary-light overflow-hidden shadow rounded-lg">
              <div className="px-6 py-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[var(--primary)] text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Collaboration</h3>
                <p className="mt-3 text-gray-600">
                  Coordonner les efforts avec les partenaires publics et privés pour maximiser l&apos;impact sanitaire.
                </p>
                <div className="mt-4">
                  <Link href="/a-propos#partenariats" className="inline-flex items-center text-[var(--primary)] hover:underline">
                    En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - NOUVEAU */}
      <StatsSection />

      {/* Interactive Map - NOUVEAU */}
      <InteractiveMap />

      {/* CSU Progress Section - NOUVEAU */}
      <CSUProgressSection />
      
      {/* News Highlights - NOUVEAU */}
      <NewsHighlights />
      
      {/* Media Gallery Section - NOUVEAU */}
      <MediaGallery />
      
      {/* Events Section - NOUVEAU */}
      <EventsSection />
      
      {/* Partenaires - NOUVEAU */}
      <PartnersSection />
      
      {/* Testimonials - NOUVEAU */}
      <TestimonialsCarousel />

      {/* CTA Section */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-[var(--danger)] rounded-3xl shadow-xl overflow-hidden relative">
            {/* Lignes d'interconnexion en arrière-plan */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
              <svg width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                    <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                <circle cx="200" cy="100" r="30" fill="none" stroke="white" strokeWidth="2" />
                <circle cx="500" cy="200" r="50" fill="none" stroke="white" strokeWidth="2" />
                <circle cx="300" cy="300" r="40" fill="none" stroke="white" strokeWidth="2" />
                <line x1="200" y1="100" x2="500" y2="200" stroke="white" strokeWidth="2" />
                <line x1="500" y1="200" x2="300" y2="300" stroke="white" strokeWidth="2" />
                <line x1="300" y1="300" x2="200" y2="100" stroke="white" strokeWidth="2" />
              </svg>
            </div>

            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20 relative">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    Restez informé
                  </h2>
                  <p className="mt-4 text-lg text-white/80 max-w-3xl">
                    Recevez les dernières actualités et informations sur les activités du Fonds de Promotion de la Santé.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/actualites"
                      className="px-8 py-3 rounded-md bg-white text-[var(--danger)] font-medium shadow-lg hover:bg-gray-100 transition-all duration-300"
                    >
                      Actualités
                    </Link>
                    <Link
                      href="/contact"
                      className="px-8 py-3 rounded-md bg-[var(--secondary)] text-white font-medium shadow-lg hover:bg-[var(--secondary-dark)] hover:text-white hover:border-transparent border border-transparent transition-all duration-300"
                    >
                      Nous contacter
                    </Link>
                  </div>
                </div>
                <div className="hidden lg:flex lg:items-center lg:justify-end h-full">
                  <div className="relative h-full flex items-center">
                    <div className="absolute right-0 transform translate-x-1/4 z-10">
                      <div className="h-60 w-60 relative overflow-hidden bg-white rounded-full shadow-2xl p-4">
                        <Image 
                          src="/images/logo-fps.jpg" 
                          alt="Logo FPS" 
                          fill
                          className="object-contain"
                          sizes="240px"
                        />
                      </div>
                    </div>
                    {/* Cercles décoratifs autour du logo */}
                    <div className="absolute right-0 transform translate-x-1/4 z-0">
                      <div className="h-72 w-72 border-4 border-white/30 rounded-full"></div>
                    </div>
                    <div className="absolute right-0 transform translate-x-1/4 z-0">
                      <div className="h-84 w-84 border-2 border-white/20 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
