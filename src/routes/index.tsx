import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Phone, Star, Leaf, HandHeart, Mountain, MessageCircle, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomBalcony from "@/assets/room-balcony.jpg";
import roomFamily from "@/assets/room-family.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CM Palace Hotel — Pure Vegetarian Family Hotel in Ner Chowk, Mandi" },
      { name: "description", content: "3-star pure vegetarian family hotel in Ner Chowk, Mandi, Himachal Pradesh. Mountain-view rooms, Jain food, free Wi-Fi. Book +91 97366 00024." },
      { property: "og:title", content: "CM Palace Hotel — Ner Chowk, Himachal Pradesh" },
      { property: "og:description", content: "Comfortable family stays & pure vegetarian hospitality where mountains meet comfort." },
    ],
  }),
  component: Home,
});

const PHONE = "+91 97366 00024";
const TEL = "tel:+919736600024";

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-center text-white">
        <img src={heroImg} alt="CM Palace Hotel against the Himalayan mountains at golden hour"
          width={1920} height={1088} className="absolute inset-0 w-full h-full object-cover" />
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
              <Link to="/booking"
                className="inline-flex items-center justify-center gap-2 rounded-full gradient-gold text-white px-8 py-4 text-base font-semibold shadow-warm hover:scale-105 transition-transform">
                Book Your Stay <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={TEL}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/80 text-white px-8 py-4 text-base font-semibold hover:bg-white hover:text-charcoal transition-colors">
                <Phone className="h-4 w-4" /> {PHONE}
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

      {/* ABOUT TEASER */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="relative">
              <img src={aboutImg} alt="Warm, elegant lobby of CM Palace Hotel" width={1024} height={1024} loading="lazy"
                className="rounded-2xl shadow-warm w-full h-[480px] object-cover" />
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
              CM Palace Hotel is a modern hospitality destination in Ner Chowk, Himachal Pradesh. Designed for
              families, business travelers and guests seeking pure vegetarian dining, we offer comfortable
              accommodations with quality hospitality.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
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
            <Link to="/about" className="inline-flex items-center gap-2 text-forest font-semibold hover:gap-3 transition-all">
              Learn More <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ROOMS TEASER */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-3">Stay With Us</p>
              <h2 className="font-display text-4xl md:text-5xl mb-4">Rooms For Every Guest</h2>
              <p className="text-charcoal/60 max-w-xl mx-auto">From premium deluxe to spacious family suites.</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: roomDeluxe, name: "Premium Deluxe", tag: "Most Popular", price: "₹2,200" },
              { img: roomBalcony, name: "Balcony Mountain View", tag: "Mountain View", price: "₹2,800" },
              { img: roomFamily, name: "Family Suite", tag: "Best for Groups", price: "₹3,800" },
            ].map((r, i) => (
              <Reveal key={r.name} delay={i * 120}>
                <Link to="/rooms" className="group block bg-ivory border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-warm transition-all duration-500 hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <img src={r.img} alt={r.name} width={1024} height={768} loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <span className="absolute top-4 left-4 bg-forest text-white text-xs px-3 py-1.5 rounded-full font-medium">
                      {r.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl mb-1">{r.name}</h3>
                    <p className="text-sm text-charcoal/60">From <span className="text-gold font-semibold">{r.price}</span> / night</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/rooms" className="inline-flex items-center gap-2 rounded-full border-2 border-gold text-gold px-8 py-3 text-sm font-semibold hover:bg-gold hover:text-white transition-colors">
              View All Rooms <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-20 px-6 bg-forest text-white text-center">
        <Reveal>
          <h2 className="font-display text-3xl md:text-5xl mb-5">Ready for Your Mountain Escape?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">Reserve your stay at CM Palace and experience pure vegetarian hospitality in the heart of Himachal.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking" className="inline-flex items-center justify-center gap-2 rounded-full gradient-gold text-white px-8 py-4 font-semibold shadow-warm hover:scale-105 transition-transform">
              Check Availability
            </Link>
            <a href="https://wa.me/919736600024" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/70 px-8 py-4 font-semibold hover:bg-white hover:text-forest transition-colors">
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
