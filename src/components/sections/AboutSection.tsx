import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { Translations } from "@/types/i18n";

export default function AboutSection({ t }: { t: Translations }) {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeader title={t.about.title} subtitle={t.about.subtitle} gradient />
          <Reveal delay={100}>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--foreground)]">{t.about.body}</p>
          </Reveal>
        </div>
        <Reveal delay={150}>
          <div className="relative rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 overflow-hidden">
            <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-3xl" aria-hidden />
            <p className="relative text-base leading-7 text-[var(--muted)]">{t.hero.subtitle}</p>
            <div className="relative mt-6 flex flex-wrap gap-2">
              {t.services.items.slice(0, 4).map((s) => (
                <span
                  key={s.title}
                  className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-medium text-[var(--muted)]"
                >
                  {s.title}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
