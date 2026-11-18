"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { FiSearch, FiSliders } from "react-icons/fi";
import { ProductCard } from "@/components/product-card";
import { useCurrency } from "@/components/currency-provider";
import { useDebounce } from "@/hooks/use-debounce";
import { categories, products } from "@/lib/data";

const PAGE_SIZE = 9;

export function ShopClient() {
  const { formatPrice } = useCurrency();
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") ?? "All products";
  const [category, setCategory] = useState(initialCategory);
  const [query, setQuery] = useState("");
  const [maxPrice, setMaxPrice] = useState(500);
  const [sort, setSort] = useState("featured");
  const [page, setPage] = useState(1);
  const debouncedQuery = useDebounce(query);

  const filtered = useMemo(() => {
    const result = products.filter((product) => {
      const matchesCategory = category === "All products" || product.category === category;
      const matchesSearch = `${product.name} ${product.category}`.toLowerCase().includes(debouncedQuery.toLowerCase());
      return matchesCategory && matchesSearch && product.price <= maxPrice;
    });
    if (sort === "price-low") result.sort((a, b) => a.price - b.price);
    if (sort === "price-high") result.sort((a, b) => b.price - a.price);
    if (sort === "rating") result.sort((a, b) => b.rating - a.rating);
    return result;
  }, [category, debouncedQuery, maxPrice, sort]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visibleProducts = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function changeCategory(value: string) {
    setCategory(value);
    setPage(1);
  }

  return (
    <div className="container-width py-10 sm:py-14">
      <div className="mb-9">
        <p className="eyebrow">Good things for every day</p>
        <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">The wellness shop</h1>
        <p className="prose-copy mt-3 max-w-2xl">Thoughtful essentials for feeling good, caring for yourself, and finding your everyday balance.</p>
      </div>

      <div className="grid gap-7 lg:grid-cols-[230px_1fr]">
        <aside className="h-fit rounded-2xl border border-black/[0.05] bg-white p-5">
          <div className="flex items-center gap-2 font-display text-sm font-semibold"><FiSliders className="text-brand" /> Refine your search</div>
          <label htmlFor="shop-search" className="mt-5 block text-xs font-semibold text-[#535c59]">Search</label>
          <div className="mt-2 flex h-10 items-center gap-2 rounded-xl border border-black/10 px-3">
            <FiSearch className="shrink-0 text-[#8a918e]" />
            <input id="shop-search" value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} placeholder="Find a product..." className="w-full bg-transparent text-xs outline-none" />
          </div>
          <fieldset className="mt-6">
            <legend className="text-xs font-semibold text-[#535c59]">Categories</legend>
            <div className="mt-3 space-y-2.5">
              {["All products", ...categories.map((item) => item.name)].map((item) => (
                <label key={item} className="flex cursor-pointer items-center gap-2.5 text-xs text-[#68716e]">
                  <input type="radio" name="category" checked={category === item} onChange={() => changeCategory(item)} className="accent-[#0F766E]" />
                  {item}
                </label>
              ))}
            </div>
          </fieldset>
          <div className="mt-6 border-t border-black/5 pt-5">
            <div className="flex justify-between text-xs font-semibold text-[#535c59]"><label htmlFor="price-filter">Maximum price</label><span>{formatPrice(maxPrice)}</span></div>
            <input id="price-filter" type="range" min="50" max="500" step="10" value={maxPrice} onChange={(event) => { setMaxPrice(Number(event.target.value)); setPage(1); }} className="mt-4 w-full accent-[#0F766E]" />
            <div className="flex justify-between text-[10px] text-[#89908d]"><span>{formatPrice(50)}</span><span>{formatPrice(500)}+</span></div>
          </div>
        </aside>

        <div>
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-[#747c79]"><span className="font-semibold text-ink">{filtered.length}</span> products to explore</p>
            <label className="flex items-center gap-2 text-xs text-[#68716e]">Sort by
              <select value={sort} onChange={(event) => setSort(event.target.value)} className="h-10 rounded-xl border border-black/10 bg-white px-3 text-xs font-medium text-ink">
                <option value="featured">Featured</option>
                <option value="price-low">Price: low to high</option>
                <option value="price-high">Price: high to low</option>
                <option value="rating">Top rated</option>
              </select>
            </label>
          </div>

          {visibleProducts.length ? (
            <div className="grid grid-cols-2 gap-3 sm:gap-5 xl:grid-cols-3">
              {visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-black/15 bg-white px-5 py-16 text-center">
              <p className="font-display text-xl font-semibold">No products found</p>
              <p className="mt-2 text-sm text-[#78807d]">Try changing your search or filters.</p>
              <button type="button" onClick={() => { setCategory("All products"); setQuery(""); setMaxPrice(500); }} className="mt-5 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white">Clear filters</button>
            </div>
          )}

          {filtered.length > PAGE_SIZE && (
            <nav className="mt-9 flex items-center justify-center gap-2" aria-label="Product pages">
              {Array.from({ length: pageCount }, (_, index) => index + 1).map((number) => (
                <button key={number} type="button" aria-current={page === number ? "page" : undefined} onClick={() => setPage(number)} className={`grid h-10 w-10 place-items-center rounded-full text-sm font-semibold ${page === number ? "bg-brand text-white" : "border border-black/10 bg-white text-[#59615f] hover:bg-brand-light"}`}>{number}</button>
              ))}
            </nav>
          )}
        </div>
      </div>
    </div>
  );
}
