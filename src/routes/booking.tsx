import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/Shared";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomBalcony from "@/assets/room-balcony.jpg";
import roomFamily from "@/assets/room-family.jpg";
import heroImg from "@/assets/hero.jpg";
import {
  Calendar, Users, BedDouble, Phone, MessageCircle, Check, ArrowRight, Minus, Plus,
  Sparkles, Leaf, Wifi,
} from "lucide-react";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book Your Stay — CM Palace Hotel, Ner Chowk" },
      { name: "description", content: "Check availability and book your stay at CM Palace Hotel. Choose check-in/check-out dates, room type and guests. Best price guaranteed." },
      { property: "og:title", content: "Book Your Stay — CM Palace Hotel" },
      { property: "og:description", content: "Reserve premium deluxe, mountain-view or family suite rooms in Mandi, Himachal Pradesh." },
    ],
  }),
  component: BookingPage,
});

type RoomKey = "deluxe" | "balcony" | "family";

const ROOMS: Record<RoomKey, { name: string; price: number; img: string; capacity: number; tag: string; features: string[] }> = {
  deluxe: {
    name: "Premium Deluxe Room",
    price: 2200,
    img: roomDeluxe,
    capacity: 2,
    tag: "Most Popular",
    features: ["King-size bed", "AC", "Free Wi-Fi", "Room service"],
  },
  balcony: {
    name: "Deluxe with Balcony",
    price: 2800,
    img: roomBalcony,
    capacity: 3,
    tag: "Mountain View",
    features: ["Mountain-facing balcony", "Workspace", "AC", "Free Wi-Fi"],
  },
  family: {
    name: "Family Suite",
    price: 3800,
    img: roomFamily,
    capacity: 5,
    tag: "Best for Groups",
    features: ["Sleeps 4–5 adults", "Multiple beds", "AC", "Family seating"],
  },
};

const today = () => new Date().toISOString().split("T")[0];
const tomorrow = () => {
  const d = new Date(); d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
};

