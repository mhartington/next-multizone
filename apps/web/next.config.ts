import type { NextConfig } from "next";

const docsOrigin = process.env.DOCS_ORIGIN ?? "http://localhost:3001";
const blogOrigin = process.env.BLOG_ORIGIN ?? "http://localhost:3002";
const allowedDevOrigins = (
  process.env.ALLOWED_DEV_ORIGINS ?? "localhost,127.0.0.1,192.168.1.48"
)
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const nextConfig: NextConfig = {
  allowedDevOrigins,
  transpilePackages: ["@repo/ui"],

  async rewrites() {
    return [
      {
        source: "/docs/api/:path*",
        destination: `${docsOrigin}/docs/api/:path*`
      },
      {
        source: "/docs",
        destination: `${docsOrigin}/docs`
      },
      {
        source: "/docs/:path*",
        destination: `${docsOrigin}/docs/:path*`
      },
      {
        source: "/docs-static/:path*",
        destination: `${docsOrigin}/docs-static/:path*`
      },
      {
        source: "/blog/api/:path*",
        destination: `${blogOrigin}/blog/api/:path*`
      },
      {
        source: "/blog",
        destination: `${blogOrigin}/blog`
      },
      {
        source: "/blog/:path*",
        destination: `${blogOrigin}/blog/:path*`
      },
      {
        source: "/blog-static/:path*",
        destination: `${blogOrigin}/blog-static/:path*`
      }
    ];
  }
};

export default nextConfig;
