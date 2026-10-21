"use client";

import { useEffect, useMemo, useState } from "react";
import { useStorefrontProfile } from "@/hooks/use-storefront";
import { useServerStorefrontStyle } from "./storefront-style-context";
import { resolveStorefrontStyle, type StorefrontStyle } from "./templates";

type Preview = { template: string | null; color: string | null };

/** The store's saved choice. Not in the generated SDK yet (core adds `storefrontStyle`). */
export function savedStorefrontStyle(profile: unknown): { template?: unknown; color?: unknown } | undefined {
  const style = (profile as { storefrontStyle?: unknown } | null | undefined)?.storefrontStyle;
  return style && typeof style === "object" ? (style as { template?: unknown; color?: unknown }) : undefined;
}

/** `?preview=market&color=0F766E` on the current URL: the picker showing a look before it's saved. */
function usePreviewParams(): Preview | undefined {
  const [preview, setPreview] = useState<Preview>();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const template = params.get("preview");
    const color = params.get("color");
    if (template || color) setPreview({ template, color });
  }, []);
  return preview;
}

/**
 * The look this store's pages show, and whether it's known yet. The server's
 * reading of the store comes first (so the first render already has the
 * store's header), then the profile once loaded (a choice saved since), with
 * a preview link over both. With none of them it's only Classic by default,
 * and layouts should wait rather than flash from Classic to the store's own.
 */
export function useStorefrontStyle(): StorefrontStyle & { ready: boolean } {
  const { data, isPending } = useStorefrontProfile();
  const server = useServerStorefrontStyle();
  const preview = usePreviewParams();
  const profile = data?.data;
  return useMemo(
    () => ({
      ...resolveStorefrontStyle(profile ? savedStorefrontStyle(profile) : server, preview),
      ready: !isPending || !!server || !!preview?.template,
    }),
    [profile, server, preview, isPending]
  );
}

/**
 * Puts the look on `<html>`, where the template's CSS and Mantine's portals
 * (modals) both see it. The server already rendered the store's saved look;
 * this follows a preview link, or a choice saved after the page loaded.
 */
export function useApplyStorefrontStyle() {
  const style = useStorefrontStyle();
  useEffect(() => {
    if (!style.ready) return;
    const html = document.documentElement;
    html.dataset.sfTemplate = style.template.id;
    html.style.setProperty("--sf-brand", style.color);
    html.style.setProperty("--sf-brand-ink", style.ink);
  }, [style.ready, style.template.id, style.color, style.ink]);
}
