import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Main Prism site with links into docs and blog zones.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Prism",
    description: "Main Prism site with links into docs and blog zones.",
    url: "/",
    images: ["/api/og?title=Prism&section=Main%20Site"]
  }
};

export default function HomePage() {
  return (
    <main>
      <h1>prism.io</h1>
      <p>Main domain zone powered by Next.js and Turborepo.</p>
      <ul>
        <li>
          <Link href="/about">About child route</Link>
        </li>
        <li>
          <a href="/docs">Docs zone root</a>
        </li>
        <li>
          <a href="/docs/getting-started">Docs child route</a>
        </li>
        <li>
          <a href="/blog">Blog zone root</a>
        </li>
        <li>
          <a href="/blog/posts/hello-multizone">Blog child route</a>
        </li>
      </ul>
    </main>
  );
}
