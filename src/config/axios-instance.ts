import axios from "axios";

/**
 * The HTTP client for the store's public API. Shoppers never sign in here, so
 * it sends no credentials; pages turn errors into words with `apiError`.
 */
export const appAxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CORE_HOST || undefined,
  // Prevent indefinite pending requests that keep query loading states stuck.
  timeout: 15000,
});
