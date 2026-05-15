import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/Shared";
import { MapPin, Phone, Mail, MessageCircle, Clock, Send } from "lucide-react";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact CM Palace Hotel — Ner Chowk, Mandi" },
      { name: "description", content: "Contact CM Palace Hotel — call +91 97366 00024, WhatsApp us, or visit Ner Chowk, Mandi District, Himachal Pradesh." },
      { property: "og:title", content: "Contact CM Palace Hotel" },
      { property: "og:description", content: "Get in touch for bookings, enquiries and group reservations." },
    ],
  }),
  component: ContactPage,
});

const PHONE = "+91 97366 00024";
const TEL = "tel:+919736600024";
const WA = "https://wa.me/919736600024";

function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const text = encodeURIComponent(
      `Hello CM Palace,%0A%0A` +
      `Name: ${f.get("name")}%0AEmail: ${f.get("email")}%0APhone: ${f.get("phone")}%0A` +
      `Message: ${f.get("message")}`
    );
    window.open(`https://wa.me/919736600024?text=${text}`, "_blank");
  };
  const input = "w-full rounded-lg border border-border bg-ivory px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition";

  return (
    <>
      <PageHero eyebrow="Get in Touch" title="Contact Us" subtitle="We're here to help — call, WhatsApp, or send us a message." image={aboutImg} />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <Reveal>
            <p className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-3">Reach Us</p>
            <h2 className="font-display text-4xl mb-8">Send a Message</h2>

            <div className="space-y-5 mb-10">
              {[
                { icon: MapPin, l: "Address", v: "Ner Chowk, Ner, Mandi District, Himachal Pradesh – 175008" },
                { icon: Phone, l: "Phone", v: PHONE, href: TEL },
                { icon: MessageCircle, l: "WhatsApp", v: "Chat with us instantly", href: WA, ext: true },
                { icon: Mail, l: "Email", v: "info@cmpalacehotel.com", href: "mailto:info@cmpalacehotel.com" },
                { icon: Clock, l: "Front Desk", v: "Open 24 hours, 7 days a week" },
              ].map((c) => (
                <div key={c.l} className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-full gradient-gold flex items-center justify-center text-white shrink-0 shadow-warm">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-charcoal/55 mb-0.5">{c.l}</p>
                    {c.href ? (
                      <a href={c.href} target={c.ext ? "_blank" : undefined} rel={c.ext ? "noopener noreferrer" : undefined}
                        className="text-charcoal hover:text-gold transition-colors">{c.v}</a>
                    ) : <p className="text-charcoal">{c.v}</p>}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-3 bg-ivory border border-border rounded-2xl p-6 shadow-card">
              <input required name="name" placeholder="Your Name" className={input} maxLength={100} />
              <input required name="phone" type="tel" placeholder="Phone" className={input} maxLength={20} />
              <input required name="email" type="email" placeholder="Email Address" className={`${input} sm:col-span-2`} maxLength={150} />
              <textarea required name="message" placeholder="Your message..." rows={4} className={`${input} sm:col-span-2 resize-none`} maxLength={1000} />
              <button type="submit"
                className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full gradient-gold text-white py-3.5 text-sm font-semibold shadow-warm hover:scale-[1.01] transition-transform">
                <Send className="h-4 w-4" /> Send Message
              </button>
            </form>
          </Reveal>

          <Reveal delay={150}>
            <div className="rounded-2xl overflow-hidden shadow-card h-full min-h-[500px] border border-border sticky top-24">
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
    </>
  );
}
