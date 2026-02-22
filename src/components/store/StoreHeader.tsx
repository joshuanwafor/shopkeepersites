"use client";

import { AppShellHeader, Text, UnstyledButton, Badge } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart } from "iconsax-react";
import { useCart } from "@/context/cart-context";
import { useStorefrontQueryString } from "@/hooks/use-storefront";

export function StoreHeader({ storeName }: { storeName: string }) {
  const pathname = usePathname();
  const queryString = useStorefrontQueryString();
  const { totalItems } = useCart();
  const isOrders = pathname === "/orders";
  const isCheckout = pathname === "/checkout";

  return (
    <AppShellHeader className="border-b border-stone-200 bg-white">
      <header className="h-full max-w-6xl mx-auto w-full px-4 sm:px-6 flex items-center justify-between">
        <Link
          href={queryString ? `/${queryString}` : "/"}
          className="no-underline py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2 rounded"
        >
          <Text
            fw={600}
            size="xl"
            className="font-serif text-stone-800 tracking-tight hover:text-stone-600 transition-colors"
          >
            {storeName}
          </Text>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Store navigation">
          <UnstyledButton
            component={Link}
            href={`/orders${queryString}`}
            className={`
              px-3 py-2 rounded text-sm font-medium transition-colors
              focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2
              ${isOrders ? "text-stone-900 bg-stone-100" : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"}
            `}
          >
            View orders
          </UnstyledButton>
          <UnstyledButton
            component={Link}
            href={`/checkout${queryString}`}
            className={`
              flex items-center gap-2 px-3 py-2 rounded text-sm font-medium transition-colors
              focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2
              ${isCheckout ? "text-stone-900 bg-stone-100" : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"}
            `}
          >
            <ShoppingCart size={20}    color="black"/>
            <span className="hidden sm:inline">Cart</span>
            {totalItems > 0 && (
              <Badge
                size="sm"
                variant="filled"
                className="bg-stone-700 text-white font-normal min-w-[1.25rem] h-5 flex items-center justify-center text-xs"
              >
                {totalItems}
              </Badge>
            )}
          </UnstyledButton>
        </nav>
      </header>
    </AppShellHeader>
  );
}
