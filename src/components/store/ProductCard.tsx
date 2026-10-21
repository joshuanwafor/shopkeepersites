"use client";

import Link from "next/link";
import { Image, Text, Button } from "@mantine/core";
import type { StorefrontProductResponse } from "@/sdk/usedisha-service";
import { cartLineKey, useCart } from "@/context/cart-context";
import { lineStock } from "@/lib/product-stock";
import { isSoldByVariant } from "@/lib/variants";
import type { StorefrontTemplate } from "@/templates/templates";
import { ProductPrice, shownPrice } from "./ProductPrice";

export type ProductLayout = StorefrontTemplate["productLayout"];

/** The catalogue grid for each layout. */
export const PRODUCT_GRID_CLASS: Record<ProductLayout, string> = {
  cards: "grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4",
  rows: "grid grid-cols-1 lg:grid-cols-2 gap-3",
  portrait: "grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-8 sm:gap-x-5",
  tiles: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4",
};

function EyeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function MinusIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
    </svg>
  );
}

function PlusIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

type CardProps = {
  product: StorefrontProductResponse;
  /** Link to the full product detail page. */
  href: string;
  /** Opens the quick-view preview modal. */
  onQuickView: () => void;
};

/**
 * Add to cart, or − n + once it's in the cart. A product sold by variant is
 * chosen in the quick view: its card can't add one blind.
 */
function AddControl({
  product,
  onQuickView,
  className = "",
  buttonClassName = "",
  compact = false,
}: {
  product: StorefrontProductResponse;
  onQuickView: () => void;
  /** Placement, for both the button and the − n + stepper. */
  className?: string;
  /** The add button's own look. */
  buttonClassName?: string;
  compact?: boolean;
}) {
  const { items, addItem, updateQuantity } = useCart();
  const soldByVariant = isSoldByVariant(product);
  const lineKey = cartLineKey({ product });
  const quantityInCart = soldByVariant ? 0 : items.find((i) => cartLineKey(i) === lineKey)?.quantity ?? 0;
  const stock = lineStock(product);

  if (quantityInCart > 0) {
    return (
      <div
        role="group"
        aria-label={`${product.name} quantity in cart`}
        className={`flex h-[30px] items-stretch overflow-hidden rounded-md border border-sf-brand ${className}`}
      >
        <button
          type="button"
          onClick={() => updateQuantity(lineKey, quantityInCart - 1)}
          aria-label={
            quantityInCart === 1 ? `Remove ${product.name} from cart` : `Decrease quantity of ${product.name}`
          }
          className="flex w-9 items-center justify-center bg-sf-brand text-sf-brand-ink transition-opacity hover:opacity-90"
        >
          <MinusIcon size={14} />
        </button>
        <span className="flex min-w-8 flex-1 items-center justify-center px-1 text-sm font-semibold tabular-nums text-stone-800">
          {quantityInCart}
        </span>
        <button
          type="button"
          onClick={() => updateQuantity(lineKey, quantityInCart + 1)}
          disabled={!stock.inStock || quantityInCart >= stock.maxQuantity}
          aria-label={`Increase quantity of ${product.name}`}
          className="flex w-9 items-center justify-center bg-sf-brand text-sf-brand-ink transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <PlusIcon size={14} />
        </button>
      </div>
    );
  }
  return (
    <Button
      size="xs"
      className={`rounded-md bg-sf-brand font-medium text-sf-brand-ink hover:opacity-90 disabled:opacity-40 ${className} ${buttonClassName}`}
      disabled={!stock.inStock}
      onClick={() => (soldByVariant ? onQuickView() : addItem(product, 1))}
      aria-label={soldByVariant ? `Choose options for ${product.name}` : `Add ${product.name} to cart`}
    >
      {!stock.inStock ? "Sold out" : soldByVariant ? (compact ? "Choose" : "Choose options") : compact ? "Add" : "Add to cart"}
    </Button>
  );
}

function Photo({ product, fit = "cover" }: { product: StorefrontProductResponse; fit?: "cover" | "contain" }) {
  return product.primaryPhoto ? (
    <Image
      src={product.primaryPhoto}
      alt={product.name}
      fit={fit}
      w="100%"
      h="100%"
      fallbackSrc="https://placehold.co/640x640?text=No+image"
      className="h-full w-full object-center transition-transform duration-[600ms] ease-out group-hover:scale-105"
    />
  ) : (
    <div className="flex h-full w-full items-center justify-center text-sm text-stone-400">No image</div>
  );
}

function SoldOutBadge() {
  return (
    <span className="absolute left-2 top-2 rounded-full border border-rose-200 bg-rose-50/95 px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-rose-700">
      Sold out
    </span>
  );
}

function QuickViewButton({ onQuickView }: { onQuickView: () => void }) {
  return (
    <div className="absolute inset-x-0 bottom-0 z-10 hidden translate-y-3 justify-center p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:flex">
      <button
        type="button"
        onClick={onQuickView}
        className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-medium text-stone-800 shadow-lg shadow-stone-900/15 ring-1 ring-stone-900/5 backdrop-blur transition-colors hover:bg-white"
      >
        <EyeIcon size={16} />
        Quick view
      </button>
    </div>
  );
}

