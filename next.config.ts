import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // 在 GitHub Pages 部署时使用仓库名作为基路径
  basePath: isGitHubPages ? '/zxgame' : '',
  assetPrefix: isGitHubPages ? '/zxgame/' : '',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
