"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { 
  BarChart3, 
  Users, 
  FileText, 
  Calendar, 
  Settings, 
  ExternalLink
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const { data: session } = useSession();
  
  // Statistiques fictives pour la démo
  const stats = [
    { name: "Visiteurs (ce mois)", value: "3,254", icon: Users, color: "bg-blue-500" },
    { name: "Pages publiées", value: "24", icon: FileText, color: "bg-green-500" },
    { name: "Événements à venir", value: "12", icon: Calendar, color: "bg-purple-500" },
    { name: "Messages", value: "47", icon: BarChart3, color: "bg-amber-500" },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
        <Link
          href="/"
          target="_blank"
          className="flex items-center text-[var(--primary)] hover:text-[var(--primary-dark)]"
        >
          <span className="mr-2">Voir le site</span>
          <ExternalLink className="h-4 w-4" />
        </Link>
      </div>

      <div className="mb-6">
        <div className="bg-white shadow rounded-lg p-4 sm:p-6">
          <h2 className="text-lg font-semibold mb-4">Bienvenue, {session?.user?.name || "Administrateur"}</h2>
          <p className="text-gray-600">
            Bienvenue dans l&apos;interface d&apos;administration du site web du Fonds de Promotion de la Santé.
            Utilisez le menu de gauche pour naviguer entre les différentes sections de gestion du contenu.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white shadow rounded-lg p-4">
            <div className="flex items-center">
              <div className={`${stat.color} p-3 rounded-full mr-4`}>
                <stat.icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">{stat.name}</p>
                <p className="text-2xl font-semibold">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Actions rapides</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link 
              href="/admin/site" 
              className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
            >
              <Settings className="h-6 w-6 text-[var(--primary)] mr-3" />
              <div>
                <h4 className="font-medium">Paramètres du site</h4>
                <p className="text-sm text-gray-500">Gérer le favicon, le logo, etc.</p>
              </div>
            </Link>
            <Link 
              href="/admin/posts/new" 
              className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
            >
              <FileText className="h-6 w-6 text-[var(--primary)] mr-3" />
              <div>
                <h4 className="font-medium">Nouvelle actualité</h4>
                <p className="text-sm text-gray-500">Créer une nouvelle publication</p>
              </div>
            </Link>
            <Link 
              href="/admin/events/new" 
              className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
            >
              <Calendar className="h-6 w-6 text-[var(--primary)] mr-3" />
              <div>
                <h4 className="font-medium">Nouvel événement</h4>
                <p className="text-sm text-gray-500">Ajouter un événement à venir</p>
              </div>
            </Link>
            <Link 
              href="/admin/media" 
              className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
            >
              <Users className="h-6 w-6 text-[var(--primary)] mr-3" />
              <div>
                <h4 className="font-medium">Gérer les médias</h4>
                <p className="text-sm text-gray-500">Télécharger et organiser vos médias</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Activité récente</h3>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-[var(--primary)] pl-4 py-2">
              <p className="text-sm text-gray-600">Aujourd&apos;hui</p>
              <p className="font-medium">Mise à jour de la page d&apos;accueil</p>
            </div>
            <div className="border-l-4 border-[var(--primary)] pl-4 py-2">
              <p className="text-sm text-gray-600">Hier</p>
              <p className="font-medium">Nouvel événement ajouté: Campagne de vaccination</p>
            </div>
            <div className="border-l-4 border-[var(--primary)] pl-4 py-2">
              <p className="text-sm text-gray-600">Il y a 3 jours</p>
              <p className="font-medium">Mise à jour des informations de contact</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 