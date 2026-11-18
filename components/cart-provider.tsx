"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { CartItem, Product } from "@/types";

interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  couponCode: string | null;
  addItem: (product: Product, quantity?: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  applyCoupon: (code: string) => boolean;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "winamode-health-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [couponCode, setCouponCode] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const savedCart = window.localStorage.getItem(STORAGE_KEY);
    if (savedCart) {
      try {
        const parsed: unknown = JSON.parse(savedCart);
        if (Array.isArray(parsed)) {
          setItems(parsed as CartItem[]);
        } else if (parsed && typeof parsed === "object" && "items" in parsed && Array.isArray(parsed.items)) {
          setItems(parsed.items as CartItem[]);
          if ("couponCode" in parsed && typeof parsed.couponCode === "string") {
            setCouponCode(parsed.couponCode);
          }
        } else {
          window.localStorage.removeItem(STORAGE_KEY);
        }
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ items, couponCode }));
    }
  }, [couponCode, hydrated, items]);

  const value = useMemo<CartContextValue>(() => ({
    items,
    itemCount: items.reduce((total, item) => total + item.quantity, 0),
    subtotal: items.reduce((total, item) => total + item.product.price * item.quantity, 0),
    couponCode,
    addItem: (product, quantity = 1) => setItems((current) => {
      const existing = current.find((item) => item.product.id === product.id);
      if (existing) {
        return current.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...current, { product, quantity }];
    }),
    updateQuantity: (productId, quantity) => setItems((current) =>
      quantity < 1
        ? current.filter((item) => item.product.id !== productId)
        : current.map((item) => item.product.id === productId ? { ...item, quantity } : item)
    ),
    removeItem: (productId) => setItems((current) => current.filter((item) => item.product.id !== productId)),
    applyCoupon: (code) => {
      if (code.trim().toUpperCase() !== "WINA10") {
        setCouponCode(null);
        return false;
      }
      setCouponCode("WINA10");
      return true;
    },
    clearCart: () => {
      setItems([]);
      setCouponCode(null);
    }
  }), [couponCode, items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}
