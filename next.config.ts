// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: [
      'randomuser.me',
      'plus.unsplash.com',
      'images.unsplash.com',
      'api.backendless.com',
      'unsplash.com'
    ],
  },
};

export default nextConfig;
