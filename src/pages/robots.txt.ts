import type { APIRoute } from 'astro';
import { SITE } from '../consts';

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE.url}/sitemap-index.xml
`;

export const GET: APIRoute = () =>
  new Response(robotsTxt, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
