import Reveal from "@/components/Reveal";
import TeamCard from "@/components/cards/TeamCard";
import { Translations } from "@/types/i18n";
import { FaXTwitter } from "react-icons/fa6";

const team = [
  {
    name: "Salah ",
    role: "Full‑Stack Engineer",
    bio: "Passionate about scalable systems and delightful UX.",
    avatar: "/globe.svg",
    socials: [
      { label: "Twitter", href: "#", icon: <FaXTwitter size={16} /> },
      { label: "LinkedIn", href: "#", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 4h4v4H4zM4 10h4v10H4zM10 10h4v2h.1a4 4 0 013.9-2.1c3 0 5 1.9 5 5.3V20h-4v-4.3c0-1.4-.7-2.6-2.2-2.6-1.4 0-1.8.9-1.8 2.4V20h-5V10z" fill="currentColor"/></svg> },
      { label: "GitHub", href: "#", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3l9 9-9 9-9-9 9-9zm0 3l6 6-6 6-6-6 6-6z" fill="currentColor"/></svg> },
    ],
  },
  {
    name: "mariem",
    role: "Product Designer",
    bio: "Designing accessible, user‑centric interfaces.",
    avatar: "/file.svg",
    socials: [
      { label: "Twitter", href: "#", icon: <FaXTwitter size={16} /> },
      { label: "LinkedIn", href: "#", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 4h4v4H4zM4 10h4v10H4zM10 10h4v2h.1a4 4 0 013.9-2.1c3 0 5 1.9 5 5.3V20h-4v-4.3c0-1.4-.7-2.6-2.2-2.6-1.4 0-1.8.9-1.8 2.4V20h-5V10z" fill="currentColor"/></svg> },
      { label: "GitHub", href: "#", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3l9 9-9 9-9-9 9-9zm0 3l6 6-6 6-6-6 6-6z" fill="currentColor"/></svg> },
    ],
  },
  {
    name: "Youssef ",
    role: "DevOps Engineer",
    bio: "Automation and cloud infrastructure at scale.",
    avatar: "/window.svg",
    socials: [
      { label: "Twitter", href: "#", icon: <FaXTwitter size={16} /> },
      { label: "LinkedIn", href: "#", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 4h4v4H4zM4 10h4v10H4zM10 10h4v2h.1a4 4 0 013.9-2.1c3 0 5 1.9 5 5.3V20h-4v-4.3c0-1.4-.7-2.6-2.2-2.6-1.4 0-1.8.9-1.8 2.4V20h-5V10z" fill="currentColor"/></svg> },
      { label: "GitHub", href: "#", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3l9 9-9 9-9-9 9-9zm0 3l6 6-6 6-6-6 6-6z" fill="currentColor"/></svg> },
    ],
  },
    {
    name: "fares ",
    role: "DevOps Engineer",
    bio: "Automation and cloud infrastructure at scale.",
    avatar: "/window.svg",
    socials: [
      { label: "Twitter", href: "#", icon: <FaXTwitter size={16} /> },
      { label: "LinkedIn", href: "#", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 4h4v4H4zM4 10h4v10H4zM10 10h4v2h.1a4 4 0 013.9-2.1c3 0 5 1.9 5 5.3V20h-4v-4.3c0-1.4-.7-2.6-2.2-2.6-1.4 0-1.8.9-1.8 2.4V20h-5V10z" fill="currentColor"/></svg> },
      { label: "GitHub", href: "#", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3l9 9-9 9-9-9 9-9zm0 3l6 6-6 6-6-6 6-6z" fill="currentColor"/></svg> },
    ],
  },
];

export default function TeamsSection({ t }: { t: Translations }) {
  return (
    <section id="teams" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <Reveal>
        <h2 className="text-2xl sm:text-3xl font-semibold">{t.teams.title}</h2>
      </Reveal>
      <div className="mt-10 grid w-full max-w-6xl mx-auto justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {team.map((m, i) => (
          <Reveal key={m.name} delay={i * 80}>
            <TeamCard m={m} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
