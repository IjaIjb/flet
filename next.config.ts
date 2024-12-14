import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Add other config options here if needed */

  async rewrites() {
    return [
      {
        source: '/api/:path*', // Match API requests starting with /api
        destination: 'https://seashell-app-lq4vz.ondigitalocean.app/:path*', // Proxy to your backend
      },
    ];
  },
};

export default nextConfig;
