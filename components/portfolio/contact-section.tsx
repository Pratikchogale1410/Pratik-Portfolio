"use client";

import { Link2, Mail, Phone } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="section-shell py-18 md:py-24">
      <Reveal>
        <SectionHeading
          badge="Contact"
          title="Let's discuss your next product build"
          subtitle="Available for full-time opportunities and high-impact collaboration."
        />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="glass-card rounded-3xl p-6 md:p-8">
            <div className="space-y-4 text-sm text-slate-600">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 hover:text-slate-900">
                <Mail size={18} className="text-blue-600" />
                {personalInfo.email}
              </a>
              <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-3 hover:text-slate-900">
                <Phone size={18} className="text-blue-600" />
                {personalInfo.phone}
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-slate-900"
              >
                <Link2 size={18} className="text-blue-600" />
                linkedin.com/in/pratik-chogale
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
