import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { fleet, taxiServices } from "@/lib/data";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Taxi & Cab Services in Indore and Ujjain",
  description: `Car rental, airport transfers, outstation cabs, and pilgrimage taxi services by ${site.name}.`,
  alternates: { canonical: "/services" },
  openGraph: {
    title: `Services | ${site.name}`,
    description: `Airport taxi, local cabs, outstation trips, and vehicle hire across Madhya Pradesh.`,
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Every Ride,"
        highlight="Covered"
        description="From airport transfers to outstation tours and pilgrimage support — book the right vehicle for every journey."
      />

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="font-display text-3xl font-semibold text-ink">
            Taxi & Tour Services
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {taxiServices.map((service) => (
              <div
                key={service.title}
                className="flex h-full flex-col rounded-2xl border border-line bg-sand/50 p-6"
              >
                <h3 className="font-display text-xl font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 flex-grow text-sm text-muted">{service.desc}</p>
                <a
                  href={waLink(
                    `Hello ${site.name}, I want to book ${service.title}. Please share details.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brass-gradient mt-5 inline-flex self-start rounded-full px-4 py-2 text-xs font-semibold text-white"
                >
                  BOOK →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="font-display text-3xl font-semibold text-ink">
            Vehicle Options & Rates
          </h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-cream">
            <table className="w-full text-left text-sm">
              <thead className="bg-ink text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Vehicle</th>
                  <th className="px-4 py-3 font-semibold">Capacity</th>
                  <th className="px-4 py-3 font-semibold">From</th>
                  <th className="px-4 py-3 font-semibold" />
                </tr>
              </thead>
              <tbody>
                {fleet.map((vehicle) => (
                  <tr key={vehicle.name} className="border-t border-line">
                    <td className="px-4 py-3 font-medium text-ink">
                      {vehicle.name}
                    </td>
                    <td className="px-4 py-3 text-muted">{vehicle.seats}</td>
                    <td className="px-4 py-3 font-semibold text-brass">
                      {vehicle.price}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <a
                        href={waLink(
                          `Hello ${site.name}, I want to book ${vehicle.name}. Please share details.`,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-brass hover:underline"
                      >
                        Book
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-muted">
            Tolls, parking, and state taxes are extra as applicable. Final quote
            confirmed on WhatsApp based on route and date.
          </p>
        </div>
      </section>
    </>
  );
}
