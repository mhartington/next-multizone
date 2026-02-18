import Link from "next/link";
import type { Metadata } from "next";

const posts = [
  "hello-multizone",
  "advanced-routing"
] as const;

export function generateStaticParams() {
  return posts.map((slug) => ({ slug }));
}

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.replace(/-/g, " ");

  return {
    title,
    description: `Read the ${title} post on the Prism blog.`,
    alternates: {
      canonical: `/blog/posts/${slug}`
    },
    openGraph: {
      title,
      description: `Read the ${title} post on the Prism blog.`,
      url: `/blog/posts/${slug}`,
      images: [
        `/blog/api/og?title=${encodeURIComponent(title)}&section=Blog%20Post`
      ]
    }
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;

  return (
    <main>
      <h1>{slug.replace(/-/g, " ")}</h1>
      <p>This is a dynamic child route in the blog zone.</p>
      <p>
        <Link href="/">Back to blog home</Link>
      </p>
    </main>
  );
}
