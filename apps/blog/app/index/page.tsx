import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Index",
  description: "Index page in the Prism blog zone.",
  alternates: {
    canonical: "/blog/index"
  },
  openGraph: {
    title: "Blog Index",
    description: "Index page in the Prism blog zone.",
    url: "/blog/index",
    images: ["/blog/api/og?title=Blog%20Index&section=Blog"]
  }
};

export default function BlogIndexPage() {
  return (
    <main>
      <h1>Blog Index</h1>
      <p>This is an explicit index child route at /blog/index.</p>
      <p>
        <Link href="/">Back to blog home</Link>
      </p>
    </main>
  );
}
