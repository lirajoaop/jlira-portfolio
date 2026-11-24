"use client";

import { useState } from "react";

type Step = { step: string; detail: string };

/** A request's path through the system: a real sequence, so it keeps its order marks. Each step reveals what that layer does. */
export function FlowExplorer({ steps, label, hint }: { steps: Step[]; label: string; hint: string }) {
  const [active, setActive] = useState(0);
  return (
    <figure className="mt-8 rounded-md bg-surface-2 p-5">
      <figcaption className="font-bold">{label}</figcaption>
      <p className="mt-1 text-sm text-muted">{hint}</p>
      <ol className="mt-4 flex flex-wrap items-center gap-y-2 text-sm">
        {steps.map((s, i) => (
          <li key={s.step} className="flex items-center">
            <button
              type="button"
              aria-pressed={i === active}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              className="rounded px-2 py-1 font-medium text-fg transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent aria-pressed:bg-accent aria-pressed:text-white [[data-theme=dark]_&]:aria-pressed:text-[#04212b]"
            >
              {s.step}
            </button>
            {i < steps.length - 1 && <span className="px-1.5 text-accent" aria-hidden>›</span>}
          </li>
        ))}
      </ol>
      <p aria-live="polite" className="mt-4 min-h-[3lh] border-t border-line pt-3 leading-relaxed sm:min-h-[2lh]">
        <span className="font-bold">{steps[active].step}:</span> {steps[active].detail}
      </p>
    </figure>
  );
}
