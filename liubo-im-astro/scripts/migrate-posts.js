#!/usr/bin/env node

/**
 * 迁移 Jekyll 博客文章到 Astro Content Collections
 *
 * 功能：
 * 1. 读取 _posts 目录下的所有 Markdown 文件
 * 2. 解析 frontmatter，转换格式
 * 3. 复制到 src/content/blog 目录
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 源目录和目标目录
const sourceDir = path.resolve(__dirname, '..', '..', '_posts');
const targetDir = path.resolve(__dirname, '..', 'src', 'content', 'blog');

// 确保目标目录存在
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 读取所有 Markdown 文件
const files = fs.readdirSync(sourceDir).filter(file => file.endsWith('.md'));

console.log(`找到 ${files.length} 篇文章，开始迁移...\n`);

let migrated = 0;
let errors = 0;

for (const file of files) {
  try {
    const sourcePath = path.join(sourceDir, file);
    const content = fs.readFileSync(sourcePath, 'utf-8');

    // 从文件名提取日期
    const dateMatch = file.match(/^(\d{4}-\d{2}-\d{2})-/);
    const pubDate = dateMatch ? dateMatch[1] : null;

    // 解析 frontmatter
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
    const match = content.match(frontmatterRegex);

    if (!match) {
      console.log(`⚠️  跳过 (格式异常): ${file}`);
      errors++;
      continue;
    }

    const [, frontmatterStr, body] = match;

    // 解析 frontmatter 键值对
    const frontmatter = {};
    const lines = frontmatterStr.split('\n');
    for (const line of lines) {
      const kvMatch = /^(\w+):\s*(.*)$/.exec(line);
      if (kvMatch) {
        const [, key, value] = kvMatch;
        // 移除引号
        frontmatter[key] = value.replace(/^["']|["']$/g, '').trim();
      }
    }

    // 构建新的 frontmatter
    const newFrontmatter = {
      title: frontmatter.title || '无标题',
      description: frontmatter.description || '',
      pubDate: pubDate || new Date().toISOString().split('T')[0],
    };

    // 保留 category 字段
    if (frontmatter.category) {
      newFrontmatter.category = frontmatter.category;
    }

    // 生成新的 Markdown 内容
    const newContent = `---
title: "${newFrontmatter.title.replace(/"/g, '\\"')}"
description: "${newFrontmatter.description.replace(/"/g, '\\"')}"
pubDate: ${newFrontmatter.pubDate}${newFrontmatter.category ? `
category: ${newFrontmatter.category}` : ''}
---
${body}`;

    // 写入目标文件
    const targetPath = path.join(targetDir, file);
    fs.writeFileSync(targetPath, newContent, 'utf-8');

    console.log(`✓ ${file}`);
    migrated++;

  } catch (error) {
    console.log(`✗ ${file}: ${error.message}`);
    errors++;
  }
}

console.log(`\n迁移完成！`);
console.log(`  成功：${migrated} 篇`);
console.log(`  错误：${errors} 篇`);
