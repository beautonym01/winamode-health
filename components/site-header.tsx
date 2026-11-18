"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiSearch, FiShoppingBag, FiX } from "react-icons/fi";
import { useCart } from "@/components/cart-provider";
import { CurrencySwitcher } from "@/components/currency-provider";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/#categories", label: "Categories" },
  { href: "/services", label: "Business supplies" },
  { href: "/consultations", label: "Consultations" },
  { href: "/about", label: "Our story" }
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <>
      <div className="bg-brand px-4 py-2 text-center text-xs font-medium tracking-wide text-white">
        Your everyday wellness, delivered with care. <span className="hidden sm:inline">Serving Zambia and customers abroad.</span>
      </div>
      <header className="sticky top-0 z-40 border-b border-black/[0.05] bg-[#F8F7F4]/95 backdrop-blur-md">
        <div className="container-width flex h-[76px] items-center justify-between gap-5">
          <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="WINAMODE HEALTH home">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand text-xl font-bold text-white">W</span>
            <span className="leading-tight">
              <span className="block font-display text-[15px] font-bold tracking-[0.12em] text-ink">WINAMODE</span>
              <span className="block text-[10px] font-semibold tracking-[0.2em] text-brand">HEALTH</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-[#555d5b] transition hover:text-brand">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <CurrencySwitcher />
            <Link href="/shop" className="hidden h-10 w-10 items-center justify-center rounded-full text-xl text-[#4c5553] hover:bg-white sm:flex" aria-label="Search products">
              <FiSearch />
            </Link>
            <Link href="/cart" className="relative flex h-10 w-10 items-center justify-center rounded-full text-xl text-[#4c5553] transition hover:bg-white" aria-label={`Shopping cart, ${itemCount} items`}>
              <FiShoppingBag />
              {itemCount > 0 && <span className="absolute -right-0.5 -top-0.5 grid h-[18px] min-w-[18px] place-items-center rounded-full bg-gold px-1 text-[10px] font-bold text-ink">{itemCount}</span>}
            </Link>
            <Link href="/shop" className="hidden rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark sm:inline-flex">
              Shop now
            </Link>
            <button type="button" className="grid h-10 w-10 place-items-center rounded-full text-xl lg:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-black/5 bg-[#F8F7F4] px-5 py-4 lg:hidden" aria-label="Mobile navigation">
            <div className="container-width flex flex-col gap-1">
              {links.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-3 text-sm font-medium hover:bg-white">
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-3 text-sm font-medium hover:bg-white">Contact</Link>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
