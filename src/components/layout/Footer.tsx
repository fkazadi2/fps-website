import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Building, Linkedin } from "lucide-react";

const navigation = {
  main: [
    { name: "Accueil", href: "/" },
    { name: "À propos de nous", href: "/a-propos" },
    { name: "FOND FPS", href: "/fond-fps" },
    { name: "PRIX FPS", href: "/prix-fps" },
    { name: "Contact", href: "/contact" },
  ],
  submenu: {
    "À propos de nous": [
      { name: "Notre histoire", href: "/a-propos/histoire" },
      { name: "Mission et vision", href: "/a-propos/mission" },
      { name: "Structure de gouvernance", href: "/a-propos/gouvernance" },
      { name: "Cadre juridique", href: "/a-propos/juridique" },
    ],
    "FOND FPS": [
      { name: "Déposer une requête Fonds d'aide", href: "/fond-fps/requete-aide" },
      { name: "Fonds pour la promotion de la santé, de la recherche et de la prévention", href: "/fond-fps/promotion" },
      { name: "Déposer une requête Fonds pour la promotion de la santé", href: "/fond-fps/requete-promotion" },
    ],
    "PRIX FPS": [
      { name: "Les lauréats 2022", href: "/prix-fps/laureats" },
      { name: "Formulaire d'inscription en ligne", href: "/prix-fps/inscription-en-ligne" },
      { name: "Formulaire d'inscription (PDF)", href: "/prix-fps/inscription-pdf" },
      { name: "Flyer Prix FPS (PDF)", href: "/prix-fps/flyer" },
    ],
  },
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0
          01.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[var(--primary)] text-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          {/* Logo and About FPS Section */}
          <div className="md:col-span-4">
            <div className="flex items-center mb-6">
              <Image 
                src="/images/logo-fps.jpg" 
                alt="Logo FPS" 
                width={60} 
                height={60} 
                className="rounded-full border-2 border-white"
              />
              <div className="ml-4">
                <div className="text-lg font-bold text-white">
                  Fonds de Promotion de la Santé
                </div>
                <div className="text-xs text-[var(--accent)]">
                  République Démocratique du Congo
                </div>
              </div>
            </div>
            
            <p className="mt-2 text-sm text-blue-100">
              Le Fonds de Promotion de la Santé (FPS) est un établissement public à caractère administratif créé par le Décret n° 22/13 du 09 avril 2022, pour contribuer à l'amélioration de la santé publique en RDC.
            </p>
            
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white border-b border-[var(--accent)] pb-2 mb-2">Coordonnées</h4>
              <address className="mt-2 not-italic text-sm text-blue-100 space-y-2">
                <div className="flex items-start">
                  <Building className="h-4 w-4 text-[var(--accent)] mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <p>Immeuble Golf</p>
                    <p>Appartement 21, Niveau 6</p>
                    <p>Boulevard du 30 juin</p>
                    <p>Référence (DGM - DG)</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-[var(--accent)] mr-2 flex-shrink-0" />
                  <p>Info@fps.cd</p>
                </div>
                <div className="flex items-center">
                  <Linkedin className="h-4 w-4 text-[var(--accent)] mr-2 flex-shrink-0" />
                  <p>LinkedIn (DG FPS)</p>
                </div>
              </address>
            </div>
          </div>
          
          {/* Navigation Sections */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-white border-b border-[var(--accent)] pb-2 mb-2">Liens rapides</h3>
            <ul className="mt-2 space-y-1">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-blue-100 hover:text-[var(--accent)]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* À propos submenus */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-white border-b border-[var(--accent)] pb-2 mb-2">À propos</h3>
            <ul className="mt-2 space-y-1">
              {navigation.submenu["À propos de nous"].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-blue-100 hover:text-[var(--accent)]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* FOND FPS submenus */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-white border-b border-[var(--accent)] pb-2 mb-2">FOND FPS</h3>
            <ul className="mt-2 space-y-1">
              {navigation.submenu["FOND FPS"].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-blue-100 hover:text-[var(--accent)]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* PRIX FPS submenus */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-white border-b border-[var(--accent)] pb-2 mb-2">PRIX FPS</h3>
            <ul className="mt-2 space-y-1">
              {navigation.submenu["PRIX FPS"].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-blue-100 hover:text-[var(--accent)]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-[var(--secondary)] pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="text-[var(--accent)] hover:text-white transition-colors">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="text-sm text-blue-200">
            &copy; {new Date().getFullYear()} Fonds de Promotion de la Santé. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
} 