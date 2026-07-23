export const site = {
  name: "Chouhan Tours & Travels",
  tagline: "Your Trusted Travel Partner",
  description:
    "Premium car rental and tour services across Madhya Pradesh. Book Sedans, SUVs, Innova, and Tempo Travellers for local, outstation, and pilgrimage journeys.",
  phone: "+91 92433 30326",
  phoneHref: "tel:+919243330326",
  whatsapp: "919243330326",
  email: "chouhantravels178@gmail.com",
  emailHref: "mailto:chouhantravels178@gmail.com",
  address: "Madhya Pradesh, India",
  city: "Indore & Ujjain",
  years: "15+",
  url: "https://www.chouhantourandtravels.in",
  keywords: [
    "Chouhan Tours and Travels",
    "taxi service Indore",
    "taxi service Ujjain",
    "cab booking Madhya Pradesh",
    "Ujjain darshan taxi",
    "Indore airport taxi",
    "Omkareshwar tour package",
    "Tempo Traveller hire MP",
    "Innova rental Indore",
    "outstation cab Ujjain",
  ],
} as const;

export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/packages", label: "Packages" },
  { href: "/contact", label: "Contact" },
] as const;

export const seoPages = [
  {
    path: "/",
    title: "Home",
    description: site.description,
    changeFrequency: "weekly" as const,
    priority: 1,
  },
  {
    path: "/about",
    title: "About",
    description: `Learn about ${site.name} — trusted car rental and tour services across Madhya Pradesh since 2012.`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    path: "/services",
    title: "Services",
    description: `Car rental, airport transfers, outstation cabs, and pilgrimage taxi services by ${site.name}.`,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  },
  {
    path: "/packages",
    title: "Packages",
    description: `Pilgrimage and sightseeing tour packages across Ujjain, Omkareshwar, Mandu, Bhopal and more with ${site.name}.`,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  },
  {
    path: "/contact",
    title: "Contact",
    description: `Contact ${site.name} for cab bookings, airport transfers, and tour packages across Madhya Pradesh.`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  },
] as const;
