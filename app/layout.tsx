import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { AskWina } from "@/components/ask-wina";
import { CartProvider } from "@/components/cart-provider";
import { CurrencyProvider } from "@/components/currency-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://winamodehealth.com"),
  title: {
    default: "WINAMODE HEALTH | Helping You Live Better, Every Day",
    template: "%s | WINAMODE HEALTH"
  },
  description: "Shop trusted vitamins, pharmacy essentials, medical supplies, and wellness products, or book a consultation. WINAMODE HEALTH, based in Zambia.",
  openGraph: {
    title: "WINAMODE HEALTH | Helping You Live Better, Every Day",
    description: "Quality health, pharmacy, cleaning, and wellness products and services, delivered across Zambia.",
    url: "https://winamodehealth.com",
    siteName: "WINAMODE HEALTH",
    locale: "en_ZM",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "WINAMODE HEALTH",
    description: "Helping You Live Better, Every Day"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "OnlineStore",
    name: "WINAMODE HEALTH",
    url: "https://winamodehealth.com",
    description: "Health, pharmaceutical, orthopedic, cleaning, and wellness products and services.",
    areaServed: "ZM",
    currenciesAccepted: ["ZMW", "USD"],
    email: "winamodehealthcaresolution@gmail.com",
    telephone: ["+260770460087", "+260976920047"]
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <CurrencyProvider>
          <CartProvider>
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
            <AskWina />
          </CartProvider>
        </CurrencyProvider>
      </body>
    </html>
  );
}
