import type {
  StorefrontProductOptionResponse,
  StorefrontProductResponse,
  StorefrontProductVariantResponse,
} from "@/sdk/usedisha-service";

/**
 * Products sold by variant (sizes, colours…): the shopper picks one variant,
 * and it is bought with its own price, photo and stock. A product without
 * variants is sold as itself. The same rules as the ShopCentral app
 * (shopmenu-app lib/product-variants.ts).
 */

type VariantProduct = Pick<StorefrontProductResponse, "hasVariants" | "options" | "variants" | "priceRange">;

/** Option name → chosen value. */
export type VariantSelection = Record<string, string>;

export function productVariants(product: VariantProduct | null | undefined): StorefrontProductVariantResponse[] {
  return product?.hasVariants && Array.isArray(product.variants) ? product.variants : [];
}

/** Bought one variant at a time. */
export function isSoldByVariant(product: VariantProduct | null | undefined): boolean {
  return productVariants(product).length > 0;
}

/**
 * The options to choose from, in the merchant's order, keeping only values
 * some variant actually has: a merchant can list "Medium" without ever adding
 * it. When the product's own list is missing, they're read off the variants.
 */
export function variantOptions(product: VariantProduct | null | undefined): StorefrontProductOptionResponse[] {
  const byName = new Map<string, string[]>();
  for (const variant of productVariants(product)) {
    for (const { name, value } of variant.options ?? []) {
      const values = byName.get(name) ?? [];
      if (!values.includes(value)) values.push(value);
      byName.set(name, values);
    }
  }
  const listed = (product?.options ?? [])
    .filter((option) => option?.name && byName.has(option.name))
    .map((option) => ({
      ...option,
      values: (option.values ?? []).filter((value) => byName.get(option.name)?.includes(value)),
    }))
    .filter((option) => option.values.length);
  if (listed.length) return listed;
  return [...byName.entries()].map(([name, values]) => ({ name, values }));
}

/** Whether some variant of the product can be bought now. */
export function anyVariantInStock(product: VariantProduct | null | undefined): boolean {
  return productVariants(product).some((variant) => variant.inStock);
}

function valueOf(variant: StorefrontProductVariantResponse, name: string): string | undefined {
  return variant.options?.find((option) => option.name === name)?.value;
}

function matches(variant: StorefrontProductVariantResponse, selection: VariantSelection, except?: string): boolean {
  return Object.entries(selection).every(([name, value]) => name === except || valueOf(variant, name) === value);
}

/** The variant the selection names, once every option is chosen. */
export function selectedVariant(
  product: VariantProduct | null | undefined,
  selection: VariantSelection
): StorefrontProductVariantResponse | undefined {
  const options = variantOptions(product);
  if (!options.length || options.some((option) => !selection[option.name])) return undefined;
  return productVariants(product).find((variant) => matches(variant, selection));
}

/** The first option still to choose, for "Choose size". */
export function nextOptionToChoose(
  product: VariantProduct | null | undefined,
  selection: VariantSelection
): StorefrontProductOptionResponse | undefined {
  return variantOptions(product).find((option) => !selection[option.name]);
}

export type OptionValueState = "available" | "soldOut" | "unavailable";

/**
 * Whether picking `value` for `name`, with the other choices kept, leads to a
 * variant that can be bought (`available`), only to sold-out ones (`soldOut`),
 * or to none at all (`unavailable`).
 */
export function optionValueState(
  product: VariantProduct | null | undefined,
  selection: VariantSelection,
  name: string,
  value: string
): OptionValueState {
  const candidates = productVariants(product).filter(
    (variant) => valueOf(variant, name) === value && matches(variant, selection, name)
  );
  if (!candidates.length) return "unavailable";
  return candidates.some((variant) => variant.inStock) ? "available" : "soldOut";
}

/**
 * Choose `value` for `name`. Choices that no variant combines with it are
 * dropped, so the shopper is never stuck on a combination that doesn't exist.
 */
export function chooseOptionValue(
  product: VariantProduct | null | undefined,
  selection: VariantSelection,
  name: string,
  value: string
): VariantSelection {
  const next = { ...selection, [name]: value };
  const variants = productVariants(product);
  if (variants.some((variant) => matches(variant, next))) return next;
  const kept: VariantSelection = { [name]: value };
  for (const [otherName, otherValue] of Object.entries(selection)) {
    if (otherName === name) continue;
    const candidate = { ...kept, [otherName]: otherValue };
    if (variants.some((variant) => matches(variant, candidate))) kept[otherName] = otherValue;
  }
  return kept;
}

/**
 * Where a picker starts: options with a single value are chosen already, and a
 * product with one variant has it chosen. Anything with a real choice waits
 * for the shopper — nobody should get the wrong size by default.
 */
export function initialSelection(product: VariantProduct | null | undefined): VariantSelection {
  const variants = productVariants(product);
  if (variants.length === 1) {
    return Object.fromEntries((variants[0].options ?? []).map(({ name, value }) => [name, value]));
  }
  return Object.fromEntries(
    variantOptions(product)
      .filter((option) => option.values.length === 1)
      .map((option) => [option.name, option.values[0]])
  );
}

/**
 * A colour option value usable as a swatch: hex or rgb(a)/hsl(a), as the
 * merchant apps' colour picker saves them. Anything else (a typed "Wine") is
 * shown as text.
 */
export function swatchColour(value: string): string | undefined {
  const v = value.trim();
  if (/^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(v)) return v;
  if (/^(rgb|hsl)a?\([\d\s.,%]+\)$/i.test(v)) return v;
  return undefined;
}
