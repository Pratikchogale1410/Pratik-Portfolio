"use client";

import { useEffect, useRef } from "react";
import { Kicker } from "./ui";
import { pinStack } from "./stack";

const capabilities = [
  {
    number: "01",
    title: "Full Stack Development",
    description: "Production-ready web applications across frontend, backend, database and API layers.",
    tags: ["NEXT.JS", "REACT", "JAVASCRIPT", "DATABASES"],
  },
  {
    number: "02",
    title: "AI Applications",
    description: "AI-powered application features, LLM integrations and intelligent workflows.",
    tags: ["LLM", "OPENROUTER", "AI WORKFLOWS", "PROMPT ENGINEERING"],
  },
  {
    number: "03",
    title: "CRM Development",
    description: "Healthcare CRM workflows including leads, patients, appointments, treatments and billing.",
    tags: ["CRM", "LEAD MANAGEMENT", "APPOINTMENTS", "PATIENT WORKFLOWS"],
  },
  {
    number: "04",
    title: "Database Optimization",
    description: "Database architecture, query optimization and efficient data-fetching strategies.",
    tags: ["SUPABASE", "CONVEX", "FIREBASE", "SQL"],
  },
  {
    number: "05",
    title: "WhatsApp Automation",
    description: "Automated customer communication and CRM-connected WhatsApp workflows.",
    tags: ["WHATSAPP BUSINESS", "META", "API", "AUTOMATION"],
  },
  {
    number: "06",
    title: "Web Applications",
    description: "Responsive applications built for practical production use.",
    tags: ["RESPONSIVE UI", "FRONTEND", "BACKEND", "DEPLOYMENT"],
  },
];

const tints = ["hm-tint-lavender", "hm-tint-peach", "hm-tint-mint", "hm-tint-pink", "hm-tint-sky", "hm-tint-cream"];

export function Services() {
  const stageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const cards = Array.from(stage.querySelectorAll<HTMLElement>(".hm-stack-card"));
    return pinStack(stage, cards);
  }, []);

  return (
    <section id="services" className="hm hm-section bg-white">
      <div className="hm-wrap">
        <Kicker>Capabilities</Kicker>
        <h2 className="hm-h2 mt-6 max-w-[900px]">
          Engineering capabilities
          <br />
          <span className="hm-serif">for production software.</span>
        </h2>
        <p className="hm-lead mt-6 max-w-[560px] text-[var(--hm-ink-muted)]">
          Six areas where I&apos;ve shipped real engineering work — not slides.
        </p>
      </div>

      <div ref={stageRef} className="hm-stack-stage mt-14 md:mt-20">
        <div className="hm-stack-list hm-wrap">
          {capabilities.map((cap, i) => {
            const [category, ...skills] = cap.tags;
            const words = cap.title.split(" ");
            const last = words.pop();
            return (
              <div key={cap.number} className="hm-stack-slot">
                <article
                  className={`hm-stack-card hm-card ${tints[i % tints.length]}`}
                  data-cursor="view"
                  data-cursor-label="View"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[15px] font-semibold tracking-[0.12em]">{cap.number}</span>
                    <span className="hm-chip">{category}</span>
                  </div>

                  <div>
                    <h3 className="hm-h2 !text-[clamp(34px,4.6vw,64px)]">
                      {words.join(" ")} <span className="hm-serif">{last}</span>
                    </h3>
                    <p className="hm-lead mt-5 max-w-[520px] text-[var(--hm-ink-muted)]">{cap.description}</p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {skills.slice(0, 3).map((skill) => (
                        <li key={skill} className="hm-chip">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
