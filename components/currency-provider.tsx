"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { DEFAULT_RATE_UPDATED_AT, DEFAULT_USD_PER_ZMW, formatCurrency } from "@/lib/currency";
import type { CurrencyCode } from "@/types";

interface CurrencyContextValue {
  currency: CurrencyCode;
  setCurrency: (currency: CurrencyCode) => void;
  formatPrice: (amountInZmw: number) => string;
  usdPerZmw: number;
  updatedAt: string;
  rateStatus: "loading" | "live" | "fallback";
}

const CurrencyContext = createContext<CurrencyContextValue | null>(null);
const STORAGE_KEY = "winamode-health-currency";

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>("ZMW");
  const [usdPerZmw, setUsdPerZmw] = useState(DEFAULT_USD_PER_ZMW);
  const [updatedAt, setUpdatedAt] = useState(DEFAULT_RATE_UPDATED_AT);
  const [rateStatus, setRateStatus] = useState<CurrencyContextValue["rateStatus"]>("loading");

  useEffect(() => {
    const savedCurrency = window.localStorage.getItem(STORAGE_KEY);
    if (savedCurrency === "USD" || savedCurrency === "ZMW") {
      setCurrencyState(savedCurrency);
    } else {
      setCurrencyState(
        Intl.DateTimeFormat().resolvedOptions().timeZone === "Africa/Lusaka" ? "ZMW" : "USD"
      );
    }

    let active = true;
    fetch("/api/exchange-rate")
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Exchange-rate request failed: HTTP ${response.status}`);
        }
        return response.json() as Promise<unknown>;
      })
      .then((value: unknown) => {
        if (!value || typeof value !== "object" || !("usdPerZmw" in value) || !("updatedAt" in value)) {
          throw new Error("Exchange-rate response is missing currency or update details");
        }
        const rate = value.usdPerZmw;
        const date = value.updatedAt;
        if (typeof rate !== "number" || !Number.isFinite(rate) || rate <= 0 || typeof date !== "string") {
          throw new Error("Exchange-rate response contains invalid currency or update details");
        }
        if (active) {
          setUsdPerZmw(rate);
          setUpdatedAt(date);
          setRateStatus("live");
        }
      })
      .catch((error: unknown) => {
        if (active) {
          console.error("Using the documented fallback ZMW/USD exchange rate:", error);
          setRateStatus("fallback");
        }
      });

    return () => { active = false; };
  }, []);

  const setCurrency = useCallback((value: CurrencyCode) => {
    setCurrencyState(value);
    window.localStorage.setItem(STORAGE_KEY, value);
  }, []);

  const value = useMemo<CurrencyContextValue>(() => ({
    currency,
    setCurrency,
    usdPerZmw,
    updatedAt,
    rateStatus,
    formatPrice: (amountInZmw) => formatCurrency(amountInZmw, currency, usdPerZmw)
  }), [currency, rateStatus, setCurrency, updatedAt, usdPerZmw]);

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) throw new Error("useCurrency must be used within a CurrencyProvider");
  return context;
}

export function CurrencySwitcher() {
  const { currency, setCurrency, rateStatus, updatedAt } = useCurrency();

  return (
    <label className="flex items-center gap-1.5">
      <span className="sr-only">Display prices in</span>
      <select
        aria-label="Display prices in"
        value={currency}
        onChange={(event) => setCurrency(event.target.value === "USD" ? "USD" : "ZMW")}
        className="h-9 cursor-pointer rounded-full border border-black/10 bg-white px-3 text-xs font-semibold text-ink focus-visible:outline-brand"
      >
        <option value="ZMW">ZMW</option>
        <option value="USD">USD</option>
      </select>
      {currency === "USD" && (
        <span
          title={rateStatus === "fallback"
            ? `Live exchange rates are unavailable. Showing the saved rate last updated ${updatedAt}.`
            : `ZMW to USD exchange rate updated ${updatedAt}.`}
          className={`hidden text-[10px] sm:inline ${rateStatus === "fallback" ? "text-amber-700" : "text-[#79817e]"}`}
        >
          {rateStatus === "loading" ? "Rate…" : rateStatus === "fallback" ? "Saved rate" : "Live rate"}
        </span>
      )}
    </label>
  );
}

export function CurrencyPrice({
  amountInZmw,
  className
}: {
  amountInZmw: number;
  className?: string;
}) {
  const { formatPrice } = useCurrency();
  return <span className={className}>{formatPrice(amountInZmw)}</span>;
}
