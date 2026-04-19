type JsonValue = Record<string, unknown> | unknown[];

type CoinSymbol = 'BTC' | 'ETH' | 'XRP';

type UpbitMarket = {
  market: string;
  korean_name: string;
  english_name: string;
};

type PremiumAssetConfig = {
  code: string;
  slug: string;
  name: string;
  category: string;
  benchmarkLabel: string;
  benchmarkSymbol: string;
  benchmarkNote: string;
};

type PremiumAssetRow = PremiumAssetConfig & {
  marketPriceKrw: number;
  navKrw: number;
  deviationPercent: number;
  marketCapKrw: number;
  volumeKrw: number;
  shares: number;
  benchmarkPrice: number;
  benchmarkCurrency: 'USD';
};

type CoinRow = {
  symbol: string;
  name: string;
  fxRate: number;
  upbit: number | null;
  bithumb: number | null;
  binance: number | null;
  upbitPremium: number | null;
  bithumbPremium: number | null;
  leadPremium: number | null;
  upbitVsBithumb: number | null;
  signedChangeRate24h: number | null;
  volumeKrw24h: number;
  volumeKrw24hRaw: number;
};

type SummaryLead = {
  label: string;
  value: number;
};

type FearGreedPoint = {
  value: number;
  label: string;
  timestamp: number;
};

interface Env {
  CACHE_TTL?: string;
}

type CacheEntry<T> = {
  expiresAt: number;
  value?: T;
  promise?: Promise<T>;
};

const coinSymbols: CoinSymbol[] = ['BTC', 'ETH', 'XRP'];
const coinDetailFallbacks: Record<CoinSymbol, CoinRow> = {
  BTC: {
    symbol: 'BTC',
    name: '비트코인',
    fxRate: 1478.99,
    upbit: 112661000,
    bithumb: 112650000,
    binance: 76135.19,
    upbitPremium: 0.05,
    bithumbPremium: 0.04,
    leadPremium: 0.05,
    upbitVsBithumb: 0.01,
    signedChangeRate24h: -0.98,
    volumeKrw24h: 286.9,
    volumeKrw24hRaw: 286900000000,
  },
  ETH: {
    symbol: 'ETH',
    name: '이더리움',
    fxRate: 1478.99,
    upbit: 3486000,
    bithumb: 3487000,
    binance: 2355.21,
    upbitPremium: 0.08,
    bithumbPremium: 0.11,
    leadPremium: 0.08,
    upbitVsBithumb: -0.03,
    signedChangeRate24h: -2.3,
    volumeKrw24h: 252.7,
    volumeKrw24hRaw: 252700000000,
  },
  XRP: {
    symbol: 'XRP',
    name: '리플',
    fxRate: 1478.99,
    upbit: 2119,
    bithumb: 2121,
    binance: 1.433,
    upbitPremium: -0.02,
    bithumbPremium: 0.08,
    leadPremium: -0.02,
    upbitVsBithumb: -0.09,
    signedChangeRate24h: -2.62,
    volumeKrw24h: 280.9,
    volumeKrw24hRaw: 280900000000,
  },
};

const overseasEtfs: PremiumAssetConfig[] = [
  { code: '379800', slug: 'kodex-us-sp500', name: 'KODEX 미국S&P500', category: '해외지수 ETF', benchmarkLabel: 'S&P 500 기준', benchmarkSymbol: 'SPY.US', benchmarkNote: '미국 대표지수 ETF의 국내 상장 괴리율' },
  { code: '360200', slug: 'ace-us-sp500', name: 'ACE 미국S&P500', category: '해외지수 ETF', benchmarkLabel: 'S&P 500 기준', benchmarkSymbol: 'VOO.US', benchmarkNote: '동일 지수 국내 상품 간 괴리율 비교용' },
  { code: '133690', slug: 'tiger-us-nasdaq100', name: 'TIGER 미국나스닥100', category: '해외지수 ETF', benchmarkLabel: 'NASDAQ 100 기준', benchmarkSymbol: 'QQQ.US', benchmarkNote: '성장주 강세 구간에서 괴리율 체감이 커지는 종목' },
  { code: '379810', slug: 'kodex-us-nasdaq100', name: 'KODEX 미국나스닥100', category: '해외지수 ETF', benchmarkLabel: 'NASDAQ 100 기준', benchmarkSymbol: 'QQQ.US', benchmarkNote: '미국 성장주 대표 축' },
  { code: '381170', slug: 'tiger-us-tech-top10', name: 'TIGER 미국테크TOP10 INDXX', category: '테마 ETF', benchmarkLabel: '미국 대형 테크 기준', benchmarkSymbol: 'XLK.US', benchmarkNote: '빅테크 집중 수급이 반영되는 상품' },
  { code: '381180', slug: 'tiger-us-semiconductor', name: 'TIGER 미국필라델피아반도체나스닥', category: '테마 ETF', benchmarkLabel: '반도체 ETF 기준', benchmarkSymbol: 'SOXX.US', benchmarkNote: '반도체 심리 과열 시 괴리 확대 여부 확인용' },
  { code: '402970', slug: 'ace-us-dividend-dow', name: 'ACE 미국배당다우존스', category: '배당 ETF', benchmarkLabel: '미국 배당 ETF 기준', benchmarkSymbol: 'SCHD.US', benchmarkNote: '배당형 수급과 안정 자금 유입 확인용' },
  { code: '304660', slug: 'kodex-us-30y-bond', name: 'KODEX 미국30년국채울트라선물(H)', category: '채권 ETF', benchmarkLabel: '미국 장기채 ETF 기준', benchmarkSymbol: 'TLT.US', benchmarkNote: '위험 회피 자금이 채권으로 이동할 때 참고' },
];

