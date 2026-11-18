import { NextResponse } from "next/server";

export const revalidate = 86_400;

interface ExchangeRateResponse {
  result: string;
  base_code: string;
  time_last_update_utc: string;
  rates: { USD?: number };
}

function isExchangeRateResponse(value: unknown): value is ExchangeRateResponse {
  if (!value || typeof value !== "object") return false;
  const response = value as Partial<ExchangeRateResponse>;
  return response.result === "success"
    && response.base_code === "ZMW"
    && typeof response.time_last_update_utc === "string"
    && typeof response.rates?.USD === "number"
    && Number.isFinite(response.rates.USD)
    && response.rates.USD > 0;
}

export async function GET() {
  try {
    const response = await fetch("https://open.er-api.com/v6/latest/ZMW", {
      next: { revalidate }
    });

    if (!response.ok) {
      throw new Error(`Exchange-rate provider returned HTTP ${response.status}`);
    }

    const data: unknown = await response.json();
    if (!isExchangeRateResponse(data)) {
      throw new Error("Exchange-rate provider returned invalid ZMW/USD data");
    }

    return NextResponse.json({
      base: "ZMW",
      quote: "USD",
      usdPerZmw: data.rates.USD,
      updatedAt: data.time_last_update_utc
    });
  } catch (error) {
    console.error("Unable to retrieve the latest ZMW/USD exchange rate:", error);
    return NextResponse.json(
      { error: "The current exchange rate is temporarily unavailable." },
      { status: 503 }
    );
  }
}
