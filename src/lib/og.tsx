import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { content, site, type Locale } from "@/content/content";

export const ogSize = { width: 1200, height: 630 };

const font = (weight: 500 | 900) => readFile(join(process.cwd(), "src/lib/fonts", `SchibstedGrotesk-${weight}.ttf`));

// Same look as the hero band: Go blue, white J, deep-blue P.
export async function renderOg(locale: Locale) {
  const h = content[locale].hero;
  const [regular, black] = await Promise.all([font(500), font(900)]);
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", gap: 64, padding: 80, background: "#007d9c", color: "#ffffff", fontFamily: "Schibsted Grotesk" }}>
        <svg width="260" height="260" viewBox="9 8 46 46" fill="none" strokeWidth="7.5">
          <path d="M33 13V39a9.5 9.5 0 0 1-19 0" stroke="#ffffff" strokeLinecap="round" />
          <path d="M33 13h7.5a9.5 9.5 0 0 1 0 19H33" stroke="#031c24" strokeLinejoin="round" />
        </svg>
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontSize: 92, fontWeight: 900, letterSpacing: -3, lineHeight: 0.95 }}>{site.name}</div>
          <div style={{ display: "flex", fontSize: 36, fontWeight: 500, marginTop: 28, lineHeight: 1.3 }}>{`${h.title} ${h.titleAccent}`}</div>
          <div style={{ fontSize: 28, fontWeight: 900, marginTop: 36 }}>jplira.dev</div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Schibsted Grotesk", data: regular, weight: 500, style: "normal" },
        { name: "Schibsted Grotesk", data: black, weight: 900, style: "normal" },
      ],
    },
  );
}
