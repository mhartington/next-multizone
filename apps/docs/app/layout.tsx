import type { Metadata } from "next";
import { GlobalNav } from "@repo/ui";
import "./globals.css";

function resolveSiteUrl(explicitUrl: string | undefined, localFallback: string) {
  if (explicitUrl) return explicitUrl;

  const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProductionUrl) return `https://${vercelProductionUrl}`;

  const vercelPreviewUrl = process.env.VERCEL_URL;
  if (vercelPreviewUrl) return `https://${vercelPreviewUrl}`;

  return localFallback;
}

const docsSiteUrl = resolveSiteUrl(process.env.DOCS_SITE_URL, "http://localhost:3001");

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
