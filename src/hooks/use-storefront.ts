"use client";

import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  usedishaClientApi,
  usedishaCheckoutApi,
} from "@/config/sdk";
import {
  UsedishaInitiateCheckoutDtoDeliveryMethodEnum,
  type UsedishaInitiateCheckoutDto,
  type UsedishaValidateCartDto,
  type UsedishaCheckoutItemDto,
  type UsedishaCheckoutCustomerDto,
  type UsedishaEstimateFeesDto,
  type Address,
} from "@/sdk/usedisha-service";

/** Storefront delivery methods (single shared union across the app). */
export type DeliveryMethod =
  (typeof UsedishaInitiateCheckoutDtoDeliveryMethodEnum)[keyof typeof UsedishaInitiateCheckoutDtoDeliveryMethodEnum];

const FALLBACK_DOMAIN =
  process.env.NEXT_PUBLIC_STOREFRONT_DOMAIN ?? "demo";
const SITES_BASE_DOMAIN =
  process.env.NEXT_PUBLIC_SITES_BASE_DOMAIN ?? "bigmerchant.ng";

/**
 * Resolves the storefront domain key from the current URL:
 * - Query: ?domain=key
 * - Subdomain: [key].bigmerchant.ng
 * - Fallback: NEXT_PUBLIC_STOREFRONT_DOMAIN or "demo"
 */
export function getStorefrontDomainKey(): string {
  if (typeof window === "undefined") return FALLBACK_DOMAIN;
  const params = new URLSearchParams(window.location.search);
  const fromQuery = params.get("domain");
  if (fromQuery?.trim()) return fromQuery.trim();
  const hostname = window.location.hostname;
  const base = SITES_BASE_DOMAIN;
  if (hostname.endsWith(`.${base}`)) {
    const sub = hostname.slice(0, -(base.length + 1));
    if (sub) return sub;
  }
  return FALLBACK_DOMAIN;
}

/**
 * The current storefront's domain key (from ?domain= or the subdomain). Empty
 * until it is read from the URL after mount, so nothing is fetched for the
 * fallback store first: queries below wait for it (`enabled: !!domain`).
 */
export function useStorefrontDomain(): string {
  const [domain, setDomain] = useState("");
  useEffect(() => {
    setDomain(getStorefrontDomainKey());
  }, []);
  return domain;
}

/**
 * Returns the current URL query string (e.g. "?domain=devmode") so links can retain
 * params like domain when navigating. Client-only (empty during SSR) to avoid
 * useSearchParams() prerender requirement.
 */
export function useStorefrontQueryString(): string {
  const [queryString, setQueryString] = useState("");
  useEffect(() => {
    const q = typeof window !== "undefined" ? window.location.search : "";
    setQueryString(q || "");
  }, []);
  return queryString;
}

export function useStorefrontProfile() {
  const domain = useStorefrontDomain();
  return useQuery({
    queryKey: ["storefront", "profile", domain],
    enabled: !!domain,
    queryFn: () =>
      usedishaClientApi.usedishaClientControllerGetStorefrontProfileV1(domain),
  });
}

export function useStorefrontProducts(opts?: {
  category?: string;
  search?: string;
  sortBy?: string;
  sortOrder?: string;
  branchId?: string;
  page?: number;
  limit?: number;
}) {
  const domain = useStorefrontDomain();
  return useQuery({
    queryKey: ["storefront", "products", domain, opts],
    enabled: !!domain,
    // Keep the current page visible while the next one loads (no flash to empty).
    placeholderData: (previous) => previous,
    queryFn: () =>
      usedishaClientApi.usedishaClientControllerGetStorefrontProductsV1(
        domain,
        opts?.category,
        opts?.search,
        opts?.sortBy,
        opts?.sortOrder,
        opts?.branchId,
        opts?.page,
        opts?.limit
      ),
  });
}

export function useStorefrontProduct(productId: string | null) {
  const domain = useStorefrontDomain();
  return useQuery({
    queryKey: ["storefront", "product", domain, productId],
    queryFn: () =>
      usedishaClientApi.usedishaClientControllerGetStorefrontProductV1(
        domain,
        productId!
      ),
    enabled: !!domain && !!productId,
  });
}

export function useStorefrontCategories() {
  const domain = useStorefrontDomain();
  return useQuery({
    queryKey: ["storefront", "categories", domain],
    enabled: !!domain,
    queryFn: () =>
      usedishaClientApi.usedishaClientControllerGetStorefrontCategoriesV1(
        domain
      ),
  });
}

export function useValidateCart() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (body: UsedishaValidateCartDto) =>
      usedishaCheckoutApi.usedishaCheckoutControllerValidateCartV1(body),
    // Stock may have moved: refresh the products, not the quote being paid.
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["storefront", "products"] });
      queryClient.invalidateQueries({ queryKey: ["storefront", "product"] });
    },
  });
}

export function useInitiateCheckout() {
  return useMutation({
    mutationFn: (body: UsedishaInitiateCheckoutDto) =>
      usedishaCheckoutApi.usedishaCheckoutControllerInitiateCheckoutV1(body),
  });
}

/** Intent statuses after which nothing more will happen to a checkout. */
const SETTLED_INTENT_STATUSES = new Set(["order_created", "failed", "expired", "cancelled"]);

/**
 * A checkout's status. While the payment is still being confirmed (Paystack's
 * webhook can take a few seconds), it checks again every few seconds.
 */
