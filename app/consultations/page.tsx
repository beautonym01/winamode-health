import type { Metadata } from "next";
import { FiClock, FiHeart, FiMessageCircle } from "react-icons/fi";
import { BookingForm } from "@/app/consultations/booking-form";

export const metadata: Metadata = { title: "Book a health consultation", description: "Request a nutrition, wellness, or lifestyle consultation with WINAMODE HEALTH." };

const services = [
  { icon: FiHeart, name: "Nutrition consultation", text: "A supportive conversation about everyday food choices and building balanced habits." },
  { icon: FiMessageCircle, name: "Wellness consultation", text: "Explore your wellbeing goals and practical steps that may fit your daily routine." },
  { icon: FiClock, name: "Lifestyle coaching", text: "Talk through sustainable routines around movement, rest, and everyday self-care." }
];

export default function ConsultationsPage() {
  return (
    <div className="container-width py-12 sm:py-16">
      <div className="max-w-3xl"><p className="eyebrow">A little more personal support</p><h1 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">Your wellbeing, with a little guidance.</h1><p className="prose-copy mt-4 max-w-2xl">Book a one-on-one session with our wellness team. We&apos;ll listen, learn about your goals, and share practical next steps. Sessions provide general wellness guidance, not diagnosis or medical treatment.</p></div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {services.map((service) => <article key={service.name} className="rounded-2xl border border-black/[0.05] bg-white p-6"><span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-light text-xl text-brand"><service.icon /></span><h2 className="mt-4 font-display text-lg font-semibold">{service.name}</h2><p className="prose-copy mt-2 text-sm">{service.text}</p><p className="mt-4 text-xs font-semibold text-brand">Online · 30 minutes</p></article>)}
      </div>
      <div className="mt-10 grid items-start gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <BookingForm />
        <aside className="rounded-2xl bg-[#EAF2ED] p-6 sm:p-7">
          <p className="eyebrow">Good to know</p>
          <h2 className="mt-3 font-display text-xl font-semibold">A conversation, built around you.</h2>
          <ul className="mt-5 space-y-4 text-sm leading-6 text-[#58635f]">
            <li><b className="text-ink">A good place to start.</b> Share what you&apos;re hoping to work on, and we&apos;ll help connect you with the right service.</li>
            <li><b className="text-ink">Private and welcoming.</b> Your session is a supportive space to talk through everyday wellness goals.</li>
            <li><b className="text-ink">Not emergency care.</b> For urgent symptoms or medical concerns, contact a qualified healthcare professional or local emergency service.</li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
