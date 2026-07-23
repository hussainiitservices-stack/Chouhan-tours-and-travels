export const heroSlides = [
  { src: "/vehicles/sedan.png", label: "Luxury Sedans" },
  { src: "/vehicles/innova.png", label: "Premium SUVs" },
  { src: "/vehicles/ertiga.png", label: "Ertiga" },
  { src: "/vehicles/tavera.png", label: "Tavera" },
  { src: "/vehicles/traveller.jpg", label: "Tempo Travellers" },
] as const;

export const trustPoints = [
  "Always On Time",
  "Free Cancellation",
  "Best Offers",
  "Lowest Fares",
] as const;

export const fleet = [
  {
    name: "Sedan",
    seats: "4 Passengers",
    price: "₹12/km",
    img: "/vehicles/sedan.png",
  },
  {
    name: "Ertiga",
    seats: "7 Passengers",
    price: "₹18/km",
    img: "/vehicles/ertiga.png",
  },
  {
    name: "Tavera",
    seats: "8–10 Passengers",
    price: "₹20/km",
    img: "/vehicles/tavera.png",
  },
  {
    name: "Innova Crysta",
    seats: "7 Passengers",
    price: "₹18/km",
    img: "/vehicles/innova.png",
  },
  {
    name: "Tempo Traveller",
    seats: "14–26 Seater",
    price: "₹22/km",
    img: "/vehicles/traveller.jpg",
  },
] as const;

export const features = [
  {
    title: "Safe & Reliable",
    desc: "GPS-tracked vehicles with experienced, verified drivers.",
  },
  {
    title: "24/7 Available",
    desc: "Round-the-clock booking and customer support.",
  },
  {
    title: "Wide Coverage",
    desc: "Serving Indore, Ujjain, Dewas, Bhopal and major tourist routes.",
  },
  {
    title: "Best Prices",
    desc: "Competitive rates with transparent billing — no hidden charges.",
  },
] as const;

export const taxiServices = [
  {
    title: "Airport Taxi",
    desc: "Hire taxi for airport pickup and drop.",
  },
  {
    title: "Local Taxi",
    desc: "Hire taxi for local travel within city limits.",
  },
  {
    title: "Outstation Cabs",
    desc: "Hire taxi for outstation travel across Madhya Pradesh.",
  },
  {
    title: "Roundtrip Cabs",
    desc: "Hire taxi for roundtrip travel.",
  },
  {
    title: "One Way Cabs",
    desc: "Hire taxi for one-way drop or pickup.",
  },
  {
    title: "VIP Darshan",
    desc: "Special taxi services for VIP darshan.",
  },
  {
    title: "Poojan Facilities",
    desc: "Special taxi services for poojan and rituals.",
  },
] as const;

export const packages = [
  {
    title: "Ujjain Darshan Tour",
    route: "Mahakal · Harsiddhi · Kal Bhairav · Ram Ghat",
    img: "/packages/ujjain.jpg",
  },
  {
    title: "Indore Airport – Ujjain",
    route: "Airport pickup · Ujjain darshan · Drop back",
    img: "/packages/indore-airport.jpg",
  },
  {
    title: "Omkareshwar Package",
    route: "Ujjain · Omkareshwar · Maheshwar",
    img: "/packages/omkareshwar.jpg",
  },
  {
    title: "Maheshwar Tour",
    route: "Ujjain · Maheshwar fort & ghats",
    img: "/packages/maheshwar.jpg",
  },
  {
    title: "Mandu Heritage",
    route: "Ujjain / Indore · Mandu forts & palaces",
    img: "/packages/mandu.jpg",
  },
  {
    title: "Bhopal & Sanchi",
    route: "Ujjain · Bhopal · Sanchi Stupa",
    img: "/packages/sanchi.jpg",
  },
  {
    title: "Dewas Darshan",
    route: "Dewas temples & local sightseeing",
    img: "/packages/dewas.jpg",
  },
  {
    title: "Pachmarhi Hills",
    route: "Indore / Bhopal · Pachmarhi weekend escape",
    img: "/packages/pachmarhi.jpg",
  },
] as const;

export const routes = [
  "Local City Tours",
  "Ujjain to Airport",
  "Ujjain to Bhopal",
  "Ujjain to Indore",
  "Ujjain to Omkareshwar",
  "Indore to Bhopal",
  "Dewas to Nemawar",
  "All over India",
] as const;

export const ujjainPlaces = [
  "Mahakaleshwar Temple",
  "Bada Ganesh Temple",
  "Maa Harsiddhi Temple",
  "Shipra River (Ram Ghat)",
  "Mangalnath Temple",
  "Kal Bhairav Temple",
  "Gadkalika Temple",
  "Chintaman Ganesh Temple",
  "Jantar-Mantar (Vedhshala)",
  "Mahakal Lok",
  "Sandipani Ashram",
  "Vikram Kirti Mandir",
] as const;

export const testimonials = [
  {
    name: "Rajesh Kumar",
    text: "Excellent service. The driver was punctual and the car was spotless. Highly recommended for Ujjain darshan.",
    stars: 5,
  },
  {
    name: "Priya Sharma",
    text: "Best travel experience from Indore. Comfortable Innova for our family trip to Mahakal.",
    stars: 5,
  },
  {
    name: "Amit Patel",
    text: "Professional service with fair pricing. Will book again for airport transfers.",
    stars: 4,
  },
] as const;

export const aboutStats = [
  { value: "15+", label: "Years Experience" },
  { value: "5000+", label: "Happy Travelers" },
  { value: "50+", label: "Vehicles" },
  { value: "98%", label: "Satisfaction" },
] as const;
