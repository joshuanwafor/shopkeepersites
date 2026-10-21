"use client";

import type {
  StorefrontProductResponse,
  StorefrontProductVariantResponse,
} from "@/sdk/usedisha-service";
import { formatPrice } from "@/hooks";
import { dealPrices } from "@/lib/deals";
import { productVariants } from "@/lib/variants";

export type ShownPrice = {
  /** "₦2,500.00", or "From ₦2,000.00" across variants that differ. */
  text: string;
  /** The normal price, struck through, while a sale price is shown. */
  was?: string;
  /** The deal's badge ("10% off"), only while a sale price is shown. */
  badge?: string;
};

/**
 * The price to show for a product, or the chosen variant of it, with the
 * store's deal on it. A product sold by variant with none chosen shows its
 * lowest price ("From …").
 */
export function shownPrice(
  product: StorefrontProductResponse,
  variant?: StorefrontProductVariantResponse
): ShownPrice {
  const badge = product.deal?.short;
  if (variant) {
    const prices = dealPrices(variant.amount, variant.salePrice);
    return {
      text: formatPrice(prices.price),
      ...(prices.was !== undefined && { was: formatPrice(prices.was), badge }),
    };
  }
  const variants = productVariants(product);
  if (variants.length) {
    const priced = variants.map((v) => dealPrices(v.amount, v.salePrice));
    const lowest = Math.min(...priced.map((p) => p.price));
    const highest = Math.max(...priced.map((p) => p.price));
    const onSale = priced.some((p) => p.was !== undefined);
    return {
      text: lowest === highest ? formatPrice(lowest) : `From ${formatPrice(lowest)}`,
      ...(onSale && { badge }),
    };
  }
  const prices = dealPrices(product.amount, product.salePrice);
  return {
    text: formatPrice(prices.price),
    ...(prices.was !== undefined && { was: formatPrice(prices.was), badge }),
  };
}

/** The price, with the normal price struck through and the deal's badge when on sale. */
export function ProductPrice({
  price,
  size = "md",
  align = "end",
}: {
  price: ShownPrice;
  /** md on cards, emphasis where the price leads (Bold's tiles), lg on a product page. */
  size?: "md" | "emphasis" | "lg";
  align?: "start" | "end";
}) {
  const large = size === "lg";
  const sizeClass = large ? "text-3xl leading-none" : size === "emphasis" ? "text-lg leading-tight" : "text-base";
  return (
    <span
      className={`inline-flex flex-wrap items-baseline gap-x-2 gap-y-1 ${align === "end" ? "justify-end" : "justify-start"}`}
    >
      <span
        className={`whitespace-nowrap font-bold tracking-tight ${price.was ? "text-emerald-700" : "text-stone-900"} ${sizeClass}`}
      >
        {price.text}
      </span>
      {price.was && (
        <span className={`text-stone-400 line-through ${large ? "text-base" : "text-xs"}`}>{price.was}</span>
      )}
      {price.badge && (
        <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-200">
          {price.badge}
        </span>
      )}
    </span>
  );
}
