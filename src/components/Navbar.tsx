import { useEffect, useState } from "react";
import { Menu, X, Mountain } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#rooms", label: "Rooms" },
  { href: "#restaurant", label: "Restaurant" },
  { href: "#amenities", label: "Amenities" },
  { href: "#attractions", label: "Attractions" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ivory/85 backdrop-blur-md shadow-card" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-18 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <Mountain className={`h-6 w-6 ${scrolled ? "text-gold" : "text-gold"}`} strokeWidth={1.8} />
          <span className={`font-display text-2xl tracking-wide ${scrolled ? "text-gold" : "text-white drop-shadow-lg"}`}>
            CM PALACE
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                scrolled ? "text-charcoal hover:text-gold" : "text-white/95 hover:text-gold-soft drop-shadow"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/919736600024"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center rounded-full gradient-gold text-white px-5 py-2.5 text-sm font-semibold shadow-warm hover:scale-105 transition-transform"
          >
            Book Now
          </a>
          <button
            aria-label="Toggle menu"
            className={`lg:hidden p-2 rounded-md ${scrolled ? "text-charcoal" : "text-white"}`}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-ivory border-t border-border shadow-card">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-charcoal hover:text-gold border-b border-border/50 text-sm font-medium"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/919736600024"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-full gradient-gold text-white px-5 py-3 text-sm font-semibold"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
