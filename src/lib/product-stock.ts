import type { StorefrontProductResponse } from "@/sdk/usedisha-service";

type StockFields = Pick<StorefrontProductResponse, "stockQuantity" | "availability" | "stockTracked">;

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
export function productStock(product: StockFields | null | undefined) {
  const tracked = product?.stockTracked ?? true;
  const quantity = Math.max(0, product?.stockQuantity ?? 0);
  // The API has said both "out-of-stock" and "out_of_stock".
  const markedOut = (product?.availability ?? "").toLowerCase().replace(/_/g, "-") === "out-of-stock";
  const inStock = !markedOut && (!tracked || quantity > 0);
  return {
    inStock,
    /** Shown to the shopper only when it means something. */
    quantity: tracked ? quantity : undefined,
    maxQuantity: tracked ? Math.max(1, quantity) : UNTRACKED_MAX,
  };
}
