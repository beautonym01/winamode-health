"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiArrowUpRight, FiCheck, FiHeart, FiShield, FiStar, FiTruck } from "react-icons/fi";
import { articles, businessSupplies, categories, featuredProducts, testimonials } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { NewsletterForm } from "@/components/newsletter-form";

const reveal = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
};

export function HomeSections() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#EAF2ED]">
        <div className="container-width grid min-h-[610px] items-center gap-8 py-12 md:grid-cols-[1.05fr_0.95fr] md:py-16">
          <motion.div initial="hidden" animate="show" variants={reveal} className="relative z-10 py-8 md:py-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white/75 px-4 py-2 text-xs font-semibold tracking-wide text-brand"><span className="h-2 w-2 rounded-full bg-gold" /> WELLNESS, WITH YOU IN MIND</span>
            <h1 className="mt-6 max-w-[620px] font-display text-[42px] font-semibold leading-[1.12] tracking-[-0.04em] text-[#173B37] sm:text-5xl lg:text-[62px]">Your Trusted Partner in <span className="text-brand">Health & Wellness</span></h1>
            <p className="prose-copy mt-5 max-w-lg text-base sm:text-lg">Quality health products, supplements, and wellness solutions delivered to your doorstep.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop" className="inline-flex h-12 items-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-white transition hover:bg-brand-dark">Shop Now <FiArrowRight /></Link>
              <Link href="/consultations" className="inline-flex h-12 items-center rounded-full border border-brand/20 bg-white/70 px-6 text-sm font-semibold text-brand transition hover:bg-white">Book Consultation</Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-[#52625e]">
              <span className="inline-flex items-center gap-2"><FiShield className="text-brand" /> Carefully selected products</span>
              <span className="inline-flex items-center gap-2"><FiTruck className="text-brand" /> Delivery across Zambia</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative min-h-[350px] overflow-hidden rounded-[36px] md:min-h-[470px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1400&q=88" alt="Woman practicing a mindful wellness routine outdoors" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#173B37]/35 via-transparent to-white/10" />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/40 bg-white/85 p-4 shadow-lg backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-auto sm:max-w-[310px]">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">Little steps. Better days.</p>
              <p className="mt-1 font-display text-lg font-semibold">Make your wellbeing a daily ritual.</p>
            </div>
            <div className="absolute right-5 top-5 grid h-[62px] w-[62px] place-items-center rounded-full bg-white/90 text-center shadow-lg sm:right-7 sm:top-7">
              <span className="text-[9px] font-bold uppercase leading-3 tracking-wider text-brand">Care<br />delivered</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="categories" className="section-space scroll-mt-24">
        <div className="container-width">
          <SectionHeading eyebrow="Find your feel-good" title="Shop by category" description="Everyday essentials for wherever your wellbeing journey takes you." action={<Link href="/shop" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:gap-3">Explore all <FiArrowRight /></Link>} />
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }} variants={{ show: { transition: { staggerChildren: 0.055 } } }} className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {categories.map((category) => (
              <motion.div key={category.name} variants={reveal}>
                <Link href={`/shop?category=${encodeURIComponent(category.name)}`} className="group flex h-full flex-col items-center rounded-2xl border border-black/[0.04] bg-white p-4 text-center transition hover:-translate-y-1 hover:shadow-soft sm:p-5">
                  <span className={`grid h-14 w-14 place-items-center rounded-2xl ${category.color} text-2xl text-brand transition group-hover:scale-105`}>{category.icon}</span>
                  <span className="mt-3 text-xs font-semibold leading-4 text-[#424b48]">{category.name}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-width">
          <SectionHeading eyebrow="Customer favourites" title="A little goodness goes a long way" description="Customer-loved essentials, selected to support your everyday routine." action={<Link href="/shop" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:gap-3">Shop all products <FiArrowRight /></Link>} />
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.08 }} variants={{ show: { transition: { staggerChildren: 0.07 } } }} className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <motion.div key={product.id} variants={reveal}><ProductCard product={product} /></motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-width">
          <SectionHeading eyebrow="The WINAMODE difference" title="Wellness you can feel good about" description="A more thoughtful way to shop the things that help you feel your best." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { icon: FiShield, title: "Genuine products", copy: "Quality essentials, sourced with care." },
              { icon: FiTruck, title: "Fast delivery", copy: "Carefully packed and on its way to you." },
              { icon: FiHeart, title: "Expert support", copy: "Friendly help for your shopping journey." },
              { icon: FiCheck, title: "Secure payments", copy: "A smooth, secure checkout experience." },
              { icon: FiStar, title: "Everyday value", copy: "Thoughtful picks at feel-good prices." }
            ].map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }} className="rounded-2xl border border-black/[0.05] bg-white p-5">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-light text-xl text-brand"><item.icon /></span>
                <h3 className="mt-4 font-display text-sm font-semibold">{item.title}</h3>
                <p className="mt-2 text-xs leading-5 text-[#737b78]">{item.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-width">
          <SectionHeading
            eyebrow="Healthcare & business supplies"
            title="More essentials for your work and wellbeing."
            description="Explore clinical, orthopedic, laboratory, and cleaning products for individuals, workplaces, and professional teams."
            action={<Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:gap-3">Explore all supplies <FiArrowRight /></Link>}
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {businessSupplies.map((supply) => (
              <article key={supply.name} className="overflow-hidden rounded-2xl border border-black/[0.05] bg-[#F8F7F4]">
                <div className="aspect-[1.7/1] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={supply.image} alt="" loading="lazy" className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-semibold">{supply.name}</h3>
                  <p className="prose-copy mt-2 text-xs">{supply.description}</p>
                  <Link href={`/shop?category=${encodeURIComponent(supply.category)}`} className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-brand">Browse supplies <FiArrowUpRight /></Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-brand-light p-5 sm:p-6">
            <p className="text-sm text-[#4f5c58]">Looking for a bulk order, specialist item, or cleaning kit? <span className="font-semibold text-ink">Talk to our team.</span></p>
            <Link href="/contact" className="inline-flex h-10 items-center gap-2 rounded-full bg-brand px-5 text-xs font-semibold text-white hover:bg-brand-dark">Request a quote <FiArrowRight /></Link>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-width overflow-hidden rounded-[32px] bg-[#123D39]">
          <div className="grid items-center gap-8 p-7 sm:p-10 md:grid-cols-[1.1fr_0.9fr] md:p-14">
            <div className="relative z-10">
              <p className="eyebrow !text-[#d9c16e]">A little support goes a long way</p>
              <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight text-white sm:text-[42px]">Your health journey is yours. We&apos;re here for it.</h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/65">Get a little more clarity with a one-on-one session focused on nutrition, everyday wellness, or lifestyle habits.</p>
              <ul className="mt-5 space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2"><FiCheck className="text-[#d9c16e]" /> Nutrition consultations</li>
                <li className="flex items-center gap-2"><FiCheck className="text-[#d9c16e]" /> Wellness coaching</li>
                <li className="flex items-center gap-2"><FiCheck className="text-[#d9c16e]" /> Lifestyle advice</li>
              </ul>
              <Link href="/consultations" className="mt-7 inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-brand hover:bg-[#eaf4f1]">Book Consultation <FiArrowRight /></Link>
            </div>
            <div className="relative hidden min-h-[330px] overflow-hidden rounded-[26px] md:block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85" alt="Wellness professional speaking with a client" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#123D39]/45 to-transparent" />
              <span className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-brand">Your wellbeing, your way</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F0F3EF] py-20">
        <div className="container-width">
          <SectionHeading eyebrow="Kind words" title="A little love from our community" description="Real notes from people making WINAMODE part of their everyday." />
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((review) => (
              <article key={review.name} className="rounded-2xl bg-white p-6 sm:p-7">
                <div className="flex gap-1 text-gold" aria-label={`${review.stars} out of 5 stars`}>{Array.from({ length: review.stars }).map((_, index) => <FiStar key={index} className="fill-current" />)}</div>
                <blockquote className="mt-4 text-sm leading-7 text-[#525b58]">“{review.quote}”</blockquote>
                <div className="mt-6 flex items-center gap-3 border-t border-black/5 pt-4">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-light text-xs font-bold text-brand">{review.name.slice(0, 1)}</span>
                  <div><p className="text-sm font-semibold">{review.name}</p><p className="mt-0.5 text-xs text-[#8a918e]">{review.city} · Verified customer</p></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-width">
          <SectionHeading eyebrow="A little read for your day" title="Wellness notes" description="Simple, thoughtful reads to help you care for yourself, one day at a time." action={<Link href="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-brand">Explore more <FiArrowRight /></Link>} />
          <div className="grid gap-5 md:grid-cols-3">
            {articles.map((article) => (
              <article key={article.title} className="group overflow-hidden rounded-2xl bg-white">
                <div className="aspect-[1.5/1] overflow-hidden bg-[#eee]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={article.image} alt="" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand">{article.category} <span className="mx-1 text-[#bcc2bf]">·</span> {article.date}</p>
                  <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{article.title}</h3>
                  <Link href="/about" className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-brand">Read article <FiArrowUpRight /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="newsletter" className="scroll-mt-24 bg-brand py-14">
        <div className="container-width flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/65">A little good in your inbox</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">Wellness notes, made for you.</h2>
            <p className="mt-2 text-sm text-white/70">Sign up for thoughtful tips, new arrivals, and subscriber-only offers.</p>
          </div>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
