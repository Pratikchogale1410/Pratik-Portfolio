"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FlipText } from "./FlipText";

const LINKEDIN_URL = "https://linkedin.com/in/pratik-chogale";

/**
 * Floating "Let's talk" bar: appears after the scroll threshold and hides
 * while the contact section is on screen (where the CTA already lives).
 */
export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const threshold = 700;
    let contactInView = false;
    const contact = document.getElementById("contact");

    const update = () => {
      setVisible(window.scrollY > threshold && !contactInView);
    };

    const observer = contact
      ? new IntersectionObserver(
          (entries) => {
            contactInView = entries.some((e) => e.isIntersecting);
            update();
          },
          { threshold: 0.15 }
        )
      : null;
    if (contact && observer) observer.observe(contact);

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", update);
      observer?.disconnect();
    };
  }, []);

  return (
    <div
      className={`sticky-cta fixed bottom-5 left-1/2 z-40 -translate-x-1/2 ${
        visible ? "" : "is-hidden"
      }`}
    >
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noreferrer"
        className="btn-primary !py-1.5 !pl-5 !pr-1.5 !text-[14px] whitespace-nowrap shadow-[0_18px_40px_-12px_rgba(0,86,251,0.8)]"
      >
        <FlipText text="Let's talk" />
        <span className="btn-icon-chip">
          <ArrowUpRight size={16} />
        </span>
      </a>
    </div>
  );
}
