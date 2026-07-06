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

## Deploy to Cloudflare Pages

### 1. Push to GitHub

```bash
cd blog
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin git@github.com:YOUR-USERNAME/devasnhb-blog.git
git push -u origin main
```

### 2. Connect Cloudflare Pages

1. Go to <https://dash.cloudflare.com> → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Authorize GitHub, select your repo
3. Configure the build:

   | Setting                    | Value              |
   |----------------------------|--------------------|
   | Framework preset           | **Astro**          |
   | Build command              | `npm run build`    |
   | Build output directory     | `dist`             |
   | Root directory             | `/` (leave blank)  |

4. Under **Environment variables**, add:
   - `NODE_VERSION` = `20`

5. Click **Save and Deploy**. First build takes ~1–2 minutes. You'll get a URL like `your-project.pages.dev`.

### 3. Connect your Hostinger domain (devasnhb.com)

**Option A — Recommended: Change nameservers to Cloudflare**

1. In Cloudflare Dashboard → **Add a site** → enter `devasnhb.com` → Free plan
2. Cloudflare gives you two nameservers (e.g. `alice.ns.cloudflare.com`)
3. In **Hostinger hPanel** → **Domains** → `devasnhb.com` → **DNS/Nameservers** → **Change nameservers** → paste the Cloudflare ones
4. Wait 5 min – 24 h for propagation
5. Back in Cloudflare Pages → your project → **Custom domains** → **Set up a custom domain** → enter `devasnhb.com` → Cloudflare auto-creates DNS

**Option B — Keep Hostinger nameservers**

In **Hostinger hPanel** → **Domains** → `devasnhb.com` → **DNS/Nameservers** → **DNS Records** → add:

```
Type   Name   Value                        TTL
CNAME  www    your-project.pages.dev       3600
```

For the root domain (`@`), Hostinger may not support CNAME. Options:
- Use their `ALIAS` / `ANAME` record type if available
- Or add both `www` CNAME (as above) and enable "Forward `@` to `www`" in Hostinger's redirect settings
- Or move to Option A (simpler)

Then in Cloudflare Pages → **Custom domains** → **Set up a custom domain** → enter `devasnhb.com` and `www.devasnhb.com`.

Cloudflare will verify DNS and provision an SSL certificate automatically (5–15 min).

### 4. Post-deploy checklist

- Visit `https://devasnhb.com` — should show your blog
- Check `https://devasnhb.com/sitemap-index.xml` — sitemap present
- Check `https://devasnhb.com/rss.xml` — RSS feed present
- Check `https://devasnhb.com/robots.txt` — points to sitemap
- Submit sitemap to [Google Search Console](https://search.google.com/search-console)
- Submit sitemap to [Bing Webmaster Tools](https://www.bing.com/webmasters)
- Verify OG previews with <https://www.opengraph.xyz/> or by sharing the URL on Twitter/LinkedIn

## SEO features included

- Unique `<title>` and meta description per page
- Canonical URLs
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card meta
- JSON-LD structured data (`BlogPosting` on posts, `WebSite` on home)
- Auto-generated `sitemap-index.xml`
- RSS feed at `/rss.xml`
- `robots.txt` pointing to sitemap
- Semantic HTML (`<article>`, `<header>`, `<time>`)
- Reading time on posts
- Tag archive pages for internal linking
- Fast static pages served from Cloudflare's edge

## Adding an OG image

Drop `og-default.png` (1200×630) into `public/`. It's already referenced in `src/consts.ts`. For per-post OG images, add `heroImage: "/og-post-slug.png"` to the frontmatter (schema already supports it).

## License

Your content is yours. Do what you want with the code.
