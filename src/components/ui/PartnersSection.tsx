"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const partners = [
  { id: 1, name: "OMS", logo: "/placeholder.jpg", url: "https://www.who.int" },
  { id: 2, name: "UNICEF", logo: "/placeholder.jpg", url: "https://www.unicef.org" },
  { id: 3, name: "Banque Mondiale", logo: "/placeholder.jpg", url: "https://www.worldbank.org" },
  { id: 4, name: "UNESCO", logo: "/placeholder.jpg", url: "https://www.unesco.org" },
  { id: 5, name: "UNFPA", logo: "/placeholder.jpg", url: "https://www.unfpa.org" },
  { id: 6, name: "USAID", logo: "/placeholder.jpg", url: "https://www.usaid.gov" },
  { id: 7, name: "GAVI", logo: "/placeholder.jpg", url: "https://www.gavi.org" },
  { id: 8, name: "Fonds mondial", logo: "/placeholder.jpg", url: "https://www.theglobalfund.org" }
];

export default function PartnersSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section ref={sectionRef} className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 opacity-5">
        <div className="w-80 h-80 rounded-full bg-[var(--accent)]"></div>
      </div>
      <div className="absolute bottom-0 left-0 opacity-5">
        <div className="w-64 h-64 rounded-full bg-[var(--danger)]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[var(--primary)] sm:text-4xl">
            Nos partenaires
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Ensemble pour promouvoir la santé et le bien-être en RDC
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:gap-8">
          {partners.map((partner, index) => (
            <Link 
              key={partner.id}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col items-center justify-center
                hover:shadow-md hover:border-[var(--accent)] transition-all duration-300
                transform ${isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
                }
              `}
              style={{ transitionDelay: `${index * 100}ms`, transitionDuration: '500ms' }}
            >
              <div className="h-16 w-32 relative mb-4">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-medium text-gray-900">{partner.name}</span>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/financement/partenaires"
            className="px-8 py-3 bg-[var(--accent)] text-[var(--secondary)] rounded-md hover:bg-white hover:text-[var(--accent)] hover:ring-1 hover:ring-[var(--accent)] shadow-md transition-all duration-300 inline-block"
          >
            Voir tous nos partenaires
          </Link>
        </div>
      </div>
    </section>
  );
} 