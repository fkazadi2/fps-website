import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";

export default function HistoirePage() {
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
                Notre histoire
              </h1>
            </div>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl">
              Découvrez les étapes clés du développement du Fonds de Promotion de la Santé en République Démocratique du Congo.
            </p>
          </div>
        </div>

        {/* Chronologie */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              {/* Ligne verticale */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>

              {/* Points de chronologie */}
              <div className="relative z-10">
                {/* Élément 1 */}
                <div className="mb-16 flex items-center">
                  <div className="flex flex-col items-center w-1/2 pr-8 text-right">
                    <div className="mb-2 flex items-center justify-end">
                      <span className="pr-3 bg-white text-lg font-medium text-[var(--primary)]">2020</span>
                      <div className="h-4 w-4 rounded-full bg-[var(--primary)] border-4 border-white"></div>
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-2">Conception initiale</h2>
                      <p className="text-gray-600">
                        Élaboration du concept du Fonds de Promotion de la Santé par le Ministère de la Santé Publique pour répondre aux défis du financement de la santé en RDC.
                      </p>
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </div>

                {/* Élément 2 */}
                <div className="mb-16 flex items-center">
                  <div className="w-1/2"></div>
                  <div className="flex flex-col items-center w-1/2 pl-8">
                    <div className="mb-2 flex items-center">
                      <div className="h-4 w-4 rounded-full bg-[var(--primary)] border-4 border-white"></div>
                      <span className="pl-3 bg-white text-lg font-medium text-[var(--primary)]">2021</span>
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-2">Études préparatoires</h2>
                      <p className="text-gray-600">
                        Réalisation d'études techniques et de consultations avec les parties prenantes pour définir le cadre institutionnel et opérationnel du FPS.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Élément 3 */}
                <div className="mb-16 flex items-center">
                  <div className="flex flex-col items-center w-1/2 pr-8 text-right">
                    <div className="mb-2 flex items-center justify-end">
                      <span className="pr-3 bg-white text-lg font-medium text-[var(--primary)]">Avril 2022</span>
                      <div className="h-4 w-4 rounded-full bg-[var(--primary)] border-4 border-white"></div>
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-2">Création officielle</h2>
                      <p className="text-gray-600">
                        Signature du décret présidentiel portant création, organisation et fonctionnement du Fonds de Promotion de la Santé en tant qu'établissement public.
                      </p>
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </div>

                {/* Élément 4 */}
                <div className="mb-16 flex items-center">
                  <div className="w-1/2"></div>
                  <div className="flex flex-col items-center w-1/2 pl-8">
                    <div className="mb-2 flex items-center">
                      <div className="h-4 w-4 rounded-full bg-[var(--primary)] border-4 border-white"></div>
                      <span className="pl-3 bg-white text-lg font-medium text-[var(--primary)]">Août 2022</span>
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-2">Mise en place des structures</h2>
                      <p className="text-gray-600">
                        Nomination des organes de direction et de gestion, recrutement du personnel initial et mise en place des premières procédures opérationnelles.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Élément 5 */}
                <div className="mb-16 flex items-center">
                  <div className="flex flex-col items-center w-1/2 pr-8 text-right">
                    <div className="mb-2 flex items-center justify-end">
                      <span className="pr-3 bg-white text-lg font-medium text-[var(--primary)]">2023</span>
                      <div className="h-4 w-4 rounded-full bg-[var(--primary)] border-4 border-white"></div>
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-2">Début des opérations</h2>
                      <p className="text-gray-600">
                        Lancement des premiers programmes et initiatives financés par le FPS dans le cadre de la promotion de la santé et de la prévention des maladies.
                      </p>
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </div>

                {/* Élément 6 */}
                <div className="flex items-center">
                  <div className="w-1/2"></div>
                  <div className="flex flex-col items-center w-1/2 pl-8">
                    <div className="mb-2 flex items-center">
                      <div className="h-4 w-4 rounded-full bg-[var(--primary)] border-4 border-white"></div>
                      <span className="pl-3 bg-white text-lg font-medium text-[var(--primary)]">Aujourd'hui</span>
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-2">Expansion et consolidation</h2>
                      <p className="text-gray-600">
                        Le FPS continue de se développer, d'étendre sa couverture géographique et de diversifier ses interventions pour améliorer la santé des populations congolaises et contribuer à l'atteinte de la Couverture Santé Universelle.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Citation */}
        <section className="py-12 bg-fps-primary-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <svg className="h-12 w-12 text-[var(--primary)] mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote>
              <p className="text-2xl font-medium text-gray-900 mb-6">
                "Le Fonds de Promotion de la Santé représente une innovation majeure dans le financement de la santé en RDC. Il incarne notre engagement à garantir un accès équitable aux soins de santé pour tous les Congolais et à progresser vers la Couverture Santé Universelle."
              </p>
            </blockquote>
            <div className="font-medium text-[var(--primary)]">
              <p>Dr. Jean Kaseya</p>
              <p className="text-gray-600">Directeur Général, FPS</p>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
} 