const commodityEtfs: PremiumAssetConfig[] = [
  { code: '411060', slug: 'ace-krx-gold-spot', name: 'ACE KRX금현물', category: '원자재 ETF', benchmarkLabel: 'Gold ETF 기준', benchmarkSymbol: 'GLD.US', benchmarkNote: '국내 금 현물 수급과 해외 금 가격 감각을 함께 보는 기준' },
  { code: '132030', slug: 'kodex-gold-futures', name: 'KODEX 골드선물(H)', category: '원자재 ETF', benchmarkLabel: 'Gold ETF 기준', benchmarkSymbol: 'GLD.US', benchmarkNote: '환헤지 금 상품의 괴리율 확인용' },
  { code: '319640', slug: 'tiger-gold-futures', name: 'TIGER 골드선물(H)', category: '원자재 ETF', benchmarkLabel: 'Gold ETF 기준', benchmarkSymbol: 'GLD.US', benchmarkNote: '동일 원자재 내 상품간 괴리 비교용' },
  { code: '144600', slug: 'kodex-silver-futures', name: 'KODEX 은선물(H)', category: '원자재 ETF', benchmarkLabel: 'Silver ETF 기준', benchmarkSymbol: 'SLV.US', benchmarkNote: '은 수급 왜곡이 빠르게 드러나는 대표 상품' },
  { code: '139320', slug: 'tiger-gold-silver-futures', name: 'TIGER 금은선물(H)', category: '원자재 ETF', benchmarkLabel: 'Gold ETF 기준', benchmarkSymbol: 'GLD.US', benchmarkNote: '귀금속 혼합 상품의 한국시장 수급 체크용' },
  { code: '138910', slug: 'kodex-copper-futures', name: 'KODEX 구리선물(H)', category: '원자재 ETF', benchmarkLabel: 'Copper ETF 기준', benchmarkSymbol: 'CPER.US', benchmarkNote: '산업 금속 심리와 국내 유동성 왜곡을 함께 보는 지점' },
  { code: '130680', slug: 'tiger-oil-futures', name: 'TIGER 원유선물Enhanced(H)', category: '원자재 ETF', benchmarkLabel: '원유 ETF 기준', benchmarkSymbol: 'USO.US', benchmarkNote: '에너지 리스크 심리와 괴리 확대 여부 체크용' },
  { code: '271060', slug: 'kodex-agriculture-futures', name: 'KODEX 3대농산물선물(H)', category: '원자재 ETF', benchmarkLabel: '농산물 ETF 기준', benchmarkSymbol: 'DBA.US', benchmarkNote: '농산물 인플레이션 기대가 반영되는지 확인용' },
];

