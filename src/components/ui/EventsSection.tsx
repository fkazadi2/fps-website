'use client';

import { CalendarDays, MapPin, Clock, ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Type pour les événements
type Event = {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  imageUrl: string;
  url: string;
  category: string;
  day: string;
  month: string;
};

// Données de démonstration qui correspondent à celles de la page /actualites/evenements
const defaultEvents: Event[] = [
  {
    id: 1,
    title: "Conférence Nationale sur la CSU",
    description: "Conférence nationale rassemblant les acteurs clés de la santé pour faire le point sur les avancées de la CSU en RDC et définir les prochaines priorités stratégiques.",
    date: "26-27 mai 2024",
    time: "09:00 - 17:00",
    location: "Hôtel Pullman, Kinshasa",
    imageUrl: "/images/evenements/conference-csu.jpg",
    url: "/actualites/evenements/conference-nationale-csu",
    category: "Conférence",
    day: "26",
    month: "Mai"
  },
  {
    id: 2,
    title: "Atelier de formation des agents de santé",
    description: "Formation destinée aux agents de santé sur les protocoles de prise en charge des femmes enceintes et des nouveau-nés dans le cadre du programme de gratuité des soins.",
    date: "15-19 juin 2024",
    time: "08:30 - 16:00",
    location: "Centre de formation INRB, Kinshasa",
    imageUrl: "/images/evenements/formation-agents.jpg",
    url: "/actualites/evenements/atelier-formation-agents",
    category: "Formation",
    day: "15",
    month: "Juin"
  },
  {
    id: 3,
    title: "Inauguration du Centre de santé modèle FPS",
    description: "Cérémonie d'inauguration du nouveau centre de santé modèle financé par le FPS pour servir de référence en matière de qualité des soins et de mise en œuvre de la CSU.",
    date: "10 juillet 2024",
    time: "10:00 - 12:30",
    location: "Quartier Binza, Kinshasa",
    imageUrl: "/images/evenements/inauguration-centre.jpg",
    url: "/actualites/evenements/inauguration-centre",
    category: "Inauguration",
    day: "10",
    month: "Juil"
  }
];

type EventsSectionProps = {
  events?: Event[];
  title?: string;
  subtitle?: string;
};

export default function EventsSection({
  events = defaultEvents,
  title = "Événements à venir",
  subtitle = "Participez aux prochains événements organisés par le Fonds de Promotion de la Santé"
}: EventsSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[var(--primary)] sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">{subtitle}</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100">
              <div className="relative h-48 bg-fps-primary-light flex items-center justify-center">
                {/* Badge de date en haut à gauche */}
                <div className="absolute top-0 left-0 bg-[var(--primary)] text-white px-3 py-2 rounded-br-lg">
                  <div className="text-center">
                    <span className="block text-xl font-bold">{event.day}</span>
                    <span className="block text-sm">{event.month}</span>
                  </div>
                </div>
                
                {/* Image de l'événement ou icône */}
                {event.imageUrl ? (
                  <Image
                    src={event.imageUrl}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="w-20 h-20 text-[var(--primary)]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="p-6">
                {/* Badge de catégorie */}
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-fps-primary-light text-[var(--primary)] mb-2`}>
                  {event.category}
                </span>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {event.title}
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start">
                    <CalendarDays className="h-5 w-5 text-[var(--primary)] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{event.date}</span>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-[var(--primary)] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{event.time}</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-[var(--primary)] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{event.location}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {event.description}
                </p>
                <Link 
                  href={event.url}
                  className="inline-flex items-center text-[var(--primary)] font-medium hover:text-[var(--primary-dark)]"
                >
                  En savoir plus <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/actualites/evenements"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[var(--primary)] hover:bg-[var(--primary-dark)] shadow-sm transition-colors"
          >
            Voir tous les événements <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
} 