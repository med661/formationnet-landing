import Reveal from "@/components/Reveal";
import { Translations } from "@/types/i18n";

export default function FindUsSection({ t }: { t: Translations }) {
  return (
    <section id="find-us" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <Reveal>
        <h2 className="text-2xl sm:text-3xl font-semibold">{t.findUs.title}</h2>
      </Reveal>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
            <div>
              <p className="text-sm font-semibold">{t.findUs.addressLabel}</p>
              <p className="mt-1 text-[var(--muted)]">10 RUE DE PENTHIEVRE 75008 PARIS</p>
            </div>
            <div className="mt-6">
              <p className="text-sm font-semibold">{t.findUs.phoneLabel}</p>
              <a href="tel:+21655962808" className="mt-1 inline-block text-[var(--navbar-link)] hover:text-[var(--accent)]">+21 (6) 55962808</a>
            </div>
            <div className="mt-6">
              <p className="text-sm font-semibold">{t.findUs.contactLabel}</p>
              <div className="mt-1 space-y-1">
                <a href="mailto:formationnettn@gmail.com" className="block text-[var(--navbar-link)] hover:text-[var(--accent)]">formationnettn@gmail.com</a>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden">
            <div className="relative aspect-[4/3]">
              <iframe
                title="Map"
                src="https://www.google.com/maps?q=10+Rue+de+Penthievre+75008+Paris&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
                allowFullScreen
                suppressHydrationWarning
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
