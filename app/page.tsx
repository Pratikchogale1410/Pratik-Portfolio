import { HeroSection } from "./sections/portfolio/hero";
import { SummarySection } from "./sections/portfolio/summary";
import { ExperienceSection } from "./sections/portfolio/experience";
import { TechnologySection } from "./sections/portfolio/technology";
import { SelectedWorkSection } from "./sections/portfolio/selected-work";
import { ImpactSection } from "./sections/portfolio/impact";
import { DeveloperSection } from "./sections/portfolio/developer";
import { ContactSection } from "./sections/portfolio/contact";

export default function Home() {
  return (
    <main className="bg-[var(--background)]">
      <HeroSection />
      <SummarySection />
      <ExperienceSection />
      <TechnologySection />
      <SelectedWorkSection />
      <ImpactSection />
      <DeveloperSection />
      <ContactSection />
    </main>
  );
}
