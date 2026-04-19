// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

const site = process.env.SITE_URL || 'https://enterkorea.mcjeff-park.workers.dev';

export default defineConfig({
  site,
  output: 'static',
  adapter: cloudflare(),
});