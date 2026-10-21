"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type {
  StorefrontProductResponse,
  StorefrontProductVariantResponse,
} from "@/sdk/usedisha-service";
import { lineStock } from "@/lib/product-stock";

const CART_STORAGE_KEY = "sk-storefront-cart";

/**
 * One line of the cart: a product, or one variant of it. Each variant of a
 * product is its own line, priced and stocked as that variant.
 */
export type CartItem = {
  product: StorefrontProductResponse;
  variant?: StorefrontProductVariantResponse;
  quantity: number;
};

/** A line's id within the cart. */
export function cartLineKey(item: Pick<CartItem, "product" | "variant">): string {
  return item.variant ? `${item.product.id}:${item.variant.id}` : item.product.id;
}

/** "Tee (L / Red)": the product, with its variant when it has one. */
export function cartLineName(item: Pick<CartItem, "product" | "variant">): string {
  return item.variant?.title ? `${item.product.name} (${item.variant.title})` : item.product.name;
}

/**
 * A line's price per item, before any deal: what checkout's subtotal is made
 * of. The deal is taken off the order as a whole (the discount line).
 */
export function cartLineUnitPrice(item: Pick<CartItem, "product" | "variant">): number {
  return item.variant?.amount ?? item.product.amount;
}

/** The line's photo: the variant's own, else the product's. */
export function cartLinePhoto(item: Pick<CartItem, "product" | "variant">): string | undefined {
  return item.variant?.primaryPhoto || item.product.primaryPhoto;
}

/** The most of the line a cart can hold. */
export function cartLineMax(item: Pick<CartItem, "product" | "variant">): number {
  return lineStock(item.product, item.variant).maxQuantity;
}

type CartContextValue = {
  items: CartItem[];
  addItem: (
    product: StorefrontProductResponse,
    quantity?: number,
    variant?: StorefrontProductVariantResponse
  ) => void;
  removeItem: (lineKey: string) => void;
  updateQuantity: (lineKey: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalAmount: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Load the persisted cart once on mount. sessionStorage isn't available during
  // SSR, so we read it in an effect (not a lazy initializer) to avoid a hydration
  // mismatch between the server-rendered empty cart and the client.
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(CART_STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : null;
      if (Array.isArray(parsed)) {
        setItems(parsed as CartItem[]);
      }
    } catch {
      /* ignore malformed or unavailable storage */
    }
    setHydrated(true);
  }, []);

  // Persist on every change — but only after the initial load, so the empty
  // initial state never clobbers a previously stored cart.
  useEffect(() => {
    if (!hydrated) return;
    try {
      sessionStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items, hydrated]);

  // Quantities never pass what the line's stock allows, whichever button adds them.
  const addItem = useCallback(
    (
      product: StorefrontProductResponse,
      quantity = 1,
      variant?: StorefrontProductVariantResponse
    ) => {
      const key = cartLineKey({ product, variant });
      setItems((prev) => {
        const existing = prev.find((i) => cartLineKey(i) === key);
        if (existing) {
          return prev.map((i) =>
            cartLineKey(i) === key
              ? { ...i, product, variant, quantity: Math.min(cartLineMax({ product, variant }), i.quantity + quantity) }
              : i
          );
        }
        return [...prev, { product, variant, quantity: Math.min(cartLineMax({ product, variant }), quantity) }];
      });
    },
    []
  );

  const removeItem = useCallback((lineKey: string) => {
    setItems((prev) => prev.filter((i) => cartLineKey(i) !== lineKey));
  }, []);

  const updateQuantity = useCallback((lineKey: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((i) => cartLineKey(i) !== lineKey));
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        cartLineKey(i) === lineKey ? { ...i, quantity: Math.min(cartLineMax(i), quantity) } : i
      )
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  );

  const totalAmount = useMemo(
    () =>
      items.reduce((sum, i) => sum + cartLineUnitPrice(i) * i.quantity, 0),
    [items]
  );

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      totalItems,
      totalAmount,
    }),
    [items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalAmount]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
