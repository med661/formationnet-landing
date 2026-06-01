import Link from "next/link";
import { Translations } from "@/types/i18n";

export default function HeroSection({ t }: { t: Translations }) {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-blue-600/10 to-purple-700/10 dark:from-indigo-600/20 dark:via-blue-600/20 dark:to-purple-700/20" />
      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(79,70,229,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <h1 className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--foreground)]">
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{t.hero.title.split(' ').slice(0, 2).join(' ')}</span>{' '}
          {t.hero.title.split(' ').slice(2).join(' ')}
        </h1>
        <p className="mt-6 max-w-2xl text-lg sm:text-xl leading-8 text-[var(--muted)]">{t.hero.subtitle}</p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link href="#contact" className="group relative rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] px-8 py-3.5 text-sm font-semibold shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)] motion-reduce:transition-none">
            <span className="relative z-10">{t.hero.cta}</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>
          <Link href="#services" className="group relative rounded-full border-2 border-[var(--border)] px-8 py-3.5 text-sm font-semibold transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)] motion-reduce:transition-none">
            {t.hero.ctaSecondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
