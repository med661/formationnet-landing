"use client";
import { useEffect, useState } from "react";
import { LuMessageSquare } from "react-icons/lu";

export default function StickyContactCta({ label }: { label: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Hide the floating CTA whenever the contact section itself is on screen.
    const contact = document.getElementById("contact");
    let contactInView = false;
    const obs = contact
      ? new IntersectionObserver(
          ([entry]) => {
            contactInView = entry.isIntersecting;
          },
          { threshold: 0.2 }
        )
      : null;
    if (contact && obs) obs.observe(contact);

    let raf = 0;
    const update = () => {
      raf = 0;
      const pastHero = window.scrollY > window.innerHeight * 0.6;
      setVisible(pastHero && !contactInView);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
      if (contact && obs) obs.disconnect();
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] lg:hidden transition-all duration-300 motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <a
        href="#contact"
        className="flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] px-6 py-3.5 text-sm font-semibold shadow-lg shadow-indigo-500/30 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]"
      >
        <LuMessageSquare className="h-4 w-4" />
        {label}
      </a>
    </div>
  );
}
