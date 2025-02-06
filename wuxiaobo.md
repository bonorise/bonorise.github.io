---
layout: category-menu
title: 《吴晓波频道》笔记
---
<head>
  <meta name="google-adsense-account" content="ca-pub-1467729400140451">
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1467729400140451"
      crossorigin="anonymous"></script>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-90KFYRQSGN"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    
    gtag('config', 'G-90KFYRQSGN');
  </script>

</head>
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