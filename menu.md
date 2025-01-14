---
layout: category-menu
title: 所有分类博文
---
<head>
  <meta name="google-adsense-account" content="ca-pub-1467729400140451">
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1467729400140451"
      crossorigin="anonymous"></script>
</head>
     
{% for category in site.categories %}
<h2>{{ category | first }}</h2>
<!-- <span>（{{ category | last | size }}）</span>
 -->
<ul class="arc-list">
    {% for post in category.last %}
        <li><a href="{{ post.url }}">{{ post.title }}</a> <span>{{ post.date | date:"%d/%m/%Y"}}</span></li>
    {% endfor %}
</ul>
{% endfor %}