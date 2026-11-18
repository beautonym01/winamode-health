import type { CurrencyCode } from "@/types";

export const DEFAULT_USD_PER_ZMW = 0.04859;
export const DEFAULT_RATE_UPDATED_AT = "2026-11-17T00:02:31.000Z";
export const FREE_DELIVERY_THRESHOLD_ZMW = 500;
export const STANDARD_DELIVERY_FEE_ZMW = 25;
export const EXPRESS_DELIVERY_FEE_ZMW = 50;

export function formatCurrency(
  amountInZmw: number,
  currency: CurrencyCode,
  usdPerZmw: number
) {
  const amount = currency === "USD" ? amountInZmw * usdPerZmw : amountInZmw;
  return new Intl.NumberFormat(currency === "ZMW" ? "en-ZM" : "en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 2
  }).format(amount);
}
