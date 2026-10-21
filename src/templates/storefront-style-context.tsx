"use client";

import { createContext, useContext } from "react";

export type SavedStyle = { template?: unknown; color?: unknown };

/**
 * The store's saved look as the server read it for this request (the root
 * layout), so the first render — on the server and when the page hydrates —
 * already uses the store's template instead of waiting for the profile.
 * Undefined when the server couldn't read the store.
 */
const ServerStyleContext = createContext<SavedStyle | undefined>(undefined);

export function StorefrontStyleProvider({
  initial,
  children,
}: {
  initial: SavedStyle | undefined;
  children: React.ReactNode;
}) {
  return <ServerStyleContext.Provider value={initial}>{children}</ServerStyleContext.Provider>;
}

export function useServerStorefrontStyle(): SavedStyle | undefined {
  return useContext(ServerStyleContext);
}
