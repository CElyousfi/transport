import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d1lnencgr7glws.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
