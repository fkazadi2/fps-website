"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronRight, ExternalLink } from "lucide-react";

const news = [
  {
    id: 1,
    title: "Lancement du programme de soutien aux structures sanitaires rurales",
    date: "15 mai 2024",
    excerpt: "Le Fonds de Promotion de la Santé a officiellement lancé ce mercredi un nouveau programme visant à renforcer les capacités des structures sanitaires...",
    image: "/placeholder.jpg",
    category: "Programme",
    link: "/actualites/communiques/programme-structures-rurales"
  },
  {
    id: 2,
    title: "Bilan de la Campagne Nationale de Sensibilisation sur la CSU",
    date: "28 avril 2024",
    excerpt: "Après trois mois d'activités intensives à travers tout le territoire national, le FPS a présenté aujourd'hui le bilan de sa campagne de sensibilisation...",
    image: "/placeholder.jpg",
    category: "Campagne",
    link: "/actualites/communiques/bilan-campagne-csu"
  },
  {
    id: 3,
    title: "Signature d'un accord de partenariat entre le FPS et l'UNICEF",
    date: "10 avril 2024",
    excerpt: "Le Fonds de Promotion de la Santé et l'UNICEF ont signé ce mardi un accord de partenariat pour renforcer la prise en charge des soins maternels et infantiles...",
    image: "/placeholder.jpg",
    category: "Partenariat",
    link: "/actualites/communiques/partenariat-fps-unicef"
  }
];

export default function NewsHighlights() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleItems(news.map(item => item.id));
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  const isVisible = (id: number) => visibleItems.includes(id);
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-extrabold text-[var(--primary)] sm:text-4xl">
              Actualités récentes
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500">
              Restez informé des dernières nouvelles du FPS
            </p>
          </div>
          <Link 
            href="/actualites" 
            className="hidden md:flex items-center text-[var(--danger)] font-medium"
          >
            Toutes les actualités <ExternalLink className="ml-2 w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item, index) => (
            <div 
              key={item.id} 
              className={`
                bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-700 ease-out
                ${isVisible(item.id) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
                }
              `}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="h-48 relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[var(--danger)] text-white text-sm font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {item.excerpt}
                </p>
                <Link 
                  href={item.link} 
                  className="inline-flex items-center px-4 py-1.5 bg-[var(--accent)] text-[var(--secondary)] rounded-full font-medium hover:bg-white hover:text-[var(--accent)] hover:ring-1 hover:ring-[var(--accent)] transition-all"
                >
                  Lire la suite <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <Link
            href="/actualites"
            className="inline-flex items-center px-6 py-3 bg-[var(--danger)] text-white rounded-md hover:bg-fps-danger-dark shadow-md transition-colors"
          >
            Toutes les actualités
          </Link>
        </div>
      </div>
    </section>
  );
} 