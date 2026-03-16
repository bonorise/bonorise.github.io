# liubo.im - Astro 博客

这是 liubo.im 博客的 Astro 版本，已迁移自 Jekyll。

## 快速开始

### 安装依赖

```bash
cd liubo-im-astro
npm install
```

### 本地开发

```bash
npm run dev
```

访问 http://localhost:4321 预览站点。

### 构建

```bash
npm run build
```

构建输出在 `dist/` 目录。

### 预览构建结果

```bash
npm run preview
```

## 项目结构

```
liubo-im-astro/
├── src/
│   ├── layouts/       # 布局组件
│   ├── pages/         # 页面路由
│   ├── content/
│   │   └── blog/      # 博客文章
│   └── content.config.ts
├── public/            # 静态资源
├── scripts/           # 工具脚本
└── astro.config.mjs   # Astro 配置
```

## 添加新文章

1. 在 `src/content/blog/` 目录创建 Markdown 文件
2. 文件名格式：`YYYY-MM-DD-slug.md`
3. Frontmatter 格式：

```yaml
---
title: "文章标题"
description: "文章描述"
pubDate: 2024-01-01
category: elite-lessons
---
```

### 可用分类

- `front` - 《前哨·王煜全》笔记
- `methodology` - 《谷歌方法论·吴军》笔记
- `elite-lessons` - 《精英日课·万维钢》笔记
- `wealth-freedom` - 《通往财富自由之路·李笑来》笔记
- `daydayup` - 《日知录·吴伯凡》笔记
- `js` - 零基础看段子学 JS
- `blog` - 博客随笔

## 从 Jekyll 迁移

如果有新的 Jekyll 文章需要迁移：

```bash
# 复制文章
cp ../_posts/*.md src/content/blog/

# 转换 frontmatter
node scripts/convert-frontmatter.js
```

## 部署

站点使用 GitHub Pages 自动部署：

1. 推送到 `main` 分支
2. GitHub Actions 自动构建并部署
3. 部署到 GitHub Pages

## 特性

- ✅ SEO 优化 (Open Graph, Twitter Card, Canonical URL)
- ✅ 自动生成 Sitemap
- ✅ RSS Feed
- ✅ 响应式设计
- ✅ 语义化 HTML
- ✅ 极简 CSS (无 JavaScript 运行时)

## 技术栈

- **Astro 6** - 静态站点生成器
- **astro-seo** - SEO 元标签管理
- **@astrojs/rss** - RSS Feed 生成
- **@astrojs/sitemap** - Sitemap 生成
