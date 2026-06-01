import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";
import { Translations } from "@/types/i18n";
import { LuHandshake, LuUsers, LuRocket } from "react-icons/lu";

export default function StatsSection({ t }: { t: Translations }) {
  const stats = [
    { value: 16, prefix: "", icon: <LuHandshake className="h-6 w-6" />, label: t.partners.title },
    { value: 8, prefix: "", icon: <LuUsers className="h-6 w-6" />, label: t.teams.title },
    { value: 24, prefix: "+", icon: <LuRocket className="h-6 w-6" />, label: t.projects.title },
  ];
  return (
    <section id="stats" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-gradient-to-br from-indigo-600/10 via-blue-600/5 to-purple-700/10 p-8 sm:p-12">
          <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" aria-hidden />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" aria-hidden />
          <div className="relative grid gap-8 sm:grid-cols-3">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <div className="flex flex-col items-center text-center">
                  <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent)]/5 text-[var(--accent)]">
                    {s.icon}
                  </span>
                  <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    <Counter prefix={s.prefix} value={s.value} />
                  </div>
                  <p className="mt-2 text-sm font-medium text-[var(--muted)]">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
