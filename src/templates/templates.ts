/**
 * Storefront templates: a handful of preset looks a business picks from, plus
 * one brand colour. A template is a preset, not a separate site: it swaps the
 * page's greys, corners and fonts (templates.css, keyed on
 * `html[data-sf-template]`) and chooses a few layouts the components read
 * from here. Everything else is shared.
 *
 * Core stores the choice as `storefrontStyle: { template, color? }` on the
 * store profile. A store without one, or with a template this site doesn't
 * know, gets Classic: the look every store had before templates.
 */

export const TEMPLATE_IDS = ["classic", "market", "boutique", "bold"] as const;
export type TemplateId = (typeof TEMPLATE_IDS)[number];

export const DEFAULT_TEMPLATE: TemplateId = "classic";

export type StorefrontTemplate = {
  id: TemplateId;
  name: string;
  /** For the picker: the kind of store it suits. */
  goodFor: string;
  /** Buttons, links and highlights when the business hasn't picked a colour. */
  defaultColor: string;
  /** How the catalogue is laid out (ProductCard). */
  productLayout: "cards" | "rows" | "portrait" | "tiles";
  /** The store's cover photo across the top of the home page. */
  hero: boolean;
  /** The catalogue's heading. */
  catalogueTitle: string;
  /** How wide the home page runs. */
  wide: boolean;
  /** What the cart is called. */
  cartLabel: string;
};

export const TEMPLATES: Record<TemplateId, StorefrontTemplate> = {
  classic: {
    id: "classic",
    name: "Classic",
    goodFor: "Any store",
    defaultColor: "#292524",
    productLayout: "cards",
    hero: false,
    catalogueTitle: "Menu",
    wide: false,
    cartLabel: "Cart",
  },
  market: {
    id: "market",
    name: "Market",
    goodFor: "Food, groceries and restaurants",
    defaultColor: "#15803D",
    productLayout: "rows",
    hero: false,
    catalogueTitle: "Menu",
    wide: false,
    cartLabel: "Cart",
  },
  boutique: {
    id: "boutique",
    name: "Boutique",
    goodFor: "Fashion and beauty",
    defaultColor: "#18181B",
    productLayout: "portrait",
    hero: true,
    catalogueTitle: "Shop",
    wide: true,
    cartLabel: "Bag",
  },
  bold: {
    id: "bold",
    name: "Bold",
    goodFor: "Electronics, phones and general retail",
    defaultColor: "#2563EB",
    productLayout: "tiles",
    hero: true,
    catalogueTitle: "Products",
    wide: true,
    cartLabel: "Cart",
  },
};

export function isTemplateId(value: unknown): value is TemplateId {
  return typeof value === "string" && (TEMPLATE_IDS as readonly string[]).includes(value);
}

/** "#0f766e", "0F766E" or "#abc" → "#0F766E"; anything else → undefined. */
export function normaliseHexColour(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const hex = value.trim().replace(/^#/, "");
  if (/^[0-9a-f]{3}$/i.test(hex)) {
    return `#${hex
      .split("")
      .map((c) => c + c)
      .join("")
      .toUpperCase()}`;
  }
  return /^[0-9a-f]{6}$/i.test(hex) ? `#${hex.toUpperCase()}` : undefined;
}

function luminance(hex: string): number {
  const channel = (i: number) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * channel(1) + 0.7152 * channel(3) + 0.0722 * channel(5);
}

/** Text on the brand colour: white or near-black, whichever reads better (WCAG contrast). */
export function inkOn(hex: string): "#FFFFFF" | "#111111" {
  const l = luminance(hex);
  const onWhite = 1.05 / (l + 0.05);
  const onDark = (l + 0.05) / (luminance("#111111") + 0.05);
  return onWhite >= onDark ? "#FFFFFF" : "#111111";
}

export type StorefrontStyle = {
  template: StorefrontTemplate;
  /** The brand colour, "#RRGGBB". */
  color: string;
  /** Text on the brand colour. */
  ink: string;
};

/**
 * The look to show: a preview link's (`?preview=market&color=0F766E`, used by
 * the template picker before saving) over the store's saved choice, over
 * Classic. A colour only counts when it's a valid hex.
 */
export function resolveStorefrontStyle(
  saved: { template?: unknown; color?: unknown } | null | undefined,
  preview?: { template?: string | null; color?: string | null }
): StorefrontStyle {
  const previewTemplate = isTemplateId(preview?.template) ? preview.template : undefined;
  const id = previewTemplate ?? (isTemplateId(saved?.template) ? saved.template : DEFAULT_TEMPLATE);
  const template = TEMPLATES[id];
  // A preview of another template shows that template's own colour unless the link names one.
  const color =
    normaliseHexColour(preview?.color) ??
    (previewTemplate && previewTemplate !== saved?.template ? undefined : normaliseHexColour(saved?.color)) ??
    template.defaultColor;
  return { template, color, ink: inkOn(color) };
}

/** The attributes that put a style on the page (`<html>`). */
export function styleAttributes(style: StorefrontStyle) {
  return {
    "data-sf-template": style.template.id,
    style: { "--sf-brand": style.color, "--sf-brand-ink": style.ink } as Record<string, string>,
  };
}
