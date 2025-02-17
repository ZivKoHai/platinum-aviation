import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "saddlebrown-armadillo-267552.hostingersite.com",
      },
    ],
  },
};

export default nextConfig;
