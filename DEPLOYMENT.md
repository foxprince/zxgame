# GitHub Pages 部署指南

这个项目已经配置为可以自动部署到 GitHub Pages。

## 自动部署设置

### 1. 在 GitHub 仓库中启用 Pages

1. 进入你的 GitHub 仓库
2. 点击 **Settings** 标签
3. 在左侧菜单中找到 **Pages**
4. 在 **Source** 下拉菜单中选择 **GitHub Actions**
5. 保存设置

### 2. 配置仓库分支

确保你的代码在 `main` 分支上，因为 GitHub Actions 工作流配置为在推送到 `main` 分支时触发。

### 3. 推送代码触发部署

```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

推送后，GitHub Actions 将自动构建和部署你的站点。

## 访问你的站点

部署完成后，你的站点将在以下地址可用：
- 如果仓库名是 `username.github.io`：`https://username.github.io`
- 如果仓库名是其他名称（如 `zxgame`）：`https://username.github.io/zxgame`

## 路径配置说明

### 如果你的仓库名不是 `username.github.io`

如果你的仓库名是 `zxgame`，你需要取消注释 `next.config.ts` 中的以下行：

```typescript
basePath: '/zxgame',
assetPrefix: '/zxgame',
```

### 如果你的仓库名是 `username.github.io`

保持 `basePath` 和 `assetPrefix` 注释状态。

## 本地构建测试

在推送之前，你可以本地测试构建：

```bash
# 构建静态文件
npm run build:static

# 构建完成后，静态文件将在 'out' 目录中
```

## 工作流文件说明

`.github/workflows/deploy.yml` 文件包含了完整的部署配置：

- 🔄 **自动触发**：推送到 main 分支时自动部署
- 📦 **缓存优化**：缓存 Node.js 依赖和 Next.js 构建缓存
- 🚀 **自动部署**：构建完成后自动部署到 GitHub Pages
- 🛡️ **权限管理**：使用最小必要权限

## 常见问题

### 1. 404 错误
如果访问站点时出现 404 错误，检查：
- GitHub Pages 是否已启用
- `basePath` 和 `assetPrefix` 配置是否正确
- 构建是否成功完成

### 2. 资源加载失败
如果 CSS/JS 文件加载失败，确保：
- `assetPrefix` 配置正确
- `images.unoptimized: true` 已设置

### 3. 构建失败
检查 GitHub Actions 的构建日志：
1. 进入仓库的 **Actions** 标签
2. 点击失败的工作流
3. 查看详细错误信息

## 手动触发部署

你也可以在 GitHub 上手动触发部署：
1. 进入仓库的 **Actions** 标签
2. 点击 "Deploy to GitHub Pages" 工作流
3. 点击 "Run workflow" 按钮

## 技术细节

- **框架**：Next.js 15 with App Router
- **构建模式**：静态导出 (`output: 'export'`)
- **样式**：Tailwind CSS 4
- **组件库**：shadcn/ui
- **部署方式**：GitHub Actions + GitHub Pages