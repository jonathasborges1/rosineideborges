import "./globals.css";

import type { Metadata } from "next";
import { Playfair_Display, Raleway } from "next/font/google";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { siteUrl } from "@/lib/constants";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600"],
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Psicóloga em Manaus | Rosineide B. Cavalcante | Online e Presencial",
    template: "%s | Rosineide B. Cavalcante — Psicóloga",
  },
  description:
    "Psicóloga em Manaus (CRP20/02777) com especialização em Gerontologia e Psico-oncologia. Atendimento presencial na Praça 14 de Janeiro e online para todo o Brasil.",
  keywords:
    "psicóloga em manaus, terapia em manaus, psicoterapia online, psicóloga praça 14, saúde mental manaus, gerontologia manaus, psico-oncologia manaus, psicóloga online brasil, ansiedade depressão manaus",
  authors: [{ name: "Rosineide B. Cavalcante" }],
  creator: "Rosineide B. Cavalcante",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Psicóloga em Manaus | Rosineide B. Cavalcante",
    description:
      "Atendimento humanizado e acolhedor. Presencial na Praça 14 de Janeiro, Manaus, e online para todo o Brasil.",
    url: siteUrl,
    type: "website",
    locale: "pt_BR",
    siteName: "Rosineide B. Cavalcante — Psicóloga",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rosineide B. Cavalcante — Psicóloga em Manaus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicóloga em Manaus | Rosineide B. Cavalcante",
    description:
      "Atendimento humanizado e acolhedor. Presencial em Manaus e online para todo o Brasil.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${raleway.variable}`}>
      <head>
        <meta name="theme-color" content="#F5EFE6" />
      </head>
      <body>
        <ScrollProgress />
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