export function useOrderStatus(intentReference: string | null) {
  return useQuery({
    queryKey: ["orderStatus", intentReference],
    queryFn: () =>
      usedishaCheckoutApi.usedishaCheckoutControllerCheckOrderStatusV1(
        intentReference!
      ),
    enabled: !!intentReference,
    refetchInterval: (query) => {
      const status = query.state.data?.data?.status;
      return status && SETTLED_INTENT_STATUSES.has(status) ? false : 4000;
    },
  });
}

const PENDING_CHECKOUT_KEY = "ud_pending_checkout";

/** A cart line as checkout takes it: the product, and the variant when one was chosen. */
export type CheckoutLine = Pick<UsedishaCheckoutItemDto, "productId" | "variantId" | "quantity">;

/** Keep the checkout we're sending the shopper to Paystack for, so the return page can follow it. */
export function rememberPendingCheckout(intentReference: string | undefined) {
  if (!intentReference || typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(PENDING_CHECKOUT_KEY, intentReference);
  } catch {
    /* storage unavailable: the shopper can still look the order up by email */
  }
}

/** The checkout this tab last sent to Paystack, if any. */
export function readPendingCheckout(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.sessionStorage.getItem(PENDING_CHECKOUT_KEY);
  } catch {
    return null;
  }
}

/** The pending checkout became an order (or failed for good): nothing left to follow. */
export function forgetPendingCheckout() {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.removeItem(PENDING_CHECKOUT_KEY);
  } catch {
    /* storage unavailable */
  }
}

export function useOrdersByEmail(email: string | null) {
  const domain = useStorefrontDomain();
  return useQuery({
    queryKey: ["storefront", "orders", domain, email],
    queryFn: () =>
      usedishaCheckoutApi.usedishaCheckoutControllerGetGuestOrdersV1(
        domain,
        email!
      ),
    enabled: !!domain && !!email && email.length > 0,
  });
}

/**
 * Live fee estimate (delivery + service) for the current cart and delivery method.
 * Re-runs when items, method, branch or coordinates change. `platformDelivery` is priced by the
 * backend provider (distance-based when coordinates are supplied).
 */
export function useEstimateFees(params: {
  items: CheckoutLine[];
  deliveryMethod: DeliveryMethod;
  userLat?: number;
  userLng?: number;
  /** Prices store delivery by zone when there are no coordinates. */
  userCity?: string;
  userState?: string;
  branchId?: string;
}) {
  const domain = useStorefrontDomain();
  return useQuery({
    queryKey: ["storefront", "fees", domain, params],
    enabled: !!domain && params.items.length > 0 && !!params.deliveryMethod,
    retry: false,
    queryFn: () =>
      usedishaCheckoutApi.usedishaCheckoutControllerEstimateFeesV1({
        domain,
        items: params.items.map(toCheckoutItem),
        deliveryMethod: params.deliveryMethod,
        userLat: params.userLat,
        userLng: params.userLng,
        userCity: params.userCity || undefined,
        userState: params.userState || undefined,
        branchId: params.branchId,
      } as UsedishaEstimateFeesDto),
  });
}

function getOrCreateId(storage: Storage, key: string): string {
  let v = storage.getItem(key);
  if (!v) {
    v =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    storage.setItem(key, v);
  }
  return v;
}

/**
 * Records a session-aware store view via the SPA visit endpoint. Fires once per browser session
 * per store; sends a stable `sessionId` (sessionStorage) + persistent `visitorId` (localStorage)
 * so the backend groups page loads into sessions and counts unique store views. Fire-and-forget.
 */
export function useTrackStoreView(storeId: string | undefined) {
  useEffect(() => {
    if (!storeId || typeof window === "undefined") return;
    // Local and preview runs often point at the live API; don't count them as real visits.
    if (process.env.NODE_ENV !== "production") return;
    const onceKey = `ud_viewed_${storeId}`;
    if (window.sessionStorage.getItem(onceKey)) return;
    window.sessionStorage.setItem(onceKey, "1");

    usedishaClientApi
      .usedishaClientControllerRecordStoreVisitV1(storeId, {
        sessionId: getOrCreateId(window.sessionStorage, "ud_session_id"),
        visitorId: getOrCreateId(window.localStorage, "ud_visitor_id"),
        path: window.location.pathname,
        referrer: document.referrer || undefined,
        language: navigator.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      })
      .catch(() => {
        // best-effort analytics — never block or surface to the shopper
      });
  }, [storeId]);
}

function toCheckoutItem(line: CheckoutLine): UsedishaCheckoutItemDto {
  return {
    productId: line.productId,
    ...(line.variantId && { variantId: line.variantId }),
    quantity: line.quantity,
  };
}

export function buildCheckoutPayload(
  domain: string,
  items: CheckoutLine[],
  customer: UsedishaCheckoutCustomerDto,
  opts: {
    deliveryMethod: DeliveryMethod;
    shippingAddress?: Address;
    userLat?: number;
    userLng?: number;
    branchId?: string;
    callbackUrl?: string;
    customerNotes?: string;
    /** Market delivery only: the run the shopper was quoted for. */
    marketDeliveryWindow?: string;
  }
): UsedishaInitiateCheckoutDto {
  const dtoItems = items.map(toCheckoutItem);
  return {
    domain,
    customer,
    items: dtoItems,
    deliveryMethod: opts.deliveryMethod,
    shippingAddress: opts.shippingAddress,
    userLat: opts.userLat,
    userLng: opts.userLng,
    branchId: opts.branchId,
    callbackUrl: opts.callbackUrl,
    customerNotes: opts.customerNotes,
    marketDeliveryWindow: opts.marketDeliveryWindow,
  };
}
