/**
 * A store's own images, as the templates show them. Core fills `logo` and
 * `coverPhoto` with placeholder images until the business uploads its own;
 * those placeholders count as "none". The theme's copies (uploaded on the
 * desktop Theme tab) are the fallback.
 */

type BrandingFields = {
  logo?: string;
  coverPhoto?: string;
  favicon?: string;
  theme?: { logoUrl?: string; coverImageUrl?: string; faviconUrl?: string } | null;
};

const PLACEHOLDERS = ["/defaults/store-logo.png", "/defaults/store-cover.png"];

function ownImage(url: string | undefined): string | undefined {
  const value = url?.trim();
  if (!value || PLACEHOLDERS.some((p) => value.includes(p))) return undefined;
  return value;
}

export function storeLogo(profile: BrandingFields | null | undefined): string | undefined {
  return ownImage(profile?.logo) ?? ownImage(profile?.theme?.logoUrl);
}

export function storeCover(profile: BrandingFields | null | undefined): string | undefined {
  return ownImage(profile?.coverPhoto) ?? ownImage(profile?.theme?.coverImageUrl);
}

/** The tab icon: the uploaded favicon, else the store's favicon emoji drawn as an SVG. */
export function storeFavicon(profile: BrandingFields | null | undefined): string | undefined {
  const uploaded = ownImage(profile?.theme?.faviconUrl);
  if (uploaded) return uploaded;
  const emoji = profile?.favicon?.trim();
  if (!emoji || emoji.length > 16 || /[<>&"]/.test(emoji)) return undefined;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">${emoji}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
