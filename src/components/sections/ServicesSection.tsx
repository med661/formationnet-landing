import Link from "next/link";
import Reveal from "@/components/Reveal";
import { Translations } from "@/types/i18n";
import { LuGlobe, LuSmartphone, LuCpu, LuCloud, LuBrain, LuPalette } from "react-icons/lu";

const serviceIcons = [
  <LuGlobe key="web" className="h-5 w-5" />,
  <LuSmartphone key="mobile" className="h-5 w-5" />,
  <LuCpu key="consulting" className="h-5 w-5" />,
  <LuCloud key="devops" className="h-5 w-5" />,
  <LuBrain key="ai" className="h-5 w-5" />,
  <LuPalette key="design" className="h-5 w-5" />,
];

export default function ServicesSection({ t }: { t: Translations }) {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <Reveal>
        <h2 className="text-2xl sm:text-3xl font-semibold">{t.services.title}</h2>
      </Reveal>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
        {t.services.items.map((s, i) => (
          <Reveal key={s.title} delay={i * 80}>
            <div className="rounded-2xl border border-[var(--border)] p-6 bg-[var(--card)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:shadow-lg motion-reduce:transition-none h-full flex flex-col">
              <div className="mb-4 h-10 w-10 rounded-lg bg-[var(--accent)]/15 text-[var(--accent)] flex items-center justify-center">{serviceIcons[i]}</div>
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{s.description}</p>
              <div className="mt-auto pt-4">
                <Link href="#contact" className="inline-flex items-center justify-center rounded-full border border-[var(--border)] px-4 py-2 text-sm transition hover:bg-black/5 dark:hover:bg-white/10 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]">{t.services.cta}</Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

