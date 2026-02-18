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

const blogSiteUrl = resolveSiteUrl(process.env.BLOG_SITE_URL, "http://localhost:3002");

export const metadata: Metadata = {
  metadataBase: new URL(blogSiteUrl),
  title: {
    default: "Prism Blog",
    template: "%s | Prism Blog"
  },
  description: "Blog zone for prism.io/blog",
  alternates: {
    canonical: "/blog"
  },
  openGraph: {
    title: "Prism Blog",
    description: "Blog zone for prism.io/blog",
    url: "/blog",
    siteName: "Prism Blog",
    type: "website",
    images: ["/blog/api/og?title=Prism%20Blog&section=Blog"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Prism Blog",
    description: "Blog zone for prism.io/blog",
    images: ["/blog/api/og?title=Prism%20Blog&section=Blog"]
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <GlobalNav currentZone="blog" />
        {children}
      </body>
    </html>
  );
}
