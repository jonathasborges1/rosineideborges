import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Sobre from "@/components/sections/Sobre";
import Servicos from "@/components/sections/Servicos";
import ComoFunciona from "@/components/sections/ComoFunciona";
import Beneficios from "@/components/sections/Beneficios";
import FAQ from "@/components/sections/FAQ";
import Localizacao from "@/components/sections/Localizacao";
import CTAFinal from "@/components/sections/CTAFinal";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import WaveDivider from "@/components/ui/WaveDivider";

const cream = "#F5EFE6";
const white = "#FFFFFF";
const espresso = "#5C3D2E";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rosineideborges.com.br";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#pessoa`,
      name: "Rosineide B. Cavalcante",
      jobTitle: "Psicóloga",
      description:
        "Psicóloga em Manaus especializada em Gerontologia e Psico-oncologia. CRP20/02777.",
      url: siteUrl,
      telephone: "+5592988443673",
      image: `${siteUrl}/rosineideborges.jpg`,
      knowsAbout: ["Psicoterapia", "Gerontologia", "Psico-oncologia", "Saúde Mental"],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "CRP20/02777",
        recognizedBy: {
          "@type": "Organization",
          name: "Conselho Federal de Psicologia",
        },
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#negocio`,
      name: "Rosineide B. Cavalcante — Psicóloga",
      description:
        "Atendimento psicológico presencial em Manaus e online para todo o Brasil.",
      url: siteUrl,
      telephone: "+5592988443673",
      image: `${siteUrl}/rosineideborges.jpg`,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Álvaro Maia, nº 1444",
        addressLocality: "Manaus",
        addressRegion: "AM",
        addressCountry: "BR",
        addressNeighborhood: "Praça 14 de Janeiro",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -3.1322,
        longitude: -60.0191,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          description: "Com agendamento prévio",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços de Psicologia",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Psicoterapia Individual" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Atendimento Online" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Atenção ao Idoso — Gerontologia" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Suporte Oncológico — Psico-oncologia" } },
        ],
      },
      areaServed: [
        { "@type": "City", name: "Manaus" },
        { "@type": "Country", name: "Brasil" },
      ],
      employee: { "@id": `${siteUrl}/#pessoa` },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#site`,
      url: siteUrl,
      name: "Rosineide B. Cavalcante — Psicóloga",
      inLanguage: "pt-BR",
      publisher: { "@id": `${siteUrl}/#pessoa` },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top,rgba(212,185,154,0.18),transparent_62%)]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-80 bg-[radial-gradient(circle_at_center,rgba(176,120,85,0.08),transparent_68%)]" />
        <Hero />
        <WaveDivider from={cream} to={white} />
        <Sobre />
        <WaveDivider from={white} to={cream} flip />
        <Servicos />
        <WaveDivider from={cream} to={espresso} />
        <ComoFunciona />
        <WaveDivider from={espresso} to={white} flip />
        <Beneficios />
        <WaveDivider from={white} to={cream} />
        <FAQ />
        <WaveDivider from={cream} to={white} flip />
        <Localizacao />
        <WaveDivider from={white} to={espresso} />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
