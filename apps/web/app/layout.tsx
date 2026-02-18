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

const webSiteUrl = resolveSiteUrl(process.env.WEB_SITE_URL, "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(webSiteUrl),
  title: {
    default: "Prism",
    template: "%s | Prism"
  },
  description: "Main app zone for prism.io",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Prism",
    description: "Main app zone for prism.io",
    url: "/",
    siteName: "Prism",
    type: "website",
    images: ["/api/og?title=Prism&section=Main%20Site"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Prism",
    description: "Main app zone for prism.io",
    images: ["/api/og?title=Prism&section=Main%20Site"]
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <GlobalNav currentZone="web" />
        {children}
      </body>
    </html>
  );
}
