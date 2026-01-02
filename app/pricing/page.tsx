import type { CSSProperties } from "react";
import { Fraunces, Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
});

const theme: CSSProperties = {
  "--paper": "#f6f2ea",
  "--ink": "#1d1c16",
  "--accent": "#f4a259",
  "--accent-2": "#e07a5f",
  "--mint": "#2f7a63",
  "--sky": "#b7d1e8",
};

const plans = [
  {
    name: "Starter",
    price: "$12",
    cadence: "per user / month",
    blurb: "For solo writers and early-stage teams.",
    cta: "Start Starter",
    highlight: false,
    features: [
      "Inline refinements",
      "Sendability score",
      "4 rewrite modes",
      "Diff preview + apply",
      "30 scans / month",
    ],
  },
  {
    name: "Team",
    price: "$29",
    cadence: "per user / month",
    blurb: "For teams that ship updates weekly.",
    cta: "Start Team",
    highlight: true,
    features: [
      "Everything in Starter",
      "Shared tone presets",
      "Revision history",
      "Priority rewrite queue",
      "250 scans / month",
    ],
  },
  {
    name: "Scale",
    price: "$59",
    cadence: "per user / month",
    blurb: "For high-volume messaging teams.",
    cta: "Talk to Sales",
    highlight: false,
    features: [
      "Everything in Team",
      "Custom review rules",
      "Dedicated workspace",
      "Audit log exports",
      "Unlimited scans",
    ],
  },
];

const faqs = [
  {
    q: "What counts as a scan?",
    a: "A scan is one sendability score plus the issue list for a draft.",
  },
  {
    q: "Do you edit text automatically?",
    a: "No. Sendable only updates text after you review and apply a diff.",
  },
  {
    q: "Can I change plans later?",
    a: "Yes, upgrade or downgrade anytime with prorated billing.",
  },
];

