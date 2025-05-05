import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";

export default function JuridiquePage() {
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
                Cadre juridique
              </h1>
            </div>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl">
              Les bases légales qui encadrent le fonctionnement du Fonds de Promotion de la Santé en RDC.
            </p>
          </div>
        </div>

        {/* Contenu principal */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-8">
                <p className="text-lg text-gray-600 mb-8">
                  Le Fonds de Promotion de la Santé (FPS) opère dans un cadre juridique solide qui définit sa mission, son organisation et ses modes d'intervention. Ce cadre garantit sa légitimité et sa capacité à agir efficacement pour la promotion de la santé en RDC.
                </p>
                
                <div className="grid md:grid-cols-2 gap-10 mb-10">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Textes fondateurs</h2>
                    
                    <div className="space-y-6">
                      <div className="bg-fps-primary-light p-6 rounded-lg border-l-4 border-[var(--primary)]">
                        <h3 className="text-xl font-semibold text-[var(--primary)] mb-2">Décret n° 22/13 du 09 avril 2022</h3>
                        <p className="text-gray-600 mb-3">
                          Portant création, organisation et fonctionnement du Fonds de Promotion de la Santé.
                        </p>
                        <div className="flex space-x-2">
                          <span className="px-3 py-1 bg-fps-primary-light text-[var(--primary)] rounded-full text-sm">Création du FPS</span>
                          <span className="px-3 py-1 bg-fps-primary-light text-[var(--primary)] rounded-full text-sm">Texte fondateur</span>
                        </div>
                      </div>
                      
                      <div className="bg-fps-primary-light p-6 rounded-lg border-l-4 border-[var(--primary)]">
                        <h3 className="text-xl font-semibold text-[var(--primary)] mb-2">Arrêté ministériel n° 1250/CAB/MIN/SP/015/2022 du 20 juin 2022</h3>
                        <p className="text-gray-600 mb-3">
                          Fixant les modalités pratiques de fonctionnement du Fonds de Promotion de la Santé.
                        </p>
                        <div className="flex space-x-2">
                          <span className="px-3 py-1 bg-fps-primary-light text-[var(--primary)] rounded-full text-sm">Fonctionnement</span>
                          <span className="px-3 py-1 bg-fps-primary-light text-[var(--primary)] rounded-full text-sm">Règlement intérieur</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Cadre juridique national</h2>
                    
                    <div className="space-y-6">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Loi n° 18/035 du 13 décembre 2018</h3>
                        <p className="text-gray-600 mb-3">
                          Fixant les principes fondamentaux relatifs à l'organisation de la santé publique en RDC.
                        </p>
                        <div className="flex space-x-2">
                          <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">Santé publique</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Plan National de Développement Sanitaire 2019-2022</h3>
                        <p className="text-gray-600 mb-3">
                          Document stratégique d'orientation pour le développement du secteur de la santé en RDC.
                        </p>
                        <div className="flex space-x-2">
                          <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">Document de référence</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Statut juridique et attributions</h2>
                  
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Aspect
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Forme juridique
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            Établissement public à caractère administratif doté de la personnalité juridique
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Tutelle
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            Ministère de la Santé Publique, Hygiène et Prévention
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Autonomie financière
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            Autonomie de gestion administrative et financière
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Mandat légal
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            Financement des programmes de promotion de la santé et de prévention des maladies
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Régime fiscal
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            Exonération d'impôts et taxes pour les activités liées à sa mission d'intérêt public
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Conformité aux normes internationales</h2>
                  
                  <p className="text-gray-600 mb-6">
                    Le cadre juridique du FPS s'inscrit également dans le respect des engagements internationaux de la RDC en matière de santé publique, notamment :
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-fps-primary-light p-5 rounded-lg">
                      <h3 className="font-semibold text-[var(--primary)] mb-2">Objectifs de Développement Durable (ODD)</h3>
                      <p className="text-gray-600 text-sm">
                        Le FPS contribue à la réalisation de l'ODD 3 : "Permettre à tous de vivre en bonne santé et promouvoir le bien-être de tous à tout âge".
                      </p>
                    </div>
                    
                    <div className="bg-fps-primary-light p-5 rounded-lg">
                      <h3 className="font-semibold text-[var(--primary)] mb-2">Règlement Sanitaire International (RSI)</h3>
                      <p className="text-gray-600 text-sm">
                        Le FPS intègre dans ses programmes les dispositions du RSI de l'OMS pour la prévention et le contrôle des risques sanitaires.
                      </p>
                    </div>
                    
                    <div className="bg-fps-primary-light p-5 rounded-lg">
                      <h3 className="font-semibold text-[var(--primary)] mb-2">Déclaration d'Abuja</h3>
                      <p className="text-gray-600 text-sm">
                        Le FPS s'inscrit dans l'engagement des États africains d'allouer au moins 15% de leur budget national à la santé.
                      </p>
                    </div>
                    
                    <div className="bg-fps-primary-light p-5 rounded-lg">
                      <h3 className="font-semibold text-[var(--primary)] mb-2">Stratégie africaine de la santé 2016-2030</h3>
                      <p className="text-gray-600 text-sm">
                        Le FPS aligne ses interventions sur les priorités définies par l'Union Africaine pour le renforcement des systèmes de santé.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-10 p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Évolution du cadre juridique</h3>
                    <p className="text-gray-600">
                      Le cadre juridique du FPS est conçu pour évoluer en fonction des besoins et des défis du secteur de la santé en RDC. Des révisions périodiques des textes réglementaires sont prévues pour adapter le fonctionnement du FPS aux réalités du terrain et aux évolutions des politiques nationales et internationales en matière de santé publique.
                    </p>
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