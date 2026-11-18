import { products } from "@/lib/data";

export async function getProducts() {
  return products;
}

export async function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export async function getRelatedProducts(slug: string) {
  const product = await getProductBySlug(slug);
  if (!product) return [];
  return products
    .filter((item) => item.slug !== slug && item.category === product.category)
    .slice(0, 4);
}
