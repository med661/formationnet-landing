import Counter from "@/components/Counter";
import { Translations } from "@/types/i18n";

export default function StatsSection({ t }: { t: Translations }) {
  return (
    <section id="stats" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid gap-6 sm:grid-cols-3">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 flex items-center justify-between">
          <div className="text-4xl sm:text-5xl font-semibold text-[var(--foreground)]"><Counter value={16} /></div>
          <p className="text-sm text-[var(--muted)]">{t.partners.title}</p>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 flex items-center justify-between">
          <div className="text-4xl sm:text-5xl font-semibold text-[var(--foreground)]"><Counter value={8} /></div>
          <p className="text-sm text-[var(--muted)]">{t.teams.title}</p>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 flex items-center justify-between">
          <div className="text-4xl sm:text-5xl font-semibold text-[var(--foreground)]"><Counter prefix="+" value={24} /></div>
          <p className="text-sm text-[var(--muted)]">{t.projects.title}</p>
        </div>
      </div>
    </section>
  );
}

