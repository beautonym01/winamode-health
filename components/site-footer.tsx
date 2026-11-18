import Link from "next/link";
import { FiArrowUpRight, FiFacebook, FiInstagram } from "react-icons/fi";

export function SiteFooter() {
  return (
    <footer className="bg-[#123D39] text-white">
      <div className="container-width grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-lg font-bold text-brand">W</span>
            <span className="font-display text-sm font-bold tracking-[0.14em]">WINAMODE<br /><span className="text-[10px] tracking-[0.2em] text-[#c5ded8]">HEALTH</span></span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-7 text-white/65">Helping You Live Better, Every Day. Thoughtful wellness essentials, chosen with care.</p>
          <p className="mt-3 text-xs text-white/55">Based in Zambia · Serving customers locally and internationally.</p>
          <div className="mt-5 flex gap-3">
            <a href="https://instagram.com" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full border border-white/20 hover:bg-white/10"><FiInstagram /></a>
            <a href="https://facebook.com" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full border border-white/20 hover:bg-white/10"><FiFacebook /></a>
          </div>
        </div>
        <div>
          <h2 className="mb-5 text-sm font-semibold">Explore</h2>
          <ul className="space-y-3 text-sm text-white/65">
            <li><Link href="/shop" className="hover:text-white">Shop all</Link></li>
            <li><Link href="/#categories" className="hover:text-white">Categories</Link></li>
            <li><Link href="/services" className="hover:text-white">Business supplies</Link></li>
            <li><Link href="/consultations" className="hover:text-white">Consultations</Link></li>
            <li><Link href="/about" className="hover:text-white">Our story</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="mb-5 text-sm font-semibold">We&apos;re here to help</h2>
          <ul className="space-y-3 text-sm text-white/65">
            <li><Link href="/contact" className="hover:text-white">Contact us</Link></li>
            <li><Link href="/cart" className="hover:text-white">Your cart</Link></li>
            <li><Link href="/admin" className="hover:text-white">Admin demo</Link></li>
            <li><a href="tel:+260770460087" className="hover:text-white">+260 770 460 087</a></li>
            <li><a href="tel:+260976920047" className="hover:text-white">+260 976 920 047</a></li>
            <li><a href="mailto:winamodehealthcaresolution@gmail.com" className="break-all hover:text-white">winamodehealthcaresolution@gmail.com</a></li>
          </ul>
        </div>
        <div>
          <h2 className="mb-5 text-sm font-semibold">Wellness, delivered</h2>
          <p className="text-sm leading-6 text-white/65">Get thoughtful tips, new arrivals, and a little inspiration for your everyday.</p>
          <Link href="/#newsletter" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#d9c16e] hover:text-white">Join our newsletter <FiArrowUpRight /></Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-width flex flex-col justify-between gap-3 py-5 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} WINAMODE HEALTH. All rights reserved.</p>
          <p>Wellness products are not a substitute for professional medical advice.</p>
        </div>
      </div>
    </footer>
  );
}
