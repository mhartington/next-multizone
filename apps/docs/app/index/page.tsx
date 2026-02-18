import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Index",
  description: "Index page in the Prism docs zone.",
  alternates: {
    canonical: "/docs/index"
  },
  openGraph: {
    title: "Docs Index",
    description: "Index page in the Prism docs zone.",
    url: "/docs/index",
    images: ["/docs/api/og?title=Docs%20Index&section=Documentation"]
  }
};

export default function DocsIndexPage() {
  return (
    <main>
      <h1>Docs Index</h1>
      <p>This is an explicit index child route at /docs/index.</p>
      <p>
        <Link href="/">Back to docs home</Link>
      </p>
    </main>
  );
}
