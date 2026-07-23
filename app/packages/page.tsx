import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { packages, routes } from "@/lib/data";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tour Packages | Ujjain, Omkareshwar, Mandu & More",
  description: `Pilgrimage and sightseeing tour packages across Ujjain, Omkareshwar, Mandu, Bhopal and more with ${site.name}.`,
  alternates: { canonical: "/packages" },
  openGraph: {
    title: `Tour Packages | ${site.name}`,
    description: `Ujjain darshan, Omkareshwar, Mandu, Sanchi, Pachmarhi and more with comfortable vehicles.`,
    url: "/packages",
  },
};

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Tour Packages"
        title="Curated Trips Across"
        highlight="Madhya Pradesh"
        description="Handpicked darshan and sightseeing packages with comfortable vehicles and experienced local drivers."
      />

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg) => (
              <article
                key={pkg.title}
                className="group overflow-hidden rounded-2xl border border-line bg-sand/40"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={pkg.img}
                    alt={pkg.title}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h2 className="font-display text-xl font-semibold text-ink">
                    {pkg.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted">{pkg.route}</p>
                  <a
                    href={waLink(
                      `Hello ${site.name}, I am interested in the ${pkg.title} package. Please share details.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brass-gradient mt-5 inline-flex rounded-full px-4 py-2 text-xs font-semibold text-white"
                  >
                    Enquire on WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-16">
        <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
          <h2 className="font-display text-3xl font-semibold text-ink">
            Popular Routes
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
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
    </>
  );
}
