import { ServerPath } from "@/sdk/setup";
import { appAxiosInstance } from "./axios-instance";
import { UsedishaCheckoutApi, UsedishaClientApi } from "@/sdk/usedisha-service";

export const usedishaCheckoutApi = new UsedishaCheckoutApi(
  undefined,
  ServerPath,
  appAxiosInstance
);
export const usedishaClientApi = new UsedishaClientApi(
  undefined,
  ServerPath,
  appAxiosInstance
);

export const STOREFRONT_DOMAIN =
  process.env.NEXT_PUBLIC_STOREFRONT_DOMAIN ?? "mydomain";