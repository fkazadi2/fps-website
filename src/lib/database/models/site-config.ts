import mongoose, { Schema, models, model } from 'mongoose';

export interface ISiteConfig {
  _id: string;
  siteName: string;
  siteDescription: string;
  faviconUrl: string;
  logoUrl: string;
  contactEmail: string;
  contactPhone: string;
  contactAddress: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const siteConfigSchema = new Schema<ISiteConfig>(
  {
    siteName: { 
      type: String, 
      required: true,
      default: "Fonds de Promotion de la Santé (FPS) - RDC"
    },
    siteDescription: { 
      type: String, 
      required: true,
      default: "Site officiel du Fonds de Promotion de la Santé de la République Démocratique du Congo" 
    },
    faviconUrl: { 
      type: String, 
      required: true,
      default: "/favicon.ico"
    },
    logoUrl: { 
      type: String, 
      required: true,
      default: "/images/logo-fps.jpg"
    },
    contactEmail: { 
      type: String,
      default: "contact@fps.gouv.cd"
    },
    contactPhone: { 
      type: String,
      default: "+243 000 000 000" 
    },
    contactAddress: { 
      type: String,
      default: "Kinshasa, RDC" 
    },
    socialLinks: {
      facebook: { type: String },
      twitter: { type: String },
      instagram: { type: String },
      linkedin: { type: String },
      youtube: { type: String },
    }
  },
  { 
    timestamps: true 
  }
);

// Assurer qu'il n'y a qu'une seule configuration
siteConfigSchema.statics.findOneOrCreate = async function() {
  const config = await this.findOne();
  if (config) {
    return config;
  }
  
  return this.create({});
};

export const SiteConfig = models.SiteConfig || model<ISiteConfig>('SiteConfig', siteConfigSchema); 