import type { Metadata } from "next";
import { CartContent } from "@/app/cart/cart-content";

export const metadata: Metadata = { title: "Your shopping bag" };

export default function CartPage() {
  return <CartContent />;
}
