import { createFileRoute } from "@tanstack/react-router";
import {
  Phone, MapPin, Star, Leaf, HandHeart, Mountain, Wifi, Car, Snowflake, Briefcase, Users,
  UtensilsCrossed, Clock, Camera, BellRing, ArrowUpDown, Coffee, Volume2, Sparkles, Bus,
  Accessibility, Tv, Facebook, Instagram, Mail, Send, MessageCircle,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Navbar } from "@/components/Navbar";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomBalcony from "@/assets/room-balcony.jpg";
import roomFamily from "@/assets/room-family.jpg";
import diningImg from "@/assets/dining.jpg";
import rewalsarImg from "@/assets/rewalsar.jpg";
import shikariImg from "@/assets/shikari.jpg";
import mandiImg from "@/assets/mandi.jpg";
import sundernagarImg from "@/assets/sundernagar.jpg";
import highwayImg from "@/assets/highway.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const PHONE = "+91 97366 00024";
const TEL = "tel:+919736600024";
const WA = "https://wa.me/919736600024";

const rooms = [
  {
    img: roomDeluxe,
    name: "Premium Deluxe Room",
    tag: "Most Popular",
    features: ["King-size bed", "Air Conditioning", "Flat-screen TV", "Attached washroom", "Free Wi-Fi", "Room Service"],
  },
  {
    img: roomBalcony,
    name: "Deluxe Room with Balcony",
    tag: "Mountain View",
    features: ["Mountain-facing balcony", "Comfortable interiors", "Family-friendly layout", "Workspace area", "Free Wi-Fi", "Daily housekeeping"],
  },
  {
    img: roomFamily,
    name: "Family Suite",
    tag: "New · Best for Groups",
    features: ["Sleeps 4–5 adults", "Multiple bedding options", "Group stay comfort", "Family seating area", "Spacious washroom", "Room Service"],
  },
];

const amenities = [
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: Car, label: "Free Parking" },
  { icon: Snowflake, label: "Air Conditioning" },
  { icon: Briefcase, label: "Business Centre" },
  { icon: Users, label: "Family Rooms" },
  { icon: UtensilsCrossed, label: "Pure Vegetarian Restaurant" },
  { icon: HandHeart, label: "Jain Food Available" },
  { icon: Clock, label: "24/7 Front Desk" },
  { icon: Camera, label: "Security & CCTV" },
  { icon: BellRing, label: "Room Service" },
  { icon: ArrowUpDown, label: "Elevator" },
  { icon: Coffee, label: "Paid Breakfast" },
  { icon: Volume2, label: "Soundproof Rooms" },
  { icon: Mountain, label: "Mountain View Rooms" },
  { icon: Sparkles, label: "Daily Housekeeping" },
  { icon: Bus, label: "Airport Shuttle Support" },
  { icon: Accessibility, label: "Accessible Property" },
  { icon: Tv, label: "Flat-screen TV" },
];

const reviews = [
  { quote: "Best place for Jain people. Jain food available and rooms are great.", name: "Verified Guest" },
  { quote: "Enjoyed meal and New Year party with family and friends.", name: "Verified Guest" },
  { quote: "Neat rooms, spacious bathrooms and cooperative staff.", name: "Verified Guest" },
];

const attractions = [
  { img: rewalsarImg, name: "Rewalsar Lake", desc: "Sacred lake revered by Hindus, Sikhs & Buddhists. Around 30 km from the hotel." },
  { img: shikariImg, name: "Shikari Mata Temple", desc: "Hilltop temple offering panoramic views of the Himalayan ranges." },
  { img: mandiImg, name: "Mandi Town", desc: "The 'Varanasi of Hills' — rich in temples, festivals and culture." },
  { img: sundernagarImg, name: "Sundernagar", desc: "Scenic lakeside town ideal for a relaxed day trip." },
  { img: highwayImg, name: "Himalayan Mountain Routes", desc: "Breathtaking highway drives through the Kullu–Manali corridor." },
];

