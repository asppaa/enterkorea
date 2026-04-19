import { sitePages } from '../data/site';
import { DEFAULT_SITE_URL } from '../lib/runtime';

export function GET() {
  const urls = sitePages
    .map((page) => `<url><loc>${DEFAULT_SITE_URL}${page.path}</loc></url>`)
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
