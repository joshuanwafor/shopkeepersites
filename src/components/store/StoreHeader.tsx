"use client";

import { AppShellHeader, Group, Text, UnstyledButton, Badge } from "@mantine/core";
import Link from "next/link";
import { useCart } from "@/context/cart-context";

export function StoreHeader({ storeName }: { storeName: string }) {
  const { totalItems } = useCart();

  return (
    <AppShellHeader className="border-b border-stone-200 bg-white">
      <Group className="h-full max-w-6xl mx-auto w-full px-4 sm:px-6 justify-between">
        <Link href="/" className="no-underline">
          <Text
            fw={600}
            size="lg"
            className="font-serif text-stone-800 tracking-tight"
          >
            {storeName}
          </Text>
        </Link>
        <Group gap="lg">
          <UnstyledButton
            component={Link}
            href="/orders"
            className="text-stone-600 hover:text-stone-900 text-sm transition-colors"
          >
            View orders
          </UnstyledButton>
          <UnstyledButton component={Link} href="/checkout">
            <Group gap={8} className="text-stone-700 hover:text-stone-900 text-sm transition-colors">
              <span>Cart</span>
              {totalItems > 0 && (
                <Badge
                  size="sm"
                  variant="filled"
                  className="bg-stone-700 text-white font-normal min-w-[1.25rem]"
                >
                  {totalItems}
                </Badge>
              )}
            </Group>
          </UnstyledButton>
        </Group>
      </Group>
    </AppShellHeader>
  );
}
