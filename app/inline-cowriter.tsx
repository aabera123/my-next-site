"use client";

import { useEffect, useState } from "react";

const cycleMs = 5000;

const modes = [
  {
    label: "Professional",
    suggestion:
      "We're excited to share the new onboarding flow with early teams - clearer first steps, faster time-to-value, and fewer drop-offs.",
    highlightClass: "bg-[color:var(--accent)]/25",
  },
  {
    label: "Friendly",
    suggestion:
      "We're really excited to roll out the new onboarding flow for early teams - it's smoother, faster, and gets them to 'aha' in minutes.",
    highlightClass: "bg-[color:var(--mint)]/20",
  },
  {
    label: "Shorter",
    suggestion:
      "Sharing the new onboarding flow with early teams - faster setup, quicker value.",
    highlightClass: "bg-[color:var(--sky)]/30",
  },
  {
    label: "More direct",
    suggestion:
      "We're shipping a new onboarding flow for early teams to cut setup time and improve activation.",
    highlightClass: "bg-[color:var(--accent-2)]/25",
  },
] as const;

export default function InlineCowriter() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMode = modes[activeIndex];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % modes.length);
    }, cycleMs);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="rounded-3xl border border-[color:var(--ink)]/10 bg-[color:var(--surface-80)] p-6 shadow-[0_30px_80px_-40px_rgba(29,28,22,0.35)] backdrop-blur">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">Inline co-writer</p>
        <span className="rounded-full bg-[color:var(--mint)]/10 px-3 py-1 text-xs font-semibold text-[color:var(--mint)]">
          Mode: {activeMode.label}
        </span>
      </div>
      <div className="mt-6 space-y-4 text-sm text-[color:var(--ink)]/80">
        <div className="rounded-2xl border border-[color:var(--ink)]/10 bg-[color:var(--surface)] px-4 py-3 leading-7">
          We are{" "}
          <span
            className={`rounded px-1 font-semibold ${activeMode.highlightClass}`}
          >
            kind of
          </span>{" "}
          excited to share the new onboarding flow with early teams, but the
          note still feels rough.
        </div>
        <div className="flex flex-wrap gap-2">
          {modes.map((mode, index) => {
            const isActive = activeMode.label === mode.label;
            return (
              <button
                key={mode.label}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-pressed={isActive}
                className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
                  isActive
                    ? "border-[color:var(--ink)]/20 bg-[color:var(--ink)] text-[color:var(--paper)]"
                    : "border-[color:var(--ink)]/10 bg-[color:var(--surface)] text-[color:var(--ink)]/80 hover:border-[color:var(--ink)]/30"
                }`}
              >
                {mode.label}
              </button>
            );
          })}
        </div>
        <div className="rounded-2xl border border-[color:var(--mint)]/25 bg-[color:var(--mint)]/10 px-4 py-3">
          Suggested rewrite: {activeMode.suggestion}
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between text-xs text-[color:var(--ink)]/60">
        <span>Preview before apply</span>
        <span>Undo ready</span>
      </div>
    </div>
  );
}
