"use client";

import { useState, useEffect, useRef } from "react";
import { Users, Building, CheckCircle, TrendingUp } from "lucide-react";

export default function StatsSection() {
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
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  const stats = [
    { icon: <Users className="w-8 h-8" />, value: "5M+", label: "Personnes couvertes", color: "bg-[var(--danger)]" },
    { icon: <Building className="w-8 h-8" />, value: "650+", label: "Centres de santé partenaires", color: "bg-[var(--accent)]" },
    { icon: <CheckCircle className="w-8 h-8" />, value: "26", label: "Provinces couvertes", color: "bg-[var(--danger)]" },
    { icon: <TrendingUp className="w-8 h-8" />, value: "85%", label: "Taux de satisfaction", color: "bg-[var(--accent)]" }
  ];
  
  return (
    <section ref={sectionRef} className="py-16 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[var(--primary)] sm:text-4xl">
            Notre impact en chiffres
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Le FPS en action pour améliorer la santé publique en RDC
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="relative bg-white rounded-lg shadow-lg p-6 overflow-hidden transform transition-all duration-300 hover:shadow-xl">
              <div className={`absolute top-0 left-0 w-2 h-full ${stat.color}`}></div>
              <div className="flex flex-col items-center text-center">
                <div className={`p-3 rounded-full ${stat.color} text-white mb-4`}>
                  {stat.icon}
                </div>
                <p className={`text-4xl font-bold ${isVisible ? 'animate-count-up' : ''}`}>
                  {stat.value}
                </p>
                <p className="mt-2 text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 