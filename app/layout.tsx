import type { Metadata } from "next";
import "./globals.css";
import "./wallbox.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import Chatbot from "@/components/Chatbot";

export const metadata: Metadata = {
  title: "Transport Routier International Maroc-Europe | Safe Solution Wheels Morocco",
  description:
    "Safe Solution Wheels Morocco — votre partenaire de confiance en transport routier et logistique entre le Maroc et l'Europe. Fiabilité, proximité, excellence. Départs quotidiens vers 11 pays européens.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <LanguageProvider>
          {children}
          <Chatbot />
        </LanguageProvider>
      </body>
    </html>
  );
}
