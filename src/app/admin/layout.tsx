"use client";

import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import AdminNavigation from "@/components/admin/AdminNavigation";
import AdminAuth from "@/components/admin/AdminAuth";

// Paths qui n'ont pas besoin d'authentification
const publicPaths = ["/admin/login"];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isPublicPage = publicPaths.includes(pathname);

  return (
    <SessionProvider>
      {isPublicPage ? (
        // Pages publiques comme la connexion
        <>{children}</>
      ) : (
        // Pages privées avec protection d'authentification
        <AdminAuth>
          <div className="flex h-screen bg-gray-50">
            <AdminNavigation />
            <div className="flex-1 overflow-auto">
              <main className="p-6">{children}</main>
            </div>
          </div>
        </AdminAuth>
      )}
    </SessionProvider>
  );
} 