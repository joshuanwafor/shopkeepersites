"use client";

import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  usedishaClientApi,
  usedishaCheckoutApi,
} from "@/config/sdk";
import type {
  UsedishaInitiateCheckoutDto,
  UsedishaValidateCartDto,
  UsedishaCheckoutItemDto,
  UsedishaCheckoutCustomerDto,
  Address,
} from "@/sdk/usedisha-service";

const FALLBACK_DOMAIN =
  process.env.NEXT_PUBLIC_STOREFRONT_DOMAIN ?? "demo";
const SITES_BASE_DOMAIN =
  process.env.NEXT_PUBLIC_SITES_BASE_DOMAIN ?? "sitesdomain.ng";

/**
 * Resolves the storefront domain key from the current URL:
 * - Query: ?domain=key
 * - Subdomain: [key].sitesdomain.ng
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
 * Hook that returns the current storefront domain key (from ?domain= or subdomain).
 * Updates after mount so SSR/first paint use fallback; then client resolves from URL.
 */
export function useStorefrontDomain(): string {
  const [domain, setDomain] = useState(FALLBACK_DOMAIN);
  useEffect(() => {
    setDomain(getStorefrontDomainKey());
  }, []);
  return domain;
}

export function useStorefrontProfile() {
  const domain = useStorefrontDomain();
  return useQuery({
    queryKey: ["storefront", "profile", domain],
    queryFn: () =>
      usedishaClientApi.usedishaClientControllerGetStorefrontProfileV1(domain),
  });
}

export function useStorefrontProducts(opts?: {
  category?: string;
  search?: string;
  sortBy?: string;
  sortOrder?: string;
}) {
  const domain = useStorefrontDomain();
  return useQuery({
    queryKey: ["storefront", "products", domain, opts],
    queryFn: () =>
      usedishaClientApi.usedishaClientControllerGetStorefrontProductsV1(
        domain,
        opts?.category,
        opts?.search,
        opts?.sortBy,
        opts?.sortOrder
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
    enabled: !!productId,
  });
}

export function useStorefrontCategories() {
  const domain = useStorefrontDomain();
  return useQuery({
    queryKey: ["storefront", "categories", domain],
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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["storefront"] });
    },
  });
}

export function useInitiateCheckout() {
  return useMutation({
    mutationFn: (body: UsedishaInitiateCheckoutDto) =>
      usedishaCheckoutApi.usedishaCheckoutControllerInitiateCheckoutV1(body),
  });
}

export function useOrderStatus(intentReference: string | null) {
  return useQuery({
    queryKey: ["orderStatus", intentReference],
    queryFn: () =>
      usedishaCheckoutApi.usedishaCheckoutControllerCheckOrderStatusV1(
        intentReference!
      ),
    enabled: !!intentReference,
  });
}

export function useOrdersByEmail(email: string | null) {
  const domain = useStorefrontDomain();
  return useQuery({
    queryKey: ["storefront", "orders", domain, email],
    queryFn: () =>
      usedishaClientApi.usedishaClientControllerGetOrdersByEmailV1(
        domain,
        email!
      ),
    enabled: !!email && email.length > 0,
  });
}

export function buildCheckoutPayload(
  domain: string,
  items: Array<{ productId: string; quantity: number }>,
  customer: UsedishaCheckoutCustomerDto,
  shippingAddress?: Address,
  callbackUrl?: string,
  customerNotes?: string
): UsedishaInitiateCheckoutDto {
  const dtoItems: UsedishaCheckoutItemDto[] = items.map((i) => ({
    productId: i.productId,
    quantity: i.quantity,
  }));
  return {
    domain,
    customer,
    items: dtoItems,
    shippingAddress,
    callbackUrl,
    customerNotes,
  };
}
