import { Fraunces, Sora } from "next/font/google";
import ThemeToggle from "./theme-toggle";
import InlineCowriter from "./inline-cowriter";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
});

const steps = [
  {
    title: "Highlight a line",
    copy: "Select the sentence you want to tighten or reframe.",
  },
  {
    title: "Choose a refinement",
    copy: "Professional, Friendly, Shorter, or More Direct.",
  },
  {
    title: "Preview + apply",
    copy: "Review the diff and accept only what you like.",
  },
];

const controls = [
  "No auto edits while typing",
  "Undo and restore any version",
  "Diff preview before apply",
  "Clear history of changes",
];

const useCases = [
  "Product updates",
  "Customer replies",
  "Founder notes",
  "Sales follow-ups",
  "Status posts",
  "Release notes",
];

export default function Home() {
  return (
    <div
      className={`${sora.className} min-h-screen bg-[color:var(--paper)] text-[color:var(--ink)]`}
    >
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,var(--grid-line)_1px,transparent_1px),linear-gradient(180deg,var(--grid-line)_1px,transparent_1px)] bg-[size:28px_28px] opacity-40" />
        <div className="pointer-events-none absolute -left-32 -top-40 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_30%_30%,var(--glow-amber),transparent)]" />
        <div className="pointer-events-none absolute right-[-180px] top-10 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_30%_30%,var(--glow-sky),transparent)]" />
        <div className="pointer-events-none absolute bottom-[-240px] left-1/3 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_30%_30%,var(--glow-coral),transparent)]" />

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
                  Home
                </p>
              </div>
            </div>
            <nav className="hidden items-center gap-8 text-sm font-medium text-[color:var(--ink)]/70 md:flex md:justify-self-center">
              <a className="text-[color:var(--ink)]" href="/">
                Home
              </a>
              <a
                className="transition hover:text-[color:var(--ink)]"
                href="/product"
              >
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
              <button className="hidden text-sm font-semibold text-[color:var(--ink)]/70 transition hover:text-[color:var(--ink)] sm:inline-flex">
                Sign in
              </button>
              <button className="rounded-full bg-[color:var(--ink)] px-5 py-2 text-sm font-semibold text-[color:var(--paper)] shadow-[0_16px_40px_-22px_rgba(29,28,22,0.7)] transition hover:-translate-y-0.5">
                Open app
              </button>
            </div>
          </header>

          <section className="mt-16 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--ink)]/10 bg-[color:var(--surface-70)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--ink)]/70">
                Integrated AI refinement
              </div>
              <h1
                className={`${fraunces.className} mt-6 text-4xl leading-tight sm:text-5xl lg:text-6xl`}
              >
                Turn rough drafts into{" "}
                <span className="italic text-[color:var(--accent-2)]">
                  "sendable"
                </span>{" "}
                in 2 seconds.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[color:var(--ink)]/70">
                Sendable is a lightweight plugin that lives inside your editor.
                Highlight a line, choose a rewrite style, and apply the version
                you like. No context switching.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button className="rounded-full bg-[color:var(--ink)] px-6 py-3 text-sm font-semibold text-[color:var(--paper)] shadow-[0_20px_50px_-30px_rgba(29,28,22,0.8)] transition hover:-translate-y-0.5">
                  Start a draft
                </button>
                <button className="rounded-full border border-[color:var(--ink)]/15 bg-[color:var(--surface-70)] px-6 py-3 text-sm font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--ink)]/30">
                  See how it works
                </button>
              </div>
            </div>

            <div className="relative">
              <InlineCowriter />

              <div className="absolute -bottom-12 right-6 w-64 rounded-2xl border border-[color:var(--ink)]/10 bg-[color:var(--surface-90)] p-4 text-sm shadow-[0_20px_60px_-40px_rgba(29,28,22,0.4)]">
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--mint)]">
                  Context aware
                </p>
                <p className="mt-2 font-semibold">Matches your past tone</p>
                <p className="mt-2 text-[color:var(--ink)]/70">
                  Uses your existing drafts to keep phrasing consistent.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-20 grid gap-6 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-[color:var(--ink)]/10 bg-[color:var(--surface-75)] p-6 shadow-[0_20px_50px_-40px_rgba(29,28,22,0.35)]"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--mint)]">
                  Step 0{index + 1}
                </p>
                <p className="text-lg font-semibold">{step.title}</p>
                <p className="text-sm leading-7 text-[color:var(--ink)]/70">
                  {step.copy}
                </p>
              </div>
            ))}
          </section>

          <section className="mt-20 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-3xl border border-[color:var(--ink)]/10 bg-[color:var(--surface-80)] p-8 shadow-[0_30px_80px_-50px_rgba(29,28,22,0.35)]">
              <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--ink)]/60">
                Built for control
              </p>
              <h2
                className={`${fraunces.className} mt-4 text-3xl leading-tight`}
              >
                Refinements stay optional.
              </h2>
              <p className="mt-4 text-base leading-7 text-[color:var(--ink)]/70">
                The plugin never edits your draft automatically. Every change is
                previewed, reversible, and stored in history.
              </p>
              <div className="mt-6 grid gap-3 text-sm text-[color:var(--ink)]/70">
                {controls.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[color:var(--ink)]/10 bg-[color:var(--surface)] px-4 py-3"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-[color:var(--ink)]/10 bg-[linear-gradient(140deg,var(--glow-coral-soft),var(--paper-soft)_60%,var(--glow-sky-soft))] p-8 shadow-[0_30px_80px_-50px_rgba(29,28,22,0.35)]">
              <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--ink)]/60">
                Works anywhere
              </p>
              <h2
                className={`${fraunces.className} mt-4 text-3xl leading-tight`}
              >
                For high-stakes messages.
              </h2>
              <p className="mt-4 text-base leading-7 text-[color:var(--ink)]/70">
                Use Sendable when the words have to be clean, calm, and ready to
                send.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-[color:var(--ink)]/70">
                {useCases.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[color:var(--ink)]/10 bg-[color:var(--surface-70)] px-3 py-2"
                  >
                    {item}
                  </span>
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
                  Start your first inline refinement.
                </h3>
                <p className="mt-3 max-w-xl text-sm text-[color:var(--ink)]/70">
                  Paste a message, refine a line, and approve the version that
                  feels right.
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
            <p>Sendable helps teams refine messages inline.</p>
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
