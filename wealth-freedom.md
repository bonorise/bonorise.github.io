---
layout: category-menu
title: 《通往财富自由之路·李笑来》笔记
---

<div class="index-content">
      <ul class="artical-list">
        {% for post in site.categories.wealth-freedom %}
        <li>
          <a href="{{ post.url }}" class="title">{{ post.title }}</a>
          <div class="title-desc">{{ post.description }}</div>
        </li>
        {% endfor %}
      </ul>
</div>