const fallbackEtfs: PremiumAssetRow[] = [
  { ...overseasEtfs[0], marketPriceKrw: 23705, navKrw: 23715, deviationPercent: -0.04, marketCapKrw: 8485204750000, volumeKrw: 473308839826, shares: 357950000, benchmarkPrice: 710.14, benchmarkCurrency: 'USD' },
  { ...overseasEtfs[1], marketPriceKrw: 26220, navKrw: 26226, deviationPercent: -0.02, marketCapKrw: 3558054000000, volumeKrw: 26224261005, shares: 135700000, benchmarkPrice: 652.78, benchmarkCurrency: 'USD' },
  { ...overseasEtfs[2], marketPriceKrw: 172915, navKrw: 173181, deviationPercent: -0.15, marketCapKrw: 8746040700000, volumeKrw: 73348177932, shares: 50580000, benchmarkPrice: 648.85, benchmarkCurrency: 'USD' },
  { ...overseasEtfs[3], marketPriceKrw: 25905, navKrw: 25952, deviationPercent: -0.18, marketCapKrw: 6586346250000, volumeKrw: 90709511056, shares: 254250000, benchmarkPrice: 648.85, benchmarkCurrency: 'USD' },
  { ...overseasEtfs[4], marketPriceKrw: 31565, navKrw: 31651, deviationPercent: -0.27, marketCapKrw: 4082932750000, volumeKrw: 23893197722, shares: 129350000, benchmarkPrice: 154.35, benchmarkCurrency: 'USD' },
  { ...overseasEtfs[5], marketPriceKrw: 36255, navKrw: 36226, deviationPercent: 0.08, marketCapKrw: 4142133750000, volumeKrw: 44415510821, shares: 114250000, benchmarkPrice: 415.71, benchmarkCurrency: 'USD' },
  { ...overseasEtfs[6], marketPriceKrw: 14765, navKrw: 14757, deviationPercent: 0.05, marketCapKrw: 816504500000, volumeKrw: 4358695732, shares: 55300000, benchmarkPrice: 31.05, benchmarkCurrency: 'USD' },
  { ...overseasEtfs[7], marketPriceKrw: 7520, navKrw: 7551, deviationPercent: -0.41, marketCapKrw: 183488000000, volumeKrw: 822485130, shares: 24400000, benchmarkPrice: 87.07, benchmarkCurrency: 'USD' },
];

const fallbackCommodities: PremiumAssetRow[] = [
  { ...commodityEtfs[0], marketPriceKrw: 31850, navKrw: 31856, deviationPercent: -0.02, marketCapKrw: 4924010000000, volumeKrw: 34299435142, shares: 154600000, benchmarkPrice: 445.93, benchmarkCurrency: 'USD' },
  { ...commodityEtfs[1], marketPriceKrw: 27170, navKrw: 27182, deviationPercent: -0.04, marketCapKrw: 451022000000, volumeKrw: 2939380841, shares: 16600000, benchmarkPrice: 445.93, benchmarkCurrency: 'USD' },
  { ...commodityEtfs[2], marketPriceKrw: 28630, navKrw: 28642, deviationPercent: -0.04, marketCapKrw: 148876000000, volumeKrw: 617991675, shares: 5200000, benchmarkPrice: 445.93, benchmarkCurrency: 'USD' },
  { ...commodityEtfs[3], marketPriceKrw: 12980, navKrw: 12978, deviationPercent: 0.02, marketCapKrw: 1334344000000, volumeKrw: 24992863877, shares: 102800000, benchmarkPrice: 73.63, benchmarkCurrency: 'USD' },
  { ...commodityEtfs[4], marketPriceKrw: 20595, navKrw: 20589, deviationPercent: 0.03, marketCapKrw: 58695750000, volumeKrw: 638454047, shares: 2850000, benchmarkPrice: 445.93, benchmarkCurrency: 'USD' },
  { ...commodityEtfs[5], marketPriceKrw: 9440, navKrw: 9488, deviationPercent: -0.51, marketCapKrw: 50032000000, volumeKrw: 1280773716, shares: 5300000, benchmarkPrice: 37.29, benchmarkCurrency: 'USD' },
  { ...commodityEtfs[6], marketPriceKrw: 6780, navKrw: 6854, deviationPercent: -1.08, marketCapKrw: 21696000000, volumeKrw: 1530132940, shares: 3200000, benchmarkPrice: 116.04, benchmarkCurrency: 'USD' },
  { ...commodityEtfs[7], marketPriceKrw: 8270, navKrw: 8235, deviationPercent: 0.43, marketCapKrw: 32253000000, volumeKrw: 613956311, shares: 3900000, benchmarkPrice: 26.92, benchmarkCurrency: 'USD' },
];

const memoryCache = new Map<string, CacheEntry<unknown>>();

function json(data: JsonValue, ttl = 3) {
  return new Response(JSON.stringify(data), {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': `public, max-age=${ttl}`,
      'access-control-allow-origin': '*',
    },
  });
}

async function memoize<T>(key: string, ttlMs: number, producer: () => Promise<T>): Promise<T> {
  const now = Date.now();
  const entry = memoryCache.get(key) as CacheEntry<T> | undefined;

  if (entry?.value !== undefined && entry.expiresAt > now) {
    return entry.value;
  }

  if (entry?.promise && entry.expiresAt > now) {
    return entry.promise;
  }

  const promise = producer()
    .then((value) => {
      memoryCache.set(key, {
        expiresAt: now + ttlMs,
        value,
      });
      return value;
    })
    .catch((error) => {
      memoryCache.delete(key);
      throw error;
    });

  memoryCache.set(key, { expiresAt: now + ttlMs, promise });
  return promise;
}

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    headers: {
      'user-agent': 'kimp-site-worker',
      accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}`);
  }

  return (await response.json()) as T;
}

async function fetchText(url: string): Promise<string> {
  const response = await fetch(url, {
    headers: {
      'user-agent': 'kimp-site-worker',
      accept: 'text/html, text/plain;q=0.9, */*;q=0.8',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}`);
  }

  return await response.text();
}

