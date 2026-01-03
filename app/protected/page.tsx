import { redirect } from "next/navigation";
import { Fraunces, Sora } from "next/font/google";
import { createClient } from "../supabase/server";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
});

export default async function ProtectedPage() {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();

  if (!data.user) {
    redirect("/login");
  }

  return (
    <div
      className={`${sora.className} min-h-screen bg-[color:var(--paper)] text-[color:var(--ink)]`}
    >
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,var(--grid-line)_1px,transparent_1px),linear-gradient(180deg,var(--grid-line)_1px,transparent_1px)] bg-[size:28px_28px] opacity-40" />
        <div className="pointer-events-none absolute -left-32 -top-40 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_30%_30%,var(--glow-amber),transparent)]" />
        <div className="pointer-events-none absolute right-[-180px] top-10 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_30%_30%,var(--glow-sky),transparent)]" />

        <div className="relative mx-auto flex min-h-screen max-w-4xl flex-col px-6 pb-24 pt-10 sm:px-10">
          <div className="rounded-3xl border border-[color:var(--ink)]/10 bg-[color:var(--surface-80)] p-10 shadow-[0_30px_80px_-50px_rgba(29,28,22,0.35)]">
            <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--ink)]/60">
              Protected
            </p>
            <h1
              className={`${fraunces.className} mt-4 text-3xl leading-tight`}
            >
              You are signed in.
            </h1>
            <p className="mt-3 text-sm text-[color:var(--ink)]/70">
              Signed in as {data.user.email ?? "your account"}.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
