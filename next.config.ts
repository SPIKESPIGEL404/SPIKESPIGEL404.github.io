import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/kelsenlu.github.io",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
