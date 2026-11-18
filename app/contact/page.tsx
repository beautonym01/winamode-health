import type { Metadata } from "next";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { ContactForm } from "@/app/contact/contact-form";

export const metadata: Metadata = { title: "Contact us" };

export default function ContactPage() {
  return (
    <div className="container-width py-12 sm:py-16">
      <div className="mb-9"><p className="eyebrow">We&apos;re happy to help</p><h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">Let&apos;s talk.</h1><p className="prose-copy mt-3 max-w-xl">Have a question about an order, a product, or what we do? Send us a note and our team will be in touch.</p></div>
      <div className="grid items-start gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <ContactForm />
        <aside className="space-y-4">
          <div className="rounded-2xl bg-white p-6">
            <h2 className="font-display text-lg font-semibold">Get in touch</h2>
            <div className="mt-5 space-y-5">
              <a href="mailto:winamodehealthcaresolution@gmail.com" className="flex min-w-0 gap-3 text-sm"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-light text-brand"><FiMail /></span><span className="min-w-0"><b className="block">Email us</b><span className="mt-1 block break-all text-xs text-[#7b8380]">winamodehealthcaresolution@gmail.com</span></span></a>
              <a href="tel:+260770460087" className="flex gap-3 text-sm"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-light text-brand"><FiPhone /></span><span><b className="block">Call us</b><span className="mt-1 block text-xs text-[#7b8380]">+260 770 460 087</span></span></a>
              <a href="tel:+260976920047" className="flex gap-3 text-sm"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-light text-brand"><FiPhone /></span><span><b className="block">Call us</b><span className="mt-1 block text-xs text-[#7b8380]">+260 976 920 047</span></span></a>
              <div className="flex gap-3 text-sm"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-light text-brand"><FiMapPin /></span><span><b className="block">Our home</b><span className="mt-1 block text-xs leading-5 text-[#7b8380]">Zambia<br />Serving customers locally and abroad</span></span></div>
            </div>
          </div>
          <div className="flex min-h-[220px] items-end overflow-hidden rounded-2xl bg-[#DDE9E3] p-5">
            <div className="rounded-xl bg-white/90 p-4 backdrop-blur"><p className="text-xs font-bold uppercase tracking-wider text-brand">WINAMODE HEALTH</p><p className="mt-1 text-sm font-semibold">Zambia</p><p className="mt-1 text-xs text-[#7b8380]">Map preview placeholder · Zambia</p></div>
          </div>
        </aside>
      </div>
    </div>
  );
}
