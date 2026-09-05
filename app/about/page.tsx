import { DeveloperSection } from "../sections/portfolio/developer";
import { HeroSection } from "../sections/portfolio/hero";
import { CapabilitiesSection } from "../sections/portfolio/capabilities";

export default function AboutPage() {
  return (
    <main>
      <HeroSection />
      <CapabilitiesSection />
      <DeveloperSection />
    </main>
  );
}
