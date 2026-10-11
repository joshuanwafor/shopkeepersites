"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import { CartProvider } from "@/context/cart-context";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            // A 4xx (no such store or product, invalid request) won't change on retry;
            // retrying only delays the message. Network and 5xx errors get two more tries.
            retry: (failureCount, error) => {
              const status = axios.isAxiosError(error) ? error.response?.status : undefined;
              if (status && status >= 400 && status < 500) return false;
              return failureCount < 2;
            },
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>{children}</CartProvider>
    </QueryClientProvider>
  );
}
