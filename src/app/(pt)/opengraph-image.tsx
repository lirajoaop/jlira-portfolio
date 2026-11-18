import { renderOg, ogSize } from "@/lib/og";
export const size = ogSize;
export const contentType = "image/png";
export const alt = "João Pedro Lira";
export default function Image() {
  return renderOg("pt");
}
