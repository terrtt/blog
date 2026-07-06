# devasnhb — Astro Blog

A minimal, SEO-optimized, typography-first tech blog built with **Astro**,
designed for deployment to **Cloudflare Pages** with a **Hostinger** domain.

## Stack

- **[Astro 4](https://astro.build)** — static site generator
- **Content Collections** — typed markdown posts with frontmatter validation
- **Tailwind CSS** — utility styling
- **MDX** — optional rich markdown
- **@astrojs/sitemap** — auto-generated sitemap
- **@astrojs/rss** — RSS feed at `/rss.xml`
- **Fraunces** (variable serif) + **JetBrains Mono**

## Structure

```
blog/
├── src/
│   ├── consts.ts             # Site config (title, url, author) — EDIT THIS
│   ├── content/
│   │   ├── config.ts         # Post frontmatter schema
│   │   └── posts/            # Your markdown posts live here
│   ├── layouts/              # BaseLayout, PostLayout
│   ├── components/           # Header, Footer, PostCard, SEO, FilterBar
│   ├── pages/
│   │   ├── index.astro       # Blog list (home)
│   │   ├── about.astro
│   │   ├── blog/[...slug].astro  # Individual posts
│   │   ├── tags/[tag].astro      # Tag archive pages
│   │   ├── rss.xml.js            # RSS feed
│   │   └── robots.txt.ts         # robots.txt
│   └── styles/global.css
├── public/                   # Static assets (favicon, images)
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Local development

```bash
cd blog
npm install         # or: yarn
npm run dev         # dev server at http://localhost:4321
npm run build       # production build to ./dist
npm run preview     # preview the production build
```

## Writing a new post

Create a new markdown file at `src/content/posts/my-post-slug.md`:

```markdown
---
title: "Your post title"
description: "One-line SEO/social description (~150 chars)."
pubDate: 2026-03-01
type: ESSAY          # ESSAY | STATEMENT | NOTE | GUIDE | LOG
tags: ["Astro", "SEO"]
author: "devasnhb"
draft: false         # true to hide from the site
---

Your markdown content here.

## Section

Text, **bold**, `code`, [links](https://example.com), etc.

```js
// code blocks are syntax-highlighted
console.log('hello');
```
```

The URL will be `/blog/my-post-slug/`. Sitemap, RSS, and tag pages update automatically on next build.

## Configure your site

**Edit `src/consts.ts`** to set your site name, domain, author info, and social handles:

```ts
export const SITE = {
  name: 'devasnhb',
  title: 'devasnhb — Operational Logs',
  description: '...',
  url: 'https://devasnhb.com',       // ← your live domain
  author: {
    name: 'devasnhb',
    email: 'hello@devasnhb.com',
    twitter: '@devasnhb',
  },
  ...
};
```

 
Your content is yours. Do what you want with the code.
