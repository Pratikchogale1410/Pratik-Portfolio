import { Download, ExternalLink, Link2, Mail, Phone } from "lucide-react";
import { contactAvailability, personalInfo } from "@/data/portfolio-data";
import { SectionHeading } from "@/app/components/SectionHeading";
import { Reveal } from "@/app/components/Reveal";
import { ContactForm } from "@/app/components/ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="section-shell py-18 md:py-24">
      <Reveal>
        <SectionHeading
          badge="Contact"
          title="Let's build something great"
          subtitle="Available for opportunities involving full-stack development, AI-powered applications, CRM systems, and automation."
        />
      </Reveal>

      <div className="mb-8 flex flex-wrap gap-2">
        {contactAvailability.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="space-y-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="group flex items-center gap-4 rounded-[1.25rem] border border-white/10 bg-white/5 p-4 transition hover:border-sky-400/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/15 text-sky-300">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Email</p>
                <p className="text-sm text-slate-400 group-hover:text-sky-300">{personalInfo.email}</p>
              </div>
            </a>

            <a
              href={`tel:${personalInfo.phone}`}
              className="group flex items-center gap-4 rounded-[1.25rem] border border-white/10 bg-white/5 p-4 transition hover:border-sky-400/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/15 text-sky-300">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Phone</p>
                <p className="text-sm text-slate-400 group-hover:text-sky-300">{personalInfo.phone}</p>
              </div>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-[1.25rem] border border-white/10 bg-white/5 p-4 transition hover:border-sky-400/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/15 text-sky-300">
                <Link2 size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-white">LinkedIn</p>
                <p className="text-sm text-slate-400 group-hover:text-sky-300">linkedin.com/in/pratik-chogale</p>
              </div>
            </a>

            <a
              href="https://github.com/Pratikchogale1410/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-[1.25rem] border border-white/10 bg-white/5 p-4 transition hover:border-sky-400/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/15 text-sky-300">
                <ExternalLink size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-white">GitHub</p>
                <p className="text-sm text-slate-400 group-hover:text-sky-300">github.com/Pratikchogale1410</p>
              </div>
            </a>

            <a
              href={personalInfo.resumeUrl}
              download
              className="focus-ring group inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              <Download size={16} className="transition-transform group-hover:-translate-y-0.5" />
              Download Resume
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="glass-card rounded-[1.5rem] p-6 md:p-8">
            <h3 className="font-display text-xl text-white">Send a message</h3>
            <p className="mt-1 text-sm text-slate-400">Name, email, and message only.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
