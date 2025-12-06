import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { Translations } from "@/types/i18n";

export default function ContactSection({ t }: { t: Translations }) {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <Reveal>
        <h2 className="text-2xl sm:text-3xl font-semibold">{t.contact.title}</h2>
      </Reveal>
      <div className="mt-8 flex justify-center">
        <Reveal>
          <div className="w-full max-w-2xl">
            <ContactForm labels={t.contactForm.labels} select={t.contactForm.select} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
