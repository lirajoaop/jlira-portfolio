"use client";

import { useEffect, useRef } from "react";

/** Collapsible section menu for phones. Works without JS (native <details>); JS only closes it on link tap, Esc or outside tap. */
export function MobileMenu({ label, navLabel, items }: { label: string; navLabel: string; items: { label: string; href: string }[] }) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
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
      if (el.open && !el.contains(e.target as Node)) close();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, []);

  return (
    <details ref={ref} className="group md:hidden">
      <summary className="flex h-9 cursor-pointer list-none items-center gap-1.5 rounded-md border border-band-ink/60 px-2.5 text-sm font-medium transition-colors hover:bg-band-ink hover:text-band focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-band-ink [&::-webkit-details-marker]:hidden">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden className="size-4 group-open:hidden">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden className="hidden size-4 group-open:block">
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
        {label}
      </summary>
      <nav aria-label={navLabel} className="absolute top-full right-0 z-30 mt-2 w-[min(18rem,calc(100vw-2rem))] overflow-hidden rounded-md border border-line bg-surface text-fg shadow-lg">
        <ul>
          {items.map((n) => (
            <li key={n.href} className="border-b border-line last:border-b-0">
              <a href={n.href} onClick={() => ref.current && (ref.current.open = false)} className="block px-4 py-3 text-[15px] font-medium hover:bg-surface-2 focus-visible:bg-surface-2 focus-visible:outline-none">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </details>
  );
}
