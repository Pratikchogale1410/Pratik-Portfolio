import { Mail, Phone, Link2, ExternalLink } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";
import { SectionHeading } from "@/app/components/SectionHeading";
import { Reveal } from "@/app/components/Reveal";
import { ContactForm } from "@/app/components/ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="section-shell py-10 md:py-12">
      <Reveal>
        <SectionHeading
          badge="Contact"
          title="Let's work together"
          subtitle="Currently available for full-time roles and interesting collaborations. Let's build something great."
        />
      </Reveal>

      <div className="grid gap-8 md:gap-8 lg:gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-slate-600">
              I&apos;m always open to discussing new opportunities, interesting projects, or potential collaborations.
            </p>
            
            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 border border-blue-100">
                  <Mail size={22} className="text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">Email</p>
                  <p className="text-sm text-slate-600 group-hover:text-blue-600 transition-colors">
                    {personalInfo.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 border border-blue-100">
                  <Phone size={22} className="text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">Phone</p>
                  <p className="text-sm text-slate-600 group-hover:text-blue-600 transition-colors">
                    {personalInfo.phone}
                  </p>
                </div>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 border border-blue-100">
                  <Link2 size={22} className="text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">LinkedIn</p>
                  <p className="text-sm text-slate-600 group-hover:text-blue-600 transition-colors">
                    linkedin.com/in/pratik-chogale
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/Pratikchogale1410/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 border border-blue-100">
                  <ExternalLink size={22} className="text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">GitHub</p>
                  <p className="text-sm text-slate-600 group-hover:text-blue-600 transition-colors">
                    github.com/Pratikchogale1410
                  </p>
                </div>
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="rounded-2xl bg-white p-6 md:p-8 border border-slate-200 shadow-lg">
            <div className="mb-6">
              <h3 className="font-display text-xl font-bold text-slate-900">Send a message</h3>
              <p className="mt-1 text-sm text-slate-600">
                Fill out the form below and I&apos;ll get back to you within 24 hours.
              </p>
            </div>
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}