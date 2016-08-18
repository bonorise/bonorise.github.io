---
layout: post
title: im刘波
---

## 我是刘波。

一个正在学习JavaScript，想开发网站的人。

每天学好一个概念，不要贪多，慢慢来……

{% for category in site.categories %}
<h2>{{ category | first }}</h2>
</span>{{ category | last | size }}</span>
<ul class="arc-list">
    {% for post in category.last %}
        <li>{{ post.date | date:"%d/%m/%Y"}}<a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>
{% endfor %}