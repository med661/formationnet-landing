import Reveal from "@/components/Reveal";
import { Translations } from "@/types/i18n";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiAngular,
  SiReact,
  SiFlutter,
  SiSwift,
  SiWordpress,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiGraphql,
  SiPython,
  SiOpenjdk,
  SiPhp,
  SiLaravel,
  SiSymfony,
  SiSpring,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiRedis,
  SiFirebase,
  SiLinux,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiAmazon,
} from "react-icons/si";

function IconVercel() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 4l8 16H4l8-16z" fill="currentColor"/></svg>;
}

function TechItem({ title, icon }: { title: string; icon: React.ReactNode }) {
  return (
    <div title={title} className="group flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3 transition hover:border-[var(--accent)] hover:bg-[var(--card)] focus-within:border-[var(--accent)]">
      <span className="grid h-10 w-10 place-items-center rounded-md border border-[var(--border)] text-[var(--navbar-icon)]">{icon}</span>
      <div>
        <p className="text-sm font-medium text-[var(--foreground)]">{title}</p>
        <p className="text-xs text-[var(--muted)]">Hover to view details</p>
      </div>
    </div>
  );
}

export default function TechnologiesSection({ t }: { t: Translations }) {
  return (
    <section id="tech" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <Reveal>
        <h2 className="text-2xl sm:text-3xl font-semibold">{t.technologies.title}</h2>
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
          <h3 className="text-lg font-semibold">Frontend</h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <TechItem title="JavaScript" icon={<SiJavascript size={18} />} />
            <TechItem title="TypeScript" icon={<SiTypescript size={18} />} />
            <TechItem title="Next.js" icon={<SiNextdotjs size={18} />} />
            <TechItem title="Angular" icon={<SiAngular size={18} />} />
            <TechItem title="React Native" icon={<SiReact size={18} />} />
            <TechItem title="Flutter" icon={<SiFlutter size={18} />} />
            <TechItem title="Swift" icon={<SiSwift size={18} />} />
            <TechItem title="WordPress" icon={<SiWordpress size={18} />} />
          </div>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
          <h3 className="text-lg font-semibold">Backend</h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <TechItem title="Node.js" icon={<SiNodedotjs size={18} />} />
            <TechItem title="NestJS" icon={<SiNestjs size={18} />} />
            <TechItem title="Express.js" icon={<SiExpress size={18} />} />
            <TechItem title="GraphQL" icon={<SiGraphql size={18} />} />
            <TechItem title="Python" icon={<SiPython size={18} />} />
            <TechItem title="Java" icon={<SiOpenjdk size={18} />} />
            <TechItem title="PHP" icon={<SiPhp size={18} />} />
            <TechItem title="Laravel" icon={<SiLaravel size={18} />} />
            <TechItem title="Symfony" icon={<SiSymfony size={18} />} />
            <TechItem title="Spring Boot" icon={<SiSpring size={18} />} />
          </div>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
          <h3 className="text-lg font-semibold">Database</h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <TechItem title="MongoDB" icon={<SiMongodb size={18} />} />
            <TechItem title="PostgreSQL" icon={<SiPostgresql size={18} />} />
            <TechItem title="Prisma" icon={<SiPrisma size={18} />} />
            <TechItem title="Redis" icon={<SiRedis size={18} />} />
            <TechItem title="Firebase" icon={<SiFirebase size={18} />} />
          </div>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
          <h3 className="text-lg font-semibold">DevOps</h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <TechItem title="Linux" icon={<SiLinux size={18} />} />
            <TechItem title="Docker" icon={<SiDocker size={18} />} />
            <TechItem title="Kubernetes" icon={<SiKubernetes size={18} />} />
            <TechItem title="Vercel" icon={<IconVercel />} />
            <TechItem title="Git" icon={<SiGit size={18} />} />
            <TechItem title="AWS" icon={<SiAmazon size={18} />} />
          </div>
        </div>
      </div>
    </section>
  );
}