function BookingPage() {
  const [checkIn, setCheckIn] = useState(today());
  const [checkOut, setCheckOut] = useState(tomorrow());
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [roomType, setRoomType] = useState<RoomKey>("deluxe");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [special, setSpecial] = useState("");
  const [breakfast, setBreakfast] = useState(false);
  const [airport, setAirport] = useState(false);

  const nights = useMemo(() => {
    const a = new Date(checkIn).getTime();
    const b = new Date(checkOut).getTime();
    if (!a || !b || b <= a) return 0;
    return Math.round((b - a) / (1000 * 60 * 60 * 24));
  }, [checkIn, checkOut]);

  const room = ROOMS[roomType];
  const subtotal = nights * room.price;
  const breakfastTotal = breakfast ? nights * 250 * (adults + children) : 0;
  const airportFee = airport ? 1500 : 0;
  const taxes = Math.round((subtotal + breakfastTotal) * 0.12);
  const total = subtotal + breakfastTotal + airportFee + taxes;

  const datesValid = nights > 0;
  const capacityOk = adults + children <= room.capacity;
  const formValid = datesValid && capacityOk && name.trim().length > 1 && phone.trim().length >= 10;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formValid) return;
    const text = encodeURIComponent(
`Hello CM Palace, I'd like to book a stay:

Name: ${name}
Phone: ${phone}
Email: ${email || "—"}

Check-in: ${checkIn}
Check-out: ${checkOut}
Nights: ${nights}

Room: ${room.name}
Guests: ${adults} adult(s), ${children} child(ren)

Add-ons: ${[breakfast && "Breakfast", airport && "Airport shuttle"].filter(Boolean).join(", ") || "None"}
Special requests: ${special || "—"}

Estimated total: ₹${total.toLocaleString("en-IN")}`
    );
    window.open(`https://wa.me/919736600024?text=${text}`, "_blank");
  };

  const inputCls = "w-full rounded-lg border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition";

  return (
    <>
      <PageHero
        eyebrow="Reserve Your Stay"
        title="Book Your Room"
        subtitle="Choose your dates, pick your room, and we'll confirm your reservation on WhatsApp instantly."
        image={heroImg}
      />

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_400px] gap-10">
          {/* FORM */}
          <Reveal>
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Step 1: Dates & Guests */}
              <div className="bg-white rounded-2xl border border-border p-7 shadow-card">
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-8 w-8 rounded-full gradient-gold text-white flex items-center justify-center font-display text-sm shadow-warm">1</span>
                  <h2 className="font-display text-2xl">Dates & Guests</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-charcoal/60 font-semibold mb-2 flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-gold" /> Check-in
                    </label>
                    <input type="date" min={today()} value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)} required className={inputCls} />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-charcoal/60 font-semibold mb-2 flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-gold" /> Check-out
                    </label>
                    <input type="date" min={checkIn} value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)} required className={inputCls} />
                  </div>
                </div>

                {!datesValid && (checkIn && checkOut) && (
                  <p className="mt-3 text-sm text-destructive">Check-out must be after check-in.</p>
                )}

                <div className="grid sm:grid-cols-2 gap-5 mt-6">
                  <Counter label="Adults" icon={Users} value={adults} setValue={setAdults} min={1} max={8} />
                  <Counter label="Children" icon={Users} value={children} setValue={setChildren} min={0} max={6} />
                </div>

                {!capacityOk && (
                  <p className="mt-4 text-sm text-destructive">
                    {room.name} sleeps up to {room.capacity}. Please reduce guests or pick a larger room below.
                  </p>
                )}
              </div>

              {/* Step 2: Room */}
              <div className="bg-white rounded-2xl border border-border p-7 shadow-card">
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-8 w-8 rounded-full gradient-gold text-white flex items-center justify-center font-display text-sm shadow-warm">2</span>
                  <h2 className="font-display text-2xl">Choose Your Room</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {(Object.keys(ROOMS) as RoomKey[]).map((k) => {
                    const r = ROOMS[k];
                    const selected = roomType === k;
                    return (
                      <button type="button" key={k} onClick={() => setRoomType(k)}
                        className={`text-left rounded-2xl overflow-hidden border-2 transition-all ${
                          selected ? "border-gold shadow-warm scale-[1.02]" : "border-border hover:border-gold/50"
                        }`}>
                        <div className="relative h-40">
                          <img src={r.img} alt={r.name} loading="lazy" className="w-full h-full object-cover" />
                          {selected && (
                            <div className="absolute top-3 right-3 h-7 w-7 rounded-full bg-gold text-white flex items-center justify-center shadow-warm">
                              <Check className="h-4 w-4" />
                            </div>
                          )}
                          <span className="absolute top-3 left-3 bg-forest text-white text-[10px] uppercase tracking-wider px-2 py-1 rounded-full">
                            {r.tag}
                          </span>
                        </div>
                        <div className="p-4">
                          <h3 className="font-display text-lg mb-1">{r.name}</h3>
                          <p className="text-xs text-charcoal/60 mb-2">Sleeps up to {r.capacity}</p>
                          <p className="text-gold font-semibold">₹{r.price.toLocaleString("en-IN")}<span className="text-xs text-charcoal/55 font-normal"> / night</span></p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {room.features.map((f) => (
                    <span key={f} className="text-xs text-charcoal/70 bg-ivory rounded-full px-3 py-1.5 text-center border border-border">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Step 3: Add-ons */}
              <div className="bg-white rounded-2xl border border-border p-7 shadow-card">
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-8 w-8 rounded-full gradient-gold text-white flex items-center justify-center font-display text-sm shadow-warm">3</span>
                  <h2 className="font-display text-2xl">Optional Add-ons</h2>
                </div>
                <div className="space-y-3">
                  <Toggle checked={breakfast} onChange={setBreakfast}
                    title="Pure Vegetarian Breakfast" desc="Fresh North Indian breakfast served daily"
                    price={`₹250 / guest / night`} icon={Leaf} />
                  <Toggle checked={airport} onChange={setAirport}
                    title="Airport / Station Shuttle" desc="One-way pickup or drop assistance"
                    price={`₹1,500 one-time`} icon={Sparkles} />
                </div>
              </div>

              {/* Step 4: Guest Info */}
              <div className="bg-white rounded-2xl border border-border p-7 shadow-card">
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-8 w-8 rounded-full gradient-gold text-white flex items-center justify-center font-display text-sm shadow-warm">4</span>
                  <h2 className="font-display text-2xl">Your Details</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" className={inputCls} maxLength={100} />
                  <input required value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" placeholder="Phone Number" className={inputCls} maxLength={20} />
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email (optional)" className={`${inputCls} sm:col-span-2`} maxLength={150} />
                  <textarea value={special} onChange={(e) => setSpecial(e.target.value)} placeholder="Special requests (Jain meals, early check-in, etc.)" rows={3}
                    className={`${inputCls} sm:col-span-2 resize-none`} maxLength={500} />
                </div>
              </div>
            </form>
          </Reveal>

          {/* SUMMARY */}
          <Reveal delay={150}>
            <aside className="lg:sticky lg:top-24 self-start">
              <div className="bg-charcoal text-white rounded-2xl overflow-hidden shadow-warm">
                <div className="relative h-44">
                  <img src={room.img} alt={room.name} loading="lazy" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <p className="text-[10px] uppercase tracking-wider text-gold-soft">Booking Summary</p>
                    <h3 className="font-display text-xl">{room.name}</h3>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <Row icon={Calendar} l="Check-in" v={checkIn} />
                  <Row icon={Calendar} l="Check-out" v={checkOut} />
                  <Row icon={BedDouble} l="Nights" v={nights > 0 ? `${nights}` : "—"} />
                  <Row icon={Users} l="Guests" v={`${adults} adult${adults > 1 ? "s" : ""}${children ? `, ${children} child${children > 1 ? "ren" : ""}` : ""}`} />

                  <div className="border-t border-white/15 pt-4 space-y-2 text-sm">
                    <SummaryLine l={`Room (${nights} × ₹${room.price.toLocaleString("en-IN")})`} v={`₹${subtotal.toLocaleString("en-IN")}`} muted={!nights} />
                    {breakfast && <SummaryLine l="Breakfast" v={`₹${breakfastTotal.toLocaleString("en-IN")}`} />}
                    {airport && <SummaryLine l="Airport shuttle" v={`₹${airportFee.toLocaleString("en-IN")}`} />}
                    <SummaryLine l="Taxes & fees (12%)" v={`₹${taxes.toLocaleString("en-IN")}`} muted={!nights} />
                  </div>

                  <div className="border-t border-white/15 pt-4 flex items-end justify-between">
                    <span className="text-sm text-white/70">Estimated Total</span>
                    <span className="font-display text-3xl text-gold-soft">₹{total.toLocaleString("en-IN")}</span>
                  </div>

                  <button type="button" onClick={handleSubmit} disabled={!formValid}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full gradient-gold text-white py-4 text-sm font-semibold shadow-warm hover:scale-[1.02] transition-transform disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100">
                    <MessageCircle className="h-4 w-4" /> Confirm via WhatsApp
                  </button>

                  <a href="tel:+919736600024"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-white/30 text-white py-3 text-sm font-medium hover:bg-white/10 transition">
                    <Phone className="h-4 w-4" /> Or call +91 97366 00024
                  </a>

                  <p className="text-[11px] text-white/50 leading-relaxed pt-2">
                    No payment required now. Our team will confirm availability and pricing on WhatsApp.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2 text-center text-[11px] text-charcoal/65">
                <div className="p-3 bg-white border border-border rounded-xl">
                  <Check className="h-4 w-4 text-forest mx-auto mb-1" /> Free cancellation
                </div>
                <div className="p-3 bg-white border border-border rounded-xl">
                  <Wifi className="h-4 w-4 text-forest mx-auto mb-1" /> Free Wi-Fi
                </div>
                <div className="p-3 bg-white border border-border rounded-xl">
                  <Leaf className="h-4 w-4 text-forest mx-auto mb-1" /> Pure Veg
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* ---------- helpers ---------- */

function Counter({ label, icon: Icon, value, setValue, min, max }: {
  label: string; icon: typeof Users; value: number; setValue: (n: number) => void; min: number; max: number;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-charcoal/60 font-semibold mb-2 flex items-center gap-1.5">
        <Icon className="h-3.5 w-3.5 text-gold" /> {label}
      </label>
      <div className="flex items-center justify-between bg-white border border-border rounded-lg px-2 py-1.5">
        <button type="button" onClick={() => setValue(Math.max(min, value - 1))}
          className="h-9 w-9 rounded-md hover:bg-ivory text-charcoal flex items-center justify-center disabled:opacity-30"
          disabled={value <= min} aria-label={`Decrease ${label}`}>
          <Minus className="h-4 w-4" />
        </button>
        <span className="font-display text-xl">{value}</span>
        <button type="button" onClick={() => setValue(Math.min(max, value + 1))}
          className="h-9 w-9 rounded-md hover:bg-ivory text-charcoal flex items-center justify-center disabled:opacity-30"
          disabled={value >= max} aria-label={`Increase ${label}`}>
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function Toggle({ checked, onChange, title, desc, price, icon: Icon }: {
  checked: boolean; onChange: (v: boolean) => void; title: string; desc: string; price: string; icon: typeof Leaf;
}) {
  return (
    <button type="button" onClick={() => onChange(!checked)}
      className={`w-full text-left flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
        checked ? "border-gold bg-gold/5" : "border-border hover:border-gold/40"
      }`}>
      <div className={`h-10 w-10 rounded-full flex items-center justify-center shrink-0 ${checked ? "gradient-gold text-white" : "bg-ivory text-gold"}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-charcoal">{title}</p>
        <p className="text-xs text-charcoal/60">{desc}</p>
      </div>
      <div className="text-right shrink-0">
        <p className="text-sm font-semibold text-gold">{price}</p>
        <p className="text-[10px] uppercase tracking-wider text-charcoal/50">{checked ? "Added" : "Add"}</p>
      </div>
    </button>
  );
}

function Row({ icon: Icon, l, v }: { icon: typeof Calendar; l: string; v: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="flex items-center gap-2 text-white/70"><Icon className="h-4 w-4 text-gold-soft" /> {l}</span>
      <span className="font-medium">{v}</span>
    </div>
  );
}

function SummaryLine({ l, v, muted }: { l: string; v: string; muted?: boolean }) {
  return (
    <div className={`flex justify-between ${muted ? "text-white/40" : "text-white/85"}`}>
      <span>{l}</span><span>{v}</span>
    </div>
  );
}
