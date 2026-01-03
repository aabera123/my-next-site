import { Fraunces, Sora } from "next/font/google";
import ThemeToggle from "../theme-toggle";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
});

const pillars = [
  {
    title: "Grammar",
    copy: "Catches small errors that make updates feel rushed.",
  },
  {
    title: "Clarity",
    copy: "Removes vague phrases so readers understand the action.",
  },
  {
    title: "Tone",
    copy: "Matches the voice you already use in past updates.",
  },
  {
    title: "Structure",
    copy: "Tightens long paragraphs into clean, readable beats.",
  },
];

const steps = [
  {
    title: "Highlight a line",
    copy: "Select the sentence you want to adjust.",
  },
  {
    title: "Pick a rewrite",
    copy: "Professional, Friendly, Shorter, or More Direct.",
  },
  {
    title: "Preview + apply",
    copy: "Review the diff and accept only what you like.",
  },
];

const safeguards = [
  "No auto edits while typing",
  "Diff preview before apply",
  "Undo and restore any version",
  "No invented facts or promises",
];

export default function ProductPage() {
  return (
    <div
      className={`${sora.className} min-h-screen bg-[color:var(--paper)] text-[color:var(--ink)]`}
    >
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,var(--grid-line)_1px,transparent_1px),linear-gradient(180deg,var(--grid-line)_1px,transparent_1px)] bg-[size:30px_30px] opacity-35" />
        <div className="pointer-events-none absolute -left-32 -top-40 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_30%_30%,var(--glow-amber),transparent)]" />
        <div className="pointer-events-none absolute right-[-180px] top-16 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_30%_30%,var(--glow-sky),transparent)]" />
        <div className="pointer-events-none absolute bottom-[-240px] left-1/3 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_30%_30%,var(--glow-mint),transparent)]" />

        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-24 pt-10 sm:px-10">
          <header className="flex items-center justify-between gap-4 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center">
            <div className="flex items-center gap-3 md:justify-self-start">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[color:var(--ink)]/10 bg-[color:var(--paper)] shadow-[0_12px_30px_-18px_rgba(244,162,89,0.8)]">
                <img
                  src="/sendable.png"
                  alt="Sendable"
                  className="h-8 w-8 object-contain"
                />
              </div>
              <div>
                <p className={`${fraunces.className} text-xl font-semibold`}>
                  Sendable
                </p>
                <p className="text-[11px] uppercase tracking-[0.36em] text-[color:var(--mint)]">
                  Product
                </p>
              </div>
            </div>
            <nav className="hidden items-center gap-8 text-sm font-medium text-[color:var(--ink)]/70 md:flex md:justify-self-center">
              <a className="transition hover:text-[color:var(--ink)]" href="/">
                Home
              </a>
              <a className="text-[color:var(--ink)]" href="/product">
                Product
              </a>
              <a
                className="transition hover:text-[color:var(--ink)]"
                href="/pricing"
              >
                Pricing
              </a>
            </nav>
            <div className="flex items-center gap-3 md:justify-self-end">
              <ThemeToggle />
              <button className="rounded-full bg-[color:var(--ink)] px-5 py-2 text-sm font-semibold text-[color:var(--paper)] shadow-[0_16px_40px_-22px_rgba(29,28,22,0.7)] transition hover:-translate-y-0.5">
                Open app
              </button>
            </div>
          </header>

          <section className="mt-16 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--ink)]/10 bg-[color:var(--surface-70)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--ink)]/70">
                Inline AI plugin
              </div>
              <h1
                className={`${fraunces.className} mt-6 text-4xl leading-tight sm:text-5xl lg:text-6xl`}
              >
                Improve drafts{" "}
                <span className="italic text-[color:var(--accent-2)]">
                  without leaving the editor
                </span>
                .
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[color:var(--ink)]/70">
                Sendable adds a refinement loop inside your writing surface.
                Highlight a line, choose a style, and apply only the version you
                approve.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button className="rounded-full bg-[color:var(--ink)] px-6 py-3 text-sm font-semibold text-[color:var(--paper)] shadow-[0_20px_50px_-30px_rgba(29,28,22,0.8)] transition hover:-translate-y-0.5">
                  Start a draft
                </button>
                <button className="rounded-full border border-[color:var(--ink)]/15 bg-[color:var(--surface-70)] px-6 py-3 text-sm font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--ink)]/30">
                  See the workflow
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-[color:var(--ink)]/10 bg-[color:var(--surface-85)] p-6 shadow-[0_30px_80px_-40px_rgba(29,28,22,0.35)] backdrop-blur">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">Refinement panel</p>
                  <span className="rounded-full bg-[color:var(--mint)]/10 px-3 py-1 text-xs font-semibold text-[color:var(--mint)]">
                    Preview only
                  </span>
                </div>
                <div className="mt-6 space-y-4 text-sm text-[color:var(--ink)]/80">
                  <div className="rounded-2xl border border-[color:var(--ink)]/10 bg-[color:var(--surface)] px-4 py-3 leading-7">
                    We are{" "}
                    <span className="rounded bg-[color:var(--accent)]/25 px-1 font-semibold">
                      kind of
                    </span>{" "}
                    excited to share the new onboarding flow.
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs font-semibold">
                    {["Professional", "Friendly", "Shorter", "More direct"].map(
                      (mode) => (
                        <span
                          key={mode}
                          className="rounded-full border border-[color:var(--ink)]/10 bg-[color:var(--surface)] px-3 py-1"
                        >
                          {mode}
                        </span>
                      )
                    )}
                  </div>
                  <div className="rounded-2xl border border-[color:var(--mint)]/25 bg-[color:var(--mint)]/10 px-4 py-3">
                    Suggested: We are excited to share the new onboarding flow.
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between text-xs text-[color:var(--ink)]/60">
                  <span>Diff preview</span>
                  <span>Undo ready</span>
                </div>
              </div>

              <div className="absolute -bottom-10 right-6 w-64 rounded-2xl border border-[color:var(--ink)]/10 bg-[color:var(--surface-95)] p-4 text-sm shadow-[0_20px_60px_-40px_rgba(29,28,22,0.4)]">
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent-2)]">
                  Sendability score
                </p>
                <p className="mt-2 font-semibold">86 / 100</p>
                <p className="mt-2 text-[color:var(--ink)]/70">
                  Tone and clarity are strong. Structure can be tighter.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-20 grid gap-6 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="flex h-full flex-col justify-between rounded-3xl border border-[color:var(--ink)]/10 bg-[color:var(--surface-75)] p-6 shadow-[0_20px_50px_-40px_rgba(29,28,22,0.35)]"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--mint)]">
                    {pillar.title}
                  </p>
                  <p className="mt-3 text-base leading-7 text-[color:var(--ink)]/70">
                    {pillar.copy}
                  </p>
                </div>
                <p className="mt-6 text-sm font-semibold text-[color:var(--ink)]">
                  Sendability checks
                </p>
              </div>
            ))}
          </section>

          <section className="mt-24 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--ink)]/60">
                How it works
              </p>
              <h2
                className={`${fraunces.className} mt-4 text-3xl leading-tight sm:text-4xl`}
              >
                A simple refinement loop.
              </h2>
              <p className="mt-4 text-base leading-7 text-[color:var(--ink)]/70">
                Scan your draft, request an improvement, and apply the version
                you prefer. Nothing changes until you approve it.
              </p>
              <div className="mt-8 space-y-6 text-sm">
                {steps.map((item, index) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 rounded-2xl border border-[color:var(--ink)]/10 bg-[color:var(--surface-70)] p-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--ink)] text-sm font-semibold text-[color:var(--paper)]">
                      0{index + 1}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="mt-1 text-[color:var(--ink)]/70">
                        {item.copy}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-[color:var(--ink)]/10 bg-[color:var(--surface-85)] p-8 shadow-[0_30px_80px_-50px_rgba(29,28,22,0.35)]">
              <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--ink)]/60">
                Safeguards
              </p>
              <h3
                className={`${fraunces.className} mt-4 text-3xl leading-tight`}
              >
                Control stays with you.
              </h3>
              <p className="mt-4 text-base leading-7 text-[color:var(--ink)]/70">
                Sendable keeps drafts stable, stores every change, and makes
                undo instant.
              </p>
              <div className="mt-6 grid gap-3 text-sm text-[color:var(--ink)]/70">
                {safeguards.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[color:var(--ink)]/10 bg-[color:var(--surface)] px-4 py-3"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-24 rounded-3xl border border-[color:var(--ink)]/10 bg-[linear-gradient(120deg,var(--glow-amber-soft),var(--paper-soft)_60%,var(--glow-mint-soft))] p-10 shadow-[0_30px_80px_-50px_rgba(29,28,22,0.35)]">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--ink)]/60">
                  Ready to try it?
                </p>
                <h3
                  className={`${fraunces.className} mt-3 text-3xl leading-tight`}
                >
                  Run your first sendability scan.
                </h3>
                <p className="mt-3 max-w-xl text-sm text-[color:var(--ink)]/70">
                  Paste a message, preview the rewrite, and apply when it feels
                  right.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <button className="rounded-full bg-[color:var(--ink)] px-6 py-3 text-sm font-semibold text-[color:var(--paper)] shadow-[0_18px_40px_-24px_rgba(29,28,22,0.8)] transition hover:-translate-y-0.5">
                  Open app
                </button>
                <a
                  className="rounded-full border border-[color:var(--ink)]/20 bg-[color:var(--surface-70)] px-6 py-3 text-sm font-semibold text-[color:var(--ink)]"
                  href="/pricing"
                >
                  View pricing
                </a>
              </div>
            </div>
          </section>

          <footer className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-[color:var(--ink)]/10 pt-8 text-sm text-[color:var(--ink)]/70 md:flex-row md:items-center">
            <p>Sendable product overview.</p>
            <div className="flex flex-wrap gap-4 text-sm font-medium">
              <a className="transition hover:text-[color:var(--ink)]" href="/">
                Home
              </a>
              <a
                className="transition hover:text-[color:var(--ink)]"
                href="/product"
              >
                Product
              </a>
              <a className="transition hover:text-[color:var(--ink)]" href="#">
                Privacy
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
