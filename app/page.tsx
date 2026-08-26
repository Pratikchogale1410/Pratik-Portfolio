import { HeroSection } from "./sections/Hero";
import { AboutSection } from "./sections/About";
import { HighlightsSection } from "./sections/Highlights";
import { ExperienceSection } from "./sections/Experience";
import { SkillsSection } from "./sections/Skills";
import { ProjectsSection } from "./sections/Projects";
import { ContactSection } from "./sections/Contact";

export default function Home() {
  return (
    <main className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-0 h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-[-8%] top-[35%] h-[26rem] w-[26rem] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-[10%] left-[20%] h-[22rem] w-[22rem] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>
      <HeroSection />
      <AboutSection />
      <HighlightsSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
