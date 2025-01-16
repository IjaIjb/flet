import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Add other config options here if needed */

  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*', // Match API requests starting with /api
  //       destination: 'https://seashell-app-lq4vz.ondigitalocean.app/:path*', // Proxy to your backend
  //     },
  //   ];
  // },
  images: {
    domains: ['res.cloudinary.com'], // Allow images from Cloudinary
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.devtool = false; // Disables source maps in development
    }
    return config;
  },
};

export default nextConfig;
