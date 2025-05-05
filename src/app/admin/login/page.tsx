import React from "react";
import LoginForm from "@/components/admin/LoginForm";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connexion Admin - FPS",
  description: "Connexion à l'interface d'administration du FPS",
};

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <div className="flex justify-center">
              <div className="relative h-20 w-20">
                <Image
                  src="/images/logo-fps.jpg"
                  alt="Logo FPS"
                  fill
                  className="object-contain rounded-full"
                  priority
                />
              </div>
            </div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-[var(--primary)]">
              Administration FPS
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Connectez-vous pour gérer le site
            </p>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <div className="absolute inset-0 bg-[var(--primary)] flex items-center justify-center">
          <div className="text-white text-center px-8">
            <h1 className="text-4xl font-bold mb-4">
              Fonds de Promotion de la Santé
            </h1>
            <p className="text-xl">
              Système de gestion de contenu pour le site web du FPS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 