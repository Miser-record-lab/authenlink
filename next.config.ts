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
  // Optimisation moderne pour réduire les polyfills
  swcMinify: true,
  // Améliorer la compression
  poweredByHeader: false,
  // Optimiser les performances
  reactStrictMode: true,
};

export default nextConfig;