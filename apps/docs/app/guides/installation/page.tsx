import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Installation Guide",
  description: "Install and configure Prism using the docs guide.",
  alternates: {
    canonical: "/docs/guides/installation"
  },
  openGraph: {
    title: "Installation Guide",
    description: "Install and configure Prism using the docs guide.",
    url: "/docs/guides/installation",
    images: ["/docs/api/og?title=Installation%20Guide&section=Guides"]
  }
};

export default function InstallationGuidePage() {
  return (
    <main>
      <h1>Installation Guide</h1>
      <p>Nested child route example for /docs/guides/installation.</p>
      <p>
        <Link href="/">Back to docs home</Link>
      </p>
    </main>
  );
}
