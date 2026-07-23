"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/data";
import { site, waLink } from "@/lib/site";

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  const slide = heroSlides[index];

  return (
    <section className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-ink">
      {heroSlides.map((item, i) => (
        <Image
          key={item.src}
          src={item.src}
          alt={item.label}
          fill
          priority={i === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="hero-scrim absolute inset-0" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-24 pt-32 md:justify-center md:px-6 md:pb-16">
        <p className="animate-fade-up mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-brass-light">
          {site.city} · Madhya Pradesh
        </p>
        <h1 className="animate-fade-up-delay font-display text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl">
          Chouhan
          <span className="mt-1 block text-brass-gradient">Tours & Travels</span>
        </h1>
        <p className="animate-fade-up-delay-2 mt-5 max-w-lg text-base leading-relaxed text-white/80 md:text-lg">
          Experience premium travel with comfortable rides, professional
          drivers, and unforgettable journeys across India.
        </p>
        <div className="animate-fade-up-delay-2 mt-8 flex flex-wrap gap-3">
          <Link
            href="/services"
            className="bg-brass-gradient rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.03]"
          >
            View Services
          </Link>
          <a
            href={waLink(`Hello ${site.name}, I want to book a vehicle.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            Book on WhatsApp
          </a>
        </div>
        <p className="mt-8 text-sm font-medium tracking-wide text-white/70">
          {slide.label}
        </p>
        <div className="mt-3 flex gap-2">
          {heroSlides.map((item, i) => (
            <button
              key={item.src}
              type="button"
              aria-label={`Show ${item.label}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-8 bg-brass-light" : "w-3 bg-white/35"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
