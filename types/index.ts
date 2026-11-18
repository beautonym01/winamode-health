export type Category =
  | "Vitamins & Supplements"
  | "Women's Health"
  | "Men's Health"
  | "Children's Health"
  | "Fitness & Nutrition"
  | "Medical Devices"
  | "Personal Care"
  | "Herbal Products"
  | "Pharmacy & Medicines"
  | "Orthopedic & Mobility"
  | "Wound Care"
  | "Cleaning & Laboratory Supplies";

export type CurrencyCode = "ZMW" | "USD";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: Category;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  description: string;
  ingredients: string[];
  usage: string;
  badge?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
