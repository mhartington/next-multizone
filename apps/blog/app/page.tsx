import Link from "next/link";
import type { Metadata } from "next";
import { BlogSearch } from "./components/blog-search";

export const metadata: Metadata = {
  title: "Blog",
  description: "Prism blog homepage with recent posts.",
  alternates: {
    canonical: "/blog"
  },
  openGraph: {
    title: "Prism Blog",
    description: "Prism blog homepage with recent posts.",
    url: "/blog",
    images: ["/blog/api/og?title=Prism%20Blog&section=Blog"]
  }
};

export default function BlogHomePage() {
  return (
    <main>
      <h1>Prism Blog</h1>
      <p>Zone mounted at prism.io/blog.</p>
      <ul>
        <li>
          <Link href="/posts/hello-multizone">Hello Multizone post</Link>
        </li>
        <li>
          <Link href="/posts/advanced-routing">Advanced routing post</Link>
        </li>
      </ul>
      <BlogSearch />
    </main>
  );
}
