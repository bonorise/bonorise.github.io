---
layout: default
title: 刘波的每日学习
---

<body>
  <div class="index-wrapper">
    <div class="aside">
      <div class="info-card">
        <h1>liubo.im 刘波</h1>
        <ul>
            <li>前哨·王煜全</li>
            <li>精英日课·万维钢</li>
            <li>通往财富自由之路·李笑来</li>
            <li>零基础想段子学JS</li>
        </ul>
      </div>
      <div id="particles-js"></div>
    </div>

    <div class="index-content">
      <ul class="artical-list">
        {% for post in site.posts %}
        <li>
          <a href="{{ post.url }}" class="title">{{ post.title }}</a>
          <div class="title-desc">{{ post.description }}</div>
        </li>
        {% endfor %}
      </ul>
    </div>
  </div>
</body>
