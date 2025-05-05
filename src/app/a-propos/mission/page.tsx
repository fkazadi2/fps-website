"use client";

import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";

export default function MissionPage() {
  return (
    <MainLayout>
      <div className="bg-white">
        {/* En-tête de la page */}
        <div className="bg-fps-primary-light py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col space-y-2">
              <Link href="/a-propos" className="text-[var(--primary)] hover:text-blue-500">
                &larr; Retour à À propos
              </Link>
              <h1 className="text-3xl font-extrabold text-[var(--primary)] sm:text-4xl">
                Notre mission
              </h1>
            </div>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl">
              Découvrez la mission, la vision et les valeurs qui guident les actions du Fonds de Promotion de la Santé.
            </p>
          </div>
        </div>

        {/* Contenu principal */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-6">Mission</h2>
              <p className="text-gray-600 mb-8">
                Le Fonds de Promotion de la Santé a pour mission de <strong>mobiliser, gérer et allouer des ressources financières supplémentaires</strong> en vue de soutenir et d&apos;améliorer les interventions et les programmes de santé prioritaires, notamment la prévention et la promotion de la santé, en République Démocratique du Congo.
              </p>

              <p className="text-gray-600 mb-8">
                Le FPS constitue un levier stratégique pour l&apos;atteinte de la Couverture Santé Universelle (CSU), priorité nationale inscrite dans la vision du Chef de l&apos;État. Nous travaillons pour garantir que tous les Congolais aient accès à des services de santé de qualité sans subir de difficultés financières.
              </p>

              <div className="space-y-6 mt-8 mb-10">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-fps-primary-light flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Mobiliser des ressources financières additionnelles pour le secteur de la santé</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-fps-primary-light flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Financer les programmes prioritaires de santé conformément aux orientations nationales</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-fps-primary-light flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Renforcer les capacités du système de santé à tous les niveaux</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-fps-primary-light flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Promouvoir l&apos;innovation et la recherche en santé</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-fps-primary-light flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Assurer un financement équitable et durable de la santé dans le cadre de la CSU</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-6">Vision</h2>
              <p className="text-lg font-semibold text-[var(--primary)] mb-6 text-center italic">
                « Devenir l'instrument de financement de référence pour un accès équitable et durable aux services de santé de qualité pour tous les Congolais. »
              </p>
              <p className="text-gray-600 mb-8">
                Notre vision est celle d&apos;une RDC où chaque citoyen, indépendamment de sa situation socio-économique ou de sa localisation géographique, a accès à des soins de santé de qualité. Nous aspirons à transformer le paysage sanitaire du pays en instaurant un mécanisme de financement robuste, transparent et pérenne.
              </p>

              <h2 className="text-2xl font-bold mb-6">Valeurs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-fps-primary-light p-4 rounded-lg">
                  <h3 className="text-md font-semibold text-[var(--primary)] mb-2">Universalité</h3>
                  <p className="text-gray-600 text-sm">
                    Nous œuvrons pour que tous les Congolais, sans distinction, puissent bénéficier d'un accès équitable aux services de santé.
                  </p>
                </div>
                <div className="bg-fps-primary-light p-4 rounded-lg">
                  <h3 className="text-md font-semibold text-[var(--primary)] mb-2">Durabilité</h3>
                  <p className="text-gray-600 text-sm">
                    Nous nous engageons à mettre en place des mécanismes de financement pérennes pour garantir la continuité des services de santé.
                  </p>
                </div>
                <div className="bg-fps-primary-light p-4 rounded-lg">
                  <h3 className="text-md font-semibold text-[var(--primary)] mb-2">Innovation</h3>
                  <p className="text-gray-600 text-sm">
                    Nous encourageons l'innovation dans les approches et solutions pour relever les défis sanitaires complexes de la RDC.
                  </p>
                </div>
                <div className="bg-fps-primary-light p-4 rounded-lg">
                  <h3 className="text-md font-semibold text-[var(--primary)] mb-2">Collaboration</h3>
                  <p className="text-gray-600 text-sm">
                    Nous croyons à la force du partenariat et de la collaboration entre tous les acteurs du secteur de la santé.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Objectifs stratégiques */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-10 text-center">Nos objectifs stratégiques</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-fps-primary-light rounded-full mx-auto flex items-center justify-center text-[var(--primary)]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mt-4 mb-2">Financement durable</h3>
                <p className="text-gray-600 text-sm">
                  Assurer une mobilisation efficace des ressources et une gestion transparente pour un financement durable du secteur de la santé.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-fps-primary-light rounded-full mx-auto flex items-center justify-center text-[var(--primary)]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mt-4 mb-2">Prévention</h3>
                <p className="text-gray-600 text-sm">
                  Renforcer les programmes de prévention des maladies et de promotion de la santé pour réduire la morbidité et la mortalité.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-fps-primary-light rounded-full mx-auto flex items-center justify-center text-[var(--primary)]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mt-4 mb-2">Équité</h3>
                <p className="text-gray-600 text-sm">
                  Promouvoir l&apos;équité dans l&apos;accès aux soins de santé en accordant une attention particulière aux populations vulnérables et aux zones défavorisées.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
} 