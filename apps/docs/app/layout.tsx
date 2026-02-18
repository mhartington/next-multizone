import type { Metadata } from "next";
import { GlobalNav } from "@repo/ui";
import "./globals.css";

const docsSiteUrl = process.env.DOCS_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: {
    default: "Prism Docs",
    template: "%s | Prism Docs"
  },
  description: "Documentation zone for prism.io/docs",
  metadataBase: new URL(docsSiteUrl),
  alternates: {
    canonical: "/docs"
  },
  openGraph: {
    title: "Prism Docs",
    description: "Documentation zone for prism.io/docs",
    url: "/docs",
    siteName: "Prism Docs",
    type: "website",
    images: ["/docs/api/og?title=Prism%20Docs&section=Documentation"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Prism Docs",
    description: "Documentation zone for prism.io/docs",
    images: ["/docs/api/og?title=Prism%20Docs&section=Documentation"]
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <GlobalNav currentZone="docs" />
        {children}
      </body>
    </html>
  );
}
