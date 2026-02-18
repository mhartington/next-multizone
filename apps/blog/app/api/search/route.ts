import { NextRequest, NextResponse } from "next/server";

const blogPages = [
  {
    id: "blog-home",
    title: "Prism Blog",
    href: "/blog",
    keywords: ["home", "blog", "posts"]
  },
  {
    id: "blog-index",
    title: "Blog Index",
    href: "/blog/index",
    keywords: ["index"]
  },
  {
    id: "blog-hello-multizone",
    title: "Hello Multizone",
    href: "/blog/posts/hello-multizone",
    keywords: ["multizone", "zones", "routing"]
  },
  {
    id: "blog-advanced-routing",
    title: "Advanced Routing",
    href: "/blog/posts/advanced-routing",
    keywords: ["routing", "nextjs", "navigation"]
  }
] as const;

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q")?.trim() ?? "";
  const normalizedQuery = query.toLowerCase();
  const results =
    normalizedQuery.length === 0
      ? blogPages
      : blogPages.filter((page) => {
          const haystack = [page.title, page.href, ...page.keywords]
            .join(" ")
            .toLowerCase();
          return haystack.includes(normalizedQuery);
        });

  return NextResponse.json({
    zone: "blog",
    query,
    count: results.length,
    results
  });
}
