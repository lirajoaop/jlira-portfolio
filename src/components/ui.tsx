import type { ReactNode } from "react";

/** Page section: heading in a left column on wide screens, content on the right. */
export function Section({ id, label, title, children, lead }: { id: string; label: string; title: string; lead?: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto max-w-6xl border-t border-line px-4 first:border-t-0 py-16 sm:px-6 sm:py-24">
      <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14">
        <header>
          <h2 id={`${id}-title`} className="text-2xl font-bold tracking-tight sm:text-[1.75rem]">{label}</h2>
          <p className="mt-2 text-muted text-pretty">{title}</p>
          {lead && <p className="mt-4 text-sm leading-relaxed text-muted text-pretty">{lead}</p>}
        </header>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return <span className="inline-flex items-center rounded-md bg-surface-2 px-2 py-0.5 text-sm text-fg">{children}</span>;
}

export function ButtonLink({ href, children, variant = "primary", external, download }: { href: string; children: ReactNode; variant?: "primary" | "ghost"; external?: boolean; download?: boolean }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-[15px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
  const styles =
    variant === "primary"
      ? "bg-accent text-white hover:brightness-110 [[data-theme=dark]_&]:text-[#04212b]"
      : "border border-line text-fg hover:border-accent hover:text-accent";
  return (
    <a href={href} className={`${base} ${styles}`} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...(download ? { download: "" } : {})}>
      {children}
    </a>
  );
}

/** JP monogram: J in `j` (default accent), P in `p` (default current text color). Same mark as the site icon. */
export function Monogram({ className, j = "var(--accent)", p = "currentColor" }: { className?: string; j?: string; p?: string }) {
  return (
    <svg viewBox="9 8 46 46" fill="none" strokeWidth="7.5" aria-hidden className={className ?? "size-7"}>
      <path d="M33 13V39a9.5 9.5 0 0 1-19 0" stroke={j} strokeLinecap="round" />
      <path d="M33 13h7.5a9.5 9.5 0 0 1 0 19H33" stroke={p} strokeLinejoin="round" />
    </svg>
  );
}

export const Icon = {
  arrow: (p: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={p.className ?? "size-4"}><path d="M7 17 17 7M8 7h9v9" /></svg>
  ),
  down: (p: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={p.className ?? "size-4"}><path d="M12 4v12m0 0-5-5m5 5 5-5M5 20h14" /></svg>
  ),
  github: (p: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={p.className ?? "size-4"}><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" /></svg>
  ),
  linkedin: (p: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={p.className ?? "size-4"}><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" /></svg>
  ),
  mail: (p: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={p.className ?? "size-4"}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
  ),
};