export default function PricingPage() {
  return (
    <div
      className={`${sora.className} min-h-screen bg-[color:var(--paper)] text-[color:var(--ink)]`}
      style={theme}
    >
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(29,28,22,0.06)_1px,transparent_1px),linear-gradient(180deg,rgba(29,28,22,0.06)_1px,transparent_1px)] bg-[size:30px_30px] opacity-35" />
        <div className="pointer-events-none absolute -left-32 -top-40 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(244,162,89,0.55),rgba(244,162,89,0))]" />
        <div className="pointer-events-none absolute right-[-180px] top-16 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(183,209,232,0.65),rgba(183,209,232,0))]" />
        <div className="pointer-events-none absolute bottom-[-240px] left-1/3 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(47,122,99,0.35),rgba(47,122,99,0))]" />

        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-24 pt-10 sm:px-10">
          <header className="flex items-center justify-between gap-4 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center">
            <div className="flex items-center gap-3 md:justify-self-start">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--accent)] text-base font-semibold text-[color:var(--ink)] shadow-[0_12px_30px_-18px_rgba(244,162,89,0.8)]">
                S
              </div>
              <div>
                <p className={`${fraunces.className} text-xl font-semibold`}>
                  Sendable
                </p>
                <p className="text-[11px] uppercase tracking-[0.36em] text-[color:var(--mint)]">
                  Pricing
                </p>
              </div>
            </div>
            <nav className="hidden items-center gap-8 text-sm font-medium text-[color:var(--ink)]/70 md:flex md:justify-self-center">
              <a className="transition hover:text-[color:var(--ink)]" href="/">
                Home
              </a>
              <a
                className="transition hover:text-[color:var(--ink)]"
                href="/product"
              >
                Product
              </a>
              <a className="text-[color:var(--ink)]" href="/pricing">
                Pricing
              </a>
            </nav>
            <div className="flex items-center gap-3 md:justify-self-end">
              <button className="rounded-full bg-[color:var(--ink)] px-5 py-2 text-sm font-semibold text-[color:var(--paper)] shadow-[0_16px_40px_-22px_rgba(29,28,22,0.7)] transition hover:-translate-y-0.5">
                Open app
              </button>
            </div>
          </header>

          <section className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--ink)]/10 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--ink)]/70">
              Pricing plans
            </div>
            <h1
              className={`${fraunces.className} mt-6 text-4xl leading-tight sm:text-5xl lg:text-6xl`}
            >
              Pick the plan for{" "}
              <span className="italic text-[color:var(--accent-2)]">
                sendable updates
              </span>
              .
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[color:var(--ink)]/70">
              Simple per-user pricing with the core refinement loop in every
              plan. Upgrade anytime as your messaging volume grows.
            </p>
            <div className="mx-auto mt-8 flex w-fit items-center gap-3 rounded-full border border-[color:var(--ink)]/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--ink)]/70">
              Billed monthly
              <span className="rounded-full bg-[color:var(--mint)]/15 px-3 py-1 text-[10px] text-[color:var(--mint)]">
                2 months free yearly
              </span>
            </div>
          </section>

          <section className="mt-16 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex h-full flex-col justify-between rounded-3xl border p-6 shadow-[0_20px_50px_-40px_rgba(29,28,22,0.35)] ${
                  plan.highlight
                    ? "border-[color:var(--accent)] bg-white"
                    : "border-[color:var(--ink)]/10 bg-white/80"
                }`}
              >
                {plan.highlight ? (
                  <span className="absolute right-6 top-6 rounded-full bg-[color:var(--accent)]/20 px-3 py-1 text-xs font-semibold text-[color:var(--accent-2)]">
                    Most popular
                  </span>
                ) : null}
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--mint)]">
                    {plan.name}
                  </p>
                  <p className={`${fraunces.className} mt-4 text-4xl`}>
                    {plan.price}
                  </p>
                  <p className="text-sm text-[color:var(--ink)]/60">
                    {plan.cadence}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-[color:var(--ink)]/70">
                    {plan.blurb}
                  </p>
                  <div className="mt-6 space-y-3 text-sm text-[color:var(--ink)]/70">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--mint)]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  className={`mt-8 rounded-full px-5 py-2 text-sm font-semibold transition ${
                    plan.highlight
                      ? "bg-[color:var(--ink)] text-[color:var(--paper)] shadow-[0_16px_40px_-22px_rgba(29,28,22,0.7)] hover:-translate-y-0.5"
                      : "border border-[color:var(--ink)]/15 bg-white/70 text-[color:var(--ink)] hover:border-[color:var(--ink)]/30"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </section>

          <section className="mt-20 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-[color:var(--ink)]/10 bg-white/80 p-8 shadow-[0_30px_80px_-50px_rgba(29,28,22,0.35)]">
              <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--ink)]/60">
                Included in every plan
              </p>
              <h2
                className={`${fraunces.className} mt-4 text-3xl leading-tight`}
              >
                The refinement loop stays consistent.
              </h2>
              <p className="mt-4 text-base leading-7 text-[color:var(--ink)]/70">
                Every plan includes the inline co-writer, sendability score, and
                the diff preview workflow so you stay in control.
              </p>
              <div className="mt-6 grid gap-3 text-sm text-[color:var(--ink)]/70">
                {[
                  "Inline rewrites with four modes",
                  "Sendability score and issue list",
                  "Preview before apply",
                  "Undo + revision history",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[color:var(--ink)]/10 bg-white px-4 py-3"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-[color:var(--ink)]/10 bg-[linear-gradient(140deg,rgba(224,122,95,0.18),rgba(246,242,234,0.9)_60%,rgba(183,209,232,0.25))] p-8 shadow-[0_30px_80px_-50px_rgba(29,28,22,0.35)]">
              <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--ink)]/60">
                Need help?
              </p>
              <h2
                className={`${fraunces.className} mt-4 text-3xl leading-tight`}
              >
                Let us tailor your plan.
              </h2>
              <p className="mt-4 text-base leading-7 text-[color:var(--ink)]/70">
                We help teams with volume needs, onboarding, and migration.
              </p>
              <button className="mt-6 rounded-full bg-[color:var(--ink)] px-6 py-3 text-sm font-semibold text-[color:var(--paper)] shadow-[0_18px_40px_-24px_rgba(29,28,22,0.8)] transition hover:-translate-y-0.5">
                Contact sales
              </button>
            </div>
          </section>

          <section className="mt-20 rounded-3xl border border-[color:var(--ink)]/10 bg-white/80 p-8 shadow-[0_30px_80px_-50px_rgba(29,28,22,0.35)]">
            <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--ink)]/60">
              FAQ
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {faqs.map((item) => (
                <div key={item.q} className="rounded-2xl bg-white p-4">
                  <p className="text-sm font-semibold">{item.q}</p>
                  <p className="mt-2 text-sm text-[color:var(--ink)]/70">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <footer className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-[color:var(--ink)]/10 pt-8 text-sm text-[color:var(--ink)]/70 md:flex-row md:items-center">
            <p>Clear pricing for the Sendable refinement loop.</p>
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
