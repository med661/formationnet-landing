import Reveal from "@/components/Reveal";
import Image from "next/image";
import Link from "next/link";
import { Translations } from "@/types/i18n";
import ProjectCard from "@/components/cards/ProjectCard";

const projectImages = ["/assets/projects/ecommerce.png", "/globe.svg", "/file.svg", "/window.svg", "/vercel.svg", "/next.svg", "/assets/projects/hunt.png"];

export default function ProjectsSection({ t }: { t: Translations }) {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <Reveal>
        <h2 className="text-2xl sm:text-3xl font-semibold">{t.projects.title}</h2>
      </Reveal>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]">
            <Image src="/assets/projects/elhub.png" alt="FormationNet main project" fill className="object-cover filter grayscale" />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="rounded-2xl border border-[var(--border)] p-6 bg-[var(--card)]">
            <h3 className="text-lg sm:text-xl font-semibold">{t.formationnet.name}</h3>
            <p className="mt-3 text-[var(--muted)]">{t.formationnet.description}</p>
            <div className="mt-6 flex gap-3">
              <Link href="#contact" className="rounded-full border border-[var(--border)] px-5 py-2 text-sm transition hover:bg-black/5 dark:hover:bg-white/10 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)] motion-reduce:transition-none">{t.formationnet.cta}</Link>
              <a href="https://knowledgehubster.vercel.app/about" target="_blank" rel="noopener noreferrer" className="rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] px-5 py-2 text-sm font-medium transition hover:opacity-90 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]">Visit Project</a>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.projects.items.map((p, i) => (
          <Reveal key={p.title} delay={i * 80}>
            <ProjectCard p={p} fallbackSrc={projectImages[i]} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
