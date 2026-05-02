"use client";

import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio-data";

export function HeroSection() {
  return (
    <section id="home" className="section-shell relative pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="noise-overlay relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm md:p-14">
        <div className="absolute -top-24 left-1/4 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-1/4 -bottom-20 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" />

        <motion.p
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs text-slate-600"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-500" />
          </span>
          <MapPin size={14} className="text-blue-600" />
          {personalInfo.location}
        </motion.p>

        <motion.h1
          className="font-display mx-auto max-w-4xl text-4xl leading-tight font-semibold text-slate-900 md:text-6xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {personalInfo.name}
          <span className="mt-3 block text-xl font-medium text-slate-700 md:text-3xl">{personalInfo.role}</span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {personalInfo.tagline}
        </motion.p>
        <motion.p
          className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-500"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          I design clean, production-ready experiences with strong frontend quality and reliable backend workflows.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
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
        </motion.div>
      </div>
    </section>
  );
}