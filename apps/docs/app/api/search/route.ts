import { NextRequest, NextResponse } from "next/server";

const docsPages = [
  {
    id: "docs-home",
    title: "Prism Docs",
    href: "/docs",
    keywords: ["home", "documentation", "overview"]
  },
  {
    id: "docs-getting-started",
    title: "Getting Started",
    href: "/docs/getting-started",
    keywords: ["setup", "start", "begin"]
  },
  {
    id: "docs-installation",
    title: "Installation Guide",
    href: "/docs/guides/installation",
    keywords: ["install", "guide", "setup"]
  },
  {
    id: "docs-aboute",
    title: "Aboute",
    href: "/docs/aboute",
    keywords: ["about"]
  },
  {
    id: "docs-index",
    title: "Docs Index",
    href: "/docs/index",
    keywords: ["index"]
  }
] as const;

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q")?.trim() ?? "";
  const normalizedQuery = query.toLowerCase();
  const results =
    normalizedQuery.length === 0
      ? docsPages
      : docsPages.filter((page) => {
          const haystack = [page.title, page.href, ...page.keywords]
            .join(" ")
            .toLowerCase();
          return haystack.includes(normalizedQuery);
        });

  return NextResponse.json({
    zone: "docs",
    query,
    count: results.length,
    results
  });
}
