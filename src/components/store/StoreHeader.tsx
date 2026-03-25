"use client";

import { useEffect, useState } from "react";
import { Text, UnstyledButton, Badge } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart } from "iconsax-react";
import { useCart } from "@/context/cart-context";
import { useStorefrontQueryString } from "@/hooks/use-storefront";

export function StoreHeader({ storeName }: { storeName: string }) {
  const pathname = usePathname();
  const queryString = useStorefrontQueryString();
  const { totalItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const isOrders = pathname === "/orders";
  const isCheckout = pathname === "/checkout";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`border-b transition-all duration-200 ${
          isScrolled
            ? "border-stone-300/90 bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80"
            : "border-stone-200 bg-gradient-to-b from-white to-stone-50/70"
        }`}
      >
        <div className="h-[72px] max-w-6xl mx-auto w-full px-4 sm:px-6 flex items-center justify-between gap-3">
        <Link
          href={queryString ? `/${queryString}` : "/"}
          className="min-w-0 no-underline py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2 rounded"
        >
          <Text
            fw={600}
            size="xl"
            className="font-serif text-stone-800 tracking-tight hover:text-stone-600 transition-colors truncate max-w-[58vw] sm:max-w-none"
          >
            {storeName}
          </Text>
          <Text size="xs" className="text-stone-500 -mt-0.5 hidden sm:block">
            Online storefront
          </Text>
        </Link>

        <nav className="flex items-center gap-1.5 sm:gap-2" aria-label="Store navigation">
          <UnstyledButton
            component={Link}
            href={`/orders${queryString}`}
            className={`
              px-3 py-2 rounded-full text-sm font-medium transition-colors border
              focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2
              ${isOrders ? "text-stone-900 bg-stone-100 border-stone-300" : "text-stone-600 border-transparent hover:text-stone-900 hover:bg-stone-100/70"}
            `}
          >
            View orders
          </UnstyledButton>
          <UnstyledButton
            component={Link}
            href={`/checkout${queryString}`}
            className={`
              hidden sm:flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-colors border
              focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2
              ${isCheckout ? "text-stone-900 bg-stone-100 border-stone-300" : "text-stone-600 border-transparent hover:text-stone-900 hover:bg-stone-100/70"}
            `}
          >
            <ShoppingCart size={20} color="black" />
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
        </div>
      </header>

      <div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden pointer-events-none">
        <UnstyledButton
          component={Link}
          href={`/checkout${queryString}`}
          className={`
            pointer-events-auto w-full rounded-full px-4 py-3
            bg-stone-900 text-white shadow-lg shadow-stone-300/40
            flex items-center justify-center gap-2
            focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2
            ${isCheckout ? "opacity-95" : "hover:bg-stone-800 active:translate-y-[1px]"}
          `}
          aria-label="Open cart"
        >
          <ShoppingCart size={20} color="white" />
          <span className="text-sm font-medium">Cart</span>
          {totalItems > 0 && (
            <Badge
              size="sm"
              variant="filled"
              className="bg-white text-stone-900 font-semibold min-w-[1.25rem] h-5 flex items-center justify-center text-xs"
            >
              {totalItems}
            </Badge>
          )}
        </UnstyledButton>
      </div>
    </>
  );
}
