import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { Translations } from "@/types/i18n";

export default function ContactSection({ t }: { t: Translations }) {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <Reveal>
        <h2 className="text-2xl sm:text-3xl font-semibold">{t.contact.title}</h2>
      </Reveal>
      <Reveal>
        <div id="contact-success" role="status" aria-live="polite" className="mt-3 hidden rounded-md border border-green-300 bg-green-50 text-green-700 p-3">
          {t.contactForm.messages.thank}
        </div>
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
