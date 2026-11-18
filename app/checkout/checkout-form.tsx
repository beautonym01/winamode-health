"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import { FiArrowLeft, FiCheck, FiLock } from "react-icons/fi";
import { useCart } from "@/components/cart-provider";
import { useCurrency } from "@/components/currency-provider";
import { EXPRESS_DELIVERY_FEE_ZMW, FREE_DELIVERY_THRESHOLD_ZMW, STANDARD_DELIVERY_FEE_ZMW } from "@/lib/currency";

export function CheckoutForm() {
  const { items, subtotal, couponCode, clearCart } = useCart();
  const { formatPrice } = useCurrency();
  const [complete, setComplete] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState("standard");
  const [country, setCountry] = useState("ZM");
  const [paymentMethod, setPaymentMethod] = useState("mobile-money");
  const delivery = country !== "ZM"
    ? 0
    : deliveryMethod === "express"
      ? EXPRESS_DELIVERY_FEE_ZMW
      : subtotal < FREE_DELIVERY_THRESHOLD_ZMW
        ? STANDARD_DELIVERY_FEE_ZMW
        : 0;
  const discount = couponCode ? subtotal * 0.1 : 0;

  useEffect(() => {
    if (Intl.DateTimeFormat().resolvedOptions().timeZone !== "Africa/Lusaka") {
      setCountry("OTHER");
      setDeliveryMethod("international");
      setPaymentMethod("card");
    }
  }, []);

  function submitOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    clearCart();
    setComplete(true);
  }

  if (complete) {
    return (
      <div className="container-width py-24 text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-light text-2xl text-brand"><FiCheck /></div>
        <p className="eyebrow mt-6">Order received</p>
        <h1 className="mt-2 font-display text-4xl font-semibold">Thanks for choosing WINAMODE.</h1>
        <p className="prose-copy mx-auto mt-4 max-w-lg">Your demo order has been placed. In a live store, you&apos;d receive an order confirmation and delivery updates by email or SMS.</p>
        <Link href="/shop" className="mt-7 inline-flex rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white">Continue shopping</Link>
      </div>
    );
  }

  if (!items.length) {
    return <div className="container-width py-24 text-center"><h1 className="font-display text-3xl font-semibold">Your bag is empty</h1><p className="prose-copy mt-3">Add something you love before checking out.</p><Link href="/shop" className="mt-6 inline-flex rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white">Explore the shop</Link></div>;
  }

  return (
    <div className="container-width py-10 sm:py-14">
      <Link href="/cart" className="inline-flex items-center gap-2 text-xs font-semibold text-brand"><FiArrowLeft /> Back to bag</Link>
      <h1 className="mt-4 font-display text-4xl font-semibold">Checkout</h1>
      <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1fr_350px]">
        <form onSubmit={submitOrder} className="space-y-5">
          <section className="rounded-2xl border border-black/[0.05] bg-white p-5 sm:p-7">
            <h2 className="font-display text-lg font-semibold">Contact details</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <label className="text-xs font-medium text-[#5d6663] sm:col-span-2">Full name<input required autoComplete="name" name="name" className="mt-2 h-11 w-full rounded-xl border border-black/10 px-3 text-sm text-ink" placeholder="Your full name" /></label>
              <label className="text-xs font-medium text-[#5d6663]">Email address<input required type="email" autoComplete="email" name="email" className="mt-2 h-11 w-full rounded-xl border border-black/10 px-3 text-sm text-ink" placeholder="you@example.com" /></label>
              <label className="text-xs font-medium text-[#5d6663]">Phone number<input required type="tel" autoComplete="tel" name="phone" className="mt-2 h-11 w-full rounded-xl border border-black/10 px-3 text-sm text-ink" placeholder="+260 97 000 0000" /></label>
            </div>
          </section>
          <section className="rounded-2xl border border-black/[0.05] bg-white p-5 sm:p-7">
            <h2 className="font-display text-lg font-semibold">Delivery details</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <label className="text-xs font-medium text-[#5d6663] sm:col-span-2">Street address<input required autoComplete="street-address" name="address" className="mt-2 h-11 w-full rounded-xl border border-black/10 px-3 text-sm text-ink" placeholder="House number and street" /></label>
              <label className="text-xs font-medium text-[#5d6663]">Country<select required autoComplete="country" name="country" value={country} onChange={(event) => { const nextCountry = event.target.value; setCountry(nextCountry); setDeliveryMethod(nextCountry === "ZM" ? "standard" : "international"); setPaymentMethod(nextCountry === "ZM" ? "mobile-money" : "card"); }} className="mt-2 h-11 w-full rounded-xl border border-black/10 bg-white px-3 text-sm text-ink"><option value="ZM">Zambia</option><option value="US">United States</option><option value="GB">United Kingdom</option><option value="ZA">South Africa</option><option value="CA">Canada</option><option value="OTHER">Other country</option></select></label>
              <label className="text-xs font-medium text-[#5d6663]">City / town<input required autoComplete="address-level2" name="city" className="mt-2 h-11 w-full rounded-xl border border-black/10 px-3 text-sm text-ink" placeholder="Lusaka" /></label>
              <label className="text-xs font-medium text-[#5d6663]">{country === "ZM" ? "Province" : "State / province / region"}
                {country === "ZM"
                  ? <select required name="region" defaultValue="" className="mt-2 h-11 w-full rounded-xl border border-black/10 bg-white px-3 text-sm text-ink"><option value="" disabled>Select province</option>{["Central", "Copperbelt", "Eastern", "Luapula", "Lusaka", "Muchinga", "Northern", "North-Western", "Southern", "Western"].map((province) => <option key={province}>{province}</option>)}</select>
                  : <input required name="region" autoComplete="address-level1" className="mt-2 h-11 w-full rounded-xl border border-black/10 px-3 text-sm text-ink" placeholder="State, province, or region" />}
              </label>
            </div>
            <fieldset className="mt-6">
              <legend className="text-xs font-semibold text-[#5d6663]">Delivery method</legend>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {country === "ZM" ? <>
                  <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-black/10 p-4 text-xs has-[:checked]:border-brand has-[:checked]:bg-brand-light"><input type="radio" name="delivery" value="standard" checked={deliveryMethod === "standard"} onChange={() => setDeliveryMethod("standard")} className="mt-0.5 accent-[#0F766E]" /><span><b className="block text-ink">Standard delivery</b><span className="mt-1 block text-[#818985]">2–4 business days · {formatPrice(STANDARD_DELIVERY_FEE_ZMW)} or free over {formatPrice(FREE_DELIVERY_THRESHOLD_ZMW)}</span></span></label>
                  <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-black/10 p-4 text-xs has-[:checked]:border-brand has-[:checked]:bg-brand-light"><input type="radio" name="delivery" value="express" checked={deliveryMethod === "express"} onChange={() => setDeliveryMethod("express")} className="mt-0.5 accent-[#0F766E]" /><span><b className="block text-ink">Express delivery</b><span className="mt-1 block text-[#818985]">Next business day · {formatPrice(EXPRESS_DELIVERY_FEE_ZMW)}</span></span></label>
                </> : <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-brand bg-brand-light p-4 text-xs"><input type="radio" name="delivery" value="international" defaultChecked className="mt-0.5 accent-[#0F766E]" /><span><b className="block text-ink">International delivery</b><span className="mt-1 block text-[#68716e]">Our team will confirm shipping cost and availability before processing.</span></span></label>}
              </div>
            </fieldset>
          </section>
          <section className="rounded-2xl border border-black/[0.05] bg-white p-5 sm:p-7">
            <h2 className="font-display text-lg font-semibold">Payment method</h2>
            <fieldset className="mt-4 space-y-3">
              {country === "ZM" && <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-black/10 p-4 text-sm has-[:checked]:border-brand has-[:checked]:bg-brand-light"><input type="radio" name="payment" value="mobile-money" checked={paymentMethod === "mobile-money"} onChange={() => setPaymentMethod("mobile-money")} className="accent-[#0F766E]" /><span><b className="block text-sm">Mobile Money</b><span className="mt-1 block text-xs text-[#818985]">Pay securely with your mobile money provider</span></span></label>}
              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-black/10 p-4 text-sm has-[:checked]:border-brand has-[:checked]:bg-brand-light"><input type="radio" name="payment" value="card" checked={paymentMethod === "card"} onChange={() => setPaymentMethod("card")} className="accent-[#0F766E]" /><span><b className="block text-sm">Debit or credit card</b><span className="mt-1 block text-xs text-[#818985]">Visa and Mastercard accepted</span></span></label>
              {country === "ZM" && <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-black/10 p-4 text-sm has-[:checked]:border-brand has-[:checked]:bg-brand-light"><input type="radio" name="payment" value="cash-on-delivery" checked={paymentMethod === "cash-on-delivery"} onChange={() => setPaymentMethod("cash-on-delivery")} className="accent-[#0F766E]" /><span><b className="block text-sm">Cash on delivery</b><span className="mt-1 block text-xs text-[#818985]">Pay when your order arrives</span></span></label>}
            </fieldset>
          </section>
          <button type="submit" className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand text-sm font-semibold text-white transition hover:bg-brand-dark"><FiLock /> Place demo order · {formatPrice(subtotal + delivery - discount)}</button>
          <p className="text-center text-[10px] text-[#939a97]">Demo checkout only. No payment is collected.</p>
        </form>

        <aside className="rounded-2xl border border-black/[0.05] bg-white p-5 sm:p-6">
          <h2 className="font-display text-lg font-semibold">Your order</h2>
          <div className="mt-5 space-y-4">
            {items.map(({ product, quantity }) => <div key={product.id} className="flex justify-between gap-3 text-xs"><span className="text-[#59615f]">{product.name} <span className="text-[#8b928f]">× {quantity}</span></span><span className="shrink-0 font-semibold">{formatPrice(product.price * quantity)}</span></div>)}
          </div>
          <div className="mt-5 space-y-3 border-t border-black/5 pt-5 text-sm">
            <div className="flex justify-between text-[#69716e]"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
            <div className="flex justify-between text-[#69716e]"><span>Delivery</span><span>{country !== "ZM" ? "To be confirmed" : delivery === 0 ? "Free" : formatPrice(delivery)}</span></div>
            {discount > 0 && <div className="flex justify-between text-brand"><span>WINA10 discount</span><span>−{formatPrice(discount)}</span></div>}
            <div className="flex justify-between border-t border-black/5 pt-4 font-bold"><span>Total</span><span>{formatPrice(subtotal + delivery - discount)}</span></div>
          </div>
        </aside>
      </div>
    </div>
  );
}
