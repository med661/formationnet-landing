"use client";
import { useSyncExternalStore } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export default function ThemeToggle({ variant = "icon" }: { variant?: "inline" | "icon" }) {
  function getSnapshot() {
    if (typeof document === "undefined") return false;
    return document.documentElement.classList.contains("dark");
  }
  function getServerSnapshot() {
    return false;
  }
  function subscribe(callback: () => void) {
    if (typeof window === "undefined") return () => {};
    const handler = () => callback();
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    mql.addEventListener("change", handler);
    window.addEventListener("storage", (e) => { if (e.key === "theme") callback(); });
    window.addEventListener("themechange", handler);
    return () => {
      mql.removeEventListener("change", handler);
      window.removeEventListener("themechange", handler as EventListener);
      window.removeEventListener("storage", handler as EventListener);
    };
  }
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function setTheme(next: "light" | "dark") {
    try { localStorage.setItem("theme", next); } catch {}
    document.documentElement.classList.toggle("dark", next === "dark");
    if (typeof window !== "undefined") window.dispatchEvent(new Event("themechange"));
  }

  if (variant === "inline") {
    return (
      <div className="inline-flex gap-2">
        <button
          type="button"
          aria-pressed={!isDark}
          onClick={() => setTheme("light")}
          className={`rounded-full border border-black/10 dark:border-white/15 px-3 py-2 text-sm transition active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)] motion-reduce:transition-none ${!isDark ? "bg-[var(--accent)] text-[var(--accent-foreground)]" : "hover:bg-black/5 dark:hover:bg-white/10"}`}
        >
          Light
        </button>
        <button
          type="button"
          aria-pressed={isDark}
          onClick={() => setTheme("dark")}
          className={`rounded-full border border-black/10 dark:border-white/15 px-3 py-2 text-sm transition active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)] motion-reduce:transition-none ${isDark ? "bg-[var(--accent)] text-[var(--accent-foreground)]" : "hover:bg-black/5 dark:hover:bg-white/10"}`}
        >
          Dark
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="h-9 w-9 grid place-items-center text-[var(--navbar-icon)] transition hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)] motion-reduce:transition-none"
    >
      {isDark ? <MdOutlineDarkMode size={18} /> : <MdOutlineLightMode size={18} />}
    </button>
  );
}
