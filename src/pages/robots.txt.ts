import { DEFAULT_SITE_URL } from '../lib/runtime';

export function GET() {
  const content = `User-agent: *
Allow: /

Sitemap: ${DEFAULT_SITE_URL}/sitemap.xml
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
