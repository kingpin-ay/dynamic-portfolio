import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
    dangerouslyAllowSVG: true, // ⚠️ Be careful, allows all SVGs
    contentSecurityPolicy:
      "default-src 'self'; img-src *; media-src *; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
