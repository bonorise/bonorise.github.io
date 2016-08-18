---
layout: post
title: 所有分类博文
---

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