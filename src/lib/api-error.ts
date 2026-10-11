import axios from "axios";

/**
 * The API's own words for a failed request, and its stable `code` when it sends
 * one (e.g. MARKET_RUN_EXPIRED). Falls back to `fallback` for network errors
 * and unexpected bodies. Unlike `handleAxiosError`, it has no side effects.
 */
export function apiError(error: unknown, fallback: string): { message: string; code?: string } {
  if (!axios.isAxiosError(error)) return { message: fallback };
  const data = error.response?.data as { message?: unknown; code?: unknown } | undefined;
  const raw = data?.message;
  const message = Array.isArray(raw) ? raw.filter((m) => typeof m === "string").join(", ") : raw;
  return {
    message: typeof message === "string" && message.trim() ? message : fallback,
    ...(typeof data?.code === "string" ? { code: data.code } : {}),
  };
}
