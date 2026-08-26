"use client";

import { ArrowDown, Database } from "lucide-react";
import { professionalHighlights } from "@/data/portfolio-data";
import { Reveal } from "@/app/components/Reveal";
import { SectionHeading } from "@/app/components/SectionHeading";

export function HighlightsSection() {
  return (
    <section id="highlights" className="section-shell py-18 md:py-24">
      <Reveal>
        <SectionHeading
          badge="Impact"
          title="Key professional highlights"
          subtitle="Production systems, AI integrations, and measurable database optimization."
        />
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        {professionalHighlights.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.05}>
            <article className="glass-card h-full rounded-[1.35rem] p-6 transition hover:-translate-y-1 hover:border-sky-400/30">
              <h3 className="font-display text-xl text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.detail}</p>
              {item.metric ? (
                <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="flex items-center justify-between gap-3 text-sm">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Before</p>
                      <p className="mt-1 font-semibold text-rose-300">{item.metric.before}</p>
                    </div>
                    <ArrowDown className="text-sky-400" size={18} />
                    <div className="text-right">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">After</p>
                      <p className="mt-1 font-semibold text-emerald-300">{item.metric.after}</p>
                    </div>
                  </div>
                </div>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="glass-card mt-6 overflow-hidden rounded-[1.5rem] p-6 md:p-8">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-sky-500/15 p-3 text-sky-300">
              <Database size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Database Optimization</p>
              <h3 className="font-display text-2xl text-white">Before → Optimization → After</h3>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-rose-400/20 bg-rose-500/10 p-5 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-rose-200/80">Before</p>
              <p className="mt-3 font-display text-3xl text-white">12–15</p>
              <p className="mt-1 text-sm text-slate-300">GB/day</p>
            </div>
            <div className="rounded-2xl border border-sky-400/20 bg-sky-500/10 p-5 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-sky-200/80">Optimization</p>
              <div className="mt-3 space-y-1 text-sm text-slate-300">
                <p>Query Optimization</p>
                <p>Data Fetching Improvements</p>
                <p>Database Architecture</p>
              </div>
            </div>
            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-5 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-200/80">After</p>
              <p className="mt-3 font-display text-3xl text-white">1–1.5</p>
              <p className="mt-1 text-sm text-slate-300">GB/day</p>
            </div>
          </div>

          <p className="mt-6 text-sm leading-7 text-slate-400">
            Optimized application data operations and reduced unnecessary database I/O.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
