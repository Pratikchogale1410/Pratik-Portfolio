"use client";

import { FormEvent, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/app/lib/firebase";

const initialForm = { name: "", email: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string | null }>(
    { type: null, message: null },
  );

  const isValid = Boolean(form.name.trim() && form.email.trim() && form.message.trim());

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ type: null, message: null });

    if (!isValid) {
      setStatus({ type: "error", message: "Please complete all fields before sending." });
      return;
    }

    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "contacts"), {
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        createdAt: serverTimestamp(),
      });

      setStatus({ type: "success", message: "Thanks! Your message has been submitted." });
      setForm(initialForm);
    } catch (error) {
      console.error("Firestore submit error", error);
      setStatus({ type: "error", message: "Something went wrong. Please try again shortly." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="glass-card rounded-3xl p-6 md:p-8">
      <div className="space-y-4">
        <input
          required
          value={form.name}
          onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
          placeholder="Your Name"
          suppressHydrationWarning={true}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-blue-500"
        />
        <input
          required
          type="email"
          value={form.email}
          onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
          placeholder="Your Email"
          suppressHydrationWarning={true}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-blue-500"
        />
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          placeholder="Tell me about your project, role, or what you want built..."
          suppressHydrationWarning={true}
          className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-blue-500"
        />
      </div>

      <button
        type="submit"
        disabled={!isValid || isSubmitting}
        suppressHydrationWarning={true}
        className="mt-5 inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 disabled:cursor-not-allowed disabled:bg-slate-300 hover:enabled:bg-blue-500"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {status.message ? (
        <p
          className={`mt-4 text-sm ${
            status.type === "success" ? "text-emerald-600" : "text-rose-600"
          }`}
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
}