import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHero, CtaStrip } from "@/components/Shared";
import diningImg from "@/assets/dining.jpg";
import { Leaf, HandHeart, Users, Clock, Utensils } from "lucide-react";

export const Route = createFileRoute("/restaurant")({
  head: () => ({
    meta: [
      { title: "Restaurant — Pure Vegetarian & Jain Dining at CM Palace" },
      { name: "description", content: "Pure vegetarian and Jain food at CM Palace Hotel restaurant. Family dining, freshly prepared meals, North Indian and local Himachali cuisine." },
      { property: "og:title", content: "Pure Vegetarian Restaurant — CM Palace" },
      { property: "og:description", content: "Freshly prepared vegetarian meals and Jain food in Ner Chowk, Mandi." },
      { property: "og:image", content: diningImg },
    ],
  }),
  component: RestaurantPage,
});

const menu = [
  { cat: "North Indian Thali", items: ["Punjabi Thali", "Rajasthani Thali", "Jain Special Thali", "Himachali Dham (on order)"] },
  { cat: "Curries & Sabzi", items: ["Paneer Butter Masala", "Kadhai Paneer", "Mix Vegetable", "Dal Makhani", "Jain Dal Tadka"] },
  { cat: "Breads & Rice", items: ["Tandoori Roti", "Butter Naan", "Stuffed Paratha", "Jeera Rice", "Veg Pulao"] },
  { cat: "Snacks & Beverages", items: ["Samosa Chaat", "Veg Sandwich", "Masala Chai", "Filter Coffee", "Fresh Juices"] },
];

const features = [
  { icon: Leaf, l: "100% Pure Vegetarian", d: "No exceptions, no compromises." },
  { icon: HandHeart, l: "Jain Food Available", d: "Prepared with respect for tradition." },
  { icon: Users, l: "Family Dining", d: "Spacious seating for groups & families." },
  { icon: Clock, l: "All-Day Dining", d: "Breakfast, lunch and dinner served daily." },
  { icon: Utensils, l: "Room Service", d: "Hot meals delivered to your room." },
];

function RestaurantPage() {
  return (
    <>
      <PageHero eyebrow="Our Restaurant" title="Pure Vegetarian Dining" subtitle="Freshly prepared vegetarian meals with Jain options — wholesome flavors of North India and Himachal." image={diningImg} />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <img src={diningImg} alt="Vegetarian thali at CM Palace" width={1920} height={1088} loading="lazy"
              className="rounded-2xl shadow-warm w-full h-[480px] object-cover" />
          </Reveal>
          <Reveal delay={150}>
            <p className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-4">Our Cuisine</p>
            <h2 className="font-display text-4xl mb-6">Wholesome. Vegetarian. Always.</h2>
            <p className="text-charcoal/80 leading-relaxed mb-4">
              Enjoy freshly prepared vegetarian meals made with quality ingredients. CM Palace offers family
              dining and Jain food options, creating a welcoming experience for guests seeking delicious and
              wholesome meals.
            </p>
            <p className="text-charcoal/70 leading-relaxed">
              Our kitchen serves classic North Indian thalis, Punjabi curries, fresh tandoor breads, regional
              Himachali specialties, and a dedicated Jain menu with no onion or garlic.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-3">What We Offer</p>
              <h2 className="font-display text-4xl">Dining Highlights</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {features.map((f, i) => (
              <Reveal key={f.l} delay={(i % 5) * 80}>
                <div className="bg-ivory border border-border rounded-2xl p-6 h-full text-center hover:border-gold transition-colors">
                  <f.icon className="h-8 w-8 text-gold mx-auto mb-3" strokeWidth={1.6} />
                  <h3 className="font-display text-lg mb-1">{f.l}</h3>
                  <p className="text-xs text-charcoal/65 leading-relaxed">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-3">Sample Menu</p>
              <h2 className="font-display text-4xl">A Taste of What We Serve</h2>
              <p className="text-charcoal/60 mt-3 text-sm">Menu varies seasonally — please ask our staff for daily specials.</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {menu.map((m, i) => (
              <Reveal key={m.cat} delay={(i % 2) * 100}>
                <div className="bg-white border border-border rounded-2xl p-7 shadow-card">
                  <h3 className="font-display text-xl text-gold mb-4 border-b border-border pb-3">{m.cat}</h3>
                  <ul className="space-y-2">
                    {m.items.map((it) => (
                      <li key={it} className="flex items-center gap-2 text-sm text-charcoal/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-forest" /> {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
