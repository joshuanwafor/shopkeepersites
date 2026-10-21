import type { ShopDealResponse, UsedishaOrderFeeEstimateResponseDto } from "@/sdk/usedisha-service";
import { formatPrice } from "@/hooks";

/**
 * A store's deal: an automatic discount (no code) on its online orders,
 * applied by the API at checkout. Products it covers carry `salePrice` (the
 * price after it) and `deal` (the badge); the store profile carries
 * `activeDeal`; fee estimates carry `discountAmount`. The wording matches the
 * ShopCentral website (shopcentral-website lib/deals.ts).
 */

export type DealPrices = {
  /** What to show as the price: the sale price when there is one. */
  price: number;
  /** The normal price, struck through, when a sale price applies. */
  was?: number;
};

/** Was/now prices from a normal price and an optional sale price. A sale price that isn't lower is ignored. */
export function dealPrices(price: number, salePrice: number | undefined): DealPrices {
  if (typeof salePrice !== "number" || !Number.isFinite(salePrice) || salePrice < 0 || !(salePrice < price)) {
    return { price };
  }
  return { price: salePrice, was: price };
}

/** The store's deal, unless it has ended (a page left open). */
export function storeActiveDeal(
  profile: { activeDeal?: ShopDealResponse } | null | undefined,
  now: number = Date.now()
): ShopDealResponse | undefined {
  const deal = profile?.activeDeal;
  if (!deal?.label || !deal.short) return undefined;
  if (deal.endsAt && Date.parse(deal.endsAt) <= now) return undefined;
  return deal;
}

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "Sun 26 Oct", with the year only when it isn't this year. */
function formatDealDate(iso: string, now: Date): string | undefined {
  const at = new Date(iso);
  if (Number.isNaN(at.getTime())) return undefined;
  const text = `${WEEKDAYS[at.getDay()]} ${at.getDate()} ${MONTHS[at.getMonth()]}`;
  return at.getFullYear() === now.getFullYear() ? text : `${text} ${at.getFullYear()}`;
}

/**
 * The store banner: the deal in bold, then when it ends and how it's applied,
 * e.g. "Ends Sun 26 Oct · Applied automatically at checkout once your order
 * reaches ₦8,000.00".
 */
export function dealBannerText(deal: ShopDealResponse, now: Date = new Date()): { title: string; detail: string } {
  const ends = deal.endsAt ? formatDealDate(deal.endsAt, now) : undefined;
  const minimum = deal.minOrderAmount ? ` once your order reaches ${formatPrice(deal.minOrderAmount)}` : "";
  const applied = `Applied automatically at checkout${minimum}`;
  return { title: deal.label, detail: ends ? `Ends ${ends} · ${applied}` : applied };
}

/** The checkout summary's discount line, or undefined unless something came off. */
export function discountLine(
  fees: Pick<UsedishaOrderFeeEstimateResponseDto, "discountAmount" | "discount"> | null | undefined
): { label: string; amount: number } | undefined {
  const amount = fees?.discountAmount;
  if (typeof amount !== "number" || !(amount > 0)) return undefined;
  const label = fees?.discount?.label?.trim();
  return { label: label ? `Discount (${label})` : "Discount", amount };
}
