import Link from "next/link";
import { Translations } from "@/types/i18n";

export default function HeroSection({ t }: { t: Translations }) {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-700 opacity-20 dark:opacity-25" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <h1 className="max-w-3xl text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--foreground)]">{t.hero.title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">{t.hero.subtitle}</p>
        <div className="mt-8 flex items-center gap-4">
          <Link href="#formationnet" className="rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] px-6 py-3 text-sm font-medium shadow-sm transition hover:opacity-90 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)] motion-reduce:transition-none">{t.hero.cta}</Link>
          <Link href="#services" className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium transition hover:bg-black/5 dark:hover:bg-white/10 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)] motion-reduce:transition-none">{t.hero.ctaSecondary}</Link>
        </div>
      </div>
    </section>
  );
}
