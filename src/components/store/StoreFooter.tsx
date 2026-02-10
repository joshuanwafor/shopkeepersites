"use client";

import { AppShellFooter, Text, Group } from "@mantine/core";

const SHOPKEEPER_URL = "https://shopkeeperpos.com";

export function StoreFooter() {
  return (
    <AppShellFooter className="border-t border-stone-200 bg-stone-50/80">
      <Group justify="center" className="h-full min-h-[56px] px-4">
        <Text size="sm" c="dimmed" className="text-stone-500">
          Powered by{" "}
          <a
            href={SHOPKEEPER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-700 font-medium underline underline-offset-2 hover:text-stone-900"
          >
            Shopkeeper POS
          </a>
        </Text>
      </Group>
    </AppShellFooter>
  );
}
