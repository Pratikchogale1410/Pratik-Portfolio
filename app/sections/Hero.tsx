"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";
import { Reveal } from "@/app/components/Reveal";

export function HeroSection() {
  return (
    <section id="home" className="section-shell pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs text-blue-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
              </span>
              Available for opportunities
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-display text-4xl font-semibold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
              {personalInfo.name}
              <span className="mt-2 block text-lg font-medium text-blue-600 md:text-2xl">{personalInfo.role}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="max-w-lg text-base leading-relaxed text-slate-600 md:text-lg">
              {personalInfo.tagline}. I specialize in building production-ready web applications with clean code and thoughtful user experiences.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-500"
              >
                View Projects
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-500 hover:text-blue-600"
              >
                Contact Me
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-blue-100 blur-2xl" />
            <div className="absolute -right-4 -bottom-4 h-32 w-32 rounded-full bg-indigo-100 blur-2xl" />
            <div className="relative h-80 w-full overflow-hidden rounded-3xl bg-slate-100 shadow-lg ring-1 ring-slate-200 md:h-96">
              <Image
                src="/images/profile.jpg"
                alt="Pratik Chogale"
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