import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["lucide-react"],
  images: {
    remotePatterns: [
      { hostname: "api.dicebear.com", protocol: "https" },
    ]
  }
};

export default nextConfig;
