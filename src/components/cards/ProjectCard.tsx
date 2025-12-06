import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ p, fallbackSrc }: { p: { title: string; description: string; link?: string; image?: string }; fallbackSrc: string }) {
  return (
    <div className="rounded-2xl border border-[var(--border)] overflow-hidden bg-[var(--card)]">
      <div className="relative aspect-[4/3]">
        <Image
          src={p.image ?? fallbackSrc}
          alt={p.title}
          fill
          className={`${p.image ? "object-contain filter grayscale" : "object-cover"}`}
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <p className="mt-2 text-sm text-[var(--muted)]">{p.description}</p>
        <div className="mt-4 flex gap-3">
          <Link href="#contact" className="rounded-full border border-[var(--border)] px-5 py-2 text-sm transition hover:bg-black/5 dark:hover:bg-white/10 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)] motion-reduce:transition-none">View more</Link>
          {p.link && (
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] px-5 py-2 text-sm font-medium transition hover:opacity-90 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]"
            >
              Visit Project
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

