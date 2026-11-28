"use client";

import { useRef, useState } from "react";
import type { StackItem } from "@/content/content";
import { stackIcons } from "./stackIcons";

type Group = { name: string; items: StackItem[] };

function BrandIcon({ item, className }: { item: StackItem; className: string }) {
  if (!item.icon) return null;
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d={stackIcons[item.icon]} />
    </svg>
  );
}

/** Stack grouped by area: core items stand out, and selecting an item shows where it was used. */
export function StackExplorer({ groups, hint, coreLabel }: { groups: Group[]; hint: string; coreLabel: string }) {
  const all = groups.flatMap((g) => g.items);
  const [active, setActive] = useState(all.find((i) => i.used)?.name ?? "");
  const panel = useRef<HTMLDivElement>(null);
  const current = all.find((i) => i.name === active);

  const pick = (name: string, scroll: boolean) => {
    setActive(name);
    if (!scroll || !panel.current) return;
    // On phones the panel can be below the fold: bring it into view after a tap.
    const r = panel.current.getBoundingClientRect();
    if (r.bottom > window.innerHeight) {
      const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      panel.current.scrollIntoView({ block: "nearest", behavior: smooth ? "smooth" : "auto" });
    }
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-sm text-muted">
        <p>{hint}</p>
        <p className="flex items-center gap-2">
          <span aria-hidden className="size-3 rounded-sm border border-accent/50 bg-accent-soft" />
          {coreLabel}
        </p>
      </div>

      <dl className="mt-4 border-b border-line">
        {groups.map((g) => (
          <div key={g.name} className="grid gap-3 border-t border-line py-5 md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] md:gap-8">
            <dt className="font-bold md:pt-1.5">{g.name}</dt>
            <dd>
              <ul className="flex flex-wrap items-center gap-2">
                {g.items.map((it) => {
                  const size = it.core ? "px-3 py-1.5 text-base font-bold" : "px-2.5 py-1 text-[15px] font-medium";
                  const tone = it.core ? "border-accent/50 bg-accent-soft" : "border-line bg-surface";
                  const icon = it.core ? "size-[18px] text-accent" : "size-4 text-muted";
                  return (
                    <li key={it.name}>
                      {it.used ? (
                        <button
                          type="button"
                          aria-pressed={it.name === active}
                          onClick={() => pick(it.name, true)}
                          onMouseEnter={() => pick(it.name, false)}
                          className={`group/chip inline-flex items-center gap-1.5 rounded-md border transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent aria-pressed:border-accent aria-pressed:bg-accent aria-pressed:text-white [[data-theme=dark]_&]:aria-pressed:text-[#04212b] ${size} ${tone}`}
                        >
                          <BrandIcon item={it} className={`${icon} shrink-0 group-aria-pressed/chip:text-current`} />
                          {it.name}
                        </button>
                      ) : (
                        <span className={`inline-flex items-center gap-1.5 rounded-md border ${size} ${tone}`}>
                          <BrandIcon item={it} className={`${icon} shrink-0`} />
                          {it.name}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </dd>
          </div>
        ))}
      </dl>

      <div ref={panel} aria-live="polite" className="mt-6 min-h-[9.5rem] scroll-mb-6 rounded-md border border-line bg-surface p-5">
        {current?.used && (
          <>
            <p className="flex items-center gap-2 text-lg font-bold">
              <BrandIcon item={current} className="size-5 text-accent" />
              {current.name}
            </p>
            <ul className="mt-3 space-y-2 leading-relaxed">
              {current.used.map((u) => (
                <li key={u.where} className="grid gap-x-6 sm:grid-cols-[10rem_minmax(0,1fr)]">
                  <span className="font-bold">{u.where}</span>
                  <span className="text-muted">{u.what}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
