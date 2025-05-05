/**
 * Script pour créer un administrateur dans la base de données
 * Exécuter avec: npx ts-node create-admin.ts
 */

import { connectToDatabase } from "./database/mongoose";
import { User } from "./database/models/user";
import bcrypt from "bcryptjs";

async function createAdminUser() {
  try {
    await connectToDatabase();
    
    // Vérifier si un administrateur existe déjà
    const existingAdmin = await User.findOne({ isAdmin: true });
    
    if (existingAdmin) {
      console.log("Un administrateur existe déjà dans la base de données");
      return;
    }
    
    // Créer un nouvel administrateur
    const hashedPassword = await bcrypt.hash("admin123", 10);
    
    const newAdmin = await User.create({
      name: "Administrateur FPS",
      email: "admin@fps.gouv.cd",
      password: hashedPassword,
      isAdmin: true
    });
    
    console.log("Administrateur créé avec succès");
    console.log("Email: admin@fps.gouv.cd");
    console.log("Mot de passe: admin123");
    console.log("IMPORTANT: Changez ce mot de passe après la première connexion");
  } catch (error) {
    console.error("Erreur lors de la création de l'administrateur:", error);
  } finally {
    process.exit(0);
  }
}

// Exécuter si appelé directement
if (require.main === module) {
  createAdminUser();
}

export { createAdminUser }; 