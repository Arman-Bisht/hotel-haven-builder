import { Link } from "@tanstack/react-router";
import { Mountain, Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";

const PHONE = "+91 97366 00024";
const TEL = "tel:+919736600024";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white/80 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 mb-12">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <Mountain className="h-6 w-6 text-gold" strokeWidth={1.8} />
            <span className="font-display text-2xl text-gold tracking-wide">CM PALACE</span>
          </Link>
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
            {[
              { to: "/", l: "Home" },
              { to: "/about", l: "About" },
              { to: "/rooms", l: "Rooms" },
              { to: "/restaurant", l: "Restaurant" },
              { to: "/attractions", l: "Attractions" },
              { to: "/booking", l: "Booking" },
              { to: "/contact", l: "Contact" },
            ].map((x) => (
              <li key={x.to}><Link to={x.to} className="hover:text-gold transition-colors">{x.l}</Link></li>
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
  );
}
