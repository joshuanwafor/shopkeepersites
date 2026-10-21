import axios from "axios";

/**
 * The API's own words for a failed request, its stable `code` when it sends
 * one (e.g. MARKET_RUN_EXPIRED), and the `items` it names (DELIVERY_UNAVAILABLE
 * lists what can't travel). Falls back to `fallback` for network errors and
 * unexpected bodies. It has no side effects.
 */
export function apiError(
  error: unknown,
  fallback: string
): { message: string; code?: string; items?: string[] } {
  if (!axios.isAxiosError(error)) return { message: fallback };
  const data = error.response?.data as { message?: unknown; code?: unknown; items?: unknown } | undefined;
  const raw = data?.message;
  const message = Array.isArray(raw) ? raw.filter((m) => typeof m === "string").join(", ") : raw;
  const items = Array.isArray(data?.items)
    ? data.items.filter((i): i is string => typeof i === "string" && !!i.trim())
    : [];
  return {
    message: typeof message === "string" && message.trim() ? message : fallback,
    ...(typeof data?.code === "string" ? { code: data.code } : {}),
    ...(items.length ? { items } : {}),
  };
}

/** The API's code for an order it can't deliver: too far, or food that won't keep for the trip. */
export const DELIVERY_UNAVAILABLE = "DELIVERY_UNAVAILABLE";