function decodeHtml(text: string) {
  return text
    .replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .replaceAll('&apos;', "'")
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>');
}

function parseNumber(value: string) {
  return Number(value.replace(/[^\d.-]/g, ''));
}

function extractMetric(html: string, label: string) {
  const pattern = new RegExp(
    `${label}</span><div class="flex items-center justify-end gap-1"><span class="text-\\[12px\\] font-semibold">([^<]+)</span>`,
  );
  return pattern.exec(html)?.[1] ?? '';
}

function premium(localPriceKrw: number, globalPriceUsd: number, fxRate: number) {
  const converted = globalPriceUsd * fxRate;
  return Number((((localPriceKrw - converted) / converted) * 100).toFixed(2));
}

function relativeSpread(base: number, comparison: number) {
  return Number((((base - comparison) / comparison) * 100).toFixed(2));
}

function getReferenceUsdPrice(symbol: string, binanceMap: Map<string, number>) {
  if (symbol === 'USDT' || symbol === 'USDC') {
    return 1;
  }

  return binanceMap.get(`${symbol}USDT`) ?? null;
}

function toLead(symbol: string, value: number | null, note = ''): SummaryLead | null {
  if (value === null) {
    return null;
  }

  return {
    label: `${symbol} ${value > 0 ? '+' : ''}${value.toFixed(2)}%${note ? ` · ${note}` : ''}`,
    value,
  };
}

function toneByFearGreed(value: number) {
  if (value <= 25) return 'danger';
  if (value <= 40) return 'watch';
  if (value >= 75) return 'danger';
  if (value >= 60) return 'watch';
  return 'normal';
}

function toneByAbsolute(value: number, warning: number, danger: number) {
  const abs = Math.abs(value);
  if (abs >= danger) return 'danger';
  if (abs >= warning) return 'watch';
  return 'normal';
}

async function getFxRate() {
  return memoize('fx-rate', 3_000, async () => {
    const response = await fetchJson<{ rates: { KRW: number } }>('https://api.frankfurter.dev/v1/latest?from=USD&to=KRW');
    return response.rates.KRW;
  });
}

async function getUpbitMarkets() {
  return memoize('upbit-markets', 60 * 60 * 1000, async () => {
    const response = await fetchJson<UpbitMarket[]>('https://api.upbit.com/v1/market/all?isDetails=false');
    return response.filter((item) => item.market.startsWith('KRW-'));
  });
}

async function getUpbitTickers(markets: string[]) {
  return memoize('upbit-tickers', 3_000, async () => {
    const chunks: string[][] = [];
    for (let index = 0; index < markets.length; index += 40) {
      chunks.push(markets.slice(index, index + 40));
    }

    const rows = await Promise.all(
      chunks.map((chunk) =>
        fetchJson<
          Array<{
            market: string;
            trade_price: number;
            signed_change_rate: number;
            acc_trade_price_24h: number;
          }>
        >(`https://api.upbit.com/v1/ticker?markets=${chunk.join(',')}`),
      ),
    );

    return rows.flat();
  });
}

async function getBithumbAllTicker() {
  return memoize('bithumb-all', 3_000, async () => {
    return await fetchJson<{
      status: string;
      data: Record<
        string,
        | string
        | {
            closing_price: string;
            fluctate_rate_24H: string;
            acc_trade_value_24H: string;
          }
      >;
    }>('https://api.bithumb.com/public/ticker/ALL_KRW');
  });
}

async function getBinanceAllPrices() {
  return memoize('binance-all', 3_000, async () => {
    return await fetchJson<Array<{ symbol: string; price: string }>>('https://api.binance.com/api/v3/ticker/price');
  });
}

async function getFearGreed() {
  return memoize('fear-greed', 60 * 1000, async () => {
    const response = await fetchJson<{
      data: Array<{ value: string; value_classification: string; timestamp: string }>;
    }>('https://api.alternative.me/fng/?limit=7');

    return response.data.map((item) => ({
      value: Number(item.value),
      label: item.value_classification,
      timestamp: Number(item.timestamp),
    })) as FearGreedPoint[];
  });
}

