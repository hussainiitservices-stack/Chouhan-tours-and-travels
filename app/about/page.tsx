import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { aboutStats, features } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us | Trusted Travel Partner in Madhya Pradesh",
  description: `Learn about ${site.name} — trusted car rental and tour services across Madhya Pradesh since 2012.`,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About ${site.name}`,
    description: `Trusted car rental and tour services across Madhya Pradesh since 2012.`,
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Driving Excellence"
        highlight="Since 2012"
        description={`${site.name} started with a simple vision — to provide safe, comfortable, and affordable travel solutions across Madhya Pradesh and beyond.`}
      />

      <section className="bg-cream py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 px-4 lg:grid-cols-4 md:px-6">
          {aboutStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-line bg-sand/50 p-6 text-center transition hover:-translate-y-1"
            >
              <p className="font-display text-3xl font-semibold text-ink">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sand py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brass">
              Our Story
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-ink">
              Built on trust across Madhya Pradesh
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
              From Indore–Bhopal routes to sacred circuits around Ujjain,
              Omkareshwar, and Maheshwar, {site.name} helps families, pilgrims,
              and business travelers move with confidence. Clean vehicles,
              verified drivers, and transparent pricing are at the heart of every
              booking.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
              Whether you need a sedan for airport transfer, an Innova for family
              darshan, or a Tempo Traveller for group travel — we tailor every
              trip to your schedule and comfort.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-line bg-cream p-5"
              >
                <h3 className="font-display text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
