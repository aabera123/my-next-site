"use client";

import { useState } from "react";
import { Fraunces, Sora } from "next/font/google";
import { createClient } from "../supabase/client";
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

const supabase = createClient();

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGoogle = async () => {
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=/protected`,
      },
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
    }
  };

  const handleMagicLink = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");

    if (!email.trim()) {
      setMessage("Enter an email address to receive a magic link.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback?next=/protected`,
      },
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Check your inbox for a magic link.");
    }

    setLoading(false);
  };

  return (
    <div
      className={`${sora.className} min-h-screen bg-[color:var(--paper)] text-[color:var(--ink)]`}
    >
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,var(--grid-line)_1px,transparent_1px),linear-gradient(180deg,var(--grid-line)_1px,transparent_1px)] bg-[size:28px_28px] opacity-40" />
        <div className="pointer-events-none absolute -left-32 -top-40 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_30%_30%,var(--glow-amber),transparent)]" />
        <div className="pointer-events-none absolute right-[-180px] top-10 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_30%_30%,var(--glow-sky),transparent)]" />
        <div className="pointer-events-none absolute bottom-[-240px] left-1/3 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_30%_30%,var(--glow-coral),transparent)]" />

        <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col px-6 pb-24 pt-10 sm:px-10">
          <header className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
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
                  Login
                </p>
              </div>
            </div>
            <ThemeToggle />
          </header>

          <section className="mt-20 flex flex-1 items-center justify-center">
            <div className="w-full max-w-md rounded-3xl border border-[color:var(--ink)]/10 bg-[color:var(--surface-80)] p-8 shadow-[0_30px_80px_-50px_rgba(29,28,22,0.35)]">
              <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--ink)]/60">
                Welcome back
              </p>
              <h1
                className={`${fraunces.className} mt-4 text-3xl leading-tight`}
              >
                Turn drafts into sendable updates.
              </h1>
              <p className="mt-3 text-sm text-[color:var(--ink)]/70">
                Continue with Google or request a magic link.
              </p>

              <button
                type="button"
                onClick={handleGoogle}
                disabled={loading}
                className="mt-6 w-full rounded-full bg-[color:var(--ink)] px-5 py-3 text-sm font-semibold text-[color:var(--paper)] shadow-[0_16px_40px_-22px_rgba(29,28,22,0.7)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Continue with Google
              </button>

              <div className="mt-6 h-px w-full bg-[color:var(--ink)]/10" />

              <form className="mt-6 space-y-4" onSubmit={handleMagicLink}>
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--ink)]/60">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-2xl border border-[color:var(--ink)]/15 bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--ink)] placeholder:text-[color:var(--ink)]/40 focus:border-[color:var(--ink)]/40 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full border border-[color:var(--ink)]/20 bg-[color:var(--surface-70)] px-5 py-3 text-sm font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--ink)]/40 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Send magic link to email
                </button>
              </form>

              {message ? (
                <p
                  className="mt-4 text-sm text-[color:var(--ink)]/70"
                  role="status"
                >
                  {message}
                </p>
              ) : null}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