/** Classic: a card with the photo on top, the description and two buttons. */
function ClassicCard({ product, href, onQuickView }: CardProps) {
  const stock = lineStock(product);
  const isInStock = stock.inStock;

  return (
    <div className="group store-classic-paper flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 transition-all duration-300 hover:-translate-y-1 hover:border-stone-300 hover:shadow-xl hover:shadow-stone-300/30">
      {/* Media — image fully covers the area */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
        <Link href={href} className="absolute inset-0 block" aria-label={product.name}>
          <Photo product={product} />
        </Link>

        {/* Hover gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-900/55 via-stone-900/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Stock badge */}
        {product.availability && (stock.quantity !== undefined || !isInStock) && (
          <span
            className={`absolute right-2.5 top-2.5 rounded-full border px-2 py-1 text-[10px] uppercase tracking-[0.12em] backdrop-blur ${
              isInStock
                ? "border-stone-200/70 bg-white/85 text-stone-600"
                : "border-rose-200 bg-rose-50/95 text-rose-700"
            }`}
          >
            {isInStock ? "In stock" : "Out of stock"}
          </span>
        )}

        <QuickViewButton onQuickView={onQuickView} />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-2 p-3 sm:p-4">
        <div className="flex items-start justify-between gap-3">
          <Text
            component={Link}
            href={href}
            fw={600}
            className="line-clamp-2 min-w-0 flex-1 text-base leading-snug tracking-tight text-stone-800 transition-colors hover:text-stone-600"
          >
            {product.name}
          </Text>
          <span className="shrink-0 text-right">
            <ProductPrice price={shownPrice(product)} />
          </span>
        </div>

        <Text size="sm" className="line-clamp-2 min-h-[2.5rem] leading-relaxed text-stone-500">
          {product.description || product.SKU || " "}
        </Text>

        <div className="mt-auto flex items-center gap-2 pt-1">
          <AddControl product={product} onQuickView={onQuickView} className="flex-1" />
          <Button
            component={Link}
            href={href}
            variant="default"
            size="xs"
            className="flex-1 rounded-md border-stone-300 text-stone-800 hover:bg-stone-100"
          >
            View details
          </Button>
        </div>
      </div>
    </div>
  );
}

/** Market: a row with a small square photo, quick to scan like a menu. */
function MarketRow({ product, href, onQuickView }: CardProps) {
  const isInStock = lineStock(product).inStock;
  return (
    <div className="group flex gap-3 rounded-2xl border border-stone-200 bg-white p-2.5 transition-colors hover:border-stone-300 sm:p-3">
      <Link
        href={href}
        className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-stone-100 sm:h-28 sm:w-28"
        aria-label={product.name}
      >
        <Photo product={product} />
      </Link>
      <div className="flex min-w-0 flex-1 flex-col">
        <Text
          component={Link}
          href={href}
          fw={700}
          className="line-clamp-2 text-[15px] leading-snug text-stone-900 hover:text-stone-700"
        >
          {product.name}
        </Text>
        {product.description && (
          <Text size="sm" className="mt-0.5 line-clamp-2 leading-snug text-stone-500">
            {product.description}
          </Text>
        )}
        <div className="mt-auto flex items-end justify-between gap-2 pt-2">
          <div className="min-w-0">
            <ProductPrice price={shownPrice(product)} align="start" />
            {!isInStock && <Text size="xs" className="text-rose-700">Sold out</Text>}
          </div>
          <AddControl
            product={product}
            onQuickView={onQuickView}
            compact
            className="shrink-0"
            buttonClassName="rounded-full px-4"
          />
        </div>
      </div>
    </div>
  );
}

/** Boutique: a tall photo that does the selling, with the name and price under it. */
function BoutiqueItem({ product, href, onQuickView }: CardProps) {
  const isInStock = lineStock(product).inStock;
  return (
    <div className="group flex flex-col">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-stone-100">
        <Link href={href} className="absolute inset-0 block" aria-label={product.name}>
          <Photo product={product} />
        </Link>
        {!isInStock && <SoldOutBadge />}
        <QuickViewButton onQuickView={onQuickView} />
      </div>
      <div className="flex flex-1 flex-col gap-1.5 pt-3">
        <Text
          component={Link}
          href={href}
          size="sm"
          className="line-clamp-2 uppercase tracking-[0.08em] text-stone-800 hover:text-stone-600"
        >
          {product.name}
        </Text>
        <ProductPrice price={shownPrice(product)} align="start" />
        <AddControl
          product={product}
          onQuickView={onQuickView}
          className="mt-auto w-full"
          buttonClassName="rounded-none uppercase tracking-[0.08em]"
        />
      </div>
    </div>
  );
}

/** Bold: a compact tile, square photo, price up front. */
function BoldTile({ product, href, onQuickView }: CardProps) {
  const isInStock = lineStock(product).inStock;
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition-shadow hover:shadow-lg hover:shadow-stone-300/40">
      <div className="relative aspect-square w-full overflow-hidden bg-stone-50">
        <Link href={href} className="absolute inset-0 block p-3" aria-label={product.name}>
          <Photo product={product} fit="contain" />
        </Link>
        {!isInStock && <SoldOutBadge />}
        <QuickViewButton onQuickView={onQuickView} />
      </div>
      <div className="flex flex-1 flex-col gap-2 border-t border-stone-100 p-3">
        <Text
          component={Link}
          href={href}
          size="sm"
          fw={600}
          className="line-clamp-2 leading-snug text-stone-900 hover:text-stone-700"
        >
          {product.name}
        </Text>
        <ProductPrice price={shownPrice(product)} size="emphasis" align="start" />
        <AddControl product={product} onQuickView={onQuickView} className="mt-auto w-full" />
      </div>
    </div>
  );
}

export function ProductCard({ layout = "cards", ...props }: CardProps & { layout?: ProductLayout }) {
  switch (layout) {
    case "rows":
      return <MarketRow {...props} />;
    case "portrait":
      return <BoutiqueItem {...props} />;
    case "tiles":
      return <BoldTile {...props} />;
    default:
      return <ClassicCard {...props} />;
  }
}
