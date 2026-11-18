import type { Metadata } from "next";
import { Suspense } from "react";
import { ShopClient } from "@/app/shop/shop-client";

export const metadata: Metadata = { title: "Shop health & wellness essentials" };

export default function ShopPage() {
  return <Suspense fallback={<div className="container-width py-24 text-center text-sm text-[#68716e]">Loading the shop…</div>}><ShopClient /></Suspense>;
}
