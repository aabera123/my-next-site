"use client";

import { useEffect, useState } from "react";

const storageKey = "sendable-theme";

type Theme = "dark" | "light";

const applyTheme = (theme: Theme) => {
  if (typeof document === "undefined") {
    return;
  }
  document.documentElement.dataset.theme = theme;
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey);
    const initial = stored === "light" || stored === "dark" ? stored : "dark";
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const handleToggle = () => {
    setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      window.localStorage.setItem(storageKey, next);
      applyTheme(next);
      return next;
    });
  };

  const label = theme === "dark" ? "Light mode" : "Dark mode";

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-pressed={theme === "light"}
      className="rounded-full border border-[color:var(--ink)]/20 bg-[color:var(--surface-70)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--ink)]/70 transition hover:border-[color:var(--ink)]/40 hover:text-[color:var(--ink)]"
    >
      {label}
    </button>
  );
}
