import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../consts.ts';

export async function GET(context) {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: posts
      .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/blog/${post.slug}/`,
        categories: post.data.tags,
      })),
    customData: `<language>${SITE.locale}</language>`,
  });
}
