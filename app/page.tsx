import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import {
  features,
  fleet,
  packages,
  routes,
  taxiServices,
  testimonials,
  trustPoints,
  ujjainPlaces,
} from "@/lib/data";
import { site, waLink } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="border-b border-line bg-cream">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-line md:grid-cols-4">
          {trustPoints.map((label) => (
            <div
              key={label}
              className="flex items-center justify-center gap-2 px-4 py-5 text-center"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brass" />
              <span className="text-sm font-bold text-ink">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sand py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brass">
              Our Fleet
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-ink md:text-4xl">
              Featured <span className="text-brass-gradient">Vehicles</span>
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {fleet.map((vehicle) => (
              <article
                key={vehicle.name}
                className="group overflow-hidden rounded-2xl border border-line bg-cream transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] bg-ink-soft">
                  <Image
                    src={vehicle.img}
                    alt={vehicle.name}
                    fill
                    sizes="(max-width:768px) 100vw, 20vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {vehicle.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{vehicle.seats}</p>
                  <p className="mt-2 text-sm font-bold text-brass">
                    {vehicle.price}
                  </p>
                  <a
                    href={waLink(
                      `Hello ${site.name}, I want to book ${vehicle.name}. Please share details.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brass-gradient mt-4 inline-flex rounded-full px-4 py-2 text-xs font-semibold text-white transition hover:scale-105"
                  >
                    BOOK →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brass">
              Why Choose Us
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-ink md:text-4xl">
              Travel with <span className="text-brass-gradient">Confidence</span>
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-line bg-sand/60 p-6"
              >
                <h3 className="font-display text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brass">
                Tour Packages
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-ink md:text-4xl">
                Popular <span className="text-brass-gradient">Journeys</span>
              </h2>
            </div>
            <Link
              href="/packages"
              className="text-sm font-semibold text-brass hover:underline"
            >
              View all packages →
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {packages.slice(0, 4).map((pkg) => (
              <article
                key={pkg.title}
                className="group overflow-hidden rounded-2xl border border-line bg-cream"
              >
                <div className="relative aspect-[16/11]">
                  <Image
                    src={pkg.img}
                    alt={pkg.title}
                    fill
                    sizes="(max-width:768px) 100vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {pkg.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{pkg.route}</p>
                  <a
                    href={waLink(
                      `Hello ${site.name}, I am interested in the ${pkg.title} package. Please share details.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex text-sm font-semibold text-brass hover:underline"
                  >
                    Enquire →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brass">
              What We Offer
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-ink md:text-4xl">
              Taxi <span className="text-brass-gradient">Services</span>
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {taxiServices.map((service) => (
              <div
                key={service.title}
                className="flex h-full flex-col rounded-2xl border border-line bg-sand/50 p-5"
              >
                <h3 className="font-display text-lg font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 flex-grow text-sm text-muted">{service.desc}</p>
                <a
                  href={waLink(
                    `Hello ${site.name}, I want to book ${service.title}. Please share details.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brass-gradient mt-5 inline-flex self-start rounded-full px-4 py-2 text-xs font-semibold text-white transition hover:scale-105"
                >
                  BOOK →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
            Hire a Taxi in {site.city} for All Your Travel Needs
          </h2>
          <p className="mt-3 text-muted">
            Looking for reliable taxi services across Madhya Pradesh? We offer
            airport transfers, local city travel, outstation trips, and
            pilgrimage packages with well-maintained AC vehicles.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Airport Transfer",
                points: [
                  "Convenient pick-up and drop-off",
                  "Timely service for every flight",
                  "Comfortable AC vehicles",
                ],
              },
              {
                title: "Local City Use",
                points: [
                  "Explore temples and markets",
                  "Hourly and full-day packages",
                  "Experienced local drivers",
                ],
              },
              {
                title: "Outstation Trips",
                points: [
                  "One-way and round-trip options",
                  "Transparent per-km pricing",
                  "Ideal for families and groups",
                ],
              },
            ].map((block) => (
              <div key={block.title}>
                <h3 className="text-lg font-bold text-ink">{block.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {block.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm font-bold text-ink">
            Travel Smart, Travel Safe!
          </p>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="mb-6 text-center text-xs font-bold uppercase tracking-[0.22em] text-ink">
            Famous Places to Explore in Ujjain
          </h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3 lg:grid-cols-4">
            {ujjainPlaces.map((place) => (
              <p key={place} className="text-sm text-muted">
                · {place}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brass">
              Popular Routes
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-ink">
              Where We <span className="text-brass-gradient">Go</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {routes.map((route) => (
              <a
                key={route}
                href={waLink(
                  `Hello ${site.name}, I need a cab for ${route}. Please share details.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-line bg-cream px-4 py-2 text-sm font-medium text-ink transition hover:border-brass hover:text-brass"
              >
                {route}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brass">
              Testimonials
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-ink md:text-4xl">
              What Our Guests <span className="text-brass-gradient">Say</span>
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote
                key={item.name}
                className="rounded-2xl border border-line bg-sand/50 p-6"
              >
                <p className="text-brass">
                  {"★".repeat(item.stars)}
                  {"☆".repeat(5 - item.stars)}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  “{item.text}”
                </p>
                <footer className="mt-4 text-sm font-semibold text-ink">
                  {item.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 md:flex-row md:items-center md:px-6">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-brass-light">
              Need Further Assistance?
            </p>
            <p className="mt-2 text-sm text-white/75">
              We&apos;re here to help!
              <br />
              Reach out anytime and we&apos;ll happily answer your questions.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <p className="text-sm text-white/70">Call us at:</p>
            <a
              href={site.phoneHref}
              className="bg-brass-gradient rounded-full px-6 py-3 text-sm font-semibold text-white"
            >
              {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
