import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // 在 GitHub Pages（生产环境）下使用仓库名作为基路径
  basePath: isProd ? '/zxgame' : undefined,
  assetPrefix: isProd ? '/zxgame/' : undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