function Home() {
  return (
    <div className="bg-ivory text-charcoal overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center justify-center text-center text-white">
        <img
          src={heroImg}
          alt="CM Palace Hotel against the Himalayan mountains at golden hour"
          width={1920}
          height={1088}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />

        <div className="relative z-10 max-w-4xl px-6 py-32">
          <Reveal>
            <p className="font-display italic text-gold-soft text-lg md:text-xl mb-5 tracking-wide">
              Ner Chowk, Himachal Pradesh
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
              Experience Comfortable Family Stays<br />
              <span className="text-gold-soft">& Pure Vegetarian Hospitality</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
              Where Mountains Meet Comfort — modern rooms, warm hospitality and wholesome vegetarian dining along the scenic Mandi highway.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#rooms"
                className="inline-flex items-center justify-center rounded-full gradient-gold text-white px-8 py-4 text-base font-semibold shadow-warm hover:scale-105 transition-transform"
              >
                Explore Rooms
              </a>
              <a
                href={TEL}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/80 text-white px-8 py-4 text-base font-semibold hover:bg-white hover:text-charcoal transition-colors"
              >
                <Phone className="h-4 w-4" /> Call to Book: {PHONE}
              </a>
            </div>
          </Reveal>
          <Reveal delay={480}>
            <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/85">
              <span className="flex items-center gap-1.5"><Star className="h-4 w-4 text-gold-soft fill-gold-soft" /> 4.5/5 Google Rating</span>
              <span className="flex items-center gap-1.5"><Leaf className="h-4 w-4 text-gold-soft" /> 100% Pure Vegetarian</span>
              <span className="flex items-center gap-1.5"><HandHeart className="h-4 w-4 text-gold-soft" /> Jain Food Available</span>
              <span className="flex items-center gap-1.5"><Mountain className="h-4 w-4 text-gold-soft" /> Mountain View Rooms</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="relative">
              <img
                src={aboutImg}
                alt="Warm, elegant lobby of CM Palace Hotel"
                width={1024}
                height={1024}
                loading="lazy"
                className="rounded-2xl shadow-warm w-full h-[480px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 hidden md:block bg-forest text-white rounded-2xl px-6 py-5 shadow-warm">
                <p className="font-display text-3xl">2025</p>
                <p className="text-xs uppercase tracking-wider">Newly Renovated</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-4">About CM Palace</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6 text-charcoal">Welcome to CM Palace Hotel</h2>
            <p className="text-charcoal/80 leading-relaxed mb-5">
              CM Palace Hotel is a modern hospitality destination located in Ner Chowk, Himachal Pradesh.
              Designed for families, business travelers and guests seeking pure vegetarian dining, the hotel
              offers comfortable accommodations with quality hospitality.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-8">
              With spacious rooms, modern facilities, Wi-Fi connectivity and delicious vegetarian cuisine
              including Jain food options, CM Palace provides a peaceful and convenient stay experience along
              the scenic Mandi highway.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: "🏨", v: "16–20", l: "Rooms" },
                { icon: "⭐", v: "4.5", l: "Google Rating" },
                { icon: "🌿", v: "100%", l: "Vegetarian" },
              ].map((s) => (
                <div key={s.l} className="bg-white border border-border rounded-xl p-5 text-center shadow-card">
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <p className="font-display text-2xl text-gold">{s.v}</p>
                  <p className="text-xs text-charcoal/60 uppercase tracking-wider">{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ROOMS */}
      <section id="rooms" className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-3">Stay With Us</p>
              <h2 className="font-display text-4xl md:text-5xl mb-4">Our Rooms & Suites</h2>
              <p className="text-charcoal/60 max-w-xl mx-auto">Comfort designed for every kind of guest.</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {rooms.map((r, i) => (
              <Reveal key={r.name} delay={i * 120}>
                <article className="group bg-ivory border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-warm transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <img src={r.img} alt={r.name} width={1024} height={768} loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <span className="absolute top-4 left-4 bg-forest text-white text-xs px-3 py-1.5 rounded-full font-medium">
                      {r.tag}
                    </span>
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className="font-display text-2xl mb-4 text-charcoal">{r.name}</h3>
                    <ul className="space-y-2 mb-6 flex-1">
                      {r.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-charcoal/75">
                          <span className="text-gold mt-1">•</span> {f}
                        </li>
                      ))}
                    </ul>
                    <a href={WA} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full rounded-full gradient-gold text-white py-3 text-sm font-semibold shadow-warm hover:scale-[1.02] transition-transform">
                      Enquire Now
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RESTAURANT */}
      <section id="restaurant" className="relative py-28 md:py-36 px-6 text-white">
        <img src={diningImg} alt="Pure vegetarian thali served at CM Palace" width={1920} height={1088} loading="lazy"
          className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/75 to-charcoal/40" />
        <div className="relative max-w-3xl mx-auto md:mx-0 md:ml-[8%]">
          <Reveal>
            <p className="text-gold-soft uppercase tracking-[0.25em] text-xs font-semibold mb-3">Our Restaurant</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">Pure Vegetarian Dining Experience</h2>
            <p className="text-white/85 text-lg leading-relaxed mb-8">
              Enjoy freshly prepared vegetarian meals made with quality ingredients. CM Palace offers family
              dining and Jain food options, creating a welcoming experience for guests seeking delicious and
              wholesome meals.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Leaf, l: "Pure Vegetarian" },
                { icon: HandHeart, l: "Jain Food Available" },
                { icon: Users, l: "Family Dining" },
              ].map((b) => (
                <span key={b.l} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2.5 text-sm">
                  <b.icon className="h-4 w-4 text-gold-soft" /> {b.l}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* AMENITIES */}
      <section id="amenities" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-3">Amenities</p>
              <h2 className="font-display text-4xl md:text-5xl">Everything You Need</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {amenities.map((a, i) => (
              <Reveal key={a.label} delay={(i % 4) * 80}>
                <div className="group bg-white border border-border rounded-xl p-6 flex flex-col items-center text-center hover:bg-gold/5 hover:border-gold transition-all duration-300 h-full">
                  <a.icon className="h-8 w-8 text-gold mb-3 group-hover:scale-110 transition-transform" strokeWidth={1.6} />
                  <p className="text-sm font-medium text-charcoal/85">{a.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 md:py-32 px-6 bg-forest text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-[20rem] font-display leading-none">&ldquo;</div>
        </div>
        <div className="max-w-7xl mx-auto relative">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-gold-soft uppercase tracking-[0.25em] text-xs font-semibold mb-3">Guest Reviews</p>
              <h2 className="font-display text-4xl md:text-5xl mb-5">What Our Guests Say</h2>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 text-sm">
                <Star className="h-4 w-4 fill-gold-soft text-gold-soft" />
                <span className="font-semibold">4.5 / 5</span>
                <span className="text-white/70">· 129+ Reviews on Google</span>
              </div>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((rev, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="bg-white text-charcoal rounded-2xl p-7 shadow-warm h-full flex flex-col">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="font-display text-lg leading-relaxed flex-1 mb-5">&ldquo;{rev.quote}&rdquo;</p>
                  <p className="text-sm text-charcoal/60 border-t border-border pt-4">— {rev.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ATTRACTIONS */}
      <section id="attractions" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-3">Nearby</p>
              <h2 className="font-display text-4xl md:text-5xl mb-4">Explore Himachal Pradesh</h2>
              <p className="text-charcoal/60 max-w-xl mx-auto">CM Palace is your perfect base to discover the region.</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((a, i) => (
              <Reveal key={a.name} delay={(i % 3) * 120}>
                <article className="group rounded-2xl overflow-hidden shadow-card hover:shadow-warm transition-all duration-500 bg-white h-full">
                  <div className="h-56 overflow-hidden">
                    <img src={a.img} alt={a.name} width={800} height={640} loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl mb-2 text-charcoal">{a.name}</h3>
                    <p className="text-sm text-charcoal/70 leading-relaxed">{a.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <Reveal>
            <p className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-3">Reach Out</p>
            <h2 className="font-display text-4xl md:text-5xl mb-8">Plan Your Stay</h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                <p className="text-charcoal/85">Ner Chowk, Ner, Mandi District, Himachal Pradesh – 175008</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                <a href={TEL} className="text-charcoal/85 hover:text-gold transition-colors">{PHONE}</a>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                <a href={WA} target="_blank" rel="noopener noreferrer" className="text-charcoal/85 hover:text-gold transition-colors">
                  WhatsApp Us Directly
                </a>
              </div>
            </div>

            <EnquiryForm />
          </Reveal>

          <Reveal delay={150}>
            <div className="rounded-2xl overflow-hidden shadow-card h-full min-h-[500px] border border-border">
              <iframe
                title="CM Palace Hotel Location"
                src="https://maps.google.com/maps?q=Ner+Chowk+Mandi+Himachal+Pradesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 500 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-charcoal text-white/80 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="h-6 w-6 text-gold" strokeWidth={1.8} />
              <span className="font-display text-2xl text-gold tracking-wide">CM PALACE</span>
            </div>
            <p className="text-sm leading-relaxed text-white/65 italic font-display">
              Luxury Comfort with Pure Vegetarian Excellence.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" aria-label="Facebook" className="h-9 w-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="h-9 w-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://maps.google.com/?q=CM+Palace+Hotel+Ner+Chowk" target="_blank" rel="noopener noreferrer" aria-label="Google Maps"
                className="h-9 w-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-colors">
                <MapPin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg text-white mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {["Home","About","Rooms","Restaurant","Amenities","Attractions","Reviews","Contact"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-gold transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-white mb-4">Contact</h4>
            <p className="text-sm flex items-start gap-2 mb-2"><MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" /> Ner Chowk, Mandi, HP – 175008</p>
            <p className="text-sm flex items-start gap-2 mb-2"><Phone className="h-4 w-4 text-gold mt-0.5 shrink-0" /> <a href={TEL} className="hover:text-gold">{PHONE}</a></p>
            <p className="text-sm flex items-start gap-2"><Mail className="h-4 w-4 text-gold mt-0.5 shrink-0" /> info@cmpalacehotel.com</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © 2025 CM Palace Hotel. All Rights Reserved.
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href={WA} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full gradient-gold text-white flex items-center justify-center shadow-warm hover:scale-110 transition-transform">
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}

function EnquiryForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const text = encodeURIComponent(
      `Hello CM Palace,%0AI'd like to enquire about a stay.%0A%0A` +
      `Name: ${f.get("name")}%0APhone: ${f.get("phone")}%0AEmail: ${f.get("email")}%0A` +
      `Check-in: ${f.get("checkin")}%0ACheck-out: ${f.get("checkout")}%0A` +
      `Room Type: ${f.get("room")}%0AMessage: ${f.get("message")}`
    );
    window.open(`https://wa.me/919736600024?text=${text}`, "_blank");
  };
  const input = "w-full rounded-lg border border-border bg-ivory px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition";
  return (
    <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-3 bg-ivory border border-border rounded-2xl p-6 shadow-card">
      <input required name="name" placeholder="Your Name" className={input} maxLength={100} />
      <input required name="phone" type="tel" placeholder="Phone Number" className={input} maxLength={20} />
      <input required name="email" type="email" placeholder="Email" className={`${input} sm:col-span-2`} maxLength={150} />
      <input required name="checkin" type="date" aria-label="Check-in date" className={input} />
      <input required name="checkout" type="date" aria-label="Check-out date" className={input} />
      <select required name="room" defaultValue="" className={`${input} sm:col-span-2`}>
        <option value="" disabled>Select Room Type</option>
        <option>Premium Deluxe Room</option>
        <option>Deluxe Room with Balcony</option>
        <option>Family Suite</option>
      </select>
      <textarea name="message" placeholder="Your Message (optional)" rows={3} className={`${input} sm:col-span-2 resize-none`} maxLength={500} />
      <button type="submit"
        className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full gradient-gold text-white py-3.5 text-sm font-semibold shadow-warm hover:scale-[1.01] transition-transform">
        <Send className="h-4 w-4" /> Send Enquiry
      </button>
    </form>
  );
}
