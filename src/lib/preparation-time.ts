import type { UsedishaPreparationTime } from "@/sdk/usedisha-service";

/**
 * A store's preparation time: how long an order takes to be ready once the
 * store accepts it, in minutes. The same wording as the ShopCentral website
 * and the stores' own apps.
 */

const HOUR = 60;
const DAY = 24 * HOUR;

/** A usable preparation time off the store profile, if it has one. */
export function preparationTimeOf(
  profile: { preparationTime?: Partial<UsedishaPreparationTime> | null } | null | undefined
): UsedishaPreparationTime | undefined {
  const min = Number(profile?.preparationTime?.minMinutes);
  const max = Number(profile?.preparationTime?.maxMinutes);
  if (!Number.isFinite(min) || !Number.isFinite(max) || min < 0 || max <= 0 || max < min) {
    return undefined;
  }
  return { minMinutes: min, maxMinutes: max };
}

const trim = (n: number) => Number(n.toFixed(1)).toString();

/** One length: "20 min", "1 hr", "1.5 hrs", "2 days". */
function formatMinutes(minutes: number): string {
  if (minutes >= DAY && minutes % (DAY / 2) === 0) {
    const days = minutes / DAY;
    return `${trim(days)} ${days === 1 ? "day" : "days"}`;
  }
  if (minutes >= HOUR && minutes % (HOUR / 2) === 0) {
    const hours = minutes / HOUR;
    return `${trim(hours)} ${hours === 1 ? "hr" : "hrs"}`;
  }
  return `${minutes} min`;
}

/** "20–30 min", "1–2 hrs", "45 min – 2 hrs", "Up to 30 min", "About 1 hr". */
export function formatPreparationTime(time: UsedishaPreparationTime): string {
  const { minMinutes: min, maxMinutes: max } = time;
  if (min === max) return `About ${formatMinutes(max)}`;
  if (min === 0) return `Up to ${formatMinutes(max)}`;
  const low = formatMinutes(min);
  const high = formatMinutes(max);
  const [lowValue, lowUnit] = low.split(" ");
  const [highValue, highUnit] = high.split(" ");
  const sameUnit = lowUnit.replace(/s$/, "") === highUnit.replace(/s$/, "");
  return sameUnit ? `${lowValue}–${highValue} ${highUnit}` : `${low} – ${high}`;
}

/** "Ready in 20–30 min", "Ready in about 1 hr". */
export function formatReadyIn(time: UsedishaPreparationTime): string {
  const range = formatPreparationTime(time);
  return `Ready in ${range.charAt(0).toLowerCase()}${range.slice(1)}`;
}
