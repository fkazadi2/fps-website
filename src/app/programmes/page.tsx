import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Nos programmes | Fonds de Promotion de la Santé (FPS)",
  description: "Découvrez les programmes de promotion de la santé mis en œuvre par le FPS en République Démocratique du Congo.",
};

const programs = [
  {
    id: 1,
    title: "Éducation sanitaire et sensibilisation",
    description: "Programmes de sensibilisation et d'éducation pour améliorer les connaissances en matière de santé et promouvoir des comportements sains.",
    image: "/images/placeholder.jpg",
    activities: [
      "Campagnes d'information sur les maladies courantes",
      "Ateliers communautaires sur la santé",
      "Programmes scolaires d'éducation sanitaire",
      "Développement de matériels éducatifs adaptés"
    ]
  },
  {
    id: 2,
    title: "Prévention des maladies",
    description: "Initiatives visant à prévenir la propagation des maladies infectieuses et à réduire l'incidence des maladies non transmissibles.",
    image: "/images/placeholder.jpg",
    activities: [
      "Campagnes de vaccination",
      "Programmes de dépistage précoce",
      "Initiatives de lutte contre les maladies vectorielles",
      "Sensibilisation aux facteurs de risque des maladies chroniques"
    ]
  },
  {
    id: 3,
    title: "Promotion de la santé maternelle et infantile",
    description: "Programmes dédiés à l'amélioration de la santé des femmes enceintes, des mères et des enfants.",
    image: "/images/placeholder.jpg",
    activities: [
      "Éducation sur les soins prénatals",
      "Promotion de l'allaitement maternel",
      "Suivi de la croissance et du développement de l'enfant",
      "Sensibilisation à la nutrition infantile"
    ]
  },
  {
    id: 4,
    title: "Renforcement des capacités communautaires",
    description: "Initiatives visant à renforcer les capacités des communautés pour qu'elles puissent prendre en charge leur propre santé.",
    image: "/images/placeholder.jpg",
    activities: [
      "Formation des agents de santé communautaires",
      "Soutien aux groupes d'entraide",
      "Développement de projets communautaires",
      "Mobilisation communautaire pour la santé"
    ]
  }
];

export default function ProgramsPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-fps-primary-light to-[rgba(0,91,176,0.15)] py-16 sm:py-24 border-b border-[var(--primary)] border-opacity-30">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] bg-repeat opacity-20"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-[var(--primary)] sm:text-4xl lg:text-5xl">
            Nos programmes
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
            Découvrez les initiatives et programmes mis en œuvre par le FPS pour promouvoir la santé en République Démocratique du Congo.
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {programs.map((program, index) => (
              <div 
                key={program.id} 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12`}
              >
                <div className="md:w-2/5 flex-shrink-0">
                  <div className="h-64 md:h-full bg-gray-100 rounded-lg overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      {/* Image placeholder */}
                      <span>Image du programme</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-3/5">
                  <h2 className="text-2xl font-bold text-[var(--primary)]">
                    {program.title}
                  </h2>
                  <p className="mt-4 text-lg text-gray-600">
                    {program.description}
                  </p>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900">Activités principales :</h3>
                    <ul className="mt-2 space-y-2">
                      {program.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="flex-shrink-0 mt-1">
                            <svg className="h-5 w-5 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span className="ml-3 text-gray-600">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Collaboration */}
      <section className="bg-fps-primary-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[var(--primary)]">Collaboration et partenariats</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Le FPS travaille en étroite collaboration avec divers partenaires pour maximiser l'impact de ses programmes de promotion de la santé.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[var(--danger)] hover:bg-fps-danger-dark transition-all duration-300"
              >
                Devenir partenaire <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 