import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { businessSupplies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Healthcare, cleaning & business supplies",
  description: "Explore WINAMODE HEALTH pharmacy, orthopedic, wound-care, laboratory-cleaning, and cleaning-kit supplies in Zambia."
};

const supplyGroups = [
  {
    title: "Pharmacy & medical supplies",
    category: "Pharmacy & Medicines",
    items: [
      "Pharmaceutical and non-prescription health products",
      "Wound-cleansing solutions and wound-care supplies",
      "Orthopedic, prosthetic, trauma and sports-medicine supplies",
      "Orthopedic supports, traction supplies and mobility products"
    ]
  },
  {
    title: "Cleaning & laboratory supplies",
    category: "Cleaning & Laboratory Supplies",
    items: [
      "Cleaning equipment, supplies and accessories",
      "Cleaning and disinfecting solutions",
      "Detergent surfactants and general-purpose cleaning kits",
      "Laboratory-washing detergents and instrument cleaners",
      "Office-equipment cleaning solutions and wipes",
      "Disinfection, presterilization cleaning and decontamination supplies"
    ]
  },
  {
    title: "Fitness & wellness",
    category: "Fitness & Nutrition",
    items: [
      "Fitness equipment and workout accessories",
      "Nutrition, supplements and personal wellness essentials"
    ]
  }
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#EAF2ED]">
        <div className="container-width grid items-center gap-8 py-14 md:grid-cols-[1.1fr_0.9fr] md:py-18">
          <div>
            <p className="eyebrow">Health, cleaning & business supplies</p>
            <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Health and workplace essentials, supplied with care.</h1>
            <p className="prose-copy mt-4 max-w-xl">Browse health and wellness essentials alongside pharmaceutical, clinical, orthopedic, laboratory, and cleaning products for customers across Zambia.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/shop" className="inline-flex h-11 items-center gap-2 rounded-full bg-brand px-5 text-sm font-semibold text-white">Shop supplies <FiArrowRight /></Link>
              <Link href="/contact" className="inline-flex h-11 items-center rounded-full border border-brand/20 bg-white px-5 text-sm font-semibold text-brand">Request a business quote</Link>
            </div>
          </div>
          <div className="relative min-h-[260px] overflow-hidden rounded-[26px] sm:min-h-[330px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=85" alt="A selection of cleaning supplies" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-width">
          <div className="max-w-2xl">
            <p className="eyebrow">Thoughtful product sourcing</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Supplies for health, work, and wellbeing.</h2>
            <p className="prose-copy mt-3">Our supply range is organized around what people and organizations need. Availability, specifications, and regulatory requirements are confirmed with our team.</p>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {supplyGroups.map((group) => (
              <article key={group.title} className="rounded-2xl border border-black/[0.05] bg-white p-5 sm:p-6">
                <h3 className="font-display text-lg font-semibold">{group.title}</h3>
                <ul className="mt-4 space-y-3">
                  {group.items.map((item) => <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-[#636c68]"><FiCheck className="mt-1 shrink-0 text-brand" />{item}</li>)}
                </ul>
                <Link href={`/shop?category=${encodeURIComponent(group.category)}`} className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-brand">Explore related products <FiArrowRight /></Link>
              </article>
            ))}
          </div>
          <p className="mt-5 max-w-3xl text-xs leading-5 text-[#818985]">Medicines, implants, clinical products, detergents, and disinfectants are supplied subject to availability, manufacturer instructions, applicable Zambian laws, licensing, and prescription requirements. Prescription-only medicines and specialist implant supplies require appropriate professional verification and are not sold as ordinary self-service shop products.</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-width">
          <div className="max-w-2xl">
            <p className="eyebrow">Specialist product enquiries</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">More specialist supplies, available on request.</h2>
            <p className="prose-copy mt-3">Contact our team to confirm product specifications and availability for specialist healthcare supplies.</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {businessSupplies.map((supply) => (
              <article key={supply.name} className="overflow-hidden rounded-2xl border border-black/[0.05] bg-[#F8F7F4]">
                <div className="aspect-[1.7/1] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={supply.image} alt="" loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-semibold">{supply.name}</h3>
                  <p className="prose-copy mt-2 text-xs">{supply.description}</p>
                  <Link href={`/shop?category=${encodeURIComponent(supply.category)}`} className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-brand">Browse supplies <FiArrowRight /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-width rounded-[28px] bg-[#123D39] px-6 py-10 text-center text-white sm:px-12 sm:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#d9c16e]">Need something specific?</p>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-semibold sm:text-4xl">Tell us what you&apos;re looking for.</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/70">Ask about cleaning kits, bulk supply orders, product availability, or specialist healthcare supplies.</p>
          <Link href="/contact" className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-brand">Contact our Zambia team <FiArrowRight /></Link>
        </div>
      </section>
    </>
  );
}
