import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aboute",
  description: "About page in the Prism docs zone.",
  alternates: {
    canonical: "/docs/aboute"
  },
  openGraph: {
    title: "Aboute",
    description: "About page in the Prism docs zone.",
    url: "/docs/aboute",
    images: ["/docs/api/og?title=Aboute&section=Docs"]
  }
};

export default function AboutePage() {
  return (
    <main>
      <h1>Aboute</h1>
      <p>This route lives in the docs zone at /docs/aboute.</p>
      <p>
        <Link href="/">Back to docs home</Link>
      </p>
    </main>
  );
}
