import { Shell, buildMetadata } from "@/lib/shell";
export { viewport } from "@/lib/shell";
export const metadata = buildMetadata("en");
export default function Layout({ children }: { children: React.ReactNode }) {
  return <Shell locale="en">{children}</Shell>;
}
