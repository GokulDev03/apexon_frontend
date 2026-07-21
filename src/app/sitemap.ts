import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://apexonwebstore.dev";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    ...SERVICES.map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
