import Link from "next/link";
import type { Metadata } from "next";
import { DocsSearch } from "./components/docs-search";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Prism documentation homepage.",
  alternates: {
    canonical: "/docs"
  },
  openGraph: {
    title: "Prism Docs",
    description: "Prism documentation homepage.",
    url: "/docs",
    images: ["/docs/api/og?title=Prism%20Docs&section=Documentation"]
  }
};

export default function DocsHomePage() {
  return (
    <main>
      <h1>Prism Docs</h1>
      <p>Zone mounted at prism.io/docs.</p>
      <ul>
        <li>
          <Link href="/getting-started">Getting started (child route)</Link>
        </li>
        <li>
          <Link href="/guides/installation">Installation guide (child route)</Link>
        </li>
        <li>
          <Link href="/aboute">Aboute (child route)</Link>
        </li>
      </ul>
      <DocsSearch />
    </main>
  );
}
