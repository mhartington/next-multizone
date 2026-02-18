import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Prism and the main site zone.",
  alternates: {
    canonical: "/about"
  },
  openGraph: {
    title: "About Prism",
    description: "Learn about Prism and the main site zone.",
    url: "/about",
    images: ["/api/og?title=About%20Prism&section=Main%20Site"]
  }
};

export default function AboutPage() {
  return (
    <main>
      <h1>About Prism</h1>
      <p>This is a child route that belongs to the main app zone.</p>
      <p>
        <Link href="/">Back home</Link>
      </p>
    </main>
  );
}