async function getStooqClose(ticker: string) {
  return memoize(`stooq:${ticker}`, 60 * 60 * 1000, async () => {
    const response = await fetchText(`https://stooq.com/q/l/?s=${ticker}&i=d`);
    const [, , , , , , close] = response.trim().split(',');
    const closePrice = Number(close);

    if (!Number.isFinite(closePrice)) {
      throw new Error(`Failed to parse benchmark price for ${ticker}`);
    }

    return closePrice;
  });
}

function mockHistory(symbol: CoinSymbol) {
  const map: Record<CoinSymbol, number[]> = {
    BTC: [0.9, 0.8, 0.4, 0.2, -0.1, 0.02, 0.05],
    ETH: [0.6, 0.5, 0.31, 0.22, 0.16, 0.1, 0.08],
    XRP: [0.5, 0.4, 0.2, 0.1, 0.05, 0.01, -0.02],
  };

  return map[symbol];
}

async function buildCoinSummaryRaw() {
  const upbitMarkets = await getUpbitMarkets();
  const [fxRate, upbitTickers, bithumbAll, binanceAll] = await Promise.all([
    getFxRate(),
    getUpbitTickers(upbitMarkets.map((item) => item.market)),
    getBithumbAllTicker(),
    getBinanceAllPrices(),
  ]);

  const marketMap = new Map(upbitMarkets.map((item) => [item.market, item]));
  const upbitMap = new Map(upbitTickers.map((item) => [item.market, item]));
  const binanceMap = new Map(binanceAll.map((item) => [item.symbol, Number(item.price)]));
  const bithumbEntries = Object.entries(bithumbAll.data).filter(
    ([key, value]) => key !== 'date' && typeof value === 'object' && value !== null,
  ) as Array<
    [
      string,
      {
        closing_price: string;
        fluctate_rate_24H: string;
        acc_trade_value_24H: string;
      },
    ]
  >;
  const bithumbMap = new Map(bithumbEntries);

  const symbols = [...new Set([...upbitMarkets.map((item) => item.market.replace('KRW-', '')), ...bithumbMap.keys()])];

  const rows: CoinRow[] = symbols
    .map((symbol) => {
      const upbit = upbitMap.get(`KRW-${symbol}`);
      const bithumb = bithumbMap.get(symbol);
      const binance = getReferenceUsdPrice(symbol, binanceMap);
      const upbitPrice = upbit ? Number(upbit.trade_price) : null;
      const bithumbPrice = bithumb ? Number(bithumb.closing_price) : null;
      const upbitPremium = upbitPrice && binance ? premium(upbitPrice, binance, fxRate) : null;
      const bithumbPremium = bithumbPrice && binance ? premium(bithumbPrice, binance, fxRate) : null;
      const domestic = upbitPrice && bithumbPrice ? relativeSpread(upbitPrice, bithumbPrice) : null;
      const upbitVolume = upbit ? Number(upbit.acc_trade_price_24h) : 0;
      const bithumbVolume = bithumb ? Number(bithumb.acc_trade_value_24H) : 0;
      const volumeRaw = Math.max(upbitVolume, bithumbVolume);
      const name = marketMap.get(`KRW-${symbol}`)?.korean_name ?? symbol;

      return {
        symbol,
        name,
        fxRate,
        upbit: upbitPrice,
        bithumb: bithumbPrice,
        binance,
        upbitPremium,
        bithumbPremium,
        leadPremium: upbitPremium ?? bithumbPremium ?? null,
        upbitVsBithumb: domestic,
        signedChangeRate24h: upbit ? Number((upbit.signed_change_rate * 100).toFixed(2)) : bithumb ? Number(bithumb.fluctate_rate_24H) : null,
        volumeKrw24h: Number((volumeRaw / 1_000_000_000).toFixed(1)),
        volumeKrw24hRaw: volumeRaw,
      };
    })
    .filter((item) => item.upbit !== null || item.bithumb !== null)
    .sort((left, right) => right.volumeKrw24hRaw - left.volumeKrw24hRaw);

  return {
    fxRate,
    rows,
    totalCount: rows.length,
  };
}

async function buildCoinSummary() {
  return memoize('coin-summary', 3_000, buildCoinSummaryRaw);
}

