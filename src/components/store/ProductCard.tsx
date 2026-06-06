"use client";

import Link from "next/link";
import { Image, Text, Button } from "@mantine/core";
import type { StorefrontProductResponse } from "@/sdk/usedisha-service";
import { formatPrice } from "@/hooks";

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

export function ProductCard({
  product,
  href,
  onAddToCart,
  onQuickView,
}: {
  product: StorefrontProductResponse;
  /** Link to the full product detail page. */
  href: string;
  onAddToCart: () => void;
  /** Opens the quick-view preview modal. */
  onQuickView: () => void;
}) {
  const isInStock =
    (product.stockQuantity ?? 0) > 0 && product.availability !== "out_of_stock";

  return (
    <div className="group store-classic-paper flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 transition-all duration-300 hover:-translate-y-1 hover:border-stone-300 hover:shadow-xl hover:shadow-stone-300/30">
      {/* Media — image fully covers the area */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
        <Link href={href} className="absolute inset-0 block" aria-label={product.name}>
          {product.primaryPhoto ? (
            <Image
              src={product.primaryPhoto}
              alt={product.name}
              fit="cover"
              w="100%"
              h="100%"
              fallbackSrc="https://placehold.co/640x480?text=No+image"
              className="h-full w-full object-cover object-center transition-transform duration-[600ms] ease-out group-hover:scale-110"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm text-stone-400">
              No image
            </div>
          )}
        </Link>

        {/* Hover gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-900/55 via-stone-900/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Stock badge */}
        {product.availability && (
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

        {/* Quick view — appears on hover */}
        <div className="absolute inset-x-0 bottom-0 z-10 flex translate-y-3 justify-center p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={onQuickView}
            className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-medium text-stone-800 shadow-lg shadow-stone-900/15 ring-1 ring-stone-900/5 backdrop-blur transition-colors hover:bg-white"
          >
            <EyeIcon size={16} />
            Quick view
          </button>
        </div>
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
          <Text fw={700} className="shrink-0 text-base text-stone-900">
            {formatPrice(product.amount)}
          </Text>
        </div>

        <Text size="sm" className="line-clamp-2 min-h-[2.5rem] leading-relaxed text-stone-500">
          {product.description || product.SKU || " "}
        </Text>

        <div className="mt-auto flex items-center gap-2 pt-1">
          <Button
            size="xs"
            className="flex-1 rounded-md bg-stone-800 font-medium text-white hover:bg-stone-700"
            disabled={!isInStock}
            onClick={onAddToCart}
          >
            Add to cart
          </Button>
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
