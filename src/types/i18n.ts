export type Translations = {
  nav: { services: string; projects: string; about: string; teams: string; contact: string; explore: string; findUs: string };
  hero: { title: string; subtitle: string; cta: string; ctaSecondary: string };
  about: { title: string; subtitle?: string; body: string };
  services: { title: string; subtitle?: string; items: Array<{ title: string; description: string }>; cta: string };
  projects: { title: string };
  teams: { title: string };
  technologies: { title: string; subtitle?: string };
  partners: { title: string; items: Array<{ name: string; logo: string }> };
  trust: { title: string; subtitle?: string; items: string[] };
  contact: { title: string; subtitle?: string; emailLabel: string; phoneLabel: string; social: { twitter: string; linkedin: string; github: string } };
  contactForm: {
    labels: { name: string; email: string; message: string; send: string };
    messages: { fill: string; thank: string };
    select: { label: string; hint: string; options: string[] };
  };
  ui: { menu: string; appearance: string; language: string };
  findUs: { title: string; subtitle?: string; addressLabel: string; phoneLabel: string; contactLabel: string };
};

