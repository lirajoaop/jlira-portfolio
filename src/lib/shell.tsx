import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { content, site, type Locale } from "@/content/content";
import "@/app/globals.css";

const sans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0d11" },
  ],
};

export function buildMetadata(locale: Locale): Metadata {
  const c = content[locale];
  const path = locale === "pt" ? "/" : "/en";
  return {
    metadataBase: new URL(site.url),
    title: c.meta.title,
    description: c.meta.description,
    authors: [{ name: site.name, url: site.url }],
    keywords: ["Desenvolvedor Fullstack", "Fullstack Developer", "Go", "Golang", "Next.js", "React", "Redis", "Fortaleza", site.name],
    alternates: { canonical: path, languages: { "pt-BR": "/", en: "/en", "x-default": "/" } },
    openGraph: {
      type: "profile",
      url: path,
      title: c.meta.title,
      description: c.meta.description,
      siteName: site.name,
      locale: c.meta.ogLocale,
    },
    twitter: { card: "summary_large_image", title: c.meta.title, description: c.meta.description },
    robots: { index: true, follow: true },
  };
}

// Evita "flash" de tema errado: roda antes da hidratação.
const themeScript = `(()=>{try{var t=localStorage.getItem('theme');if(!t){t=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='dark'}})()`;

export function Shell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const c = content[locale];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    jobTitle: locale === "pt" ? "Desenvolvedor Fullstack" : "Fullstack Developer",
    worksFor: { "@type": "Organization", name: "PontoGO" },
    address: { "@type": "PostalAddress", addressLocality: "Fortaleza", addressRegion: "CE", addressCountry: "BR" },
    alumniOf: [{ "@type": "CollegeOrUniversity", name: "Universidade Federal do Ceará" }],
    knowsAbout: ["Go", "Next.js", "React", "Redis", "PostgreSQL", "Prometheus", "Grafana", "LLM"],
    sameAs: [site.github, site.linkedin],
    email: `mailto:${site.email}`,
  };
  return (
    <html lang={locale === "pt" ? "pt-BR" : "en"} data-theme="dark" suppressHydrationWarning className={`${sans.variable} ${mono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-sans">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-white">
          {c.ui.skip}
        </a>
        {children}
      </body>
    </html>
  );
}
