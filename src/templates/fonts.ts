import { Inter, Playfair_Display, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";

/**
 * The templates' fonts, self-hosted by Next. Each only exposes a CSS variable
 * (templates.css picks which a template uses); a browser downloads a font
 * file only when the page actually uses it.
 */
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap", variable: "--font-jakarta" });
const playfair = Playfair_Display({ subsets: ["latin"], display: "swap", variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const grotesk = Space_Grotesk({ subsets: ["latin"], display: "swap", variable: "--font-grotesk" });

/** Classes for `<html>` that define every template font variable. */
export const templateFontVariables = [jakarta, playfair, inter, grotesk].map((f) => f.variable).join(" ");
