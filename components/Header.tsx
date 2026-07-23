"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !isHome || scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-cream/95 shadow-[0_1px_0_var(--line)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link
          href="/"
          className={`shrink-0 rounded-xl px-2 py-1.5 transition ${
            solid ? "bg-transparent" : "bg-white shadow-md"
          }`}
        >
          <Image
            src="/logo.png"
            alt="Chouhan Tours & Travels"
            width={220}
            height={104}
            priority
            className="h-11 w-auto md:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-xs font-semibold uppercase tracking-[0.16em] transition ${
                  solid
                    ? active
                      ? "text-brass"
                      : "text-ink/70 hover:text-ink"
                    : active
                      ? "text-brass-light"
                      : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="bg-brass-gradient rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition hover:scale-[1.03]"
          >
            Book Now
          </Link>
        </nav>
      </div>

      <div
        className={`no-scrollbar overflow-x-auto md:hidden ${
          solid ? "border-t border-line bg-cream/95" : "bg-black/25 backdrop-blur-sm"
        }`}
      >
        <div className="flex min-w-max gap-1 px-3 py-2">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider ${
                  active
                    ? "bg-brass text-white"
                    : solid
                      ? "text-ink/70"
                      : "text-white/85"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
