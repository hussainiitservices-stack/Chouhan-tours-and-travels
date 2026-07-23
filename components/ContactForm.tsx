"use client";

import { FormEvent, useState } from "react";
import { site, waLink } from "@/lib/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [tour, setTour] = useState("Custom Package");
  const [message, setMessage] = useState("");

  function buildMessage() {
    return [
      `Hello ${site.name},`,
      `Name: ${name.trim() || "Guest"}`,
      `Phone: ${phone.trim() || "N/A"}`,
      `Tour: ${tour}`,
      message.trim() ? `Message: ${message.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    window.open(waLink(buildMessage()), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-line bg-sand/40 p-6 md:p-8"
    >
      <h2 className="font-display text-2xl font-semibold text-ink">
        Send an Enquiry
      </h2>
      <p className="mt-2 text-sm text-muted">
        Fill in your details and we&apos;ll open WhatsApp with your enquiry —
        no obligation, completely free.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-ink">Name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full rounded-xl border border-line bg-cream px-3 py-2.5 outline-none focus:border-brass"
            placeholder="Your name"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-ink">Phone</span>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            type="tel"
            className="w-full rounded-xl border border-line bg-cream px-3 py-2.5 outline-none focus:border-brass"
            placeholder="Your phone number"
          />
        </label>
      </div>

      <label className="mt-4 block text-sm">
        <span className="mb-1.5 block font-medium text-ink">Select Tour</span>
        <select
          value={tour}
          onChange={(e) => setTour(e.target.value)}
          className="w-full rounded-xl border border-line bg-cream px-3 py-2.5 outline-none focus:border-brass"
        >
          <option>Ujjain Darshan Tour</option>
          <option>Indore Airport – Ujjain</option>
          <option>Omkareshwar Package</option>
          <option>Mandu Heritage</option>
          <option>Custom Package</option>
        </select>
      </label>

      <label className="mt-4 block text-sm">
        <span className="mb-1.5 block font-medium text-ink">Message</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="w-full rounded-xl border border-line bg-cream px-3 py-2.5 outline-none focus:border-brass"
          placeholder="Dates, pickup point, vehicle preference..."
        />
      </label>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.01]"
        >
          <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current" aria-hidden>
            <path d="M16.01 3C9.39 3 4 8.39 4 15.01c0 2.31.66 4.47 1.81 6.3L4 29l7.9-1.76A11.96 11.96 0 0 0 16.01 27C22.63 27 28 21.61 28 15.01 28 8.39 22.63 3 16.01 3zm6.6 17.03c-.28.78-1.62 1.43-2.28 1.52-.58.08-1.31.12-2.12-.13-.49-.15-1.12-.36-1.93-.7-3.39-1.46-5.6-4.86-5.77-5.09-.17-.22-1.37-1.82-1.37-3.47 0-1.65.87-2.46 1.18-2.8.31-.33.68-.42.9-.42h.65c.21 0 .49-.08.76.58.28.68.95 2.33 1.03 2.5.08.17.14.37.03.59-.11.22-.17.36-.34.55-.17.19-.35.42-.5.57-.17.17-.34.35-.15.68.2.33.88 1.45 1.89 2.35 1.3 1.16 2.39 1.52 2.72 1.69.33.17.53.14.72-.08.2-.22.82-.95 1.04-1.28.22-.33.44-.28.73-.17.3.11 1.88.89 2.2 1.05.33.17.54.25.62.39.08.14.08.8-.2 1.58z" />
          </svg>
          Send on WhatsApp
        </button>
        <a
          href={site.phoneHref}
          className="bg-brass-gradient inline-flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.01]"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
            <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.4 21 3 13.6 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
          </svg>
          Call Now
        </a>
      </div>
    </form>
  );
}
