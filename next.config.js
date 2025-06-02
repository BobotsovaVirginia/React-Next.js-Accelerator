/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api",
    NEXT_PUBLIC_CLIENT_ID: process.env.NEXT_PUBLIC_CLIENT_ID || "",
    NEXT_PUBLIC_AUTHORITY: process.env.NEXT_PUBLIC_AUTHORITY || "",
    NEXT_PUBLIC_REDIRECT_URI: process.env.NEXT_PUBLIC_REDIRECT_URI || "",
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || "My App"
  },
  images: { domains: [] },
  webpack: (config) => {
    const path = require('path');
    config.resolve.alias['@components'] = path.resolve(__dirname, 'src/components');
    config.resolve.alias['@context']    = path.resolve(__dirname, 'src/context');
    config.resolve.alias['@hooks']      = path.resolve(__dirname, 'src/hooks');
    config.resolve.alias['@utils']      = path.resolve(__dirname, 'src/utils');
    config.resolve.alias['@constants']  = path.resolve(__dirname, 'src/constants');
    config.resolve.alias['@theme']      = path.resolve(__dirname, 'src/theme');
    config.resolve.alias['@services']   = path.resolve(__dirname, 'src/services');
    return config;
  }
};

module.exports = nextConfig;
