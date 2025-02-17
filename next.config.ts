import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        hostname: "saddlebrown-armadillo-267552.hostingersite.com",
      },
    ],
  },
};

export default nextConfig;
