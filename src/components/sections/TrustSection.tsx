import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { Translations } from "@/types/i18n";
import { LuShieldCheck } from "react-icons/lu";

export default function TrustSection({ t }: { t: Translations }) {
  return (
    <section id="trust" className="bg-[var(--card)]/40 border-y border-[var(--border)] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader title={t.trust.title} subtitle={t.trust.subtitle} />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {t.trust.items.map((label: string, i: number) => (
          <Reveal key={label} delay={i * 80}>
            <div className="group h-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-xl hover:shadow-indigo-500/10 motion-reduce:transition-none">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-[var(--accent)]/15 text-[var(--accent)] transition-transform duration-300 group-hover:scale-110">
                <LuShieldCheck className="h-5 w-5" />
              </span>
              <p className="text-sm font-medium text-[var(--foreground)]">{label}</p>
            </div>
          </Reveal>
        ))}
      </div>
      </div>
    </section>
  );
}

