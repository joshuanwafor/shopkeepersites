import type { Metadata } from "next";
import {
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { Providers } from "./providers";
import theme from "./theme";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopkeeper POS Store",
  description: "Online store inventory for Shopkeeper POS businesses",
};

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
