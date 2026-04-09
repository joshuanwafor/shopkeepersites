import type { Metadata } from "next";
import { headers } from "next/headers";
import {
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { Providers } from "./providers";
import theme from "./theme";
import "./globals.css";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.NEXT_PUBLIC_STOREFRONT_URL ??
  "https://shop.bigmerchant.ng";

const DEFAULT_SITE_NAME = "Shopkeeper POS Store";
const DEFAULT_SITE_DESCRIPTION =
  "Browse products and order online from your Shopkeeper POS storefront.";
const DEFAULT_META_IMAGE = "https://placehold.co/1200x630/png?text=Shopkeeper+Store";
const CORE_HOST = process.env.NEXT_PUBLIC_CORE_HOST ?? "";
const FALLBACK_DOMAIN = process.env.NEXT_PUBLIC_STOREFRONT_DOMAIN ?? "demo";
const SITES_BASE_DOMAIN =
  process.env.NEXT_PUBLIC_SITES_BASE_DOMAIN ?? "bigmerchant.ng";

function resolveStorefrontDomain(hostHeader: string | null): string {
  if (!hostHeader) return FALLBACK_DOMAIN;
  const hostname = hostHeader.split(":")[0].toLowerCase();
  if (!hostname.endsWith(`.${SITES_BASE_DOMAIN}`)) return FALLBACK_DOMAIN;
  const subdomain = hostname.slice(0, -(SITES_BASE_DOMAIN.length + 1));
  return subdomain || FALLBACK_DOMAIN;
}

type StoreProfile = {
  name?: string;
  description?: string;
  caption?: string;
  coverPhoto?: string;
  logo?: string;
  storeUrl?: string;
  theme?: { coverImageUrl?: string };
};

async function getStoreProfile(domain: string): Promise<StoreProfile> {
  if (!CORE_HOST) return {};
  try {
    const response = await fetch(
      `${CORE_HOST}/v1/usedisha/usedisha/${encodeURIComponent(domain)}`,
      { next: { revalidate: 300 } }
    );
    if (!response.ok) return {};
    const payload = await response.json();
    if (payload && typeof payload === "object") {
      if (payload.data && typeof payload.data === "object") {
        return payload.data;
      }
      return payload;
    }
  } catch {
    // Keep metadata resilient if upstream API is unavailable.
  }
  return {};
}

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const host = headerList.get("x-forwarded-host") ?? headerList.get("host");
  const proto = headerList.get("x-forwarded-proto") ?? "https";
  const domain = resolveStorefrontDomain(host);
  const profile = await getStoreProfile(domain);

  const storeName = profile.name?.trim() || DEFAULT_SITE_NAME;
  const normalizeText = (value?: string): string | undefined => {
    if (!value) return undefined;
    const cleaned = value.replace(/\s+/g, " ").trim();
    return cleaned.length > 0 ? cleaned : undefined;
  };
  const description =
    normalizeText(profile.description) ??
    normalizeText(profile.caption) ??
    (profile.name?.trim()
      ? `Browse products and order online from ${profile.name}.`
      : DEFAULT_SITE_DESCRIPTION);

  const requestOrigin = (() => {
    if (host) {
      try {
        return new URL(`${proto}://${host}`).toString();
      } catch {
        // Fall through to store/SITE_URL.
      }
    }
    return undefined;
  })();
  const preferredBaseUrl = (() => {
    if (requestOrigin) return requestOrigin;
    if (profile.storeUrl) return profile.storeUrl;
    return SITE_URL;
  })();

  // Mirror the same cover-photo logic used by `StorefrontInfo` so previews match UI.
  const normalizeUrl = (value?: string): string | undefined => {
    if (!value) return undefined;
    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : undefined;
  };
  const isKnownInvalidDefaultCover = (value?: string): boolean =>
    !!value && value.includes("/defaults/store-cover.png");
  const coverCandidate = !isKnownInvalidDefaultCover(profile.coverPhoto)
    ? normalizeUrl(profile.coverPhoto)
    : undefined;
  const imageCandidate =
    normalizeUrl(profile.logo) ??
    coverCandidate ??
    normalizeUrl(profile.theme?.coverImageUrl) ??
    DEFAULT_META_IMAGE;
  const coverUrl = imageCandidate;

  const absoluteCoverUrl = (() => {
    if (!coverUrl) return undefined;
    if (coverUrl.startsWith("//")) {
      return `https:${coverUrl}`;
    }
    if (coverUrl.startsWith("http://") || coverUrl.startsWith("https://")) {
      return coverUrl;
    }
    try {
      return new URL(coverUrl, preferredBaseUrl).toString();
    } catch {
      return undefined;
    }
  })();
  const metaImageUrl = absoluteCoverUrl ?? DEFAULT_META_IMAGE;
  const absolutePageUrl = (() => {
    try {
      return new URL("/", preferredBaseUrl).toString();
    } catch {
      return SITE_URL;
    }
  })();

  return {
    metadataBase: new URL(preferredBaseUrl),
    title: {
      default: storeName,
      template: `%s | ${storeName}`,
    },
    description,
    applicationName: storeName,
    referrer: "origin-when-cross-origin",
    keywords: [
      "Shopkeeper POS",
      "online storefront",
      "product catalog",
      "ecommerce",
      "order online",
      storeName,
      domain,
    ],
    alternates: {
      canonical: absolutePageUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      url: absolutePageUrl,
      title: storeName,
      description,
      siteName: storeName,
      locale: "en_US",
      images: [
        {
          url: metaImageUrl,
          width: 1200,
          height: 630,
          alt: storeName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: storeName,
      description,
      images: [metaImageUrl],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className="antialiased bg-stone-50 text-stone-800">
        <MantineProvider theme={theme}>
          <Notifications />
          <Providers>{children}</Providers>
        </MantineProvider>
      </body>
    </html>
  );
}
