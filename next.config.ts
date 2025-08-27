import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  // 禁用 Next.js 热重载，由 nodemon 处理重编译
  reactStrictMode: false,
  // 为 GitHub Pages 静态部署配置
  output: 'export',
  trailingSlash: true,
  // GitHub Pages 部署时的基础路径（如果仓库名不是用户名.github.io）
  // 如果你的仓库名是 zxgame，取消注释下面这行
  // basePath: '/zxgame',
  // assetPrefix: '/zxgame',
  images: {
    unoptimized: true,
  },
  // 静态导出配置
  experimental: {
    outputFileTracingRoot: process.cwd(),
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // 禁用 webpack 的热模块替换
      config.watchOptions = {
        ignored: ['**/*'], // 忽略所有文件变化
      };
    }
    return config;
  },
  eslint: {
    // 构建时忽略ESLint错误
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
