import type { Metadata } from "next";
import { GlobalNav } from "@repo/ui";
import "./globals.css";

const webSiteUrl = process.env.WEB_SITE_URL ?? "http://localhost:3000";

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
