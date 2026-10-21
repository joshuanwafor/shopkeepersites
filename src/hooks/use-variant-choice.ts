"use client";

import { useEffect, useState } from "react";
import type { StorefrontProductResponse } from "@/sdk/usedisha-service";
import { lineStock } from "@/lib/product-stock";
import {
  initialSelection,
  isSoldByVariant,
  nextOptionToChoose,
  selectedVariant,
  type VariantSelection,
} from "@/lib/variants";

/**
 * What the shopper has chosen on a product page or quick view: the variant
 * (once every option is picked) and what follows from it — stock, photo, SKU,
 * and what the add button should ask for while a choice is missing.
 */
export function useVariantChoice(product: StorefrontProductResponse | undefined) {
  const [selection, setSelection] = useState<VariantSelection>({});

  // Start again for each product.
  useEffect(() => {
    setSelection(initialSelection(product));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product?.id]);

  const soldByVariant = isSoldByVariant(product);
  const variant = soldByVariant ? selectedVariant(product, selection) : undefined;
  const missing = soldByVariant && !variant ? nextOptionToChoose(product, selection) : undefined;

  return {
    selection,
    setSelection,
    soldByVariant,
    variant,
    /** Can't add yet: an option still has to be chosen. */
    needsChoice: soldByVariant && !variant,
    /** "Choose size", while a choice is missing. */
    choosePrompt: missing ? `Choose ${missing.name.toLowerCase()}` : soldByVariant && !variant ? "Choose an option" : undefined,
    stock: lineStock(product, variant),
    photo: variant?.primaryPhoto || product?.primaryPhoto,
    /** The variant's own once chosen; the product's SKU doesn't describe any one variant. */
    sku: soldByVariant ? variant?.SKU : product?.SKU,
  };
}
