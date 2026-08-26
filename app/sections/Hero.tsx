"use client";

import Image from "next/image";
import { ArrowDown, ArrowRight, Download, Link2, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { heroHighlights, personalInfo } from "@/data/portfolio-data";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full soft-glow blur-2xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.18),transparent_65%)] blur-2xl" />

      <div className="section-shell relative z-10">
        <div className="noise-overlay overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c1220]/80 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] md:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <motion.p
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <MapPin size={13} className="text-sky-400" />
                {personalInfo.location}
              </motion.p>

              <motion.p
                className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-sky-400"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
              >
                {personalInfo.role}
              </motion.p>

              <motion.h1
                className="font-display text-4xl font-semibold leading-[1.05] text-white md:text-6xl"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {personalInfo.name}
              </motion.h1>

              <motion.p
                className="mt-5 max-w-xl text-lg leading-8 text-slate-300 md:text-xl"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 }}
              >
                Building production-ready{" "}
                <span className="gradient-text">AI-powered applications</span>, CRM systems &amp; scalable
                web products.
              </motion.p>

              <motion.p
                className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 md:text-base"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24 }}
              >
                {personalInfo.summary}
              </motion.p>

              <motion.div
                className="mt-6 flex flex-wrap gap-2"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {heroHighlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </motion.div>

              <motion.div
                className="mt-8 flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.36 }}
              >
                <Link
                  href="/projects"
                  className="focus-ring group inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
                >
                  View My Work
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href={personalInfo.resumeUrl}
                  download
                  className="focus-ring group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400/50 hover:text-white"
                >
                  <Download size={16} />
                  Download Resume
                </Link>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm text-slate-300 transition hover:text-white"
                >
                  <Link2 size={16} />
                  LinkedIn
                </a>
              </motion.div>
            </div>

            <motion.div
              className="relative mx-auto w-full max-w-md"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#10182a] p-3 shadow-[0_0_60px_rgba(59,130,246,0.18)]">
                <div className="relative h-[380px] overflow-hidden rounded-[1.25rem] md:h-[430px]">
                  <Image
                    src="/images/profile.jpg"
                    alt={`${personalInfo.name} profile`}
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(min-width: 768px) 24rem, 100vw"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-slate-500 transition hover:text-sky-400"
            >
              Scroll
              <ArrowDown size={14} className="animate-bounce" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
