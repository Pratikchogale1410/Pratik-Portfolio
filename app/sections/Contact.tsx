import { Mail, Phone, Link2, ExternalLink } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";
import { SectionHeading } from "@/app/components/SectionHeading";
import { Reveal } from "@/app/components/Reveal";
import { ContactForm } from "@/app/components/ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="section-shell py-16 md:py-20">
      <Reveal>
        <SectionHeading
          badge="Contact"
          title="Let&apos;s build something together"
          subtitle="Available for full-time roles and interesting collaborations."
        />
      </Reveal>

      <div className="grid gap-8 md:grid-cols-2">
        <Reveal>
          <div className="space-y-4">
            <p className="text-base text-slate-600">
              I&apos;m always open to discussing new opportunities, interesting projects, or potential collaborations.
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-sm text-slate-700 hover:text-slate-900"
              >
                <Mail size={18} className="text-blue-600" />
                {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-3 text-sm text-slate-700 hover:text-slate-900"
              >
                <Phone size={18} className="text-blue-600" />
                {personalInfo.phone}
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-slate-700 hover:text-slate-900"
              >
                <Link2 size={18} className="text-blue-600" />
                LinkedIn Profile
              </a>
              <a
                href="https://github.com/Pratikchogale1410/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-slate-700 hover:text-slate-900"
              >
                <ExternalLink size={18} className="text-blue-600" />
                GitHub Profile
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