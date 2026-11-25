"use client";

import { useState, FormEvent } from "react";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/app/components/social-icons";
import { personalInfo } from "@/data/portfolio-data";
import { Kicker } from "./ui";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string | null }>({
    type: null,
    message: null,
  });
  const [submitting, setSubmitting] = useState(false);

  const valid = Boolean(form.name.trim()) && Boolean(form.email.trim()) && Boolean(form.message.trim());

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!valid) {
      setStatus({ type: "error", message: "Please complete all fields before sending." });
      return;
    }
    setSubmitting(true);
    setStatus({ type: null, message: null });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Send failed");
      setStatus({ type: "success", message: "Thanks! Your message has been submitted." });
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus({
        type: "error",
        message: "Could not send right now. Please email me directly at the address below.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="hm hm-section bg-white">
      <div className="hm-wrap grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <Kicker>Contact</Kicker>
          <h2 className="hm-h2 mt-6">
            Let&apos;s build <span className="hm-serif">something useful.</span>
          </h2>
          <p className="hm-lead mt-6 max-w-[460px] text-[var(--hm-ink-muted)]">
            Available for opportunities involving full-stack development, AI-powered applications, CRM systems, web
            applications and automation.
          </p>

          <ul className="mt-10 space-y-3">
            <ContactRow icon={<Mail size={16} />} label="Email" value={personalInfo.email} href={`mailto:${personalInfo.email}`} />
            <ContactRow
              icon={<Phone size={16} />}
              label="Phone"
              value={personalInfo.phone}
              href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
            />
            <ContactRow
              icon={<LinkedinIcon size={16} />}
              label="LinkedIn"
              value="linkedin.com/in/pratik-chogale-68236632a"
              href={personalInfo.linkedin}
            />
            <ContactRow
              icon={<GithubIcon size={16} />}
              label="GitHub"
              value="github.com/Pratikchogale1410"
              href="https://github.com/Pratikchogale1410"
            />
          </ul>
        </div>

        <div className="hm-card hm-tint-lavender">
          <div className="flex items-center justify-between">
            <p className="hm-eyebrow">Send a message</p>
            <p className="hm-eyebrow text-[10px] text-[var(--hm-ink-muted)]">Reply &lt; 48h</p>
          </div>

          <form className="mt-8 space-y-5" onSubmit={onSubmit}>
            <Field label="Name">
              <input
                className="hm-input"
                value={form.name}
                onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                required
                placeholder="Your Name"
              />
            </Field>
            <Field label="Email">
              <input
                type="email"
                className="hm-input"
                value={form.email}
                onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                required
                placeholder="Your Email"
              />
            </Field>
            <Field label="Message">
              <textarea
                rows={5}
                className="hm-input resize-none"
                value={form.message}
                onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                required
                placeholder="Tell me about your project or opportunity..."
              />
            </Field>

            <button
              type="submit"
              disabled={!valid || submitting}
              className="hm-btn hm-btn--ink w-full justify-between disabled:cursor-not-allowed disabled:opacity-50"
            >
              <span>{submitting ? "Sending..." : "Send Message"}</span>
              <span className="hm-btn-icon" aria-hidden="true">
                <ArrowUpRight size={16} />
              </span>
            </button>

            {status.message ? (
              <p className={`text-sm ${status.type === "success" ? "text-emerald-700" : "text-rose-700"}`} role="status">
                {status.message}
              </p>
            ) : null}
          </form>
        </div>
      </div>

    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  const external = href.startsWith("http");
  return (
    <li>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="group flex items-center justify-between rounded-[20px] bg-[var(--hm-ink)]/[0.04] px-5 py-4 transition-colors hover:bg-[var(--hm-royal)] hover:text-white"
      >
        <span className="flex items-center gap-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--hm-ink)]">
            {icon}
          </span>
          <span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] opacity-60">{label}</span>
            <span className="mt-0.5 block text-[15px] font-semibold">{value}</span>
          </span>
        </span>
        <ArrowUpRight size={16} aria-hidden="true" className="opacity-60 transition-transform group-hover:translate-x-0.5" />
      </a>
    </li>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--hm-ink-muted)]">
        {label}
      </span>
      {children}
    </label>
  );
}
