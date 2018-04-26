---
layout: category-menu
title: 吴军-谷歌方法论
---

<div class="index-content">
      <ul class="artical-list">
        {% for post in site.categories.methodology %}
        <li>
          <a href="{{ post.url }}" class="title">{{ post.title }}</a>
          <div class="title-desc">{{ post.description }}</div>
        </li>
        {% endfor %}
      </ul>
</div>