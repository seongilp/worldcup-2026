import type { NextConfig } from "next";
import path from "node:path";

const repo = "worldcup-2026";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Static HTML export for GitHub Pages (no server runtime).
  output: "export",
  // Project site is served under /<repo>/ on github.io.
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
