"use client";

import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";
import { Reveal } from "@/app/components/Reveal";

export function HeroSection() {
  return (
    <section id="home" className="section-shell py-10 md:py-14 lg:py-20 mt-12 md:mt-16">
      <div className="flex w-full flex-col gap-8 md:gap-10 lg:gap-12 lg:flex-row">
        <div className="flex-1 space-y-6 md:space-y-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-medium text-blue-700 border border-blue-100">
              <Sparkles size={14} />
              Available for opportunities
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-3 md:space-y-4">
              <h1 className="font-display text-3xl font-bold leading-tight text-slate-900 md:text-4xl lg:text-5xl xl:text-6xl">
                {personalInfo.name}
              </h1>
              <p className="text-xl font-medium text-blue-600 md:text-2xl lg:text-3xl">
                {personalInfo.role}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-base leading-relaxed text-slate-600 md:text-lg lg:text-xl">
              {personalInfo.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-3 md:gap-4 pt-2">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-600/25 md:px-6 md:py-3.5"
              >
                View Projects
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:border-blue-500 hover:text-blue-600 hover:shadow-md md:px-6 md:py-3.5"
              >
                Contact Me
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="flex-1">
          <div className="relative mx-auto w-full max-w-sm md:max-w-md lg:max-w-lg">
            <div className="absolute -top-4 -left-4 h-24 w-24 md:-top-6 md:-left-6 md:h-32 md:w-32 rounded-full bg-blue-100 blur-2xl md:blur-3xl" />
            <div className="absolute -right-4 -bottom-4 h-28 w-28 md:-right-6 md:-bottom-6 md:h-40 md:w-40 rounded-full bg-indigo-100 blur-2xl md:blur-3xl" />
            <div className="relative h-[320px] w-full overflow-hidden rounded-2xl md:h-[400px] md:rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 shadow-xl md:shadow-2xl ring-1 ring-slate-200">
              <Image
                src="/images/profile.jpg"
                alt={personalInfo.name}
                fill
                className="object-contain"
                sizes="(min-width: 768px) 32rem, 100vw"
                priority
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}