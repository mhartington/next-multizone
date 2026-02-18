import type { NextConfig } from "next";

const allowedDevOrigins = (
  process.env.ALLOWED_DEV_ORIGINS ?? "localhost,127.0.0.1,192.168.1.48"
)
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const nextConfig: NextConfig = {
  basePath: "/docs",
  assetPrefix: "/docs-static",
  allowedDevOrigins,
  transpilePackages: ["@repo/ui"],
  async redirects() {
    return [
      {
        source: "/",
        destination: "/docs",
        basePath: false,
        permanent: false
      }
    ];
  }
};

export default nextConfig;
