#!/usr/bin/env node

/**
 * 转换 Jekyll frontmatter 到 Astro 格式
 * 添加 pubDate 字段
 */

import fs from 'fs';
import path from 'path';

const blogDir = './src/content/blog';

const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.md'));

console.log(`找到 ${files.length} 篇文章，开始转换...\n`);

let converted = 0;
let errors = 0;

for (const file of files) {
  try {
    const filePath = path.join(blogDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');

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
        frontmatter[key] = value.replace(/^["']|["']$/g, '').trim();
      }
    }

    // 跳过包含 layout 的行（不需要）
    delete frontmatter.layout;

    // 构建新的 frontmatter
    const newFm = {
      title: frontmatter.title || '无标题',
      description: frontmatter.description || '',
      pubDate: pubDate || new Date().toISOString().split('T')[0],
    };

    // 保留 category 字段
    if (frontmatter.category) {
      newFm.category = frontmatter.category;
    }

    // 生成新的 Markdown 内容
    const newContent = `---
title: "${newFm.title.replace(/"/g, '\\"')}"
description: "${newFm.description.replace(/"/g, '\\"')}"
pubDate: ${newFm.pubDate}${newFm.category ? `
category: ${newFm.category}` : ''}
---
${body}`;

    // 写入文件
    fs.writeFileSync(filePath, newContent, 'utf-8');

    console.log(`✓ ${file}`);
    converted++;

  } catch (error) {
    console.log(`✗ ${file}: ${error.message}`);
    errors++;
  }
}

console.log(`\n转换完成！`);
console.log(`  成功：${converted} 篇`);
console.log(`  错误：${errors} 篇`);
