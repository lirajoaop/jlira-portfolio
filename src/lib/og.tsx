import { ImageResponse } from "next/og";
import { content, type Locale } from "@/content/content";

export const ogSize = { width: 1200, height: 630 };

export function renderOg(locale: Locale) {
  const h = content[locale].hero;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#0b0d11", color: "#e7eaf0", fontFamily: "sans-serif" }}>
        <svg width="64" height="64" viewBox="9 8 46 46" fill="none" strokeWidth="7.5">
          <path d="M33 13V39a9.5 9.5 0 0 1-19 0" stroke="#00add8" strokeLinecap="round" />
          <path d="M33 13h7.5a9.5 9.5 0 0 1 0 19H33" stroke="#e7eaf0" strokeLinejoin="round" />
        </svg>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>João Pedro Lira</div>
          <div style={{ fontSize: 36, color: "#949dab", marginTop: 12 }}>{h.eyebrow}</div>
        </div>
        <div style={{ display: "flex", gap: 14 }}>
          {["Go", "Next.js", "React", "Redis", "PostgreSQL", "TypeScript"].map((t) => (
            <div key={t} style={{ display: "flex", fontSize: 24, padding: "8px 18px", border: "2px solid #242a35", borderRadius: 10, color: "#e7eaf0" }}>{t}</div>
          ))}
        </div>
      </div>
    ),
    ogSize,
  );
}
