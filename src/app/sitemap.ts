import type { MetadataRoute } from "next";
import { site } from "@/content/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.url}/`, changeFrequency: "monthly", priority: 1, alternates: { languages: { en: `${site.url}/en` } } },
    { url: `${site.url}/en`, changeFrequency: "monthly", priority: 0.8, alternates: { languages: { "pt-BR": `${site.url}/` } } },
  ];
}
