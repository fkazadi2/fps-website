import { connectToDatabase } from "@/lib/database/mongoose";
import { SiteConfig, ISiteConfig } from "@/lib/database/models/site-config";
import { cache } from "react";

// Durée du cache en millisecondes (5 minutes)
const CACHE_TTL = 5 * 60 * 1000;

type CachedConfig = {
  data: ISiteConfig | null;
  timestamp: number;
};

// Cache en mémoire
let cachedConfig: CachedConfig = {
  data: null,
  timestamp: 0,
};

// Fonction mise en cache pour récupérer la configuration du site
export const getSiteConfig = cache(async (): Promise<ISiteConfig | null> => {
  const now = Date.now();
  
  // Vérifier si les données sont en cache et toujours valides
  if (cachedConfig.data && (now - cachedConfig.timestamp) < CACHE_TTL) {
    return cachedConfig.data;
  }
  
  try {
    await connectToDatabase();
    
    // Trouver la configuration existante ou en créer une nouvelle
    const config = await SiteConfig.findOne();
    
    if (!config) {
      const newConfig = await SiteConfig.create({});
      cachedConfig = { data: newConfig, timestamp: now };
      return newConfig;
    }
    
    // Mettre à jour le cache
    cachedConfig = { data: config, timestamp: now };
    return config;
  } catch (error) {
    console.error("Erreur lors de la récupération de la config:", error);
    return null;
  }
}); 