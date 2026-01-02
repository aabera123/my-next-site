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

export default function Home() {
  return (
    <div
      className={`${sora.className} min-h-screen bg-[color:var(--paper)] text-[color:var(--ink)]`}
      style={theme}
    >
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(29,28,22,0.05)_1px,transparent_1px),linear-gradient(180deg,rgba(29,28,22,0.05)_1px,transparent_1px)] bg-[size:28px_28px] opacity-40" />
        <div className="pointer-events-none absolute -left-32 -top-40 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(244,162,89,0.6),rgba(244,162,89,0))]" />
        <div className="pointer-events-none absolute right-[-180px] top-10 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(183,209,232,0.7),rgba(183,209,232,0))]" />
        <div className="pointer-events-none absolute bottom-[-240px] left-1/3 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(224,122,95,0.35),rgba(224,122,95,0))]" />

        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-24 pt-10 sm:px-10">
          <header className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--accent)] text-base font-semibold text-[color:var(--ink)] shadow-[0_12px_30px_-18px_rgba(244,162,89,0.8)]">
                S
              </div>
              <div>
                <p className={`${fraunces.className} text-xl font-semibold`}>
                  Sendable
                </p>
                <p className="text-[11px] uppercase tracking-[0.36em] text-[color:var(--mint)]">
                  Writing OS
                </p>
              </div>
            </div>
            <nav className="hidden items-center gap-8 text-sm font-medium text-[color:var(--ink)]/70 md:flex">
              <a className="transition hover:text-[color:var(--ink)]" href="#">
                Product
              </a>
              <a className="transition hover:text-[color:var(--ink)]" href="#">
                Teams
              </a>
              <a className="transition hover:text-[color:var(--ink)]" href="#">
                Pricing
              </a>
              <a className="transition hover:text-[color:var(--ink)]" href="#">
                Docs
              </a>
            </nav>
            <div className="flex items-center gap-3">
              <button className="hidden text-sm font-semibold text-[color:var(--ink)]/70 transition hover:text-[color:var(--ink)] sm:inline-flex">
                Sign in
              </button>
              <button className="rounded-full bg-[color:var(--ink)] px-5 py-2 text-sm font-semibold text-[color:var(--paper)] shadow-[0_16px_40px_-22px_rgba(29,28,22,0.7)] transition hover:-translate-y-0.5">
                Start free
              </button>
            </div>
          </header>

          <section className="mt-16 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--ink)]/10 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--ink)]/70">
                Editor intelligence
              </div>
              <h1
                className={`${fraunces.className} mt-6 text-4xl leading-tight sm:text-5xl lg:text-6xl`}
              >
                Make every update sound{" "}
                <span className="italic text-[color:var(--accent-2)]">
                  sendable
                </span>
                .
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[color:var(--ink)]/70">
                Sendable scans your drafts, highlights risky phrasing, and
                suggests edits that match your voice. Ship confident updates
                without the second guess or the last-minute rewrite.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button className="rounded-full bg-[color:var(--ink)] px-6 py-3 text-sm font-semibold text-[color:var(--paper)] shadow-[0_20px_50px_-30px_rgba(29,28,22,0.8)] transition hover:-translate-y-0.5">
                  Start free trial
                </button>
                <button className="rounded-full border border-[color:var(--ink)]/15 bg-white/70 px-6 py-3 text-sm font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--ink)]/30">
                  Watch 90-sec demo
                </button>
              </div>
              <div className="mt-10 grid max-w-md grid-cols-3 gap-6 text-sm">
                <div>
                  <p className={`${fraunces.className} text-2xl`}>92%</p>
                  <p className="text-[color:var(--ink)]/60">clarity lift</p>
                </div>
                <div>
                  <p className={`${fraunces.className} text-2xl`}>3 min</p>
                  <p className="text-[color:var(--ink)]/60">avg time saved</p>
                </div>
                <div>
                  <p className={`${fraunces.className} text-2xl`}>4.9</p>
                  <p className="text-[color:var(--ink)]/60">editor score</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-[color:var(--ink)]/10 bg-white/80 p-6 shadow-[0_30px_80px_-40px_rgba(29,28,22,0.35)] backdrop-blur">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">Product launch update</p>
                  <span className="rounded-full bg-[color:var(--mint)]/10 px-3 py-1 text-xs font-semibold text-[color:var(--mint)]">
                    Live scan
                  </span>
                </div>
                <div className="mt-6 space-y-4 text-sm text-[color:var(--ink)]/80">
                  <div className="rounded-2xl border border-[color:var(--ink)]/10 bg-white px-4 py-3 leading-7">
                    The new flow is{" "}
                    <span className="rounded bg-[color:var(--accent)]/25 px-1 font-semibold">
                      basically
                    </span>{" "}
                    ready, but we should maybe adjust the CTA so it feels more
                    confident and direct.
                  </div>
                  <div className="rounded-2xl border border-[color:var(--accent)]/30 bg-[color:var(--accent)]/10 px-4 py-3">
                    Suggestion: Replace{" "}
                    <span className="font-semibold">basically</span> with{" "}
                    <span className="font-semibold">ready to ship</span> for
                    stronger clarity.
                  </div>
                  <div className="rounded-2xl border border-[color:var(--ink)]/10 bg-white px-4 py-3 leading-7">
                    We are targeting product teams that want to{" "}
                    <span className="rounded bg-[color:var(--sky)]/35 px-1 font-semibold">
                      reduce uncertainty
                    </span>{" "}
                    while keeping a confident voice.
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between text-xs text-[color:var(--ink)]/60">
                  <span>12 suggestions</span>
                  <span>2 mins saved</span>
                </div>
              </div>

              <div className="absolute -bottom-12 right-6 w-64 rounded-2xl border border-[color:var(--ink)]/10 bg-white/90 p-4 text-sm shadow-[0_20px_60px_-40px_rgba(29,28,22,0.4)]">
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--mint)]">
                  Team signal
                </p>
                <p className="mt-2 font-semibold">
                  Suggested tone: calm + decisive
                </p>
                <p className="mt-2 text-[color:var(--ink)]/70">
                  Matches prior release notes and keeps the CTA confident.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-20 flex flex-col gap-6">
            <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--ink)]/60">
              Trusted by product teams shipping daily
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-[color:var(--ink)]/70">
              <span className="rounded-full border border-[color:var(--ink)]/10 bg-white/70 px-4 py-2">
                Looma
              </span>
              <span className="rounded-full border border-[color:var(--ink)]/10 bg-white/70 px-4 py-2">
                Brightside
              </span>
              <span className="rounded-full border border-[color:var(--ink)]/10 bg-white/70 px-4 py-2">
                Helio
              </span>
              <span className="rounded-full border border-[color:var(--ink)]/10 bg-white/70 px-4 py-2">
                Switchboard
              </span>
              <span className="rounded-full border border-[color:var(--ink)]/10 bg-white/70 px-4 py-2">
                Fieldnote
              </span>
            </div>
          </section>

          <section className="mt-20 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Tone Match",
                copy: "Learn your vocabulary and cadence, then mirror it with edits that feel like you.",
                stat: "Voice match 96%",
              },
              {
                title: "Risk Radar",
                copy: "Catch vague phrasing, unowned commitments, and ambiguous promises before you send.",
                stat: "12 risk flags avg",
              },
              {
                title: "Instant Polish",
                copy: "Turn raw notes into crisp copy with structure, emphasis, and confident CTAs.",
                stat: "3x faster drafts",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="flex h-full flex-col justify-between rounded-3xl border border-[color:var(--ink)]/10 bg-white/75 p-6 shadow-[0_20px_50px_-40px_rgba(29,28,22,0.35)]"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--mint)]">
                    {feature.title}
                  </p>
                  <p className="mt-3 text-base leading-7 text-[color:var(--ink)]/70">
                    {feature.copy}
                  </p>
                </div>
                <p className="mt-6 text-sm font-semibold text-[color:var(--ink)]">
                  {feature.stat}
                </p>
              </div>
            ))}
          </section>

          <section className="mt-24 grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--ink)]/60">
                The Sendable loop
              </p>
              <h2
                className={`${fraunces.className} mt-4 text-3xl leading-tight sm:text-4xl`}
              >
                Scan. Suggest. Send.
              </h2>
              <p className="mt-4 text-base leading-7 text-[color:var(--ink)]/70">
                Keep your editor open while you write. Sendable highlights every
                rough edge in real time and gives your team a shared language to
                review decisions together.
              </p>
              <div className="mt-8 space-y-6 text-sm">
                {[
                  {
                    step: "01",
                    title: "Paste or write",
                    copy: "Drop in a draft, email, or release note. Sendable reads it instantly.",
                  },
                  {
                    step: "02",
                    title: "Accept the best take",
                    copy: "Review focused suggestions, compare options, and keep the tone aligned.",
                  },
                  {
                    step: "03",
                    title: "Share with your team",
                    copy: "Send a clean version, or invite teammates to collaborate directly.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex items-start gap-4 rounded-2xl border border-[color:var(--ink)]/10 bg-white/70 p-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--ink)] text-sm font-semibold text-[color:var(--paper)]">
                      {item.step}
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

            <div className="rounded-3xl border border-[color:var(--ink)]/10 bg-white/80 p-8 shadow-[0_30px_80px_-50px_rgba(29,28,22,0.35)]">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">Team voice board</p>
                <span className="rounded-full bg-[color:var(--accent-2)]/10 px-3 py-1 text-xs font-semibold text-[color:var(--accent-2)]">
                  Shared
                </span>
              </div>
              <div className="mt-6 grid gap-4 text-sm text-[color:var(--ink)]/70">
                <div className="rounded-2xl border border-[color:var(--ink)]/10 bg-white px-4 py-3">
                  "Use decisive verbs. Avoid "just" and "maybe" in launch
                  notes."
                </div>
                <div className="rounded-2xl border border-[color:var(--ink)]/10 bg-white px-4 py-3">
                  "Swap passive phrases for direct actions, especially in CTAs."
                </div>
                <div className="rounded-2xl border border-[color:var(--ink)]/10 bg-white px-4 py-3">
                  "Prefer short, punchy sentences over long run-ons."
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold text-[color:var(--ink)]/70">
                <span className="rounded-full bg-[color:var(--accent)]/15 px-3 py-1">
                  Tone: confident
                </span>
                <span className="rounded-full bg-[color:var(--mint)]/15 px-3 py-1">
                  Audience: product
                </span>
                <span className="rounded-full bg-[color:var(--sky)]/35 px-3 py-1">
                  Reading level: 9th
                </span>
              </div>
            </div>
          </section>

          <section className="mt-24 rounded-3xl border border-[color:var(--ink)]/10 bg-[linear-gradient(120deg,rgba(244,162,89,0.18),rgba(246,242,234,0.9)_60%,rgba(47,122,99,0.18))] p-10 shadow-[0_30px_80px_-50px_rgba(29,28,22,0.35)]">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--ink)]/60">
                  Ready to send?
                </p>
                <h3
                  className={`${fraunces.className} mt-3 text-3xl leading-tight`}
                >
                  Bring your next update into Sendable.
                </h3>
                <p className="mt-3 max-w-xl text-sm text-[color:var(--ink)]/70">
                  Start with a free trial and invite your team in minutes.
                  Cancel any time.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <button className="rounded-full bg-[color:var(--ink)] px-6 py-3 text-sm font-semibold text-[color:var(--paper)] shadow-[0_18px_40px_-24px_rgba(29,28,22,0.8)] transition hover:-translate-y-0.5">
                  Start for free
                </button>
                <button className="rounded-full border border-[color:var(--ink)]/20 bg-white/70 px-6 py-3 text-sm font-semibold text-[color:var(--ink)]">
                  Book a walkthrough
                </button>
              </div>
            </div>
          </section>

          <footer className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-[color:var(--ink)]/10 pt-8 text-sm text-[color:var(--ink)]/70 md:flex-row md:items-center">
            <p>Sendable, built for product teams that write every day.</p>
            <div className="flex flex-wrap gap-4 text-sm font-medium">
              <a className="transition hover:text-[color:var(--ink)]" href="#">
                Security
              </a>
              <a className="transition hover:text-[color:var(--ink)]" href="#">
                Status
              </a>
              <a className="transition hover:text-[color:var(--ink)]" href="#">
                Careers
              </a>
              <a className="transition hover:text-[color:var(--ink)]" href="#">
                Contact
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
