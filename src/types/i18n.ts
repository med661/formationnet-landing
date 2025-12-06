export type Translations = {
  nav: { services: string; projects: string; about: string; teams: string; contact: string; explore: string; findUs: string };
  hero: { title: string; subtitle: string; cta: string; ctaSecondary: string };
  about: { title: string; body: string };
  services: { title: string; items: Array<{ title: string; description: string }>; cta: string };
  formationnet: { title: string; name: string; description: string; cta: string };
  projects: { title: string; items: Array<{ title: string; description: string; link?: string; image?: string }> };
  teams: { title: string };
  technologies: { title: string };
  partners: { title: string; items: Array<{ name: string; logo: string }> };
  trust: { title: string; items: string[] };
  contact: { title: string; emailLabel: string; phoneLabel: string; social: { twitter: string; linkedin: string; github: string } };
  contactForm: {
    labels: { name: string; email: string; message: string; send: string };
    messages: { fill: string; thank: string };
    select: { label: string; hint: string; options: string[] };
  };
  ui: { menu: string; appearance: string; language: string };
  findUs: { title: string; addressLabel: string; phoneLabel: string; contactLabel: string };
};

