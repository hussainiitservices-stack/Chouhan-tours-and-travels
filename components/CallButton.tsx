import { site } from "@/lib/site";

export function CallButton() {
  return (
    <a
      href={site.phoneHref}
      aria-label={`Call ${site.name} at ${site.phone}`}
      className="wa-pulse fixed bottom-[7.5rem] right-4 z-[1000] flex h-14 w-14 items-center justify-center rounded-full bg-brass text-white shadow-lg transition hover:scale-105 sm:right-8"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden>
        <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.4 21 3 13.6 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
      </svg>
    </a>
  );
}
