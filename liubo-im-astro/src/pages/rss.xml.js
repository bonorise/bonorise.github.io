import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');

  return rss({
    title: 'liubo.im - 刘波的学习笔记',
    description: '养成每天写作的好习惯，把自己学习的思考的内容写下来',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.id}/`,
      categories: post.data.category ? [post.data.category] : [],
    })),
    customData: '<language>zh-cn</language>',
  });
}
