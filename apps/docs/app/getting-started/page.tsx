import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Getting Started",
  description: "Get started with Prism docs and zone setup.",
  alternates: {
    canonical: "/docs/getting-started"
  },
  openGraph: {
    title: "Getting Started",
    description: "Get started with Prism docs and zone setup.",
    url: "/docs/getting-started",
    images: ["/docs/api/og?title=Getting%20Started&section=Docs"]
  }
};

export default function GettingStartedPage() {
  return (
    <main>
      <h1>Getting Started</h1>
      <p>This child route is served by the docs zone.</p>
      <p>
        <Link href="/">Back to docs home</Link>
      </p>
    </main>
  );
}
