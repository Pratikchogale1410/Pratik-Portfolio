import Image from "next/image";
import { aboutSummary } from "@/data/portfolio-data";
import { Reveal } from "@/app/components/Reveal";
import { SectionHeading } from "@/app/components/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="section-shell py-18 md:py-24">
      <Reveal>
        <SectionHeading
          badge="About Me"
          title="Building practical digital products with business impact"
          subtitle="Product-minded developer with internship experience across AI platforms and workflow-heavy CRM systems."
        />
      </Reveal>

      <div className="grid items-center gap-8 md:grid-cols-2">
        <Reveal delay={0.05}>
          <div className="order-1 mx-auto w-full max-w-md md:order-2">
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-lg shadow-slate-900/10 ring-1 ring-slate-200 md:h-[450px]">
              <Image
                src="/images/profile.jpg"
                alt="Pratik Chogale"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 28rem, 100vw"
              />
            </div>
          </div>
        </Reveal>
        <Reveal>
          <article className="glass-card order-2 rounded-2xl p-7 md:order-1">
            <p className="leading-8 text-slate-700">{aboutSummary}</p>
            <div className="mt-6 grid gap-2 text-sm text-slate-600">
              <p>- BSc IT Graduate</p>
              <p>- Full Stack Developer Intern</p>
              <p>- Built CRM and AI-powered application workflows</p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}