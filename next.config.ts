import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Ignore les erreurs ESLint pendant le build
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['assets.aceternity.com', 'pbs.twimg.com', "images.unsplash.com"],
  },
};

export default nextConfig;