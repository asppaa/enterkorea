export const DEFAULT_SITE_URL = 'https://kimpboard.com';
export const DEFAULT_API_BASE = 'https://api.kimpboard.com';

export const getApiBase = (envValue: string | undefined, isDev: boolean) =>
  envValue || (isDev ? 'http://127.0.0.1:8787' : DEFAULT_API_BASE);
