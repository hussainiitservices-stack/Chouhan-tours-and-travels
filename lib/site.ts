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
