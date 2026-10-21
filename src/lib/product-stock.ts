import type { StorefrontProductResponse, StorefrontProductVariantResponse } from "@/sdk/usedisha-service";
import { anyVariantInStock, isSoldByVariant } from "@/lib/variants";

type StockFields = Pick<StorefrontProductResponse, "stockQuantity" | "availability" | "stockTracked">;

export type Stock = {
  inStock: boolean;
  /** Shown to the shopper only when it means something. */
  quantity?: number;
  /** The most of it one cart can hold. */
  maxQuantity: number;
};

/** The most of one product a shopper can add when the store doesn't count its stock. */
const UNTRACKED_MAX = 999;

/**
 * Whether a product can be bought, and how many.
 *
 * `stockQuantity` only limits a purchase when the API says `stockTracked`: the
 * product tracks stock and so does its branch. Otherwise the count means
 * nothing — many stores sell without counting — and checkout doesn't check it.
 * Responses from before `stockTracked` existed are treated as tracked, as the
 * site always did.
 */
export function productStock(product: StockFields | null | undefined): Stock {
  const tracked = product?.stockTracked ?? true;
  const quantity = Math.max(0, product?.stockQuantity ?? 0);
  // The API has said both "out-of-stock" and "out_of_stock".
  const markedOut = (product?.availability ?? "").toLowerCase().replace(/_/g, "-") === "out-of-stock";
  const inStock = !markedOut && (!tracked || quantity > 0);
  return {
    inStock,
    quantity: tracked ? quantity : undefined,
    maxQuantity: tracked ? Math.max(1, quantity) : UNTRACKED_MAX,
  };
}

/** One variant's stock. The API works out `inStock`; the count limits a cart only when tracked. */
export function variantStock(variant: StorefrontProductVariantResponse): Stock {
  const tracked = variant.stockTracked === true;
  const quantity = Math.max(0, Math.floor(variant.stockQuantity ?? 0));
  return {
    inStock: variant.inStock,
    quantity: tracked ? quantity : undefined,
    maxQuantity: tracked ? Math.max(1, quantity) : UNTRACKED_MAX,
  };
}

/**
 * What a cart line (or a product page) can buy: the chosen variant's stock,
 * or the product's. A product sold by variant with none chosen yet is in stock
 * when some variant is.
 */
export function lineStock(
  product: (StockFields & Pick<StorefrontProductResponse, "hasVariants" | "variants">) | null | undefined,
  variant?: StorefrontProductVariantResponse
): Stock {
  if (variant) return variantStock(variant);
  if (isSoldByVariant(product)) return { inStock: anyVariantInStock(product), maxQuantity: UNTRACKED_MAX };
  return productStock(product);
}
