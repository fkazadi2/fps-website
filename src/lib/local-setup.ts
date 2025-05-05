/**
 * Script pour configurer le CMS en mode local sans dépendances externes
 * Exécuter avec: npx ts-node src/lib/local-setup.ts
 */

import fs from 'fs';
import path from 'path';
import { createAdminUser } from './create-admin';
import { connectToDatabase } from './database/mongoose';
import { SiteConfig } from './database/models/site-config';

async function setupLocalCMS() {
  console.log('🚀 Configuration du CMS FPS en mode local...');

  // 1. Créer un fichier .env.local s'il n'existe pas
  const envPath = path.join(process.cwd(), '.env.local');
  const envContent = `# Base de données MongoDB locale
MONGODB_URI=mongodb://localhost:27017/fps_database

# NextAuth Secret (pour développement local)
NEXTAUTH_SECRET=local_development_secret_key_for_fps_website
NEXTAUTH_URL=http://localhost:3000

# Mode stockage local (pas besoin de Cloudinary)
USE_LOCAL_STORAGE=true
LOCAL_STORAGE_PATH=./public/uploads
`;

  if (!fs.existsSync(envPath)) {
    console.log('📝 Création du fichier .env.local...');
    fs.writeFileSync(envPath, envContent);
    console.log('✅ Fichier .env.local créé avec succès');
  } else {
    console.log('ℹ️ Le fichier .env.local existe déjà');
  }

  // 2. Créer le dossier pour le stockage local des images
  const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
  const faviconsDir = path.join(uploadsDir, 'favicons');
  const logosDir = path.join(uploadsDir, 'logos');

  if (!fs.existsSync(uploadsDir)) {
    console.log('📁 Création des dossiers pour le stockage local...');
    fs.mkdirSync(uploadsDir, { recursive: true });
    fs.mkdirSync(faviconsDir, { recursive: true });
    fs.mkdirSync(logosDir, { recursive: true });
    console.log('✅ Dossiers de stockage créés avec succès');
  } else {
    console.log('ℹ️ Les dossiers de stockage existent déjà');
  }

  // 3. Vérifier si MongoDB est accessible
  try {
    console.log('🔌 Connexion à la base de données locale...');
    await connectToDatabase();
    console.log('✅ Connexion à MongoDB réussie');

    // 4. Créer un compte administrateur si nécessaire
    console.log('👤 Création du compte administrateur...');
    await createAdminUser();

    // 5. Initialiser la configuration du site
    console.log('⚙️ Initialisation de la configuration du site...');
    const config = await SiteConfig.findOne();
    if (!config) {
      await SiteConfig.create({
        siteName: 'Fonds de Promotion de la Santé (FPS) - RDC',
        siteDescription: 'Site officiel du Fonds de Promotion de la Santé de la République Démocratique du Congo',
        faviconUrl: '/favicon.ico',
        logoUrl: '/images/logo-fps.jpg',
      });
      console.log('✅ Configuration du site initialisée');
    } else {
      console.log('ℹ️ La configuration du site existe déjà');
    }

    console.log('\n🎉 Configuration locale terminée avec succès!');
    console.log('\nPour démarrer le site en mode développement, exécutez:');
    console.log('npm run dev');
    console.log('\nAccédez au CMS à l\'adresse:');
    console.log('http://localhost:3000/admin/login');
    console.log('\nIdentifiants:');
    console.log('Email: admin@fps.gouv.cd');
    console.log('Mot de passe: admin123');
  } catch (error) {
    console.error('❌ Erreur lors de la configuration:', error);
    console.log('\n⚠️ Vérifiez que MongoDB est installé et démarré sur votre machine.');
    console.log('Pour installer MongoDB:');
    console.log('- Sur Windows: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/');
    console.log('- Sur macOS: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/');
    console.log('- Sur Linux: https://docs.mongodb.com/manual/administration/install-on-linux/');
  } finally {
    process.exit(0);
  }
}

// Exécuter si appelé directement
if (require.main === module) {
  setupLocalCMS();
}

export { setupLocalCMS }; 