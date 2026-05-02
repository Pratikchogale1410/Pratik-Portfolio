import { Trophy } from "lucide-react";
import { achievements } from "@/data/portfolio-data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-shell py-18 md:py-24">
      <Reveal>
        <SectionHeading
          badge="Achievements"
          title="Recognition through execution"
          subtitle="Built under pressure and delivered outcomes that stood out."
        />
      </Reveal>
      <Reveal>
        <div className="glass-card rounded-3xl p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-amber-100 p-3 text-amber-600">
              <Trophy size={24} />
            </div>
            <div>
              <h3 className="font-display text-xl text-slate-900">{achievements[0].title}</h3>
              <p className="mt-2 leading-7 text-slate-600">{achievements[0].detail}</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
