import { HeroSection } from "./sections/portfolio/hero";
import { CapabilitiesSection } from "./sections/portfolio/capabilities";
import { ImpactSection } from "./sections/portfolio/impact";
import { SelectedWorkSection } from "./sections/portfolio/selected-work";
import { DeveloperSection } from "./sections/portfolio/developer";
import { ExperienceSection } from "./sections/portfolio/experience";
import { ProcessSection } from "./sections/portfolio/process";
import { TechnologySection } from "./sections/portfolio/technology";
import { AgentMailSection } from "./sections/portfolio/agent-mail";
import { ContactSection } from "./sections/portfolio/contact";

export default function Home() {
  return (
    <main className="bg-[var(--background)]">
      <HeroSection />
      <CapabilitiesSection />
      <ImpactSection />
      <SelectedWorkSection />
      <DeveloperSection />
      <ExperienceSection />
      <ProcessSection />
      <TechnologySection />
      <AgentMailSection />
      <ContactSection />
    </main>
  );
}
