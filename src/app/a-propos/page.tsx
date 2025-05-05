import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";

export const metadata = {
  title: "À propos de nous | Fonds de Promotion de la Santé (FPS)",
  description: "Découvrez l'histoire, la mission et la structure du Fonds de Promotion de la Santé (FPS) en RDC.",
};

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="bg-white">
        {/* En-tête de la page */}
        <div className="bg-fps-danger-light py-12 md:py-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[var(--accent)]"></div>
            <div className="absolute -left-10 bottom-0 w-40 h-40 rounded-full bg-[var(--accent)]"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-3xl font-extrabold text-[var(--danger)] sm:text-4xl">
              À propos du Fonds de Promotion de la Santé
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl">
              Découvrez notre histoire, notre mission et notre vision pour améliorer la santé en République Démocratique du Congo.
            </p>
          </div>
        </div>

        {/* Contenu principal */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Notre histoire */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-10">
              <div className="md:flex">
                <div className="md:w-1/3 bg-[var(--danger)] text-white p-8">
                  <h2 className="text-2xl font-bold mb-4">Notre histoire</h2>
                  <p className="mb-4">
                    Le parcours qui a mené à la création et au développement du Fonds de Promotion de la Santé en RDC.
                  </p>
                  <Link 
                    href="/a-propos/histoire"
                    className="inline-block bg-white text-[var(--danger)] px-4 py-2 rounded-md font-medium hover:bg-fps-danger-light transition-colors"
                  >
                    En savoir plus
                  </Link>
                </div>
                <div className="md:w-2/3 p-8">
                  <p className="text-gray-600 mb-4">
                    Le Fonds de Promotion de la Santé (FPS) a été créé en 2015 par décret présidentiel pour répondre aux défis persistants du financement de la santé en République Démocratique du Congo.
                  </p>
                  <p className="text-gray-600">
                    Né de la volonté de renforcer le système de santé congolais et d'améliorer l'accès aux soins pour tous, le FPS représente une innovation majeure dans le paysage sanitaire du pays. Depuis sa création, il a mobilisé des ressources significatives et mis en œuvre des programmes qui ont contribué à l'amélioration des indicateurs de santé dans plusieurs provinces.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Mission et Vision */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-10">
              <div className="md:flex flex-row-reverse">
                <div className="md:w-1/3 bg-[var(--danger)] text-white p-8">
                  <h2 className="text-2xl font-bold mb-4">Mission et vision</h2>
                  <p className="mb-4">
                    Notre raison d'être et nos objectifs pour l'avenir de la santé en RDC.
                  </p>
                  <Link 
                    href="/a-propos/mission"
                    className="inline-block bg-white text-[var(--danger)] px-4 py-2 rounded-md font-medium hover:bg-fps-danger-light transition-colors"
                  >
                    En savoir plus
                  </Link>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-[var(--primary)] mb-2">Notre mission</h3>
                    <p className="text-gray-600">
                      Mobiliser et gérer efficacement des ressources financières pour soutenir les interventions prioritaires de santé publique, renforcer le système de santé et améliorer l'accès à des soins de qualité pour tous les Congolais, en particulier les populations les plus vulnérables.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--primary)] mb-2">Notre vision</h3>
                    <p className="text-gray-600">
                      Un système de santé congolais résilient, performant et équitable, offrant des services de santé de qualité accessibles à tous, grâce à des mécanismes de financement durables et innovants.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Structure de gouvernance */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-10">
              <div className="md:flex">
                <div className="md:w-1/3 bg-[var(--danger)] text-white p-8">
                  <h2 className="text-2xl font-bold mb-4">Structure de gouvernance</h2>
                  <p className="mb-4">
                    Notre organisation interne et notre structure de gouvernance pour assurer efficacité et transparence.
                  </p>
                  <Link 
                    href="/a-propos/gouvernance"
                    className="inline-block bg-white text-[var(--danger)] px-4 py-2 rounded-md font-medium hover:bg-fps-danger-light transition-colors"
                  >
                    En savoir plus
                  </Link>
                </div>
                <div className="md:w-2/3 p-8">
                  <p className="text-gray-600 mb-4">
                    Le FPS dispose d'une structure de gouvernance bien définie qui assure une répartition claire des responsabilités, une gestion efficace des ressources et une prise de décision transparente.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Dirigé par un Conseil d'Administration qui définit les orientations stratégiques, et géré par une Direction Générale qui assure la mise en œuvre opérationnelle, le FPS est organisé en plusieurs directions techniques spécialisées qui couvrent tous les aspects de sa mission.
                  </p>
                  <p className="text-gray-600">
                    Notre organigramme illustre la structure hiérarchique et fonctionnelle complète de l'institution, incluant les directions régionales qui assurent notre présence dans toutes les provinces du pays.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Cadre juridique */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="md:flex flex-row-reverse">
                <div className="md:w-1/3 bg-[var(--danger)] text-white p-8">
                  <h2 className="text-2xl font-bold mb-4">Cadre juridique</h2>
                  <p className="mb-4">
                    Les bases légales et réglementaires qui encadrent notre action.
                  </p>
                  <Link 
                    href="/a-propos/juridique"
                    className="inline-block bg-white text-[var(--danger)] px-4 py-2 rounded-md font-medium hover:bg-fps-danger-light transition-colors"
                  >
                    En savoir plus
                  </Link>
                </div>
                <div className="md:w-2/3 p-8">
                  <p className="text-gray-600 mb-4">
                    Le FPS a été créé par le Décret présidentiel n°15/026 du 31 décembre 2015 qui définit son statut, ses missions et son organisation. Son fonctionnement est également régi par plusieurs textes législatifs et réglementaires qui garantissent sa conformité avec le cadre légal national.
                  </p>
                  <p className="text-gray-600">
                    En tant qu'établissement public doté de la personnalité juridique et de l'autonomie de gestion, le FPS opère sous la tutelle du Ministère de la Santé Publique et respecte les principes de bonne gouvernance établis par la loi congolaise et les standards internationaux.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </section>
      </div>
    </MainLayout>
  );
} 