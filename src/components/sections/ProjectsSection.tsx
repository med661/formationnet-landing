import Reveal from "@/components/Reveal";
import { Translations } from "@/types/i18n";
import ProjectCard from "@/components/cards/ProjectCard";

const projectImages = ["/globe.svg", "/file.svg", "/window.svg", "/vercel.svg", "/next.svg", "/assets/projects/hunt.png"];

export default function ProjectsSection({ t }: { t: Translations }) {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <Reveal>
        <h2 className="text-2xl sm:text-3xl font-semibold">{t.projects.title}</h2>
      </Reveal>
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

