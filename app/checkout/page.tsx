import type { Metadata } from "next";
import { CheckoutForm } from "@/app/checkout/checkout-form";

export const metadata: Metadata = { title: "Secure checkout" };

export default function CheckoutPage() {
  return <CheckoutForm />;
}
