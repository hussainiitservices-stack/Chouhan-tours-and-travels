import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} for cab bookings, airport transfers, and tour packages across Madhya Pradesh.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Plan Your Next"
        highlight="Journey"
        description="Tell us your dates and destination — we'll craft a comfortable trip with the right vehicle and transparent pricing."
      />

      <section className="bg-cream py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[0.9fr_1.1fr] md:px-6">
          <div className="space-y-6">
            <div className="rounded-2xl border border-line bg-sand/50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">
                Call / WhatsApp
              </p>
              <a
                href={site.phoneHref}
                className="mt-2 block font-display text-2xl font-semibold text-ink hover:text-brass"
              >
                {site.phone}
              </a>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={site.phoneHref}
                  className="bg-brass-gradient inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-white"
                >
                  Call Now
                </a>
                <a
                  href={waLink(`Hello ${site.name}, I want to book a trip.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-xs font-semibold text-white"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-sand/50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">
                Email
              </p>
              <a
                href={site.emailHref}
                className="mt-2 block text-lg font-semibold text-ink hover:text-brass"
              >
                {site.email}
              </a>
            </div>

            <div className="rounded-2xl border border-line bg-sand/50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">
                Service Area
              </p>
              <p className="mt-2 text-lg font-semibold text-ink">
                {site.city}, Madhya Pradesh
              </p>
              <p className="mt-2 text-sm text-muted">
                Local city tours, airport transfers, and outstation travel across
                India.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
