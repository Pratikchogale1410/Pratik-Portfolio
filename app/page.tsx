import { AboutSection } from "@/components/portfolio/about-section";
import { AchievementsSection } from "@/components/portfolio/achievements-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { HeroSection } from "@/components/portfolio/hero-section";
import { Navbar } from "@/components/portfolio/navbar";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { SkillsSection } from "@/components/portfolio/skills-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative pb-16">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute top-1/3 right-0 h-[26rem] w-[26rem] rounded-full bg-indigo-500/10 blur-3xl" />
        </div>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <AchievementsSection />
        <ContactSection />
      </main>
    </>
  );
}
