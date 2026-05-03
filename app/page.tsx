import { HeroSection } from "./sections/Hero";
import { AboutSection } from "./sections/About";
import { SkillsSection } from "./sections/Skills";
import { ProjectsSection } from "./sections/Projects";
import { ExperienceSection } from "./sections/Experience";
import { ContactSection } from "./sections/Contact";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-blue-500/8 blur-3xl" />
        <div className="absolute top-1/3 right-0 h-[26rem] w-[26rem] rounded-full bg-indigo-500/8 blur-3xl" />
      </div>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}