"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  usedishaClientApi,
  usedishaCheckoutApi,
  STOREFRONT_DOMAIN,
} from "@/config/sdk";
import type {
  UsedishaInitiateCheckoutDto,
  UsedishaValidateCartDto,
  UsedishaCheckoutItemDto,
  UsedishaCheckoutCustomerDto,
} from "@/sdk/usedisha-service";

const domain = STOREFRONT_DOMAIN;

export function useStorefrontProfile() {
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
  items: Array<{ productId: string; quantity: number }>,
  customer: UsedishaCheckoutCustomerDto,
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
    callbackUrl,
    customerNotes,
  };
}
