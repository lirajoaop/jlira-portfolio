"use client";

import Image from "next/image";
import { useState } from "react";

type Shot = { src: string; alt: string; label: string };

/** Screenshot switcher: the buttons pick which screen of the product is shown. */
export function ProjectGallery({ shots, label }: { shots: Shot[]; label: string }) {
  const [active, setActive] = useState(0);
  return (
    <figure className="mt-8">
      <div role="group" aria-label={label} className="flex flex-wrap gap-2">
        {shots.map((s, i) => (
          <button
            key={s.src}
            type="button"
            aria-pressed={i === active}
            onClick={() => setActive(i)}
            className="rounded-md border border-line px-3 py-1.5 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent aria-pressed:border-accent aria-pressed:bg-accent aria-pressed:text-white [[data-theme=dark]_&]:aria-pressed:text-[#04212b]"
          >
            {s.label}
          </button>
        ))}
      </div>
      <div className="relative mt-3 overflow-hidden rounded-md border border-line">
        {shots.map((s, i) => (
          <Image
            key={s.src}
            src={s.src}
            alt={s.alt}
            width={1920}
            height={985}
            sizes="(min-width: 1152px) 850px, 100vw"
            aria-hidden={i !== active}
            className={`transition-opacity duration-200 motion-reduce:transition-none ${i === 0 ? "relative" : "absolute inset-0"} ${i === active ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>
    </figure>
  );
}
