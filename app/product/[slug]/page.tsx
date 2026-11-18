import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiCheck, FiChevronRight, FiStar, FiTruck } from "react-icons/fi";
import { ProductCard } from "@/components/product-card";
import { ProductPurchase } from "@/components/product-purchase";
import { CurrencyPrice } from "@/components/currency-provider";
import { SectionHeading } from "@/components/section-heading";
import { getProductBySlug, getRelatedProducts } from "@/lib/api";
import { products } from "@/lib/data";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);
  return product
    ? { title: product.name, description: product.description, openGraph: { images: [product.image] } }
    : { title: "Product not found" };
}

export default async function ProductPage({ params }: Props) {
  const product = await getProductBySlug(params.slug);
  if (!product) notFound();
  const relatedProducts = await getRelatedProducts(params.slug);

  return (
    <>
      <div className="container-width py-7">
        <nav className="flex flex-wrap items-center gap-2 text-xs text-[#89908d]" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-brand">Home</Link><FiChevronRight /><Link href="/shop" className="hover:text-brand">Shop</Link><FiChevronRight /><span className="text-[#4d5653]">{product.name}</span>
        </nav>
        <div className="grid gap-9 py-7 md:grid-cols-2 md:gap-14 md:py-10">
          <div className="overflow-hidden rounded-[28px] bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={product.image} alt={product.name} className="aspect-square h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center py-3">
            <p className="eyebrow">{product.category}</p>
            <h1 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-[42px]">{product.name}</h1>
            <div className="mt-4 flex items-center gap-2 text-sm">
              <span className="inline-flex items-center gap-1 text-gold"><FiStar className="fill-current" /><FiStar className="fill-current" /><FiStar className="fill-current" /><FiStar className="fill-current" /><FiStar className="fill-current" /></span>
              <span className="font-semibold">{product.rating}</span><span className="text-[#858d89]">({product.reviewCount} reviews)</span>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <CurrencyPrice amountInZmw={product.price} className="text-2xl font-bold" />
              {product.originalPrice && <CurrencyPrice amountInZmw={product.originalPrice} className="text-base text-[#929996] line-through" />}
            </div>
            <p className="prose-copy mt-5">{product.description}</p>
            <ProductPurchase product={product} />
            <div className="mt-6 rounded-2xl bg-white p-4 text-xs leading-6 text-[#68716e]">
              <p className="flex items-center gap-2 font-semibold text-ink"><FiTruck className="text-brand" /> Carefully packed, delivered with care</p>
              <p className="mt-1">Free standard delivery on orders over ZMW 500. Contact us for international delivery options.</p>
            </div>
            <div className="mt-7 border-t border-black/10 pt-5">
              <h2 className="font-display text-base font-semibold">How to use</h2>
              <p className="prose-copy mt-2 text-sm">{product.usage}</p>
            </div>
            <div className="mt-5 border-t border-black/10 pt-5">
              <h2 className="font-display text-base font-semibold">Ingredients & what&apos;s included</h2>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {product.ingredients.map((ingredient) => <li key={ingredient} className="flex items-center gap-2 text-xs text-[#68716e]"><FiCheck className="shrink-0 text-brand" />{ingredient}</li>)}
              </ul>
            </div>
            <p className="mt-6 text-[11px] leading-5 text-[#89908d]">Always read the label and follow the directions. This product is not intended to diagnose, treat, cure, or prevent disease. Speak with a healthcare professional if you have questions about suitability.</p>
          </div>
        </div>

        <section className="border-t border-black/10 py-12">
          <SectionHeading eyebrow="Customer notes" title="Reviews & ratings" />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Ama K.", "Really easy to add to my everyday routine. Great delivery experience."],
              ["Kofi A.", "Good product and a straightforward checkout. I would order again."],
              ["Esi B.", "Arrived quickly and was exactly as described."]
            ].map(([name, text]) => <article key={name} className="rounded-2xl bg-white p-5"><div className="flex gap-1 text-gold">{Array.from({ length: 5 }).map((_, index) => <FiStar key={index} className="fill-current" />)}</div><p className="mt-3 text-sm leading-6 text-[#59615f]">“{text}”</p><p className="mt-4 text-xs font-semibold">{name} <span className="font-normal text-[#8a918e]">· Verified purchase</span></p></article>)}
          </div>
        </section>
      </div>

      {relatedProducts.length > 0 && <section className="bg-white py-16"><div className="container-width"><SectionHeading eyebrow="Keep exploring" title="You might also like" /><div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">{relatedProducts.map((item) => <ProductCard key={item.id} product={item} />)}</div></div></section>}
    </>
  );
}
