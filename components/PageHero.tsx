import Link from "next/link";

export function PageHero({
  eyebrow,
  title,
  highlight,
  description,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink pt-28 pb-16 md:pt-32 md:pb-20">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 20% 20%, rgba(199,146,42,0.25), transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(22,48,64,0.9), transparent 45%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 text-center md:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brass-light">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-white md:text-5xl">
          {title}{" "}
          {highlight ? (
            <span className="text-brass-gradient">{highlight}</span>
          ) : null}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
          {description}
        </p>
        <Link
          href="/contact"
          className="bg-brass-gradient mt-8 inline-flex rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.03]"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
}
