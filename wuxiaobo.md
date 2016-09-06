---
layout: category-menu
title: 《吴晓波频道》笔记
---

<div class="index-content">
      <ul class="artical-list">
        {% for post in site.categories.wuxiaobo %}
        <li>
          <a href="{{ post.url }}" class="title">{{ post.title }}</a>
          <div class="title-desc">{{ post.description }}</div>
        </li>
        {% endfor %}
      </ul>
</div>