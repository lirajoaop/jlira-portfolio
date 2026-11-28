"use client";

import { useEffect } from "react";

/** Arms the `.reveal` titles below the fold (see globals.css); without JS or with reduced motion they stay as plain text. */
export function RevealTitles() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      },
      { threshold: 0.6 },
    );
    for (const el of document.querySelectorAll<HTMLElement>(".reveal")) {
      if (el.getBoundingClientRect().top < innerHeight) continue;
      el.classList.add("is-armed");
      io.observe(el);
    }
    return () => io.disconnect();
  }, []);
  return null;
}
