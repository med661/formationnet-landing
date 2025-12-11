import Reveal from "@/components/Reveal";
import { Translations } from "@/types/i18n";

export default function AboutSection({ t }: { t: Translations }) {
  return (
  <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <Reveal>
        <h2 className="text-2xl sm:text-3xl font-semibold">{t.about.title}</h2>
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--foreground)]">{t.about.body}</p>
      </Reveal>
      <Reveal delay={150}>
        <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted)]">{t.hero.title} {t.hero.subtitle}</p>
      </Reveal>
    </section>
  );
}
