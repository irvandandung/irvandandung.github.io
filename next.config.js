/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  // Cache busting configuration
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || '',
  webpack: (config, options) => {
    // Add hash to all assets for cache busting
    config.output.hashFunction = 'xxhash64';
    return config;
  },
  // Generate unique build ID for cache busting
  generateBuildId: async () => {
    return new Date().getTime().toString();
  },
}

module.exports = nextConfig
