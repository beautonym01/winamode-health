"use client";

import Link from "next/link";
import { FiArrowUpRight, FiShoppingBag, FiStar } from "react-icons/fi";
import { useCart } from "@/components/cart-provider";
import { useCurrency } from "@/components/currency-provider";
import type { Product } from "@/types";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { formatPrice } = useCurrency();

  return (
    <article className="group overflow-hidden rounded-2xl border border-black/[0.055] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <Link href={`/product/${product.slug}`} className="relative block aspect-[1/0.9] overflow-hidden bg-[#F2F1EC]" aria-label={`View ${product.name}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={product.image} alt={product.name} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
        {product.badge && <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-brand">{product.badge}</span>}
        <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-white text-brand opacity-0 shadow transition group-hover:opacity-100"><FiArrowUpRight /></span>
      </Link>
      <div className="p-4 sm:p-5">
        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand">{product.category}</p>
        <Link href={`/product/${product.slug}`} className="mt-1.5 block font-display text-[15px] font-semibold text-ink hover:text-brand">{product.name}</Link>
        <div className="mt-2 flex items-center gap-1.5 text-xs text-[#8a8f8d]">
          <FiStar className="fill-[#D4AF37] text-gold" /><span className="font-semibold text-ink">{product.rating}</span><span>({product.reviewCount})</span>
        </div>
        <div className="mt-4 flex items-center justify-between gap-2">
          <div className="flex flex-wrap items-baseline gap-1.5">
            <span className="text-sm font-bold text-ink">{formatPrice(product.price)}</span>
            {product.originalPrice && <span className="text-xs text-[#9a9f9d] line-through">{formatPrice(product.originalPrice)}</span>}
          </div>
          <button type="button" aria-label={`Add ${product.name} to cart`} onClick={() => addItem(product)} className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-light text-brand transition hover:bg-brand hover:text-white">
            <FiShoppingBag />
          </button>
        </div>
      </div>
    </article>
  );
}
