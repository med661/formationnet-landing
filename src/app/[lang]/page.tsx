import { getDict } from "@/i18n";
import { Translations } from "@/types/i18n";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FormationNetSection from "@/components/sections/FormationNetSection";
import FindUsSection from "@/components/sections/FindUsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TeamsSection from "@/components/sections/TeamsSection";
import TechnologiesSection from "@/components/sections/TechnologiesSection";
import TrustSection from "@/components/sections/TrustSection";
import PartnersSection from "@/components/sections/PartnersSection";
import StatsSection from "@/components/sections/StatsSection";
import ContactSection from "@/components/sections/ContactSection";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t: Translations = await getDict(lang);
  return (
    <div className="font-sans">
      <HeroSection t={t} />
      <AboutSection t={t} />
      <ServicesSection t={t} />
      <FormationNetSection t={t} />
      <FindUsSection t={t} />
      <ProjectsSection t={t} />
      <TeamsSection t={t} />
      <TechnologiesSection t={t} />
      <TrustSection t={t} />
      <PartnersSection t={t} />
      <StatsSection t={t} />
      <ContactSection t={t} />
    </div>
  );
}