async function buildAssetRows(configs: PremiumAssetConfig[], fallbackRows: PremiumAssetRow[], key: string) {
  return memoize(key, 3_000, async () => {
    const benchmarkMap = new Map<string, number>();
    const uniqueTickers = [...new Set(configs.map((item) => item.benchmarkSymbol))];

    await Promise.all(
      uniqueTickers.map(async (ticker) => {
        const close = await getStooqClose(ticker);
        benchmarkMap.set(ticker, close);
      }),
    );

    const rows = await Promise.all(
      configs.map(async (config, index) => {
        try {
          const html = await fetchText(`https://www.k-etf.com/etf/${config.code}`);
          const title = decodeHtml(/<title>K-ETF - ([^<]+)<\/title>/.exec(html)?.[1] ?? config.name);
          const marketCapKrw = parseNumber(extractMetric(html, '시가총액'));
          const volumeKrw = parseNumber(extractMetric(html, '거래대금'));
          const shares = parseNumber(extractMetric(html, '상장주식수'));
          const navKrw = parseNumber(extractMetric(html, 'NAV'));
          const marketPriceKrw = Math.round(marketCapKrw / shares);
          const deviationPercent = Number((((marketPriceKrw - navKrw) / navKrw) * 100).toFixed(2));

          return {
            ...config,
            name: title,
            marketPriceKrw,
            navKrw,
            deviationPercent,
            marketCapKrw,
            volumeKrw,
            shares,
            benchmarkPrice: benchmarkMap.get(config.benchmarkSymbol) ?? fallbackRows[index].benchmarkPrice,
            benchmarkCurrency: 'USD' as const,
          };
        } catch {
          return {
            ...fallbackRows[index],
            benchmarkPrice: benchmarkMap.get(config.benchmarkSymbol) ?? fallbackRows[index].benchmarkPrice,
          };
        }
      }),
    );

    return rows;
  });
}

function leadByAbsoluteValue(rows: Array<{ name: string; deviationPercent: number }>) {
  return [...rows].sort((left, right) => Math.abs(right.deviationPercent) - Math.abs(left.deviationPercent))[0] ?? null;
}

async function buildSummaryRaw() {
  const [coinSummary, etfs, commodities] = await Promise.all([
    buildCoinSummary(),
    buildAssetRows(overseasEtfs, fallbackEtfs, 'asset-etf'),
    buildAssetRows(commodityEtfs, fallbackCommodities, 'asset-commodity'),
  ]);

  const btc = coinSummary.rows.find((item) => item.symbol === 'BTC') ?? coinDetailFallbacks.BTC;
  const stablecoins = coinSummary.rows.filter((item) => item.symbol === 'USDT' || item.symbol === 'USDC').slice(0, 2);
  const etfLead = leadByAbsoluteValue(etfs);
  const commodityLead = leadByAbsoluteValue(commodities);

  return {
    updatedAt: new Date().toISOString(),
    rows: coinSummary.rows,
    totalCount: coinSummary.totalCount,
    stablecoins,
    etfs,
    commodities,
    overview: {
      fxRate: coinSummary.fxRate,
      usdtLead: toLead('USDT', stablecoins.find((item) => item.symbol === 'USDT')?.leadPremium ?? null, '업비트 vs $1'),
      usdcLead: toLead('USDC', stablecoins.find((item) => item.symbol === 'USDC')?.leadPremium ?? null, '업비트 vs $1'),
      cryptoGlobalLead: toLead('BTC', btc.leadPremium, '업비트 vs 바이낸스'),
      cryptoDomesticLead: toLead('BTC', btc.upbitVsBithumb, '업비트 vs 빗썸'),
      etfLead: etfLead
        ? {
            label: `${etfLead.name} ${etfLead.deviationPercent > 0 ? '+' : ''}${etfLead.deviationPercent.toFixed(2)}%`,
            value: etfLead.deviationPercent,
          }
        : null,
      commodityLead: commodityLead
        ? {
            label: `${commodityLead.name} ${commodityLead.deviationPercent > 0 ? '+' : ''}${commodityLead.deviationPercent.toFixed(2)}%`,
            value: commodityLead.deviationPercent,
          }
        : null,
    },
  };
}

async function buildSummary() {
  return memoize('summary', 3_000, buildSummaryRaw);
}

