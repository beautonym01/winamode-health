"use client";

import Link from "next/link";
import { useState } from "react";
import { FiArrowLeft, FiMinus, FiPlus, FiTag, FiTrash2 } from "react-icons/fi";
import { useCart } from "@/components/cart-provider";
import { useCurrency } from "@/components/currency-provider";
import { FREE_DELIVERY_THRESHOLD_ZMW, STANDARD_DELIVERY_FEE_ZMW } from "@/lib/currency";

export function CartContent() {
  const { items, subtotal, updateQuantity, removeItem, couponCode, applyCoupon: saveCoupon } = useCart();
  const { formatPrice } = useCurrency();
  const [coupon, setCoupon] = useState("");
  const [couponMessage, setCouponMessage] = useState("");
  const discount = couponCode ? subtotal * 0.1 : 0;
  const delivery = subtotal === 0 || subtotal >= FREE_DELIVERY_THRESHOLD_ZMW ? 0 : STANDARD_DELIVERY_FEE_ZMW;

  function applyCoupon() {
    if (saveCoupon(coupon)) {
      setCouponMessage("WINA10 applied — enjoy 10% off.");
    } else {
      setCouponMessage("That code isn't valid. Try WINA10 for 10% off.");
    }
  }

  if (!items.length) {
    return (
      <div className="container-width py-20 text-center sm:py-28">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-light text-2xl text-brand">♡</div>
        <h1 className="mt-5 font-display text-3xl font-semibold">Your bag is taking a breather</h1>
        <p className="prose-copy mx-auto mt-3 max-w-md">Explore thoughtful essentials for your everyday wellness routine.</p>
        <Link href="/shop" className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white"><FiArrowLeft /> Explore the shop</Link>
      </div>
    );
  }

  return (
    <div className="container-width py-10 sm:py-14">
      <p className="eyebrow">Your feel-good finds</p>
      <h1 className="mt-2 font-display text-4xl font-semibold">Your shopping bag <span className="text-xl font-medium text-[#89908d]">({items.length})</span></h1>
      <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1fr_350px]">
        <div className="space-y-3">
          {items.map(({ product, quantity }) => (
            <article key={product.id} className="flex gap-4 rounded-2xl border border-black/[0.05] bg-white p-3 sm:gap-5 sm:p-5">
              <Link href={`/product/${product.slug}`} className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-[#F0F0EC] sm:h-32 sm:w-32">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
              </Link>
              <div className="flex min-w-0 flex-1 flex-col justify-between py-1">
                <div className="flex justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-brand">{product.category}</p>
                    <Link href={`/product/${product.slug}`} className="mt-1 block truncate font-display text-sm font-semibold sm:text-base">{product.name}</Link>
                  </div>
                  <button type="button" aria-label={`Remove ${product.name}`} onClick={() => removeItem(product.id)} className="h-8 w-8 shrink-0 rounded-full text-[#929996] hover:bg-red-50 hover:text-red-600"><FiTrash2 className="mx-auto" /></button>
                </div>
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div className="inline-flex h-8 items-center rounded-full border border-black/10">
                    <button type="button" aria-label={`Decrease ${product.name} quantity`} onClick={() => updateQuantity(product.id, quantity - 1)} className="grid h-8 w-8 place-items-center text-xs"><FiMinus /></button>
                    <span className="w-6 text-center text-xs font-semibold">{quantity}</span>
                    <button type="button" aria-label={`Increase ${product.name} quantity`} onClick={() => updateQuantity(product.id, quantity + 1)} className="grid h-8 w-8 place-items-center text-xs"><FiPlus /></button>
                  </div>
                  <p className="text-sm font-bold">{formatPrice(product.price * quantity)}</p>
                </div>
              </div>
            </article>
          ))}
          <Link href="/shop" className="inline-flex items-center gap-2 py-3 text-sm font-semibold text-brand"><FiArrowLeft /> Continue shopping</Link>
        </div>

        <aside className="rounded-2xl border border-black/[0.05] bg-white p-5 sm:p-6">
          <h2 className="font-display text-lg font-semibold">Order summary</h2>
          <div className="mt-5 flex gap-2">
            <label htmlFor="coupon-code" className="sr-only">Coupon code</label>
            <div className="flex h-11 min-w-0 flex-1 items-center gap-2 rounded-full border border-black/10 px-4"><FiTag className="shrink-0 text-brand" /><input id="coupon-code" value={coupon} onChange={(event) => setCoupon(event.target.value)} placeholder="Promo code" className="min-w-0 flex-1 text-xs outline-none" /></div>
            <button type="button" onClick={applyCoupon} className="rounded-full bg-brand-light px-4 text-xs font-semibold text-brand hover:bg-[#d9eee8]">Apply</button>
          </div>
          {couponMessage && <p role="status" className={`mt-2 text-xs ${couponCode ? "text-brand" : "text-red-600"}`}>{couponMessage}</p>}
          <div className="mt-6 space-y-3 border-t border-black/5 pt-5 text-sm">
            <div className="flex justify-between text-[#69716e]"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
            <div className="flex justify-between text-[#69716e]"><span>Delivery</span><span>{delivery === 0 ? "Free" : formatPrice(delivery)}</span></div>
            {discount > 0 && <div className="flex justify-between text-brand"><span>WINA10 discount</span><span>−{formatPrice(discount)}</span></div>}
            <div className="flex justify-between border-t border-black/5 pt-4 text-base font-bold"><span>Total</span><span>{formatPrice(subtotal + delivery - discount)}</span></div>
          </div>
          {subtotal < FREE_DELIVERY_THRESHOLD_ZMW && <p className="mt-3 text-[11px] leading-5 text-[#838b88]">Add {formatPrice(FREE_DELIVERY_THRESHOLD_ZMW - subtotal)} more for free delivery.</p>}
          <Link href="/checkout" className="mt-6 flex h-12 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white transition hover:bg-brand-dark">Continue to checkout</Link>
          <p className="mt-4 text-center text-[10px] text-[#939a97]">Secure checkout · Your details are protected</p>
        </aside>
      </div>
    </div>
  );
}
