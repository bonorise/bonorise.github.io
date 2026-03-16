# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

liubo.im 是一个静态博客网站，已迁移至 **Astro 6** 框架。博客内容为作者的读书笔记和思考，涵盖科技、经济、心理学等主题。

## 架构结构

```
liubo-im/
├── _posts/                    # 原始 Jekyll 文章 (Markdown 源文件)
├── liubo-im-astro/            # Astro 项目目录
│   ├── src/
│   │   ├── layouts/           # Astro 布局组件
│   │   │   ├── BaseLayout.astro   # 基础布局 (含 SEO)
│   │   │   └── PostLayout.astro   # 文章页面布局
│   │   ├── pages/             # 页面路由
│   │   │   ├── index.astro        # 首页
│   │   │   ├── posts/[id].astro   # 文章详情页
│   │   │   ├── categories/[category].astro  # 分类页
│   │   │   ├── rss.xml.js     # RSS Feed
│   │   │   └── 404.astro      # 404 页面
│   │   ├── content/
│   │   │   └── blog/          # 博客文章 (迁移后的 Markdown)
│   │   └── content.config.ts  # Content Collections 配置
│   ├── public/                # 静态资源 (robots.txt 等)
│   ├── scripts/               # 迁移脚本
│   ├── astro.config.mjs       # Astro 配置
│   └── package.json
└── _site/                     # Jekyll 生成的旧站点 (可删除)
```

## 开发命令

```bash
cd liubo-im-astro

# 安装依赖
npm install

# 本地预览
npm run dev

# 构建站点
npm run build

# 预览构建结果
npm run preview
```

## 新增文章

1. 将 Markdown 文件放入 `src/content/blog/` 目录
2. 或使用脚本从 `_posts/` 迁移：
   ```bash
   node scripts/migrate-posts.js
   node scripts/convert-frontmatter.js
   ```

### 文章 Frontmatter 格式

```yaml
---
title: "文章标题"
description: "文章描述"
pubDate: 2024-01-01
category: elite-lessons  # 可选：front, methodology, elite-lessons, wealth-freedom, daydayup, js, blog
---
```

## 关键配置

- **站点 URL**: `https://liubo.im` (配置于 `astro.config.mjs`)
- **Content Collections**: 使用 `glob` loader 加载 Markdown
- **自动生成**: Sitemap.xml, RSS Feed

## SEO 特性

- **astro-seo** 组件自动注入:
  - Open Graph 标签 (Facebook/LinkedIn 分享)
  - Twitter Card 标签
  - Canonical URL
  - JSON-LD 结构化数据

## 部署

项目使用 **GitHub Pages** 自动部署：
- 推送到 `main` 分支触发
- GitHub Actions 构建并部署
- 工作流文件：`.github/workflows/deploy.yml`

## 分类系统

| category | 分类名称 |
|----------|----------|
| front | 《前哨·王煜全》笔记 |
| methodology | 《谷歌方法论·吴军》笔记 |
| elite-lessons | 《精英日课·万维钢》笔记 |
| wealth-freedom | 《通往财富自由之路·李笑来》笔记 |
| daydayup | 《日知录·吴伯凡》笔记 |
| js | 零基础看段子学 JS |
| blog | 博客随笔 |
