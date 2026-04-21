import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2025-04-21"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
