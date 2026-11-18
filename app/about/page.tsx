import type { Metadata } from "next";
import Link from "next/link";
import { FiHeart, FiShield, FiUsers } from "react-icons/fi";

export const metadata: Metadata = { title: "Our story", description: "Meet WINAMODE HEALTH: thoughtful wellness essentials and human support for your everyday." };

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#EAF2ED]">
        <div className="container-width grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
          <div>
            <p className="eyebrow">A little more care, every day</p>
            <h1 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">We believe feeling well should feel a little simpler.</h1>
            <p className="prose-copy mt-5 max-w-lg">WINAMODE HEALTH was created with one simple thought: finding everyday health and wellness essentials should feel personal, clear, and reassuring.</p>
            <p className="prose-copy mt-3 max-w-lg">We bring thoughtfully selected products and helpful human support together in one place, so you can spend less time searching and more time caring for yourself.</p>
            <Link href="/shop" className="mt-7 inline-flex rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white">Explore the shop</Link>
          </div>
          <div className="relative min-h-[340px] overflow-hidden rounded-[30px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=85" alt="Wellness products arranged with natural ingredients" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="container-width">
          <div className="mx-auto max-w-2xl text-center"><p className="eyebrow">What we stand for</p><h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Care that starts with listening.</h2><p className="prose-copy mt-4">We make everyday wellbeing feel more approachable with trusted essentials and a genuinely helpful experience.</p></div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { icon: FiShield, title: "Thoughtfully chosen", text: "We care about the quality and usefulness of the products we bring together." },
              { icon: FiHeart, title: "Human at heart", text: "A welcoming experience and kind, practical support are part of the care." },
              { icon: FiUsers, title: "Here for your journey", text: "Your goals are personal. We offer products and consultations to meet you where you are." }
            ].map((value) => <article key={value.title} className="rounded-2xl bg-white p-7"><span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-light text-xl text-brand"><value.icon /></span><h3 className="mt-5 font-display text-lg font-semibold">{value.title}</h3><p className="prose-copy mt-2 text-sm">{value.text}</p></article>)}
          </div>
        </div>
      </section>
      <section className="bg-[#123D39] py-14 text-center text-white">
        <div className="container-width"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#d9c16e]">Our promise</p><h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Helping You Live Better, Every Day.</h2><Link href="/consultations" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand">Talk with us</Link></div>
      </section>
    </>
  );
}
