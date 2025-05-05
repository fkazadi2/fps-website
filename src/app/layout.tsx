import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import "./colors.css";
import { getSiteConfig } from "@/lib/site-config";

// Importation de Poppins pour les titres
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

// Importation de Roboto pour le corps du texte
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-roboto",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  // Récupérer la configuration du site pour les métadonnées
  const config = await getSiteConfig();
  
  return {
    title: config?.siteName || "Fonds de Promotion de la Santé (FPS) - RDC",
    description: config?.siteDescription || "Site officiel du Fonds de Promotion de la Santé de la République Démocratique du Congo",
    icons: {
      icon: config?.faviconUrl || "/favicon.ico",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`scroll-smooth bg-white ${poppins.variable} ${roboto.variable}`}>
      <body className={`${roboto.className} antialiased text-gray-800 bg-white`}>
        {children}
      </body>
    </html>
  );
}
