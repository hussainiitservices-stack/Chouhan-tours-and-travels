import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const services = [
  "Sedan Rental",
  "SUV Rental",
  "Innova Hire",
  "Tempo Traveller",
  "Airport Transfer",
  "Local Tours",
];

const quick = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/packages", label: "Packages" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3 md:px-6">
        <div>
          <Link
            href="/"
            className="inline-flex rounded-xl bg-white px-2 py-1.5"
          >
            <Image
              src="/logo.png"
              alt="Chouhan Tours & Travels"
              width={220}
              height={104}
              className="h-12 w-auto"
            />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
            Your trusted travel partner for comfortable and safe journeys across
            Madhya Pradesh. Premium vehicles, professional drivers.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-display text-lg font-semibold">Quick Links</h4>
          <div className="grid grid-cols-2 gap-y-2">
            {quick.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/70 transition hover:text-brass-light"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
          <div>
            <h4 className="mb-4 font-display text-lg font-semibold">Our Services</h4>
            {services.map((item) => (
              <p key={item} className="py-1 text-sm text-white/70">
                {item}
              </p>
            ))}
          </div>
          <div>
            <h4 className="mb-4 font-display text-lg font-semibold">Contact Us</h4>
            <a
              href={site.phoneHref}
              className="block py-1.5 text-sm text-white/70 transition hover:text-brass-light"
            >
              {site.phone}
            </a>
            <a
              href={site.emailHref}
              className="block py-1.5 text-sm text-white/70 transition hover:text-brass-light"
            >
              {site.email}
            </a>
            <p className="mt-2 text-sm text-white/70">{site.address}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-white/50">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p className="mt-1">
          Designed and Developed by{" "}
          <a
            href="https://hussainiitservices.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brass-light transition hover:underline"
          >
            Hussaini IT Services
          </a>
        </p>
      </div>
    </footer>
  );
}
