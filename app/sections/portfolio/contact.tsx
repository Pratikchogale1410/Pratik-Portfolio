"use client";

import { useState, FormEvent } from "react";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/app/components/social-icons";
import { FlipText } from "@/app/components/FlipText";
import { personalInfo } from "@/data/portfolio-data";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string | null;
  }>({ type: null, message: null });
  const [submitting, setSubmitting] = useState(false);

  const valid =
    Boolean(form.name.trim()) &&
    Boolean(form.email.trim()) &&
    Boolean(form.message.trim());

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!valid) {
      setStatus({
        type: "error",
        message: "Please complete all fields before sending.",
      });
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
      setStatus({
        type: "success",
        message: "Thanks! Your message has been submitted.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus({
        type: "error",
        message:
          "Could not send right now. Please email me directly at the address below.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--dark)] text-[var(--dark-foreground)]"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%] bg-[radial-gradient(60%_60%_at_50%_100%,rgba(0,86,251,0.35),transparent_70%)]" />
      <div className="section-shell section-pad relative">
        <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="heading-display mt-5 text-[clamp(2.2rem,4.6vw,4rem)] leading-[1.04] text-white">
              Let&apos;s build
              <br />
              something useful.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-7 text-[var(--dark-muted)] md:text-[18px]">
              Available for opportunities involving full-stack development,
              AI-powered applications, CRM systems, web applications and
              automation.
            </p>

            <ul className="mt-10 space-y-3">
              <ContactRow
                icon={<Mail size={15} />}
                label="Email"
                value={personalInfo.email}
                href={`mailto:${personalInfo.email}`}
              />
              <ContactRow
                icon={<Phone size={15} />}
                label="Phone"
                value={personalInfo.phone}
                href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
              />
              <ContactRow
                icon={<LinkedinIcon size={15} />}
                label="LinkedIn"
                value="linkedin.com/in/pratik-chogale"
                href={personalInfo.linkedin}
              />
              <ContactRow
                icon={<GithubIcon size={15} />}
                label="GitHub"
                value="github.com/Pratikchogale1410"
                href="https://github.com/Pratikchogale1410"
              />
            </ul>
          </div>

          <div>
            <div className="glass-card p-6 text-[var(--foreground)] md:p-8">
              <div className="flex items-center justify-between border-b border-[var(--border-soft)] pb-4">
                <p className="eyebrow">Send a message</p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--foreground-subtle)]">
                  Reply &lt; 48h
                </p>
              </div>

              <form className="mt-6 space-y-5" onSubmit={onSubmit}>
                <Field label="Name">
                  <input
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    required
                    placeholder="Your Name"
                    className="contact-input-light"
                  />
                </Field>
                <Field label="Email">
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    required
                    placeholder="Your Email"
                    className="contact-input-light"
                  />
                </Field>
                <Field label="Message">
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    required
                    placeholder="Tell me about your project or opportunity..."
                    className="contact-input-light resize-none"
                  />
                </Field>

                <button
                  type="submit"
                  disabled={!valid || submitting}
                  className="btn-primary w-full justify-between disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <FlipText text={submitting ? "Sending..." : "Send Message"} />
                  <span className="btn-icon-chip">
                    <ArrowUpRight size={16} />
                  </span>
                </button>

                {status.message ? (
                  <p
                    className={`text-sm ${
                      status.type === "success"
                        ? "text-emerald-400"
                        : "text-rose-400"
                    }`}
                  >
                    {status.message}
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-input-light {
          width: 100%;
          border: 1px solid var(--border);
          border-radius: 14px;
          background: rgba(1, 13, 35, 0.6);
          padding: 12px 14px;
          color: var(--foreground);
          font-size: 14px;
          outline: none;
          transition: border-color 200ms ease, box-shadow 200ms ease;
        }
        .contact-input-light::placeholder {
          color: var(--foreground-subtle);
        }
        .contact-input-light:focus {
          border-color: var(--accent-bright);
          box-shadow: 0 0 0 3px rgba(0, 86, 251, 0.25);
        }
      `}</style>
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
  return (
    <li>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        className="group flex items-center justify-between border border-[var(--dark-border)] bg-white/[0.03] px-4 py-3 transition-colors hover:border-white"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center border border-[var(--dark-border)] bg-white/[0.04] text-[var(--dark-muted)] transition-colors group-hover:border-white group-hover:text-white">
            {icon}
          </span>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--dark-muted)]">
              {label}
            </p>
            <p className="mt-0.5 text-sm font-semibold text-white">{value}</p>
          </div>
        </div>
        <ArrowUpRight
          size={16}
          className="text-[var(--dark-muted)] transition-colors group-hover:text-white"
        />
      </a>
    </li>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--foreground-subtle)]">
        {label}
      </span>
      {children}
    </label>
  );
}
