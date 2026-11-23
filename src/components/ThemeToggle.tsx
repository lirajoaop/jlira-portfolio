"use client";

export function ThemeToggle({ label, className }: { label: string; className?: string }) {
  function toggle() {
    const el = document.documentElement;
    const next = el.dataset.theme === "dark" ? "light" : "dark";
    el.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }
  return (
    <button type="button" onClick={toggle} aria-label={label} title={label} className={className ?? "grid size-9 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-accent"}>
      {/* sol no dark, lua no light: controlado só por CSS para não depender de hidratação */}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden className="hidden size-4 [[data-theme=dark]_&]:block">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="block size-4 [[data-theme=dark]_&]:hidden">
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
      </svg>
    </button>
  );
}
