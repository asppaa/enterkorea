export const DEFAULT_SITE_URL = 'https://enterkorea.mcjeff-park.workers.dev';
export const DEFAULT_API_BASE = 'https://kimp-price-api.mcjeff-park.workers.dev';

export const getApiBase = (envValue: string | undefined, isDev: boolean) =>
  envValue || (isDev ? 'http://127.0.0.1:8787' : DEFAULT_API_BASE);
