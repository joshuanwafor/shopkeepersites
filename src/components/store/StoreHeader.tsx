"use client";

import { useEffect, useState } from "react";
import { Image, Text, UnstyledButton, Badge } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart } from "iconsax-react";
import { useCart } from "@/context/cart-context";
import { useStorefrontProfile, useStorefrontQueryString } from "@/hooks/use-storefront";
import { formatReadyIn, preparationTimeOf } from "@/lib/preparation-time";
import { storeLogo } from "@/templates/branding";
import { useStorefrontStyle } from "@/templates/use-storefront-style";

type HeaderProps = {
  storeName: string;
  caption?: string;
  logo?: string;
  homeHref: string;
  ordersHref: string;
  cartHref: string;
  cartLabel: string;
  totalItems: number;
  isOrders: boolean;
  isCheckout: boolean;
};

const focusRing = "focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2";

/** The store's initial in a brand-coloured square, where a template wants a mark and there's no logo. */
function LetterMark({ name, inverted = false }: { name: string; inverted?: boolean }) {
  return (
    <span
      aria-hidden
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg font-bold ${
        inverted ? "bg-sf-brand-ink text-sf-brand" : "bg-sf-brand text-sf-brand-ink"
      }`}
    >
      {name.trim().charAt(0).toUpperCase() || "S"}
    </span>
  );
}

function Logo({ src, size = 40, className = "" }: { src: string; size?: number; className?: string }) {
  return <Image src={src} alt="" w={size} h={size} fit="cover" className={`shrink-0 ${className}`} />;
}

function CountBadge({ count, className }: { count: number; className: string }) {
  if (count <= 0) return null;
  return (
    <Badge
      size="sm"
      variant="filled"
      className={`min-w-[1.25rem] h-5 flex items-center justify-center text-xs font-semibold ${className}`}
    >
      {count}
    </Badge>
  );
}

/** Classic: white bar, serif name, pill links — the look every store had before templates. */
function ClassicHeader(p: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const pill = (active: boolean) =>
    `px-3 py-2 rounded-full text-sm font-medium transition-colors border ${focusRing} ${
      active
        ? "text-stone-900 bg-stone-100 border-stone-300"
        : "text-stone-600 border-transparent hover:text-stone-900 hover:bg-stone-100/70"
    }`;
  return (
    <header
      className={`border-b transition-all duration-200 ${
        isScrolled
          ? "border-stone-300/90 bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80"
          : "border-stone-200 bg-gradient-to-b from-white to-stone-50/70"
      }`}
    >
      <div className="h-[72px] max-w-6xl mx-auto w-full px-4 sm:px-6 flex items-center justify-between gap-3">
        <Link href={p.homeHref} className={`flex min-w-0 items-center gap-3 no-underline py-2 rounded ${focusRing}`}>
          {p.logo && <Logo src={p.logo} className="rounded-lg border border-stone-200 bg-white" />}
          <div className="min-w-0">
            <Text
              fw={600}
              size="xl"
              className="font-serif text-stone-800 tracking-tight hover:text-stone-600 transition-colors truncate max-w-[50vw] sm:max-w-none"
            >
              {p.storeName}
            </Text>
            <Text size="xs" className="text-stone-500 -mt-0.5 hidden sm:block">
              Online storefront
            </Text>
          </div>
        </Link>
        <nav className="flex items-center gap-1.5 sm:gap-2" aria-label="Store navigation">
          <UnstyledButton component={Link} href={p.ordersHref} className={pill(p.isOrders)}>
            View orders
          </UnstyledButton>
          <UnstyledButton component={Link} href={p.cartHref} className={`hidden sm:flex items-center gap-2 ${pill(p.isCheckout)}`}>
            <ShoppingCart size={20} color="currentColor" />
            <span>{p.cartLabel}</span>
            <CountBadge count={p.totalItems} className="bg-sf-brand text-sf-brand-ink font-normal" />
          </UnstyledButton>
        </nav>
      </div>
    </header>
  );
}

/**
 * Market: friendly and app-like. A brand stripe on top, the logo (or the
 * store's initial) in a rounded square, and under the name what a hungry
 * customer wants to know: how soon it's ready, or that the store is paused.
 */
function MarketHeader(p: HeaderProps & { status: string; paused: boolean }) {
  return (
    <header className="border-t-4 border-t-sf-brand border-b border-stone-200 bg-white">
      <div className="h-[68px] max-w-6xl mx-auto w-full px-4 sm:px-6 flex items-center justify-between gap-3">
        <Link href={p.homeHref} className={`flex min-w-0 items-center gap-3 no-underline rounded-xl ${focusRing}`}>
          {p.logo ? (
            <Logo src={p.logo} size={44} className="rounded-2xl ring-1 ring-stone-200" />
          ) : (
            <LetterMark name={p.storeName} />
          )}
          <div className="min-w-0">
            <Text fw={800} size="lg" className="leading-tight text-stone-900 truncate max-w-[52vw] sm:max-w-none">
              {p.storeName}
            </Text>
            <Text size="xs" className="mt-0.5 flex items-center gap-1.5 text-stone-500">
              <span
                aria-hidden
                className={`h-2 w-2 shrink-0 rounded-full ${p.paused ? "bg-amber-500" : "bg-emerald-500"}`}
              />
              <span className="truncate">{p.status}</span>
            </Text>
          </div>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Store navigation">
          <Link
            href={p.ordersHref}
            className={`rounded-full px-3 py-2 text-sm font-semibold transition-colors ${focusRing} ${
              p.isOrders ? "bg-stone-100 text-stone-900" : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
            }`}
          >
            Orders
          </Link>
          <Link
            href={p.cartHref}
            className={`hidden sm:flex items-center gap-2 rounded-full bg-sf-brand px-4 py-2 text-sm font-semibold text-sf-brand-ink transition-opacity hover:opacity-90 ${focusRing}`}
          >
            <ShoppingCart size={18} color="currentColor" />
            {p.cartLabel}
            <CountBadge count={p.totalItems} className="bg-sf-brand-ink text-sf-brand" />
          </Link>
        </nav>
      </div>
    </header>
  );
}

/** Boutique: centred and quiet. The name in the display face, small spaced-out links either side. */
function BoutiqueHeader(p: HeaderProps) {
  const link = (active: boolean) =>
    `text-[11px] sm:text-xs uppercase tracking-[0.18em] transition-colors ${focusRing} ${
      active ? "text-stone-900 underline underline-offset-4" : "text-stone-600 hover:text-stone-900"
    }`;
  return (
    <header className="border-b border-stone-200 bg-white">
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 grid grid-cols-[1fr_auto_1fr] items-center gap-3 py-4 sm:py-5">
        <nav className="justify-self-start" aria-label="Orders">
          <Link href={p.ordersHref} className={link(p.isOrders)}>
            Orders
          </Link>
        </nav>
        <Link href={p.homeHref} className={`flex min-w-0 flex-col items-center text-center no-underline ${focusRing}`}>
          {p.logo && <Logo src={p.logo} size={36} className="mb-1.5 rounded-full" />}
          <span className="font-serif text-xl sm:text-3xl uppercase tracking-[0.12em] text-stone-900 truncate max-w-[56vw] sm:max-w-[40rem]">
            {p.storeName}
          </span>
          {p.caption && (
            <span className="mt-1 hidden sm:block text-[11px] uppercase tracking-[0.2em] text-stone-500 truncate max-w-[40rem]">
              {p.caption}
            </span>
          )}
        </Link>
        <nav className="justify-self-end" aria-label={p.cartLabel}>
          <Link href={p.cartHref} className={link(p.isCheckout)}>
            {p.cartLabel}
            {p.totalItems > 0 ? ` (${p.totalItems})` : ""}
          </Link>
        </nav>
      </div>
    </header>
  );
}

/** Bold: a solid bar in the brand colour, the name heavy and large, the cart as an inverted button. */
function BoldHeader(p: HeaderProps) {
  return (
    <header className="bg-sf-header text-sf-header-ink">
      <div className="h-16 max-w-6xl mx-auto w-full px-4 sm:px-6 flex items-center justify-between gap-3">
        <Link href={p.homeHref} className={`flex min-w-0 items-center gap-3 no-underline text-inherit rounded-xl ${focusRing}`}>
          {p.logo ? (
            <Logo src={p.logo} className="rounded-xl bg-white ring-2 ring-white/40" />
          ) : (
            <LetterMark name={p.storeName} inverted />
          )}
          <div className="min-w-0">
            <span className="block font-serif text-xl font-bold tracking-tight truncate max-w-[52vw] sm:max-w-none">
              {p.storeName}
            </span>
            {p.caption && (
              <span className="hidden sm:block text-xs text-sf-header-muted truncate max-w-[36rem]">{p.caption}</span>
            )}
          </div>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-3" aria-label="Store navigation">
          <Link
            href={p.ordersHref}
            className={`rounded-full px-3 py-2 text-sm font-semibold transition-colors ${focusRing} ${
              p.isOrders ? "text-sf-header-ink bg-black/10" : "text-sf-header-muted hover:text-sf-header-ink hover:bg-black/10"
            }`}
          >
            Orders
          </Link>
          <Link
            href={p.cartHref}
            className={`hidden sm:flex items-center gap-2 rounded-full bg-sf-brand-ink px-4 py-2 text-sm font-bold text-sf-brand transition-opacity hover:opacity-90 ${focusRing}`}
          >
            <ShoppingCart size={18} color="currentColor" />
            {p.cartLabel}
            <CountBadge count={p.totalItems} className="bg-sf-brand text-sf-brand-ink" />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function StoreHeader({ storeName }: { storeName: string }) {
  const pathname = usePathname();
  const queryString = useStorefrontQueryString();
  const { totalItems } = useCart();
  const { data: profileRes } = useStorefrontProfile();
  const { template } = useStorefrontStyle();
  const profile = profileRes?.data;
  const isCheckout = pathname === "/checkout";

  const props: HeaderProps = {
    storeName,
    caption: profile?.caption?.trim() || undefined,
    logo: storeLogo(profile),
    homeHref: queryString ? `/${queryString}` : "/",
    ordersHref: `/orders${queryString}`,
    cartHref: `/checkout${queryString}`,
    cartLabel: template.cartLabel,
    totalItems,
    isOrders: pathname === "/orders",
    isCheckout,
  };

  const paused = profile?.takingOnlineOrders === false;
  const preparation = preparationTimeOf(profile);
  const status = paused
    ? "Not taking orders right now"
    : preparation
      ? formatReadyIn(preparation)
      : props.caption ?? "Order online";

  return (
    <>
      {template.id === "market" ? (
        <MarketHeader {...props} status={status} paused={paused} />
      ) : template.id === "boutique" ? (
        <BoutiqueHeader {...props} />
      ) : template.id === "bold" ? (
        <BoldHeader {...props} />
      ) : (
        <ClassicHeader {...props} />
      )}

      {/* Phones: the cart is a floating button in the brand colour. */}
      <div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden pointer-events-none">
        <UnstyledButton
          component={Link}
          href={props.cartHref}
          className={`
            pointer-events-auto w-full rounded-full px-4 py-3
            bg-sf-brand text-sf-brand-ink shadow-lg shadow-stone-300/40
            flex items-center justify-center gap-2
            ${focusRing}
            ${isCheckout ? "opacity-95" : "hover:opacity-90 active:translate-y-[1px]"}
          `}
          aria-label={`Open ${template.cartLabel.toLowerCase()}`}
        >
          <ShoppingCart size={20} color="currentColor" />
          <span className="text-sm font-medium">{template.cartLabel}</span>
          <CountBadge count={totalItems} className="bg-sf-brand-ink text-sf-brand" />
        </UnstyledButton>
      </div>
    </>
  );
}