async function buildRiskSummaryRaw() {
  const [summary, fearGreed] = await Promise.all([buildSummary(), getFearGreed()]);
  const btc = summary.rows.find((item) => item.symbol === 'BTC') ?? coinDetailFallbacks.BTC;
  const etfLead = leadByAbsoluteValue(summary.etfs);
  const commodityLead = leadByAbsoluteValue(summary.commodities);
  const currentFearGreed = fearGreed[0] ?? { value: 26, label: 'Fear', timestamp: Date.now() / 1000 };
  const usdKrw = Number(summary.overview.fxRate.toFixed(2));

  return {
    updatedAt: new Date().toISOString(),
    fearGreed: currentFearGreed,
    fearGreedHistory: fearGreed.slice().reverse().map((item) => item.value),
    usdKrw,
    btcGlobalPremium: btc.leadPremium,
    btcDomesticPremium: btc.upbitVsBithumb,
    etfLead,
    commodityLead,
    signals: [
      {
        id: 'fear-greed',
        title: 'Crypto Fear & Greed',
        value: currentFearGreed.value,
        label: currentFearGreed.label,
        tone: toneByFearGreed(currentFearGreed.value),
        note: currentFearGreed.value <= 25 ? '시장 심리가 급격히 위축된 구간' : '심리 지표가 극단 구간은 아님',
      },
      {
        id: 'usd-krw',
        title: 'USD/KRW',
        value: usdKrw,
        label: `${usdKrw.toFixed(2)}`,
        tone: usdKrw >= 1450 ? 'danger' : usdKrw >= 1400 ? 'watch' : 'normal',
        note: usdKrw >= 1450 ? '원화 약세가 강해져 해외 환산 가격에 부담' : '환율 스트레스가 제한적',
      },
      {
        id: 'btc-global',
        title: 'BTC 한국/해외 프리미엄',
        value: btc.leadPremium ?? 0,
        label: btc.leadPremium !== null ? `${btc.leadPremium > 0 ? '+' : ''}${btc.leadPremium.toFixed(2)}%` : '-',
        tone: toneByAbsolute(btc.leadPremium ?? 0, 0.8, 1.5),
        note: btc.leadPremium !== null && Math.abs(btc.leadPremium) >= 1.5 ? '대표 코인 프리미엄이 크게 벌어짐' : '대표 코인 프리미엄은 비교적 안정적',
      },
      {
        id: 'btc-domestic',
        title: 'BTC 국내 거래소 차이',
        value: btc.upbitVsBithumb ?? 0,
        label: btc.upbitVsBithumb !== null ? `${btc.upbitVsBithumb > 0 ? '+' : ''}${btc.upbitVsBithumb.toFixed(2)}%` : '-',
        tone: toneByAbsolute(btc.upbitVsBithumb ?? 0, 0.4, 0.8),
        note: btc.upbitVsBithumb !== null && Math.abs(btc.upbitVsBithumb) >= 0.8 ? '국내 내부 수급이 크게 흔들리는 구간' : '국내 거래소 간 차이는 제한적',
      },
      {
        id: 'etf-gap',
        title: 'ETF 대표 괴리',
        value: etfLead?.deviationPercent ?? 0,
        label: etfLead ? `${etfLead.name} ${etfLead.deviationPercent > 0 ? '+' : ''}${etfLead.deviationPercent.toFixed(2)}%` : '-',
        tone: toneByAbsolute(etfLead?.deviationPercent ?? 0, 0.3, 0.8),
        note: etfLead && Math.abs(etfLead.deviationPercent) >= 0.8 ? '국내 ETF 괴리가 평소보다 크게 벌어짐' : 'ETF 괴리율은 대체로 관리 가능한 수준',
      },
      {
        id: 'commodity-gap',
        title: '원자재 대표 괴리',
        value: commodityLead?.deviationPercent ?? 0,
        label: commodityLead
          ? `${commodityLead.name} ${commodityLead.deviationPercent > 0 ? '+' : ''}${commodityLead.deviationPercent.toFixed(2)}%`
          : '-',
        tone: toneByAbsolute(commodityLead?.deviationPercent ?? 0, 0.6, 1.2),
        note: commodityLead && Math.abs(commodityLead.deviationPercent) >= 1.2 ? '원자재 ETF 수급 왜곡이 크게 확대됨' : '원자재 괴리율은 감시 수준',
      },
    ],
  };
}

async function buildRiskSummary() {
  return memoize('risk-summary', 3_000, buildRiskSummaryRaw);
}

function getSymbol(url: URL): CoinSymbol {
  const raw = (url.searchParams.get('symbol') || 'BTC').toUpperCase();
  return coinSymbols.includes(raw as CoinSymbol) ? (raw as CoinSymbol) : 'BTC';
}

function getFallbackSummary() {
  const rows = Object.values(coinDetailFallbacks);
  return {
    updatedAt: new Date().toISOString(),
    rows,
    totalCount: rows.length,
    stablecoins: rows.filter((item) => item.symbol === 'USDT' || item.symbol === 'USDC').slice(0, 2),
    etfs: fallbackEtfs,
    commodities: fallbackCommodities,
    overview: {
      fxRate: 1478.99,
      usdtLead: { label: 'USDT +0.17% · 업비트 vs $1', value: 0.17 },
      usdcLead: { label: 'USDC +0.01% · 업비트 vs $1', value: 0.01 },
      cryptoGlobalLead: { label: 'BTC +0.05% · 업비트 vs 바이낸스', value: 0.05 },
      cryptoDomesticLead: { label: 'BTC +0.01% · 업비트 vs 빗썸', value: 0.01 },
      etfLead: { label: 'KODEX 미국30년국채울트라선물(H) -0.41%', value: -0.41 },
      commodityLead: { label: 'TIGER 원유선물Enhanced(H) -1.08%', value: -1.08 },
    },
  };
}

