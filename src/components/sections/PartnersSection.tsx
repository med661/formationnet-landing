import Image from "next/image";
import Reveal from "@/components/Reveal";
import { Translations } from "@/types/i18n";

export default function PartnersSection({ t }: { t: Translations }) {
  return (
    <section id="partners" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <Reveal>
        <h2 className="text-2xl sm:text-3xl font-semibold">{t.partners.title}</h2>
      </Reveal>
      <div className="mt-10 overflow-hidden">
        <div className="marquee flex gap-4 lg:gap-6 min-w-max py-2" role="list" aria-label="Partners">
          {[...t.partners.items, ...t.partners.items].map((p, idx) => (
            <div key={`${p.name}-${idx}`} role="listitem">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 flex h-24 w-40 items-center justify-center transition hover:border-[var(--accent)] hover:bg-[var(--card)]">
                <div className="relative h-12 w-24 opacity-80 hover:opacity-100">
                  <Image src={p.logo} alt={p.name} fill className="object-contain" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

