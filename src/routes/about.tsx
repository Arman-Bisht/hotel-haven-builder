import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHero, CtaStrip } from "@/components/Shared";
import aboutImg from "@/assets/about.jpg";
import heroImg from "@/assets/hero.jpg";
import { Leaf, HandHeart, Mountain, Users, Award, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About CM Palace Hotel — Pure Vegetarian Family Hotel in Mandi" },
      { name: "description", content: "Learn about CM Palace Hotel — a 3-star pure vegetarian family hotel in Ner Chowk, Mandi, Himachal Pradesh." },
      { property: "og:title", content: "About CM Palace Hotel" },
      { property: "og:description", content: "Modern hospitality, pure vegetarian dining, and warm Himachali welcome." },
      { property: "og:image", content: aboutImg },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Leaf, title: "Pure Vegetarian", text: "Every dish prepared with quality ingredients — strictly vegetarian, no exceptions." },
  { icon: HandHeart, title: "Jain Friendly", text: "Dedicated Jain food preparation honoring dietary traditions." },
  { icon: Users, title: "Family First", text: "Spacious family rooms, group bookings, and warm child-friendly hospitality." },
  { icon: Mountain, title: "Mountain Setting", text: "Located along the scenic Mandi highway with rooms facing the Himalayas." },
  { icon: Award, title: "4.5★ Rated", text: "Trusted by 129+ verified guests across Google reviews." },
  { icon: Sparkles, title: "Modern Comfort", text: "Wi-Fi, AC, room service and 24/7 front desk to make every stay effortless." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="A Warm Himachali Welcome"
        subtitle="CM Palace Hotel is a modern hospitality destination rooted in family values and pure vegetarian traditions."
        image={heroImg}
      />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <Reveal>
            <img src={aboutImg} alt="CM Palace lobby" width={1024} height={1024} loading="lazy"
              className="rounded-2xl shadow-warm w-full h-[520px] object-cover" />
          </Reveal>
          <Reveal delay={120}>
            <p className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-4">Who We Are</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">Hospitality in the Heart of Himachal</h2>
            <div className="space-y-5 text-charcoal/80 leading-relaxed">
              <p>
                CM Palace Hotel is a modern hospitality destination located in Ner Chowk, Himachal Pradesh.
                Designed for families, business travelers and guests seeking pure vegetarian dining, the hotel
                offers comfortable accommodations with quality hospitality.
              </p>
              <p>
                With spacious rooms, modern facilities, Wi-Fi connectivity and delicious vegetarian cuisine
                including Jain food options, CM Palace provides a peaceful and convenient stay along the
                scenic Mandi highway.
              </p>
              <p>
                Whether you are passing through to Manali, exploring local temples, or hosting a family
                gathering — our team is dedicated to making your stay memorable.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-3">Our Values</p>
              <h2 className="font-display text-4xl md:text-5xl">What Makes Us Different</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 100}>
                <div className="bg-ivory border border-border rounded-2xl p-7 h-full shadow-card hover:shadow-warm transition-all hover:-translate-y-1">
                  <v.icon className="h-9 w-9 text-gold mb-4" strokeWidth={1.6} />
                  <h3 className="font-display text-xl mb-2">{v.title}</h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed">{v.text}</p>
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
