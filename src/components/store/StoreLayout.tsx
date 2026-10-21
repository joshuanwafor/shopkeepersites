"use client";

import { AppShell, AppShellMain } from "@mantine/core";
import { StoreHeader } from "./StoreHeader";
import { StoreFooter } from "./StoreFooter";
import { useStorefrontProfile } from "@/hooks/use-storefront";
import { useApplyStorefrontStyle } from "@/templates/use-storefront-style";

type StoreLayoutProps = {
  storeName: string;
  children: React.ReactNode;
};

export function StoreLayout({ storeName, children }: StoreLayoutProps) {
  useApplyStorefrontStyle();
  return (
    <div className="store-root min-h-screen flex flex-col bg-stone-50">
      <StoreHeader storeName={storeName} />
      <PausedNotice />
      <AppShell
        footer={{ height: 56 }}
        padding="md"
        classNames={{
          main: "flex-1 bg-stone-50",
        }}
      >
        <AppShellMain className="flex-1">{children}</AppShellMain>
        <StoreFooter />
      </AppShell>
    </div>
  );
}

/** The store has paused online orders in its own settings: browsing works, checkout won't. */
function PausedNotice() {
  const { data } = useStorefrontProfile();
  if (data?.data?.takingOnlineOrders !== false) return null;
  return (
    <div role="status" className="border-b border-amber-200 bg-amber-50 px-4 py-2 text-center text-sm text-amber-900">
      This store isn&apos;t taking online orders right now. You can still browse.
    </div>
  );
}
