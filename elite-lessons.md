---
layout: category-menu
title: 《精英日课·万维钢》笔记
---

<div class="index-content">
      <ul class="artical-list">
        {% for post in site.categories.elite-lessons %}
        <li>
          <a href="{{ post.url }}" class="title">{{ post.title }}</a>
          <div class="title-desc">{{ post.description }}</div>
        </li>
        {% endfor %}
      </ul>
</div>