import { siteUrl } from "@/lib/constants";

export const jsonLd = {
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
      "@type": ["LocalBusiness", "MedicalBusiness", "ProfessionalService"],
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
