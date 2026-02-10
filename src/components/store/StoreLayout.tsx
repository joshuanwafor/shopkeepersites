"use client";

import { AppShell, AppShellMain } from "@mantine/core";
import { StoreHeader } from "./StoreHeader";
import { StoreFooter } from "./StoreFooter";

type StoreLayoutProps = {
  storeName: string;
  children: React.ReactNode;
};

export function StoreLayout({ storeName, children }: StoreLayoutProps) {
  return (
    <div className="store-root min-h-screen flex flex-col bg-stone-50">
      <AppShell
        header={{ height: 64 }}
        footer={{ height: 56 }}
        padding="md"
        classNames={{
          main: "flex-1 bg-stone-50",
        }}
      >
        <StoreHeader storeName={storeName} />
        <AppShellMain className="flex-1">{children}</AppShellMain>
        <StoreFooter />
      </AppShell>
    </div>
  );
}
