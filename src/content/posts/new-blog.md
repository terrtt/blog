---
title: "SEO for static blogs — the parts that actually move the needle"
description: "Sitemaps, structured data, canonical URLs, and the small, boring details that get static blogs indexed and ranked."
pubDate: 2026-02-08
type: ESSAY
tags: [  "blooo",  ]
author: "devasnhb"
---

Most SEO advice is either obvious ("write good content") or superstition
("keyword density must be 1.2%"). For a static blog in 2026, there's a small
set of things that genuinely matter. Everything else is theater.

## The checklist

1. **Semantic HTML.** Use `<article>`, `<header>`, `<time>`. Google reads the tree.
2. **Unique `<title>` and `<meta name="description">` per page.** Every page.
3. **Canonical URLs.** One canonical per page, absolute URL, matching the served URL.
4. **Open Graph + Twitter cards.** Not for Google — for anyone sharing your link.
5. **JSON-LD `BlogPosting` structured data.** Sends unambiguous signals about
   title, date, author, and images.
6. **Sitemap.xml.** Generated automatically, submitted to Google Search Console.
7. **robots.txt.** Pointing to the sitemap. Nothing exotic.
8. **Fast page loads.** Static + edge CDN handles this by default.
9. **Stable URLs.** If you change a slug, add a 301 redirect. Broken links kill rankings.
10. **Real internal linking.** Every post should link to at least two others.

That's the list. If you've done these ten things, you've done more than 90% of
blogs online.

## What Astro gives you for free

- `@astrojs/sitemap` generates `sitemap-index.xml` at build time.
- `@astrojs/rss` produces a feed at `/rss.xml` that Google still respects.
- Content collections give you typed frontmatter, which means your OG tags and
  structured data can't drift out of sync with the post itself.

## What doesn't matter (much)

- **Meta keywords.** Ignored by every major search engine since 2009.
- **Perfect Lighthouse scores.** 100/100 is a vanity metric. 90+ is enough.
- **AMP.** Deprecated. Move on.
- **Excessive schema.org markup.** Pick `BlogPosting` and stop.

## The signal that dominates

Backlinks from real humans on real sites still dominate ranking for content-heavy
blogs. No amount of technical polish substitutes for one post that gets shared
on Hacker News.

Write things worth linking to. Ship them fast. Repeat.
