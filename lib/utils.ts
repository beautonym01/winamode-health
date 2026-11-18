import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { DEFAULT_USD_PER_ZMW, formatCurrency } from "@/lib/currency";
import type { CurrencyCode } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(
  amountInZmw: number,
  currency: CurrencyCode = "ZMW",
  usdPerZmw = DEFAULT_USD_PER_ZMW
) {
  return formatCurrency(amountInZmw, currency, usdPerZmw);
}
