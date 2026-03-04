import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  output: 'export',
  // 开发环境不使用basePath，生产环境使用/zhsm
  basePath: isDev ? '' : '/zhsm',
  assetPrefix: isDev ? '' : '/zhsm',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
