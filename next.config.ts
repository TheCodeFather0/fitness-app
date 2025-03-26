import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "encrypted-tbn1.gstatic.com",
      },
    ],
  },
};

export default nextConfig;
