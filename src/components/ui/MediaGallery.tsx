'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Type pour les éléments média
type MediaItem = {
  id: number;
  type: 'image' | 'video';
  src: string;
  thumbnail: string;
  title: string;
  description: string;
  date?: string;
};

// Données de démonstration pour la galerie - utilise les mêmes événements que dans la page galerie
const defaultMediaItems: MediaItem[] = [
  {
    id: 1,
    type: 'image',
    src: '/images/galerie/conference-csu.jpg',
    thumbnail: '/images/galerie/conference-csu.jpg',
    title: 'Conférence Nationale sur la CSU',
    description: 'Photos de la conférence nationale sur la Couverture Santé Universelle qui s\'est tenue à Kinshasa.',
    date: '25-26 mai 2024'
  },
  {
    id: 2,
    type: 'image',
    src: '/images/galerie/visite-kintambo.jpg',
    thumbnail: '/images/galerie/visite-kintambo.jpg',
    title: 'Visite du centre de santé de Kintambo',
    description: 'Visite du Directeur Général du FPS au centre de santé de Kintambo pour évaluer l\'impact des financements.',
    date: '15 avril 2024'
  },
  {
    id: 3,
    type: 'image',
    src: '/images/galerie/formation-lubumbashi.jpg',
    thumbnail: '/images/galerie/formation-lubumbashi.jpg',
    title: 'Formation des agents de santé à Lubumbashi',
    description: 'Session de formation des agents de santé sur les protocoles de prise en charge des femmes enceintes et des enfants.',
    date: '28 mars 2024'
  },
  {
    id: 4,
    type: 'image',
    src: '/images/galerie/signature-unicef.jpg',
    thumbnail: '/images/galerie/signature-unicef.jpg',
    title: 'Signature de l\'accord avec l\'UNICEF',
    description: 'Cérémonie officielle de signature de l\'accord de partenariat entre le FPS et l\'UNICEF pour la santé maternelle et infantile.',
    date: '10 avril 2024'
  },
  {
    id: 5,
    type: 'image',
    src: '/images/galerie/campagne-kasai.jpg',
    thumbnail: '/images/galerie/campagne-kasai.jpg',
    title: 'Campagne de sensibilisation au Kasaï',
    description: 'Campagne de sensibilisation sur la CSU menée par les équipes du FPS dans plusieurs localités de la province du Kasaï.',
    date: '20 février 2024'
  },
  {
    id: 6,
    type: 'image',
    src: '/images/galerie/distribution-medicaments.jpg',
    thumbnail: '/images/galerie/distribution-medicaments.jpg',
    title: 'Distribution de médicaments à l\'Est',
    description: 'Distribution de médicaments essentiels dans les zones affectées par les conflits dans l\'Est de la RDC.',
    date: '5 janvier 2024'
  }
];

type MediaGalleryProps = {
  mediaItems?: MediaItem[];
  title?: string;
  subtitle?: string;
};

export default function MediaGallery({ 
  mediaItems = defaultMediaItems,
  title = "Galerie média",
  subtitle = "Découvrez en images les activités et réalisations du Fonds de Promotion de la Santé"
}: MediaGalleryProps) {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  // Fonction pour ouvrir la vue détaillée
  const openModal = (item: MediaItem) => {
    setSelectedItem(item);
  };

  // Fonction pour fermer la vue détaillée
  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="py-16 bg-[var(--accent)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[var(--secondary)] sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-700">{subtitle}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {mediaItems.map((item) => (
            <div 
              key={item.id} 
              className="relative overflow-hidden bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1 transition-transform"
              onClick={() => openModal(item)}
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image 
                  src={item.thumbnail} 
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {item.date && (
                  <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-60 text-white text-sm">
                    {item.date}
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[var(--primary)] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 line-clamp-2">
                  {item.description}
                </p>
                <div className="mt-4 flex justify-end">
                  <button 
                    className="text-[var(--primary)] font-medium hover:text-[var(--primary-dark)]"
                    aria-label={`Voir les détails de ${item.title}`}
                  >
                    Voir plus
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/actualites/galerie"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[var(--secondary)] bg-white hover:bg-gray-100 shadow-sm transition-colors"
          >
            Voir tous les albums <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Modal pour afficher l'élément sélectionné */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div 
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button 
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md z-10"
                onClick={closeModal}
                aria-label="Fermer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="relative h-80 md:h-96">
                <Image 
                  src={selectedItem.src} 
                  alt={selectedItem.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 800px"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-2xl font-bold text-gray-900">{selectedItem.title}</h3>
                  {selectedItem.date && (
                    <span className="text-sm text-gray-500">{selectedItem.date}</span>
                  )}
                </div>
                <p className="text-gray-600 mb-4">{selectedItem.description}</p>
                <Link href={`/actualites/galerie/${selectedItem.id}`} className="text-[var(--primary)] font-medium hover:text-[var(--primary-dark)]">
                  Voir l'album complet
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 