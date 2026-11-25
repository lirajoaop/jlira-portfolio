"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";

type Shot = { src: string; alt: string; label: string };
type Box = { x: number; y: number; w: number; h: number };

/** Screenshot switcher: the buttons pick which screen of the product is shown; the accent pill slides to the selected one. */
export function ProjectGallery({ shots, label }: { shots: Shot[]; label: string }) {
  const [active, setActive] = useState(0);
  const [pill, setPill] = useState<Box | null>(null);
  const group = useRef<HTMLDivElement>(null);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  useLayoutEffect(() => {
    const measure = () => {
      const b = buttons.current[active];
      if (b) setPill({ x: b.offsetLeft, y: b.offsetTop, w: b.offsetWidth, h: b.offsetHeight });
    };
    measure();
    // Font loading and wrapping change the button sizes.
    const ro = new ResizeObserver(measure);
    if (group.current) ro.observe(group.current);
    return () => ro.disconnect();
  }, [active]);

  return (
    <figure className="mt-8">
      <div ref={group} role="group" aria-label={label} className="relative flex flex-wrap gap-2">
        {pill && (
          <span
            aria-hidden
            className="absolute top-0 left-0 rounded-md bg-accent transition-[transform,width,height] duration-300 ease-out motion-reduce:transition-none"
            style={{ transform: `translate(${pill.x}px, ${pill.y}px)`, width: pill.w, height: pill.h }}
          />
        )}
        {shots.map((s, i) => (
          <button
            key={s.src}
            ref={(el) => {
              buttons.current[i] = el;
            }}
            type="button"
            aria-pressed={i === active}
            onClick={() => setActive(i)}
            className={`relative rounded-md border border-line px-3 py-1.5 text-sm font-medium text-fg transition-colors not-aria-pressed:hover:border-accent not-aria-pressed:hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent aria-pressed:border-accent aria-pressed:text-white [[data-theme=dark]_&]:aria-pressed:text-[#04212b] ${pill ? "" : "aria-pressed:bg-accent"}`}
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
