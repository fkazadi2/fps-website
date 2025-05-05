import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/auth-options";
import { connectToDatabase } from "@/lib/database/mongoose";
import { SiteConfig } from "@/lib/database/models/site-config";
import { uploadImage, deleteImage } from "@/lib/storage";

// Vérifier si on est en mode local
const IS_LOCAL_MODE = process.env.USE_LOCAL_STORAGE === 'true';

// GET - Obtenir la configuration du site
export async function GET() {
  try {
    await connectToDatabase();
    
    // Utiliser une fonction statique pour trouver ou créer
    const config = await SiteConfig.findOne() || await SiteConfig.create({});
    
    return NextResponse.json(config);
  } catch (error) {
    console.error("Erreur lors de la récupération de la config:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération de la configuration" },
      { status: 500 }
    );
  }
}

// PUT - Mettre à jour la configuration du site
export async function PUT(request: NextRequest) {
  try {
    // En mode local, pour faciliter le développement, pas besoin d'authentification
    if (!IS_LOCAL_MODE) {
      const session = await getServerSession(authOptions);
      
      // Vérifier si l'utilisateur est connecté et admin
      if (!session || !(session.user as any).isAdmin) {
        return NextResponse.json(
          { error: "Non autorisé" },
          { status: 401 }
        );
      }
    }
    
    const data = await request.json();
    await connectToDatabase();
    
    // Trouver la configuration existante ou en créer une nouvelle
    let config = await SiteConfig.findOne();
    if (!config) {
      config = new SiteConfig({});
    }
    
    // Mettre à jour les champs
    Object.keys(data).forEach((key) => {
      if (key !== '_id' && key !== 'createdAt' && key !== 'updatedAt') {
        if (key === 'socialLinks' && typeof data[key] === 'object') {
          // Gestion spéciale pour les liens sociaux
          config.socialLinks = {
            ...config.socialLinks,
            ...data[key]
          };
        } else {
          (config as any)[key] = data[key];
        }
      }
    });
    
    await config.save();
    
    return NextResponse.json(config);
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la config:", error);
    return NextResponse.json(
      { error: "Erreur lors de la mise à jour de la configuration" },
      { status: 500 }
    );
  }
}

// POST - Pour télécharger le favicon ou le logo
export async function POST(request: NextRequest) {
  try {
    // En mode local, pour faciliter le développement, pas besoin d'authentification
    if (!IS_LOCAL_MODE) {
      const session = await getServerSession(authOptions);
      
      // Vérifier si l'utilisateur est connecté et admin
      if (!session || !(session.user as any).isAdmin) {
        return NextResponse.json(
          { error: "Non autorisé" },
          { status: 401 }
        );
      }
    }
    
    const formData = await request.formData();
    const imageType = formData.get('type') as string; // 'favicon' ou 'logo'
    const file = formData.get('file') as File;
    
    if (!file || !imageType) {
      return NextResponse.json(
        { error: "Fichier ou type manquant" },
        { status: 400 }
      );
    }
    
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64Image = `data:${file.type};base64,${buffer.toString('base64')}`;
    
    // Télécharger l'image avec le service de stockage flexible
    const { url, publicId } = await uploadImage(
      base64Image, 
      {
        folder: imageType === 'favicon' ? 'favicons' : 'logos',
        fileType: file.type
      }
    );
    
    // Mettre à jour la configuration
    await connectToDatabase();
    const config = await SiteConfig.findOne() || new SiteConfig({});
    
    // Si une image précédente existe, la supprimer
    const previousPublicId = formData.get('previousPublicId') as string;
    if (previousPublicId) {
      await deleteImage(previousPublicId);
    }
    
    // Mettre à jour l'URL selon le type
    if (imageType === 'favicon') {
      config.faviconUrl = url;
    } else if (imageType === 'logo') {
      config.logoUrl = url;
    }
    
    await config.save();
    
    return NextResponse.json({
      url,
      publicId,
      message: `${imageType === 'favicon' ? 'Favicon' : 'Logo'} mis à jour avec succès`
    });
  } catch (error) {
    console.error("Erreur lors du téléchargement de l'image:", error);
    return NextResponse.json(
      { error: "Erreur lors du téléchargement de l'image" },
      { status: 500 }
    );
  }
} 