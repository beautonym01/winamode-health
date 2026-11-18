import Link from "next/link";

export default function NotFound() {
  return <div className="container-width py-24 text-center"><p className="eyebrow">Not found</p><h1 className="mt-3 font-display text-4xl font-semibold">We couldn&apos;t find that page.</h1><p className="prose-copy mt-3">Let&apos;s get you back to something good.</p><Link href="/shop" className="mt-7 inline-flex rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white">Explore the shop</Link></div>;
}