function getFallbackRisk() {
  return {
    updatedAt: new Date().toISOString(),
    fearGreed: {
      value: 26,
      label: 'Fear',
      timestamp: Math.floor(Date.now() / 1000),
    },
    fearGreedHistory: [16, 12, 21, 23, 23, 21, 26],
    usdKrw: 1478.99,
    btcGlobalPremium: 0.05,
    btcDomesticPremium: 0.01,
    etfLead: fallbackEtfs[7],
    commodityLead: fallbackCommodities[6],
    signals: [
      { id: 'fear-greed', title: 'Crypto Fear & Greed', value: 26, label: 'Fear', tone: 'watch', note: '시장 심리가 위축된 구간' },
      { id: 'usd-krw', title: 'USD/KRW', value: 1478.99, label: '1478.99', tone: 'danger', note: '원화 약세 구간' },
      { id: 'btc-global', title: 'BTC 한국/해외 프리미엄', value: 0.05, label: '+0.05%', tone: 'normal', note: '대표 코인 프리미엄은 제한적' },
      { id: 'btc-domestic', title: 'BTC 국내 거래소 차이', value: 0.01, label: '+0.01%', tone: 'normal', note: '국내 내부 수급 차이는 작음' },
      { id: 'etf-gap', title: 'ETF 대표 괴리', value: -0.41, label: 'KODEX 미국30년국채울트라선물(H) -0.41%', tone: 'watch', note: '채권 ETF 괴리 확대 감시' },
      { id: 'commodity-gap', title: '원자재 대표 괴리', value: -1.08, label: 'TIGER 원유선물Enhanced(H) -1.08%', tone: 'danger', note: '원자재 ETF 괴리 확대' },
    ],
  };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const ttl = Number(env.CACHE_TTL || '3');
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'access-control-allow-origin': '*',
          'access-control-allow-methods': 'GET, OPTIONS',
        },
      });
    }

    try {
      if (url.pathname === '/api/summary') {
        return json(await buildSummary(), ttl);
      }

      if (url.pathname === '/api/coins') {
        const coins = await buildCoinSummary();
        return json({ updatedAt: new Date().toISOString(), rows: coins.rows, totalCount: coins.totalCount, fxRate: coins.fxRate }, ttl);
      }

      if (url.pathname === '/api/etf') {
        const rows = await buildAssetRows(overseasEtfs, fallbackEtfs, 'asset-etf');
        return json({ updatedAt: new Date().toISOString(), rows }, ttl);
      }

      if (url.pathname === '/api/commodities') {
        const rows = await buildAssetRows(commodityEtfs, fallbackCommodities, 'asset-commodity');
        return json({ updatedAt: new Date().toISOString(), rows }, ttl);
      }

      if (url.pathname === '/api/risk') {
        return json(await buildRiskSummary(), ttl);
      }

      if (url.pathname === '/api/premium') {
        const symbol = getSymbol(url);
        const summary = await buildCoinSummary();
        const row = summary.rows.find((item) => item.symbol === symbol) ?? coinDetailFallbacks[symbol];
        return json({ updatedAt: new Date().toISOString(), row }, ttl);
      }

      if (url.pathname === '/api/spread') {
        const symbol = getSymbol(url);
        const summary = await buildCoinSummary();
        const row = summary.rows.find((item) => item.symbol === symbol) ?? coinDetailFallbacks[symbol];
        return json(
          {
            updatedAt: new Date().toISOString(),
            symbol,
            spread: {
              upbitVsBinance: row.upbitPremium,
              bithumbVsBinance: row.bithumbPremium,
              upbitVsBithumb: row.upbitVsBithumb,
            },
          },
          ttl,
        );
      }

      if (url.pathname === '/api/history') {
        const symbol = getSymbol(url);
        return json(
          {
            symbol,
            range: url.searchParams.get('range') || '7d',
            values: mockHistory(symbol),
          },
          ttl,
        );
      }

      return new Response('Not found', { status: 404 });
    } catch (error) {
      if (url.pathname === '/api/risk') {
        return json({ ...getFallbackRisk(), error: error instanceof Error ? error.message : 'Unknown error', fallback: true }, 0);
      }

      return json({ ...getFallbackSummary(), error: error instanceof Error ? error.message : 'Unknown error', fallback: true }, 0);
    }
  },
};
