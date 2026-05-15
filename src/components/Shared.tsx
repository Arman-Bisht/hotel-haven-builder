import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative h-[55vh] min-h-[380px] flex items-end text-white">
      <img src={image} alt="" width={1920} height={1088} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/85" />
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-16 pt-32">
        <p className="text-gold-soft uppercase tracking-[0.3em] text-xs font-semibold mb-4">{eyebrow}</p>
        <h1 className="font-display text-4xl md:text-6xl mb-3">{title}</h1>
        {subtitle && <p className="text-white/85 max-w-2xl text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}

export function FloatingWhatsApp() {
  return (
    <a href="https://wa.me/919736600024" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full gradient-gold text-white flex items-center justify-center shadow-warm hover:scale-110 transition-transform">
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

export function CtaStrip() {
  return (
    <section className="py-20 px-6 bg-forest text-white text-center">
      <h2 className="font-display text-3xl md:text-5xl mb-5">Ready for Your Mountain Escape?</h2>
      <p className="text-white/80 mb-8 max-w-xl mx-auto">Reserve your stay at CM Palace and experience pure vegetarian hospitality.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/booking" className="inline-flex items-center justify-center rounded-full gradient-gold text-white px-8 py-4 font-semibold shadow-warm hover:scale-105 transition-transform">
          Book Your Stay
        </Link>
        <a href="tel:+919736600024" className="inline-flex items-center justify-center rounded-full border-2 border-white/70 px-8 py-4 font-semibold hover:bg-white hover:text-forest transition-colors">
          Call +91 97366 00024
        </a>
      </div>
    </section>
  );
}
