"use client";

import { useState } from "react";
import { FiMinus, FiPlus, FiShoppingBag } from "react-icons/fi";
import type { Product } from "@/types";
import { useCart } from "@/components/cart-provider";

export function ProductPurchase({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  function addToCart() {
    addItem(product, quantity);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  }

  return (
    <div className="mt-7 flex flex-wrap gap-3">
      <div className="flex h-12 items-center rounded-full border border-black/10 bg-white">
        <button type="button" aria-label="Decrease quantity" disabled={quantity <= 1} onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="grid h-12 w-11 place-items-center text-[#626a67] disabled:opacity-40"><FiMinus /></button>
        <span className="w-6 text-center text-sm font-semibold" aria-live="polite">{quantity}</span>
        <button type="button" aria-label="Increase quantity" onClick={() => setQuantity((value) => value + 1)} className="grid h-12 w-11 place-items-center text-[#626a67]"><FiPlus /></button>
      </div>
      <button type="button" onClick={addToCart} className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-white transition hover:bg-brand-dark sm:flex-none">
        <FiShoppingBag /> {added ? "Added to cart" : "Add to cart"}
      </button>
    </div>
  );
}
