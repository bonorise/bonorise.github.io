---
layout: category-menu
title: 《通往财富自由之路·李笑来》笔记
---
<head>
  <meta name="google-adsense-account" content="ca-pub-1467729400140451">
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1467729400140451"
      crossorigin="anonymous"></script>
</head>
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