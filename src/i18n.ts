export type Locale = "en" | "fr" | "ar";

type Dict = {
  nav: { services: string; projects: string; about: string; teams: string; contact: string; explore: string; findUs: string };
  ui: { menu: string; appearance: string; language: string };
  hero: { title: string; subtitle: string; cta: string; ctaSecondary: string };
  about: { title: string; body: string };
  services: { title: string; items: Array<{ title: string; description: string }>; cta: string };
  formationnet: { title: string; name: string; description: string; cta: string };
  projects: { title: string; items: Array<{ title: string; description: string; link?: string; image?: string }> };
  teams: { title: string };
  technologies: { title: string };
  partners: { title: string; items: Array<{ name: string; logo: string }> };
  contact: { title: string; emailLabel: string; phoneLabel: string; social: { twitter: string; linkedin: string; github: string } };
  contactForm: {
    labels: { name: string; email: string; message: string; send: string };
    messages: { fill: string; thank: string };
    select: { label: string; hint: string; options: string[] };
  };
  findUs: { title: string; addressLabel: string; phoneLabel: string; contactLabel: string };
  trust: { title: string; items: string[] };
};
import fs from "node:fs";
import path from "node:path";
import { cookies } from "next/headers";

function readLocale(lang: Locale, ns: string = "common"): Dict {
  const filePath = path.join(process.cwd(), "public", "locales", lang, `${ns}.json`);
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as Dict;
}

const en = readLocale("en", "common");
const fr = readLocale("fr", "common");
const ar = readLocale("ar", "common");

export const dict: Record<Locale, Dict> = { en, fr, ar };

export async function getDict(lang?: string): Promise<Dict> {
  try {
    const jar = await cookies();
    const fromCookie = jar.get("lang")?.value as Locale | undefined;
    if (fromCookie && (fromCookie === "en" || fromCookie === "fr" || fromCookie === "ar")) {
      return dict[fromCookie];
    }
  } catch {}
  return dict[(lang as Locale)] ?? en;
}
