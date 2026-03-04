import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  output: 'export',
  // 只在生产环境使用 basePath
  basePath: isDev ? '' : '/zhsm',
  assetPrefix: isDev ? '' : '/zhsm',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
