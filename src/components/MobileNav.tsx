"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";

export default function MobileNav({ labels, panel }: { labels: { services: string; projects: string; about: string; contact: string; findUs: string }; panel: { menu: string; appearance: string; language: string } }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function toggle() {
    setOpen((v) => !v);
  }

  function close() { setOpen(false); }

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="h-11 w-11 rounded-md border border-black/10 dark:border-white/15 grid place-items-center transition-colors motion-reduce:transition-none"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-controls="mobile-nav-panel"
        onClick={toggle}
      >
        <span className="sr-only">Menu</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-current">
          {open ? (
            <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          ) : (
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          )}
        </svg>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm motion-reduce:bg-black/60"
          onClick={close}
        >
          <nav
            id="mobile-nav-panel"
            role="navigation"
            aria-label="Primary"
            className="absolute right-4 left-4 top-20 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-lg animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold">{panel.menu}</span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={close}
                className="h-9 w-9 rounded-md border border-black/10 dark:border-white/15 grid place-items-center"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-current">
                  <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <ul className="mt-4 grid gap-4 text-sm">
              <li><Link href="#services" onClick={close}>{labels.services}</Link></li>
              <li><Link href="#projects" onClick={close}>{labels.projects}</Link></li>
              <li><Link href="#about" onClick={close}>{labels.about}</Link></li>
              <li><Link href="#contact" onClick={close}>{labels.contact}</Link></li>
              <li><Link href="#find-us" onClick={close}>{labels.findUs}</Link></li>
            </ul>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm">{panel.appearance}</span>
              <ThemeToggle variant="inline" />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm">{panel.language}</span>
              <LanguageToggle variant="inline" />
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
