"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

// Structure de navigation avec sous-menus
const navigation = [
  { 
    name: "Accueil", 
    href: "/", 
    submenu: [] 
  },
  { 
    name: "À propos de nous", 
    href: "/a-propos", 
    submenu: [
      { name: "Notre histoire", href: "/a-propos/histoire" },
      { name: "Mission et vision", href: "/a-propos/mission" },
      { name: "Structure de gouvernance", href: "/a-propos/gouvernance" },
      { name: "Cadre juridique", href: "/a-propos/juridique" },
    ] 
  },
  { 
    name: "Nos programmes", 
    href: "/programmes", 
    submenu: [
      { name: "Éducation sanitaire", href: "/programmes/education" },
      { name: "Prévention des maladies", href: "/programmes/prevention" },
      { name: "Santé maternelle et infantile", href: "/programmes/sante-maternelle" },
      { name: "Renforcement des capacités", href: "/programmes/capacites" },
    ] 
  },
  { 
    name: "Financement", 
    href: "/financement", 
    submenu: [
      { name: "Sources de financement", href: "/financement/sources" },
      { name: "Allocation des ressources", href: "/financement/allocation" },
      { name: "Partenaires financiers", href: "/financement/partenaires" },
    ] 
  },
  { 
    name: "Documentation", 
    href: "/documentation", 
    submenu: [
      { name: "Publications", href: "/documentation/publications" },
      { name: "Textes légaux", href: "/documentation/textes-legaux" },
      { name: "Ressources éducatives", href: "/documentation/ressources" },
    ] 
  },
  { 
    name: "Actualités", 
    href: "/actualites", 
    submenu: [
      { name: "Presse", href: "/actualites/communiques" },
      { name: "Événements", href: "/actualites/evenements" },
      { name: "Galerie média", href: "/actualites/galerie" },
    ] 
  },
  { 
    name: "Contact", 
    href: "/contact",
    submenu: [] 
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const [isMenuHovered, setIsMenuHovered] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const currentPath = usePathname();

  // Gestion de l'ouverture des sous-menus (desktop)
  const handleSubmenuToggle = (index: number) => {
    if (activeSubmenu === index) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(index);
    }
  };

  // Ouvrir le sous-menu au survol
  const handleMouseEnter = (index: number) => {
    // Annuler tout délai de fermeture en cours
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    
    setIsMenuHovered(true);
    setActiveSubmenu(index);
  };

  // Préparer à fermer le sous-menu, mais avec un délai plus long pour une meilleure UX
  const handleMenuMouseLeave = () => {
    setIsMenuHovered(false);
    
    // Ajouter un délai avant de fermer pour permettre au curseur d'entrer dans le sous-menu
    closeTimeoutRef.current = setTimeout(() => {
      if (!isMenuHovered) {
        setActiveSubmenu(null);
      }
    }, 500); // Augmentation du délai à 500ms pour une meilleure UX
  };

  // Quand la souris entre dans le sous-menu
  const handleSubmenuMouseEnter = () => {
    // Annuler tout délai de fermeture en cours
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    
    setIsMenuHovered(true);
  };

  // Gérer les clics en dehors du menu pour fermer les sous-menus
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveSubmenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="fixed w-full z-50">
      {/* Bande supérieure avec logo et coordonnées */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/logo-fps.jpg" 
                alt="Logo FPS" 
                width={50} 
                height={50} 
                className="rounded-full"
              />
              <div className="ml-3">
                <div className="text-xl font-bold text-[var(--primary)] font-heading">
                  Fonds de Promotion de la Santé
                </div>
                <div className="text-sm text-[var(--secondary)] font-body">
                  République Démocratique du Congo
                </div>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex space-x-6 text-sm text-[var(--secondary)]">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>contact@fps.gouv.cd</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+243 XX XXX XXXX</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bande de navigation principale */}
      <div className="bg-[var(--primary)] text-white relative">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
          <div ref={menuRef} className="hidden lg:flex lg:gap-x-8 lg:flex-1 justify-center">
            {navigation.map((item, index) => {
              // Vérifie si le chemin actuel correspond à ce menu
              const isActive = currentPath === item.href || 
                              (currentPath?.startsWith(item.href) && item.href !== "/");
              
              return (
                <div 
                  key={item.name} 
                  className="relative"
                  onMouseLeave={handleMenuMouseLeave}
                >
                  {item.submenu.length > 0 ? (
                    <>
                      <button
                        className={`flex items-center text-sm font-semibold leading-6 text-white hover:text-[var(--accent)] transition-colors pb-1 ${isActive ? 'text-[var(--accent)]' : ''} font-heading`}
                        onClick={() => handleSubmenuToggle(index)}
                        onMouseEnter={() => handleMouseEnter(index)}
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      {/* Indicateur rouge pour le menu actif */}
                      {isActive && (
                        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[var(--danger)]"></div>
                      )}
                      {activeSubmenu === index && (
                        <div 
                          className="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg border border-[var(--accent)] overflow-hidden"
                          onMouseEnter={handleSubmenuMouseEnter}
                          onMouseLeave={handleMenuMouseLeave}
                        >
                          <div className="py-1">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className={`block px-4 py-2 text-sm hover:bg-gray-50 hover:text-[var(--primary)] ${currentPath === subItem.href ? 'text-[var(--danger)] font-semibold' : 'text-gray-700'}`}
                                onClick={() => setActiveSubmenu(null)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="relative">
                      <Link
                        href={item.href}
                        className={`text-sm font-semibold leading-6 text-white hover:text-[var(--accent)] transition-colors block pb-1 ${isActive ? 'text-[var(--accent)]' : ''} font-heading`}
                      >
                        {item.name}
                      </Link>
                      {/* Indicateur rouge pour le menu actif */}
                      {isActive && (
                        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[var(--danger)]"></div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Ouvrir le menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>
        {/* Ligne divisée en bas du header : jaune (70%) et rouge (30%) */}
        <div className="absolute bottom-0 left-0 w-[70%] h-[4px] bg-[var(--accent)]"></div>
        <div className="absolute bottom-0 right-0 w-[30%] h-[4px] bg-[var(--danger)]"></div>
      </div>
      
      {/* Mobile menu */}
      <div className={`fixed inset-0 z-50 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center" onClick={() => setMobileMenuOpen(false)}>
              <Image 
                src="/images/logo-fps.jpg" 
                alt="Logo FPS" 
                width={40} 
                height={40} 
                className="rounded-full"
              />
              <span className="ml-2 text-lg font-semibold text-[var(--primary)]">
                FPS
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Fermer le menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item, index) => (
                  <div key={item.name} className="space-y-1">
                    {item.submenu.length > 0 ? (
                      <>
                        <button
                          className="flex w-full items-center -mx-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[var(--primary)] hover:bg-gray-50"
                          onClick={() => handleSubmenuToggle(index)}
                        >
                          {item.name}
                          <ChevronDown className={`ml-auto h-5 w-5 transform ${activeSubmenu === index ? 'rotate-180' : ''}`} />
                        </button>
                        {activeSubmenu === index && (
                          <div className="ml-4 pl-3 border-l-2 border-[var(--accent)]">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block py-2 text-base font-medium text-gray-600 hover:text-[var(--primary)]"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[var(--primary)] hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 