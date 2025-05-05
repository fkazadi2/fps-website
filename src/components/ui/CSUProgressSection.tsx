"use client";

import { useState, useEffect, useRef } from "react";

export default function CSUProgressSection() {
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
  
  const goals = [
    { id: 1, name: "Couverture sanitaire", target: 100, current: 68, color: "bg-[var(--danger)]" },
    { id: 2, name: "Accès aux soins prénataux", target: 100, current: 75, color: "bg-[var(--accent)]" },
    { id: 3, name: "Vaccination infantile", target: 100, current: 82, color: "bg-purple-600" },
    { id: 4, name: "Réduction des maladies évitables", target: 100, current: 58, color: "bg-[var(--accent)]" }
  ];
  
  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 right-0 opacity-10">
          <div className="w-64 h-64 rounded-full bg-[var(--accent)] blur-lg"></div>
        </div>
        <div className="absolute bottom-0 left-0 opacity-10">
          <div className="w-40 h-40 rounded-full bg-[var(--accent)] blur-lg"></div>
        </div>
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Objectifs de la Couverture Santé Universelle
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-white/80">
            Notre progression vers les objectifs de la CSU en RDC
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 relative z-10">
          {goals.map((goal) => (
            <div key={goal.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 overflow-hidden">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-semibold">{goal.name}</h3>
                <div className="text-2xl font-bold">
                  {isVisible ? (
                    <span className="counter" data-target={goal.current}>
                      {goal.current}%
                    </span>
                  ) : "0%"}
                </div>
              </div>
              
              <div className="h-3 w-full bg-white/20 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${goal.color} rounded-full transition-all duration-1500 ease-out`}
                  style={{ width: isVisible ? `${goal.current}%` : "0%" }}
                ></div>
              </div>
              
              <div className="mt-4 flex justify-between text-sm">
                <span className="text-white/80">Objectif: {goal.target}%</span>
                <span className="text-white/80">Atteint: {isVisible ? goal.current : 0}%</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Le FPS travaille activement pour atteindre ces objectifs à travers des programmes ciblés 
            et des partenariats stratégiques dans toutes les provinces de la RDC.
          </p>
          <button className="px-8 py-3 bg-[var(--danger)] text-white rounded-md font-medium hover:bg-fps-danger-dark transition-all">
            Découvrir nos programmes
          </button>
        </div>
      </div>
    </section>
  );
} 