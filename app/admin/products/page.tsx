"use client";

import Link from "next/link";
import Image from "next/image";
import { useCurrency } from "@/components/currency-provider";
import { products } from "@/lib/data";

export default function AdminProductsPage() {
  const { formatPrice } = useCurrency();
  return (
    <section className="overflow-hidden rounded-2xl border border-black/[0.05] bg-white">
      <div className="flex flex-wrap items-center justify-between gap-3 p-5"><div><h2 className="font-display text-lg font-semibold">Products</h2><p className="mt-1 text-xs text-[#818985]">{products.length} items in the sample catalog</p></div><Link href="/shop" className="rounded-full bg-brand px-4 py-2.5 text-xs font-semibold text-white">View storefront</Link></div>
      <div className="overflow-x-auto"><table className="w-full min-w-[650px] text-left text-xs"><thead className="bg-[#F7F8F6] text-[10px] uppercase tracking-wider text-[#8a918e]"><tr>{["Product", "Category", "Price", "Reviews", "Status"].map((item) => <th key={item} className="px-5 py-3 font-semibold">{item}</th>)}</tr></thead><tbody className="divide-y divide-black/5">{products.map((product) => <tr key={product.id}><td className="px-5 py-3.5"><div className="flex items-center gap-3"><div className="h-10 w-10 overflow-hidden rounded-lg bg-[#eee]"><Image src={product.image} alt="" width={40} height={40} className="h-full w-full object-cover" /></div><span className="font-semibold">{product.name}</span></div></td><td className="px-5 py-4 text-[#737b78]">{product.category}</td><td className="px-5 py-4 font-semibold">{formatPrice(product.price)}</td><td className="px-5 py-4">{product.reviewCount}</td><td className="px-5 py-4"><span className="rounded-full bg-brand-light px-2.5 py-1 text-[10px] font-semibold text-brand">Active</span></td></tr>)}</tbody></table></div>
    </section>
  );
}
