import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHero, CtaStrip } from "@/components/Shared";
import rewalsarImg from "@/assets/rewalsar.jpg";
import shikariImg from "@/assets/shikari.jpg";
import mandiImg from "@/assets/mandi.jpg";
import sundernagarImg from "@/assets/sundernagar.jpg";
import highwayImg from "@/assets/highway.jpg";
import { MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/attractions")({
  head: () => ({
    meta: [
      { title: "Nearby Attractions — Explore Mandi & Himachal from CM Palace" },
      { name: "description", content: "Rewalsar Lake, Shikari Mata Temple, Mandi town, Sundernagar and more — explore Himachal from CM Palace Hotel, Ner Chowk." },
      { property: "og:title", content: "Things to Do near CM Palace Hotel" },
      { property: "og:description", content: "Your perfect base to discover Mandi and the Kullu–Manali corridor." },
      { property: "og:image", content: rewalsarImg },
    ],
  }),
  component: AttractionsPage,
});

const attractions = [
  { img: rewalsarImg, name: "Rewalsar Lake", distance: "30 km", time: "1 hr drive",
    desc: "A sacred lake revered by Hindus, Sikhs and Buddhists. Surrounded by monasteries, temples and a gurudwara, with a scenic backdrop of the lower Himalayas." },
  { img: shikariImg, name: "Shikari Mata Temple", distance: "55 km", time: "2 hr drive + trek",
    desc: "An ancient hilltop temple offering a 360° panoramic view of the snow-capped Himalayas. A short trek from Janjehli leads to the open-roofed shrine." },
  { img: mandiImg, name: "Mandi Town", distance: "12 km", time: "25 min drive",
    desc: "Known as the 'Varanasi of Hills' for its 80+ ancient temples along the Beas river. Don't miss the annual Shivratri Fair and the bustling Indira Market." },
  { img: sundernagarImg, name: "Sundernagar", distance: "20 km", time: "35 min drive",
    desc: "A peaceful lakeside town set against pine-clad hills. Perfect for a relaxed day trip with boating and lakeside walks." },
  { img: highwayImg, name: "Kullu–Manali Corridor", distance: "Onwards from hotel", time: "Gateway",
    desc: "CM Palace sits right on the highway to Kullu and Manali. Make us your overnight base for breathtaking mountain drives." },
];

function AttractionsPage() {
  return (
    <>
      <PageHero eyebrow="Explore" title="Nearby Attractions" subtitle="CM Palace is your perfect base to discover the heart of Himachal Pradesh." image={highwayImg} />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          {attractions.map((a, i) => (
            <Reveal key={a.name}>
              <article className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className="overflow-hidden rounded-2xl shadow-card group">
                  <img src={a.img} alt={a.name} width={800} height={640} loading="lazy"
                    className="w-full h-[360px] object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div>
                  <p className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-3">Attraction {i + 1}</p>
                  <h2 className="font-display text-3xl md:text-4xl mb-3">{a.name}</h2>
                  <div className="flex flex-wrap gap-4 text-sm text-charcoal/70 mb-4">
                    <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-gold" /> {a.distance}</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-gold" /> {a.time}</span>
                  </div>
                  <p className="text-charcoal/80 leading-relaxed">{a.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
