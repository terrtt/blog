import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import { SITE } from './src/consts.ts';

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  integrations: [
    mdx(),
    sitemap(),
    tailwind({ applyBaseStyles: false }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
  build: {
    format: 'directory',
  },
});
