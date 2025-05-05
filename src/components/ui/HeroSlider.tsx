"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Accès aux soins pour les vulnérables",
    description: "L'accès aux prestations de santé pour les indigents et les vulnérables sur toute l'étendue de la RDC.",
    image: "/images/hero-1.jpg",
    buttonText: "Découvrir le FPS",
    buttonLink: "/a-propos",
    secondaryButtonText: "Nos programmes",
    secondaryButtonLink: "/programmes",
  },
  {
    id: 2,
    title: "Mise en œuvre de la CSU",
    description: "Nous envisageons la mise en œuvre du système de la CSU comme un processus en tenant compte de la diversité des contextes géographiques, socio-culturels et économiques.",
    image: "/images/hero-2.jpg",
    buttonText: "En savoir plus",
    buttonLink: "/programmes",
    secondaryButtonText: "Contactez-nous",
    secondaryButtonLink: "/contact",
  },
  {
    id: 3,
    title: "Équité dans l'accès aux soins",
    description: "L'accès aux soins des populations, des familles et des individus en assurant l'équité, en enlevant les barrières de toutes sortes.",
    image: "/images/hero-3.jpg",
    buttonText: "Voir les programmes",
    buttonLink: "/programmes",
    secondaryButtonText: "Partenaires",
    secondaryButtonLink: "/financement#partenaires",
  },
  {
    id: 4,
    title: "Participation communautaire",
    description: "La participation communautaire suppose que la communauté s'organise pour créer une dynamique en faveur du processus de la CSU.",
    image: "/images/hero-4.jpg",
    buttonText: "Nos initiatives",
    buttonLink: "/programmes#capacites",
    secondaryButtonText: "Comment participer",
    secondaryButtonLink: "/contact",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fonction pour passer au slide suivant
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Fonction pour passer au slide précédent
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Changement automatique de slide toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-[rgba(0,91,176,0.15)] z-1">
            <div className="absolute inset-0 bg-[url('/images/pattern.png')] bg-repeat opacity-20"></div>
          </div>
          <div className="absolute inset-0 flex items-center z-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8 pt-10 md:pt-16 pb-20">
                <div className="lg:col-span-7 text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-[var(--primary)] sm:text-5xl xl:text-6xl mt-10 md:mt-12">
                    {slide.title}
                  </h1>
                  <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto lg:mx-0">
                    {slide.description}
                  </p>
                  <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Link
                      href={slide.buttonLink}
                      className="px-8 py-3 rounded-md text-white bg-[var(--danger)] hover:bg-fps-danger-dark font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {slide.buttonText}
                    </Link>
                    <Link
                      href={slide.secondaryButtonLink}
                      className="px-8 py-3 rounded-md text-[var(--secondary)] bg-[var(--accent)] border border-[var(--accent)] hover:bg-white hover:text-[var(--accent)] font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {slide.secondaryButtonText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation et contrôles du slider - positionnement fixe en bas de la section */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="flex items-center justify-center gap-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-[var(--danger)] scale-125"
                  : "bg-[var(--accent)] hover:opacity-70"
              }`}
              aria-label={`Aller au slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Arrow Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-fps-primary-light hover:bg-[var(--primary)] hover:text-white text-[var(--primary)] z-3 transition-colors"
        aria-label="Slide précédent"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-fps-primary-light hover:bg-[var(--primary)] hover:text-white text-[var(--primary)] z-3 transition-colors"
        aria-label="Slide suivant"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
} 