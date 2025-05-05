import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Désactive les vérifications ESLint lors du build pour permettre le déploiement
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
