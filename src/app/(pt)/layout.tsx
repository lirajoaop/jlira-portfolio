import { Shell, buildMetadata } from "@/lib/shell";
export { viewport } from "@/lib/shell";
export const metadata = buildMetadata("pt");
export default function Layout({ children }: { children: React.ReactNode }) {
  return <Shell locale="pt">{children}</Shell>;
}
