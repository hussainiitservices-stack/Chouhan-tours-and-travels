"use client";

import { useState } from "react";
import { site, waLink } from "@/lib/site";

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(
    "Hello, I would like to inquire about your travel services.",
  );

  return (
    <>
      {open && (
        <div className="fixed bottom-28 right-4 z-[1000] w-[min(92vw,320px)] overflow-hidden rounded-2xl border border-line bg-white shadow-2xl sm:right-8">
          <div className="bg-[#075E54] px-4 py-3 text-white">
            <p className="text-sm font-semibold">{site.name}</p>
            <p className="text-xs text-white/80">Typically replies instantly</p>
          </div>
          <div className="bg-[#ECE5DD] px-3 py-4">
            <div className="max-w-[85%] rounded-lg bg-white px-3 py-2 text-sm text-ink shadow-sm">
              Hello! How can we assist you with your travel plans?
            </div>
          </div>
          <form
            className="flex items-center gap-2 border-t border-line p-2"
            onSubmit={(e) => {
              e.preventDefault();
              window.open(waLink(message), "_blank", "noopener,noreferrer");
            }}
          >
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-w-0 flex-1 rounded-full border border-line bg-sand/50 px-3 py-2 text-sm outline-none focus:border-brass"
              aria-label="WhatsApp message"
            />
            <button
              type="submit"
              className="rounded-full bg-[#25D366] px-3 py-2 text-xs font-semibold text-white"
            >
              Send
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        aria-label="Chat on WhatsApp"
        onClick={() => setOpen((v) => !v)}
        className="wa-pulse fixed bottom-8 right-4 z-[1000] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg sm:right-8"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current" aria-hidden>
          <path d="M16.01 3C9.39 3 4 8.39 4 15.01c0 2.31.66 4.47 1.81 6.3L4 29l7.9-1.76A11.96 11.96 0 0 0 16.01 27C22.63 27 28 21.61 28 15.01 28 8.39 22.63 3 16.01 3zm6.6 17.03c-.28.78-1.62 1.43-2.28 1.52-.58.08-1.31.12-2.12-.13-.49-.15-1.12-.36-1.93-.7-3.39-1.46-5.6-4.86-5.77-5.09-.17-.22-1.37-1.82-1.37-3.47 0-1.65.87-2.46 1.18-2.8.31-.33.68-.42.9-.42h.65c.21 0 .49-.08.76.58.28.68.95 2.33 1.03 2.5.08.17.14.37.03.59-.11.22-.17.36-.34.55-.17.19-.35.42-.5.57-.17.17-.34.35-.15.68.2.33.88 1.45 1.89 2.35 1.3 1.16 2.39 1.52 2.72 1.69.33.17.53.14.72-.08.2-.22.82-.95 1.04-1.28.22-.33.44-.28.73-.17.3.11 1.88.89 2.2 1.05.33.17.54.25.62.39.08.14.08.8-.2 1.58z" />
        </svg>
      </button>
    </>
  );
}
