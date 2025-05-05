"use client";

import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { MapPin, Phone, Mail, Clock, Building, Linkedin } from "lucide-react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<{
    status: "idle" | "success" | "error";
    message: string;
  }>({
    status: "idle",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({
      status: "success",
      message: "Votre message a été envoyé avec succès. Nous vous contacterons bientôt.",
    });
    // Dans une application réelle, vous ajouteriez ici la logique d'envoi du formulaire
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-[var(--primary)] py-16 sm:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] bg-repeat opacity-10"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Contactez-nous
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-fps-primary-light">
            Nous sommes à votre disposition pour répondre à vos questions et vous fournir plus d'informations sur nos programmes.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[var(--primary)]">Envoyez-nous un message</h2>
              <p className="mt-4 text-gray-600">
                Remplissez le formulaire ci-dessous pour nous envoyer vos questions, commentaires ou demandes d'information.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                      Prénom
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-3 px-4"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                      Nom
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-3 px-4"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-3 px-4"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-3 px-4"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Sujet
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-3 px-4"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-3 px-4"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-[var(--danger)] hover:bg-fps-danger-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--danger)]"
                  >
                    Envoyer
                  </button>
                </div>
                {formStatus.status !== "idle" && (
                  <div
                    className={`rounded-md p-4 ${
                      formStatus.status === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
                    }`}
                  >
                    <p>{formStatus.message}</p>
                  </div>
                )}
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--primary)]">Nos coordonnées</h2>
              <p className="mt-4 text-gray-600">
                Vous pouvez également nous contacter directement par email, ou en visitant nos bureaux.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Building className="h-6 w-6 text-[var(--primary)]" />
                  </div>
                  <div className="ml-3 text-base text-gray-600">
                    <p>Adresse</p>
                    <p className="mt-1">Immeuble Golf</p>
                    <p>Appartement 21, Niveau 6</p>
                    <p>Boulevard du 30 juin</p>
                    <p>Référence (DGM - DG)</p>
                    <p>Kinshasa, République Démocratique du Congo</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-[var(--primary)]" />
                  </div>
                  <div className="ml-3 text-base text-gray-600">
                    <p>Email</p>
                    <p className="mt-1">Info@fps.cd</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <Linkedin className="h-6 w-6 text-[var(--primary)]" />
                  </div>
                  <div className="ml-3 text-base text-gray-600">
                    <p>LinkedIn</p>
                    <p className="mt-1">LinkedIn (DG FPS)</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <Clock className="h-6 w-6 text-[var(--primary)]" />
                  </div>
                  <div className="ml-3 text-base text-gray-600">
                    <p>Heures d'ouverture</p>
                    <p className="mt-1">Lundi - Vendredi: 8h00 - 16h00</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-lg font-semibold text-gray-900">Carte</h3>
                <div className="mt-4 bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  {/* Emplacement pour la carte */}
                  <p className="text-gray-500">Carte de localisation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-fps-primary-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[var(--primary)]">Questions fréquentes</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Consultez les réponses aux questions les plus fréquemment posées.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Comment puis-je obtenir plus d'informations sur les programmes du FPS ?
              </h3>
              <p className="mt-2 text-gray-600">
                Vous pouvez nous contacter directement par email ou téléphone, ou utiliser le formulaire de contact sur cette page. Nos équipes vous fourniront toutes les informations nécessaires.
              </p>
            </div>

            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Comment puis-je devenir partenaire du FPS ?
              </h3>
              <p className="mt-2 text-gray-600">
                Nous sommes toujours ouverts à de nouveaux partenariats. Veuillez nous contacter en spécifiant votre intérêt pour un partenariat, et nous organiserons une rencontre pour discuter des possibilités de collaboration.
              </p>
            </div>

            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Où puis-je trouver des documents et publications du FPS ?
              </h3>
              <p className="mt-2 text-gray-600">
                Nos publications et documents sont disponibles dans la section Documentation de notre site web. Vous pouvez également nous contacter pour des demandes spécifiques.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 