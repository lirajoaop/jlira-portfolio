"use client";

import { useEffect, useRef } from "react";

/**
 * Toggle for the phone section menu. The list itself is server-rendered in the hero band
 * (id = navId) and shown with CSS while this <details> is open, so it works without JS.
 * JS only closes it on link tap, Esc or a tap outside the toggle and the list.
 */
export function MobileMenu({ label, navId }: { label: string; navId: string }) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const el = ref.current;
    const nav = document.getElementById(navId);
    if (!el || !nav) return;
    const close = () => {
      el.open = false;
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && el.open) {
        close();
        el.querySelector("summary")?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      const t = e.target as Node;
      if (el.open && !el.contains(t) && !nav.contains(t)) close();
    };
    const onNavClick = (e: MouseEvent) => {
      if ((e.target as Element).closest("a")) close();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    nav.addEventListener("click", onNavClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      nav.removeEventListener("click", onNavClick);
    };
  }, [navId]);

  return (
    <details ref={ref} className="group md:hidden">
      <summary aria-controls={navId} className="flex h-9 cursor-pointer list-none items-center gap-1.5 rounded-md border border-band-ink/60 px-2.5 text-sm font-medium transition-colors hover:bg-band-ink hover:text-band group-open:bg-band-ink group-open:text-band focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-band-ink [&::-webkit-details-marker]:hidden">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden className="size-4 group-open:hidden">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden className="hidden size-4 group-open:block">
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
        {label}
      </summary>
    </details>
  );
}
