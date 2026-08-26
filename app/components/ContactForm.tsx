"use client";

import { FormEvent, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/app/lib/firebase";

const initialForm = { name: "", email: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string | null }>({
    type: null,
    message: null,
  });

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

  const fieldClass =
    "focus-ring w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/50";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input
        required
        value={form.name}
        onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
        placeholder="Your Name"
        className={fieldClass}
      />
      <input
        required
        type="email"
        value={form.email}
        onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
        placeholder="Your Email"
        className={fieldClass}
      />
      <textarea
        required
        rows={5}
        value={form.message}
        onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
        placeholder="Tell me about your project or opportunity..."
        className={`${fieldClass} resize-none`}
      />

      <button
        type="submit"
        disabled={!isValid || isSubmitting}
        className="focus-ring w-full rounded-xl bg-blue-500 py-3 text-sm font-semibold text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {status.message ? (
        <p className={`text-sm ${status.type === "success" ? "text-emerald-400" : "text-rose-400"}`}>
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
