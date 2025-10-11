import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Ignore les erreurs ESLint pendant le build
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['assets.aceternity.com', 'pbs.twimg.com', "images.unsplash.com"],
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizePackageImports: ['@tabler/icons-react', 'lucide-react', 'react-icons'],
  },
};

export default nextConfig;