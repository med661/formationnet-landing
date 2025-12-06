import Image from "next/image";

export default function TeamCard({ m }: { m: { name: string; role: string; bio: string; avatar: string; socials: Array<{ label: string; href: string; icon: React.ReactNode }> } }) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm transition hover:shadow-lg hover:-translate-y-0.5 hover:border-[var(--accent)] motion-reduce:transition-none text-center">
      <div className="flex flex-col items-center gap-3">
        <div className="relative h-14 w-14 overflow-hidden rounded-full border border-[var(--border)]">
          <Image src={m.avatar} alt={`${m.name} avatar`} fill className="object-cover" />
        </div>
        <p className="font-semibold text-[var(--foreground)]">{m.name}</p>
        <p className="text-sm text-[var(--muted)]">{m.role}</p>
      </div>
      <p className="mt-4 text-sm text-[var(--muted)]">{m.bio}</p>
      <div className="mt-4 flex gap-3 justify-center">
        {m.socials.map((s) => (
          <a key={s.label} href={s.href} aria-label={s.label} className="group inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] text-[var(--navbar-icon)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]">
            {s.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
