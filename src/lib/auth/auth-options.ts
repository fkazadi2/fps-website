import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "@/lib/database/mongoose";
import { User } from "@/lib/database/models/user";
import bcrypt from "bcryptjs";

// Décider si on est en mode local
const IS_LOCAL_MODE = process.env.USE_LOCAL_STORAGE === 'true';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Mot de passe", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        await connectToDatabase();

        // Vérifier si l'utilisateur existe
        let user = await User.findOne({ email: credentials.email });

        // En mode local, si l'email est admin@fps.gouv.cd et qu'aucun admin n'existe,
        // créer automatiquement un compte administrateur lors de la première tentative de connexion
        if (IS_LOCAL_MODE && 
            credentials.email === 'admin@fps.gouv.cd' && 
            credentials.password === 'admin123' && 
            !user) {
          // Créer un compte administrateur par défaut
          const hashedPassword = await bcrypt.hash("admin123", 10);
          user = await User.create({
            name: "Administrateur FPS",
            email: "admin@fps.gouv.cd",
            password: hashedPassword,
            isAdmin: true
          });
          
          console.log('✅ Compte administrateur créé automatiquement');
        }

        // Si l'utilisateur n'existe pas ou n'est pas admin
        if (!user || !user.isAdmin) {
          return null;
        }

        // Vérifier le mot de passe
        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isPasswordCorrect) {
          return null;
        }

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 jours
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
  },
  pages: {
    signIn: "/admin/login",
    error: "/admin/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
}; 