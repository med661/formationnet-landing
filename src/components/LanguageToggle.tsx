"use client";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";
import { MdTranslate } from "react-icons/md";

export default function LanguageToggle({ variant = "popover" }: { variant?: "inline" | "popover" }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  function getSnapshot(): "en" | "fr" | "ar" {
    if (typeof document === "undefined") return "en";
    const fromCookie = document.cookie.match(/(?:^|; )lang=(en|fr|ar)/)?.[1] as "en" | "fr" | "ar" | undefined;
    if (fromCookie) return fromCookie;
    const seg = typeof location !== "undefined" ? location.pathname.split("/")[1] : "";
    return (seg === "fr" || seg === "ar" ? seg : "en") as "en" | "fr" | "ar";
  }
  function getServerSnapshot(): "en" | "fr" | "ar" {
    return "en";
  }
  function subscribe(cb: () => void) {
    if (typeof window === "undefined") return () => {};
    const handler = () => cb();
    window.addEventListener("languagechange", handler);
    window.addEventListener("storage", (e) => { if (e.key === "lang") cb(); });
    return () => {
      window.removeEventListener("languagechange", handler as EventListener);
      window.removeEventListener("storage", handler as EventListener);
    };
  }
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function setLanguage(code: "en" | "fr" | "ar") {
    const oneYear = 365 * 24 * 60 * 60 * 1000;
    const expires = new Date(Date.now() + oneYear).toUTCString();
    try {
      document.cookie = `lang=${code}; path=/; expires=${expires}`;
      localStorage.setItem("lang", code);
    } catch {}
    if (typeof window !== "undefined") window.dispatchEvent(new Event("languagechange"));
    router.refresh();
    setOpen(false);
  }

  const isEn = lang === "en";

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const el = rootRef.current;
      if (!el) return;
      if (open && !el.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (open && e.key === "Escape") setOpen(false);
    }
    document.addEventListener("click", onDocClick, true);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick, true);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (variant === "inline") {
    return (
      <div className="inline-flex gap-2">
        <button
          type="button"
          aria-pressed={isEn}
          onClick={() => setLanguage("en")}
          className={`rounded-full border border-black/10 dark:border-white/15 px-3 py-2 text-sm transition active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)] motion-reduce:transition-none ${isEn ? "bg-[var(--accent)] text-[var(--accent-foreground)]" : "hover:bg-black/5 dark:hover:bg-white/10"}`}
        >
          EN
        </button>
        <button
          type="button"
          aria-pressed={lang === "fr"}
          onClick={() => setLanguage("fr")}
          className={`rounded-full border border-black/10 dark:border-white/15 px-3 py-2 text-sm transition active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)] motion-reduce:transition-none ${lang === "fr" ? "bg-[var(--accent)] text-[var(--accent-foreground)]" : "hover:bg-black/5 dark:hover:bg-white/10"}`}
        >
          FR
        </button>
        <button
          type="button"
          aria-pressed={lang === "ar"}
          onClick={() => setLanguage("ar")}
          className={`rounded-full border border-black/10 dark:border-white/15 px-3 py-2 text-sm transition active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)] motion-reduce:transition-none ${lang === "ar" ? "bg-[var(--accent)] text-[var(--accent-foreground)]" : "hover:bg-black/5 dark:hover:bg-white/10"}`}
        >
          AR
        </button>
      </div>
    );
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-label="Select language"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="h-9 w-9 grid place-items-center text-[var(--navbar-icon)] transition hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)] motion-reduce:transition-none"
      >
        <MdTranslate size={18} />
      </button>
      {open && (
        <div
          role="menu"
          aria-label="Language"
          className="absolute right-0 z-50 mt-2 w-36 rounded-md border border-[var(--border)] bg-[var(--surface)] p-2 shadow-lg"
        >
          <div className="grid gap-2">
            <button
              type="button"
              aria-pressed={isEn}
              onClick={() => setLanguage("en")}
              className={`rounded-md px-3 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)] motion-reduce:transition-none ${isEn ? "bg-[var(--accent)] text-[var(--accent-foreground)]" : "hover:bg-black/5 dark:hover:bg-white/10"}`}
            >
              English
            </button>
            <button
              type="button"
              aria-pressed={lang === "fr"}
              onClick={() => setLanguage("fr")}
              className={`rounded-md px-3 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)] motion-reduce:transition-none ${lang === "fr" ? "bg-[var(--accent)] text-[var(--accent-foreground)]" : "hover:bg-black/5 dark:hover:bg-white/10"}`}
            >
              Français
            </button>
            <button
              type="button"
              aria-pressed={lang === "ar"}
              onClick={() => setLanguage("ar")}
              className={`rounded-md px-3 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)] motion-reduce:transition-none ${lang === "ar" ? "bg-[var(--accent)] text-[var(--accent-foreground)]" : "hover:bg-black/5 dark:hover:bg-white/10"}`}
            >
              العربية
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
