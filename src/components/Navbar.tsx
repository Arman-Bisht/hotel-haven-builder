import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Mountain } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/rooms", label: "Rooms" },
  { to: "/restaurant", label: "Restaurant" },
  { to: "/attractions", label: "Attractions" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  // On non-home pages we always want a solid bar
  const solid = scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid ? "bg-ivory/90 backdrop-blur-md shadow-card" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Mountain className="h-6 w-6 text-gold" strokeWidth={1.8} />
          <span className={`font-display text-2xl tracking-wide ${solid ? "text-gold" : "text-white drop-shadow-lg"}`}>
            CM PALACE
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className={`text-sm font-medium transition-colors ${
                solid ? "text-charcoal hover:text-gold" : "text-white/95 hover:text-gold-soft drop-shadow"
              }`}
              activeProps={{ className: solid ? "text-gold font-semibold" : "text-gold-soft font-semibold" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/booking"
            className="hidden sm:inline-flex items-center justify-center rounded-full gradient-gold text-white px-5 py-2.5 text-sm font-semibold shadow-warm hover:scale-105 transition-transform">
            Book Now
          </Link>
          <button
            aria-label="Toggle menu"
            className={`lg:hidden p-2 rounded-md ${solid ? "text-charcoal" : "text-white"}`}
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
              <Link key={l.to} to={l.to} activeOptions={{ exact: l.to === "/" }}
                className="py-3 text-charcoal hover:text-gold border-b border-border/50 text-sm font-medium"
                activeProps={{ className: "text-gold font-semibold" }}>
                {l.label}
              </Link>
            ))}
            <Link to="/booking"
              className="mt-4 inline-flex items-center justify-center rounded-full gradient-gold text-white px-5 py-3 text-sm font-semibold">
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
