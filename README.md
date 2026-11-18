# WINAMODE HEALTH

A responsive e-commerce and wellness storefront built with Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion, and React Icons. The visual system is shadcn/ui-ready (`components.json`) and includes a small accessible button primitive in `components/ui`.

## Getting started

Requires Node.js 18.17+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available scripts

```bash
npm run dev        # Start local development
npm run build      # Create a production build
npm run start      # Serve the production build
npm run lint       # Run Next.js ESLint checks
npm run typecheck  # Run the TypeScript compiler without emitting files
```

## Project structure

```text
app/
  about/                  Our story
  api/exchange-rate/      Cached ZMW/USD exchange-rate endpoint
  admin/                  Demo dashboard, orders, products, customers, appointments, analytics
  cart/                   Cart and coupon flow
  checkout/               Demo checkout
  contact/                Zambia contact details and form
  consultations/          Consultation services and booking form
  services/               Healthcare, cleaning, laboratory, and business supplies
  product/[slug]/         Product details, ingredients, usage, reviews
  shop/                   Search, category/price filters, sorting, pagination
  globals.css             Global styles and accessibility defaults
  layout.tsx              Root layout, fonts, metadata, shared shell
  page.tsx                Home page
  robots.ts               Robots configuration
  sitemap.ts              Product and page sitemap
components/
  ui/                     Reusable shadcn-style primitives
  ask-wina.tsx            Floating store FAQ assistant
  cart-provider.tsx       Persistent shopping cart and coupon state
  currency-provider.tsx   ZMW/USD selection and price formatting
  home-sections.tsx       Animated storefront sections
  product-card.tsx        Product card and add-to-cart action
  site-footer.tsx         Shared footer
  site-header.tsx         Responsive navigation
hooks/
  use-debounce.ts         Debounced shop search
lib/
  currency.ts             Currency conversion and delivery settings
  api.ts                  Mock product data access layer
  data.ts                 Sample products, categories, reviews, and articles
  utils.ts                Shared class and currency helpers
public/
  brand-mark.svg          Brand lockup asset
types/
  index.ts                Product, category, and cart types
```

## Storefront features

- Mobile-first home page with animated hero, category links, featured products, trust points, testimonials, wellness articles, newsletter, and consultation CTA.
- Product catalog with debounced search, category and maximum-price filters, sorting, and pagination.
- Product details with descriptions, ingredients, usage instructions, sample reviews, related products, and product metadata.
- Persistent cart with quantity controls, removal, `WINA10` coupon support, delivery estimate, and order summary.
- Zambia and international checkout address forms, delivery selection, and payment-method demo. Checkout does not collect payment; international shipping costs are confirmed by the team.
- Consultation booking and contact forms with client-side confirmation states.
- Floating **Ask WINA** store assistant for product discovery, store FAQs, and booking guidance. It does not provide diagnosis or medical advice.
- Demo admin pages at `/admin`, `/admin/orders`, `/admin/products`, `/admin/customers`, `/admin/appointments`, and `/admin/analytics`.
- Open Graph and Twitter metadata, JSON-LD store data, dynamic product sitemap, and robots configuration.
- Zambian Kwacha (ZMW) and US Dollar (USD) price display, with a cached exchange-rate endpoint. First visits default to ZMW in the Lusaka time zone and USD elsewhere; visitors can change and save their preference.
- Pharmacy, orthopedic, wound-care, fitness-equipment, cleaning kits, detergents, disinfectants, and laboratory-cleaning products. Cleaning products and kits are supplied for purchase.
- Zambia contact: +260 770 460 087, +260 976 920 047, and winamodehealthcaresolution@gmail.com.

## Production integration notes

The storefront uses sample catalog/admin data and client-side form confirmations. Prices in the mock catalog are example ZMW values; confirm and update every product and delivery price before taking orders. USD display uses a daily cached ZMW/USD rate from ExchangeRate-API, with a clearly identified fallback if the service is unavailable. Replace sample data with a secure backend before launch: persist orders, customers, appointments, and inventory; connect a payment provider; deliver form submissions; and enforce authentication/authorization on every admin API and route. Prescription medicines, implants, and clinical supplies require appropriate licensing, verification, and compliance checks. The admin pages are demonstrative and are not protected. Product images currently use Unsplash URLs and should be replaced with owned, optimized assets. Update the canonical domain in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` before deployment.
