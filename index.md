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
            <li><a href="/front.html">前哨·王煜全</a></li>
            <li><a href="/elite-lessons.html">精英日课·万维钢</a></li>
            <li><a href="/wealth-freedom.html">通往财富自由之路·李笑来</a></li> <li><a href="/daydayup.html">吴伯凡日知录</a></li>
            <li><a href="/js.html">零基础看段子学JS</a></li>
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
