// @ts-check
import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL || 'https://kimpboard.com';

export default defineConfig({
  site,
  output: 'static',
});
