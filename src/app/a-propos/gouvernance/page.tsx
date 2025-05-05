import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import Organigramme from "@/components/ui/Organigramme";

export default function GouvernancePage() {
  return (
    <MainLayout>
      <div className="bg-white">
        {/* En-tête de la page */}
        <div className="bg-fps-primary-light py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col space-y-2">
              <Link href="/a-propos" className="text-[var(--primary)] hover:text-[var(--primary-dark)]">
                &larr; Retour à À propos de nous
              </Link>
              <h1 className="text-3xl font-extrabold text-[var(--primary)] sm:text-4xl">
                Structure de gouvernance
              </h1>
            </div>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl">
              L'organisation interne du Fonds de Promotion de la Santé pour assurer une gestion efficace et transparente.
            </p>
          </div>
        </div>

        {/* Contenu principal */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-8">
                <p className="text-lg text-gray-600 mb-8">
                  Le FPS dispose d'une structure de gouvernance bien définie qui assure une répartition claire des responsabilités, une gestion efficace des ressources et une prise de décision transparente. Notre organigramme illustre l'organisation hiérarchique et fonctionnelle de l'institution.
                </p>
                
                {/* Organigramme */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Organigramme du FPS</h2>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200 mb-8 organigramme-container" role="region" aria-label="Organigramme interactif du FPS">
                    <p className="sr-only">
                      Cet organigramme est interactif. Vous pouvez cliquer ou appuyer sur Entrée sur chaque département pour afficher ou masquer ses subdivisions. 
                      L'organigramme est organisé hiérarchiquement, avec le Conseil d'Administration au sommet.
                    </p>
                    <Organigramme />
                    <p className="text-sm text-gray-500 text-center mt-4">Organigramme officiel du Fonds de Promotion de la Santé</p>
                    <div className="flex items-center justify-center mt-2 bg-fps-primary-light p-2 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <p className="text-sm text-[var(--primary)]">Cliquez sur les départements pour voir leurs sous-divisions et structure interne</p>
                    </div>
                  </div>
                </div>
                
                {/* Les organes de gouvernance */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Les organes de gouvernance</h2>
                  
                  <div className="space-y-8">
                    <div className="bg-fps-primary-light p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-[var(--primary)] mb-3">Conseil d'Administration</h3>
                      <p className="text-gray-600 mb-4">
                        Organe suprême de décision, le Conseil d'Administration définit les orientations stratégiques du FPS et supervise sa gestion. Il est composé de représentants des ministères concernés, de la société civile et des partenaires techniques et financiers.
                      </p>
                      <div className="font-medium text-gray-700">Principales responsabilités :</div>
                      <ul className="list-disc pl-5 text-gray-600 mt-2 space-y-1">
                        <li>Approbation des plans stratégiques et opérationnels</li>
                        <li>Validation des budgets et des rapports financiers</li>
                        <li>Supervision de la performance du FPS</li>
                        <li>Nomination du Directeur Général</li>
                      </ul>
                    </div>
                    
                    <div className="bg-fps-primary-light p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-[var(--primary)] mb-3">Direction Générale (DG & DGA)</h3>
                      <p className="text-gray-600 mb-4">
                        La Direction Générale est responsable de la gestion quotidienne du FPS. Elle met en œuvre les décisions du Conseil d'Administration et coordonne les activités des différentes directions.
                      </p>
                      <div className="font-medium text-gray-700">Principales responsabilités :</div>
                      <ul className="list-disc pl-5 text-gray-600 mt-2 space-y-1">
                        <li>Exécution des plans stratégiques et opérationnels</li>
                        <li>Gestion des ressources humaines, financières et matérielles</li>
                        <li>Représentation du FPS auprès des partenaires</li>
                        <li>Coordination des directions techniques et d'appui</li>
                      </ul>
                    </div>
                    
                    <div className="bg-fps-primary-light p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-[var(--primary)] mb-3">Collège des Commissaires aux Comptes</h3>
                      <p className="text-gray-600 mb-4">
                        Organe indépendant chargé du contrôle financier du FPS, le Collège des Commissaires aux Comptes veille à la régularité, la sincérité et la fidélité des comptes.
                      </p>
                      <div className="font-medium text-gray-700">Principales responsabilités :</div>
                      <ul className="list-disc pl-5 text-gray-600 mt-2 space-y-1">
                        <li>Vérification des comptes et des états financiers</li>
                        <li>Contrôle de la conformité des dépenses</li>
                        <li>Émission de rapports d'audit annuels</li>
                        <li>Recommandations pour améliorer la gestion financière</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Directions techniques */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Directions techniques</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[var(--primary)]">
                      <h3 className="text-lg font-semibold text-[var(--primary)] mb-2">DF (Direction des Finances)</h3>
                      <p className="text-gray-600">
                        Gère les ressources financières, assure la comptabilité, supervise les dépenses et prépare les rapports financiers.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[var(--primary)]">
                      <h3 className="text-lg font-semibold text-[var(--primary)] mb-2">DRHGC (Direction Ressources Humaines et Gestion de Carrières)</h3>
                      <p className="text-gray-600">
                        S'occupe du recrutement, de la formation et du développement du personnel du FPS.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[var(--primary)]">
                      <h3 className="text-lg font-semibold text-[var(--primary)] mb-2">DT (Direction Technique)</h3>
                      <p className="text-gray-600">
                        Développe et met en œuvre les programmes techniques du FPS, assure le suivi des infrastructures sanitaires.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[var(--primary)]">
                      <h3 className="text-lg font-semibold text-[var(--primary)] mb-2">DGS (Direction Gouvernance en Santé)</h3>
                      <p className="text-gray-600">
                        Veille au renforcement du système de santé et à la promotion de la médecine traditionnelle.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[var(--primary)]">
                      <h3 className="text-lg font-semibold text-[var(--primary)] mb-2">DA (Direction Administrative)</h3>
                      <p className="text-gray-600">
                        Gère les aspects logistiques et administratifs du fonctionnement du FPS.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[var(--primary)]">
                      <h3 className="text-lg font-semibold text-[var(--primary)] mb-2">DJ (Direction Juridique)</h3>
                      <p className="text-gray-600">
                        Assure la conformité légale des activités du FPS et gère les contentieux.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[var(--primary)]">
                      <h3 className="text-lg font-semibold text-[var(--primary)] mb-2">DCS (Direction Crédit et Subventionnement)</h3>
                      <p className="text-gray-600">
                        Gère les mécanismes de financement des projets de santé et l'allocation des subventions.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[var(--primary)]">
                      <h3 className="text-lg font-semibold text-[var(--primary)] mb-2">DR (Directions Régionales)</h3>
                      <p className="text-gray-600">
                        Représentent le FPS dans les provinces et coordonnent la mise en œuvre des programmes au niveau local.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[var(--primary)]">
                      <h3 className="text-lg font-semibold text-[var(--primary)] mb-2">DSI (Direction Système d'Information)</h3>
                      <p className="text-gray-600">
                        Développe et maintient les systèmes informatiques et la communication du FPS.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Cellules spéciales */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Cellules spéciales</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-[var(--primary)] mb-2">Cellule d'Audit Interne</h3>
                      <p className="text-gray-600">
                        Assure le contrôle interne des processus et procédures, évalue les risques et propose des mesures d'amélioration continue.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-[var(--primary)] mb-2">Cellule de Passation des Marchés Publics</h3>
                      <p className="text-gray-600">
                        Gère les processus d'appel d'offres et d'attribution des marchés selon les règles de transparence et d'équité.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
} 