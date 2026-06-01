import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
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
      <SectionHeader title={t.services.title} subtitle={t.services.subtitle} gradient />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
        {t.services.items.map((s, i) => (
          <Reveal key={s.title} delay={i * 80}>
            <div className="group relative rounded-2xl border border-[var(--border)] p-6 bg-[var(--card)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-xl hover:shadow-indigo-500/10 motion-reduce:transition-none h-full flex flex-col overflow-hidden">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="mb-4 h-12 w-12 rounded-xl bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent)]/5 text-[var(--accent)] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[var(--accent)]/20">
                  {serviceIcons[i]}
                </div>
                <h3 className="text-xl font-semibold group-hover:text-[var(--accent)] transition-colors duration-300">{s.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{s.description}</p>
              </div>
              <div className="mt-auto pt-4">
                <Link href="#contact" className="inline-flex items-center justify-center rounded-full border border-[var(--border)] px-4 py-2 text-sm transition-all duration-300 hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] hover:border-[var(--accent)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]">{t.services.cta}</Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

