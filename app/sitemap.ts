import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-05-14"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/terapia-online-manaus`,
      lastModified: new Date("2026-05-13"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/psicoterapia-para-idosos-manaus`,
      lastModified: new Date("2026-05-13"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
