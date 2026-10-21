/**
 * Store-written HTML (terms, policies) made safe to show: only formatting tags
 * survive, with no attributes except a link's http(s)/mailto/tel address.
 * Everything else is dropped — scripts, styles, frames, forms, event handlers
 * (`onclick=`), `javascript:` links — while the text inside harmless unknown
 * tags is kept. Browser only: it parses with DOMParser, which builds an inert
 * document (nothing in it runs or loads).
 */

const ALLOWED_TAGS = new Set([
  "a", "b", "blockquote", "br", "code", "div", "em", "h1", "h2", "h3", "h4", "h5", "h6",
  "hr", "i", "li", "ol", "p", "pre", "s", "small", "span", "strong", "sub", "sup",
  "table", "tbody", "td", "tfoot", "th", "thead", "tr", "u", "ul",
]);

/** Removed with everything inside them. */
const DROPPED_TAGS = new Set([
  "script", "style", "iframe", "frame", "frameset", "object", "embed", "applet", "form",
  "input", "button", "select", "textarea", "option", "link", "meta", "base", "svg", "math",
  "template", "noscript", "audio", "video", "source", "track", "canvas", "img", "picture",
  "title", "head",
]);

const SAFE_HREF = /^(https?:|mailto:|tel:)/i;

function clean(node: Node, doc: Document): Node[] {
  if (node.nodeType === Node.TEXT_NODE) return [doc.createTextNode(node.textContent ?? "")];
  if (node.nodeType !== Node.ELEMENT_NODE) return [];
  const element = node as Element;
  const tag = element.tagName.toLowerCase();
  if (DROPPED_TAGS.has(tag)) return [];
  const children = Array.from(element.childNodes).flatMap((child) => clean(child, doc));
  if (!ALLOWED_TAGS.has(tag)) return children;

  const out = doc.createElement(tag);
  if (tag === "a") {
    const href = element.getAttribute("href")?.trim() ?? "";
    if (SAFE_HREF.test(href)) {
      out.setAttribute("href", href);
      out.setAttribute("target", "_blank");
      out.setAttribute("rel", "noopener noreferrer nofollow");
    }
  }
  if (tag === "td" || tag === "th") {
    for (const name of ["colspan", "rowspan"]) {
      const value = element.getAttribute(name);
      if (value && /^\d{1,3}$/.test(value)) out.setAttribute(name, value);
    }
  }
  children.forEach((child) => out.appendChild(child));
  return [out];
}

/** Safe HTML for `dangerouslySetInnerHTML`; "" where DOMParser isn't available (the server). */
export function sanitizeHtml(html: string): string {
  if (typeof DOMParser === "undefined") return "";
  const doc = new DOMParser().parseFromString(html, "text/html");
  const container = doc.createElement("div");
  Array.from(doc.body.childNodes)
    .flatMap((child) => clean(child, doc))
    .forEach((child) => container.appendChild(child));
  return container.innerHTML;
}
