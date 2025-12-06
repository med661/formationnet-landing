import Reveal from "@/components/Reveal";
import { Translations } from "@/types/i18n";
import { LuShieldCheck } from "react-icons/lu";

export default function TrustSection({ t }: { t: Translations }) {
  return (
    <section id="trust" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <Reveal>
        <h2 className="text-2xl sm:text-3xl font-semibold">{t.trust.title}</h2>
      </Reveal>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {t.trust.items.map((label: string, i: number) => (
          <Reveal key={label} delay={i * 80}>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-[var(--accent)]/15 text-[var(--accent)]">
                <LuShieldCheck className="h-5 w-5" />
              </span>
              <p className="text-sm font-medium text-[var(--foreground)]">{label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

