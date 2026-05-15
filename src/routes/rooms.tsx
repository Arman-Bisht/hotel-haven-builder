import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHero, CtaStrip } from "@/components/Shared";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomBalcony from "@/assets/room-balcony.jpg";
import roomFamily from "@/assets/room-family.jpg";
import {
  Wifi, Snowflake, Tv, Coffee, BellRing, Mountain, Users, Briefcase, Bath,
  Wind, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms & Suites — CM Palace Hotel, Ner Chowk" },
      { name: "description", content: "Premium Deluxe, Balcony Mountain View and Family Suite rooms at CM Palace Hotel. AC, Wi-Fi, room service, mountain views." },
      { property: "og:title", content: "Rooms & Suites — CM Palace Hotel" },
      { property: "og:description", content: "Comfortable rooms designed for every kind of guest." },
      { property: "og:image", content: roomDeluxe },
    ],
  }),
  component: RoomsPage,
});

const rooms = [
  {
    img: roomDeluxe,
    name: "Premium Deluxe Room",
    tag: "Most Popular",
    price: "₹2,200",
    desc: "Spacious king-size bed room with all modern comforts — perfect for couples and business travelers.",
    features: [
      { icon: Bath, l: "King-size bed" },
      { icon: Snowflake, l: "Air Conditioning" },
      { icon: Tv, l: "Flat-screen TV" },
      { icon: Wifi, l: "Free Wi-Fi" },
      { icon: BellRing, l: "Room Service" },
      { icon: Coffee, l: "Tea/Coffee Maker" },
    ],
  },
  {
    img: roomBalcony,
    name: "Deluxe Room with Balcony",
    tag: "Mountain View",
    price: "₹2,800",
    desc: "Wake up to the Himalayas. Private balcony, panoramic mountain views, and a workspace for digital nomads.",
    features: [
      { icon: Mountain, l: "Mountain-facing balcony" },
      { icon: Briefcase, l: "Workspace area" },
      { icon: Snowflake, l: "Air Conditioning" },
      { icon: Wifi, l: "High-speed Wi-Fi" },
      { icon: Tv, l: "Flat-screen TV" },
      { icon: Wind, l: "Soundproofed" },
    ],
  },
  {
    img: roomFamily,
    name: "Family Suite",
    tag: "New · Best for Groups",
    price: "₹3,800",
    desc: "Generously sized for 4–5 adults with multiple bedding options and a separate seating area for the family.",
    features: [
      { icon: Users, l: "Sleeps 4–5 adults" },
      { icon: Bath, l: "Multiple bedding options" },
      { icon: Snowflake, l: "Air Conditioning" },
      { icon: Wifi, l: "Free Wi-Fi" },
      { icon: BellRing, l: "Priority Room Service" },
      { icon: Tv, l: "Family seating area" },
    ],
  },
];

const amenities = [
  "Free Wi-Fi", "Free Parking", "Air Conditioning", "Business Centre", "Family Rooms",
  "Pure Vegetarian Restaurant", "Jain Food Available", "24/7 Front Desk", "Security & CCTV",
  "Room Service", "Elevator", "Paid Breakfast", "Soundproof Rooms", "Mountain View Rooms",
  "Daily Housekeeping", "Airport Shuttle Support", "Accessible Property", "Flat-screen TV",
];

function RoomsPage() {
  return (
    <>
      <PageHero eyebrow="Rooms & Suites" title="Our Rooms" subtitle="Comfort designed for every kind of guest." image={roomBalcony} />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {rooms.map((r, i) => (
            <Reveal key={r.name}>
              <article className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className="relative group overflow-hidden rounded-2xl shadow-warm">
                  <img src={r.img} alt={r.name} width={1024} height={768} loading="lazy"
                    className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700" />
                  <span className="absolute top-5 left-5 bg-forest text-white text-xs px-4 py-2 rounded-full font-medium">
                    {r.tag}
                  </span>
                </div>
                <div>
                  <p className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-3">Room {i + 1}</p>
                  <h2 className="font-display text-3xl md:text-4xl mb-3">{r.name}</h2>
                  <p className="text-charcoal/70 leading-relaxed mb-6">{r.desc}</p>
                  <p className="font-display text-2xl text-gold mb-6">{r.price} <span className="text-sm text-charcoal/60 font-sans">/ night</span></p>
                  <ul className="grid grid-cols-2 gap-3 mb-7">
                    {r.features.map((f) => (
                      <li key={f.l} className="flex items-center gap-2 text-sm text-charcoal/80">
                        <f.icon className="h-4 w-4 text-gold shrink-0" />{f.l}
                      </li>
                    ))}
                  </ul>
                  <Link to="/booking"
                    className="inline-flex items-center gap-2 rounded-full gradient-gold text-white px-7 py-3 text-sm font-semibold shadow-warm hover:scale-105 transition-transform">
                    Book This Room <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-3">All Amenities</p>
              <h2 className="font-display text-3xl md:text-4xl">Included With Every Room</h2>
            </div>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {amenities.map((a) => (
              <span key={a} className="bg-ivory border border-border rounded-full px-5 py-2.5 text-sm text-charcoal/80 hover:border-gold hover:text-gold transition-colors">
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
