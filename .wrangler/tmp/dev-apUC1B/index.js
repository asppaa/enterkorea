var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// workers/price-api/src/index.ts
var coinSymbols = ["BTC", "ETH", "XRP"];
var coinDetailFallbacks = {
  BTC: {
    symbol: "BTC",
    name: "\uBE44\uD2B8\uCF54\uC778",
    fxRate: 1478.99,
    upbit: 112661e3,
    bithumb: 11265e4,
    binance: 76135.19,
    upbitPremium: 0.05,
    bithumbPremium: 0.04,
    leadPremium: 0.05,
    upbitVsBithumb: 0.01,
    signedChangeRate24h: -0.98,
    volumeKrw24h: 286.9,
    volumeKrw24hRaw: 2869e8
  },
  ETH: {
    symbol: "ETH",
    name: "\uC774\uB354\uB9AC\uC6C0",
    fxRate: 1478.99,
    upbit: 3486e3,
    bithumb: 3487e3,
    binance: 2355.21,
    upbitPremium: 0.08,
    bithumbPremium: 0.11,
    leadPremium: 0.08,
    upbitVsBithumb: -0.03,
    signedChangeRate24h: -2.3,
    volumeKrw24h: 252.7,
    volumeKrw24hRaw: 2527e8
  },
  XRP: {
    symbol: "XRP",
    name: "\uB9AC\uD50C",
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
    volumeKrw24hRaw: 2809e8
  }
};
var overseasEtfs = [
  { code: "379800", slug: "kodex-us-sp500", name: "KODEX \uBBF8\uAD6DS&P500", category: "\uD574\uC678\uC9C0\uC218 ETF", benchmarkLabel: "S&P 500 \uAE30\uC900", benchmarkSymbol: "SPY.US", benchmarkNote: "\uBBF8\uAD6D \uB300\uD45C\uC9C0\uC218 ETF\uC758 \uAD6D\uB0B4 \uC0C1\uC7A5 \uAD34\uB9AC\uC728" },
  { code: "360200", slug: "ace-us-sp500", name: "ACE \uBBF8\uAD6DS&P500", category: "\uD574\uC678\uC9C0\uC218 ETF", benchmarkLabel: "S&P 500 \uAE30\uC900", benchmarkSymbol: "VOO.US", benchmarkNote: "\uB3D9\uC77C \uC9C0\uC218 \uAD6D\uB0B4 \uC0C1\uD488 \uAC04 \uAD34\uB9AC\uC728 \uBE44\uAD50\uC6A9" },
  { code: "133690", slug: "tiger-us-nasdaq100", name: "TIGER \uBBF8\uAD6D\uB098\uC2A4\uB2E5100", category: "\uD574\uC678\uC9C0\uC218 ETF", benchmarkLabel: "NASDAQ 100 \uAE30\uC900", benchmarkSymbol: "QQQ.US", benchmarkNote: "\uC131\uC7A5\uC8FC \uAC15\uC138 \uAD6C\uAC04\uC5D0\uC11C \uAD34\uB9AC\uC728 \uCCB4\uAC10\uC774 \uCEE4\uC9C0\uB294 \uC885\uBAA9" },
  { code: "379810", slug: "kodex-us-nasdaq100", name: "KODEX \uBBF8\uAD6D\uB098\uC2A4\uB2E5100", category: "\uD574\uC678\uC9C0\uC218 ETF", benchmarkLabel: "NASDAQ 100 \uAE30\uC900", benchmarkSymbol: "QQQ.US", benchmarkNote: "\uBBF8\uAD6D \uC131\uC7A5\uC8FC \uB300\uD45C \uCD95" },
  { code: "381170", slug: "tiger-us-tech-top10", name: "TIGER \uBBF8\uAD6D\uD14C\uD06CTOP10 INDXX", category: "\uD14C\uB9C8 ETF", benchmarkLabel: "\uBBF8\uAD6D \uB300\uD615 \uD14C\uD06C \uAE30\uC900", benchmarkSymbol: "XLK.US", benchmarkNote: "\uBE45\uD14C\uD06C \uC9D1\uC911 \uC218\uAE09\uC774 \uBC18\uC601\uB418\uB294 \uC0C1\uD488" },
  { code: "381180", slug: "tiger-us-semiconductor", name: "TIGER \uBBF8\uAD6D\uD544\uB77C\uB378\uD53C\uC544\uBC18\uB3C4\uCCB4\uB098\uC2A4\uB2E5", category: "\uD14C\uB9C8 ETF", benchmarkLabel: "\uBC18\uB3C4\uCCB4 ETF \uAE30\uC900", benchmarkSymbol: "SOXX.US", benchmarkNote: "\uBC18\uB3C4\uCCB4 \uC2EC\uB9AC \uACFC\uC5F4 \uC2DC \uAD34\uB9AC \uD655\uB300 \uC5EC\uBD80 \uD655\uC778\uC6A9" },
  { code: "402970", slug: "ace-us-dividend-dow", name: "ACE \uBBF8\uAD6D\uBC30\uB2F9\uB2E4\uC6B0\uC874\uC2A4", category: "\uBC30\uB2F9 ETF", benchmarkLabel: "\uBBF8\uAD6D \uBC30\uB2F9 ETF \uAE30\uC900", benchmarkSymbol: "SCHD.US", benchmarkNote: "\uBC30\uB2F9\uD615 \uC218\uAE09\uACFC \uC548\uC815 \uC790\uAE08 \uC720\uC785 \uD655\uC778\uC6A9" },
  { code: "304660", slug: "kodex-us-30y-bond", name: "KODEX \uBBF8\uAD6D30\uB144\uAD6D\uCC44\uC6B8\uD2B8\uB77C\uC120\uBB3C(H)", category: "\uCC44\uAD8C ETF", benchmarkLabel: "\uBBF8\uAD6D \uC7A5\uAE30\uCC44 ETF \uAE30\uC900", benchmarkSymbol: "TLT.US", benchmarkNote: "\uC704\uD5D8 \uD68C\uD53C \uC790\uAE08\uC774 \uCC44\uAD8C\uC73C\uB85C \uC774\uB3D9\uD560 \uB54C \uCC38\uACE0" }
];
var commodityEtfs = [
  { code: "411060", slug: "ace-krx-gold-spot", name: "ACE KRX\uAE08\uD604\uBB3C", category: "\uC6D0\uC790\uC7AC ETF", benchmarkLabel: "Gold ETF \uAE30\uC900", benchmarkSymbol: "GLD.US", benchmarkNote: "\uAD6D\uB0B4 \uAE08 \uD604\uBB3C \uC218\uAE09\uACFC \uD574\uC678 \uAE08 \uAC00\uACA9 \uAC10\uAC01\uC744 \uD568\uAED8 \uBCF4\uB294 \uAE30\uC900" },
  { code: "132030", slug: "kodex-gold-futures", name: "KODEX \uACE8\uB4DC\uC120\uBB3C(H)", category: "\uC6D0\uC790\uC7AC ETF", benchmarkLabel: "Gold ETF \uAE30\uC900", benchmarkSymbol: "GLD.US", benchmarkNote: "\uD658\uD5E4\uC9C0 \uAE08 \uC0C1\uD488\uC758 \uAD34\uB9AC\uC728 \uD655\uC778\uC6A9" },
  { code: "319640", slug: "tiger-gold-futures", name: "TIGER \uACE8\uB4DC\uC120\uBB3C(H)", category: "\uC6D0\uC790\uC7AC ETF", benchmarkLabel: "Gold ETF \uAE30\uC900", benchmarkSymbol: "GLD.US", benchmarkNote: "\uB3D9\uC77C \uC6D0\uC790\uC7AC \uB0B4 \uC0C1\uD488\uAC04 \uAD34\uB9AC \uBE44\uAD50\uC6A9" },
  { code: "144600", slug: "kodex-silver-futures", name: "KODEX \uC740\uC120\uBB3C(H)", category: "\uC6D0\uC790\uC7AC ETF", benchmarkLabel: "Silver ETF \uAE30\uC900", benchmarkSymbol: "SLV.US", benchmarkNote: "\uC740 \uC218\uAE09 \uC65C\uACE1\uC774 \uBE60\uB974\uAC8C \uB4DC\uB7EC\uB098\uB294 \uB300\uD45C \uC0C1\uD488" },
  { code: "139320", slug: "tiger-gold-silver-futures", name: "TIGER \uAE08\uC740\uC120\uBB3C(H)", category: "\uC6D0\uC790\uC7AC ETF", benchmarkLabel: "Gold ETF \uAE30\uC900", benchmarkSymbol: "GLD.US", benchmarkNote: "\uADC0\uAE08\uC18D \uD63C\uD569 \uC0C1\uD488\uC758 \uD55C\uAD6D\uC2DC\uC7A5 \uC218\uAE09 \uCCB4\uD06C\uC6A9" },
  { code: "138910", slug: "kodex-copper-futures", name: "KODEX \uAD6C\uB9AC\uC120\uBB3C(H)", category: "\uC6D0\uC790\uC7AC ETF", benchmarkLabel: "Copper ETF \uAE30\uC900", benchmarkSymbol: "CPER.US", benchmarkNote: "\uC0B0\uC5C5 \uAE08\uC18D \uC2EC\uB9AC\uC640 \uAD6D\uB0B4 \uC720\uB3D9\uC131 \uC65C\uACE1\uC744 \uD568\uAED8 \uBCF4\uB294 \uC9C0\uC810" },
  { code: "130680", slug: "tiger-oil-futures", name: "TIGER \uC6D0\uC720\uC120\uBB3CEnhanced(H)", category: "\uC6D0\uC790\uC7AC ETF", benchmarkLabel: "\uC6D0\uC720 ETF \uAE30\uC900", benchmarkSymbol: "USO.US", benchmarkNote: "\uC5D0\uB108\uC9C0 \uB9AC\uC2A4\uD06C \uC2EC\uB9AC\uC640 \uAD34\uB9AC \uD655\uB300 \uC5EC\uBD80 \uCCB4\uD06C\uC6A9" },
  { code: "271060", slug: "kodex-agriculture-futures", name: "KODEX 3\uB300\uB18D\uC0B0\uBB3C\uC120\uBB3C(H)", category: "\uC6D0\uC790\uC7AC ETF", benchmarkLabel: "\uB18D\uC0B0\uBB3C ETF \uAE30\uC900", benchmarkSymbol: "DBA.US", benchmarkNote: "\uB18D\uC0B0\uBB3C \uC778\uD50C\uB808\uC774\uC158 \uAE30\uB300\uAC00 \uBC18\uC601\uB418\uB294\uC9C0 \uD655\uC778\uC6A9" }
];
var fallbackEtfs = [
  { ...overseasEtfs[0], marketPriceKrw: 23705, navKrw: 23715, deviationPercent: -0.04, marketCapKrw: 848520475e4, volumeKrw: 473308839826, shares: 35795e4, benchmarkPrice: 710.14, benchmarkCurrency: "USD" },
  { ...overseasEtfs[1], marketPriceKrw: 26220, navKrw: 26226, deviationPercent: -0.02, marketCapKrw: 3558054e6, volumeKrw: 26224261005, shares: 1357e5, benchmarkPrice: 652.78, benchmarkCurrency: "USD" },
  { ...overseasEtfs[2], marketPriceKrw: 172915, navKrw: 173181, deviationPercent: -0.15, marketCapKrw: 87460407e5, volumeKrw: 73348177932, shares: 5058e4, benchmarkPrice: 648.85, benchmarkCurrency: "USD" },
  { ...overseasEtfs[3], marketPriceKrw: 25905, navKrw: 25952, deviationPercent: -0.18, marketCapKrw: 658634625e4, volumeKrw: 90709511056, shares: 25425e4, benchmarkPrice: 648.85, benchmarkCurrency: "USD" },
  { ...overseasEtfs[4], marketPriceKrw: 31565, navKrw: 31651, deviationPercent: -0.27, marketCapKrw: 408293275e4, volumeKrw: 23893197722, shares: 12935e4, benchmarkPrice: 154.35, benchmarkCurrency: "USD" },
  { ...overseasEtfs[5], marketPriceKrw: 36255, navKrw: 36226, deviationPercent: 0.08, marketCapKrw: 414213375e4, volumeKrw: 44415510821, shares: 11425e4, benchmarkPrice: 415.71, benchmarkCurrency: "USD" },
  { ...overseasEtfs[6], marketPriceKrw: 14765, navKrw: 14757, deviationPercent: 0.05, marketCapKrw: 8165045e5, volumeKrw: 4358695732, shares: 553e5, benchmarkPrice: 31.05, benchmarkCurrency: "USD" },
  { ...overseasEtfs[7], marketPriceKrw: 7520, navKrw: 7551, deviationPercent: -0.41, marketCapKrw: 183488e6, volumeKrw: 822485130, shares: 244e5, benchmarkPrice: 87.07, benchmarkCurrency: "USD" }
];
var fallbackCommodities = [
  { ...commodityEtfs[0], marketPriceKrw: 31850, navKrw: 31856, deviationPercent: -0.02, marketCapKrw: 492401e7, volumeKrw: 34299435142, shares: 1546e5, benchmarkPrice: 445.93, benchmarkCurrency: "USD" },
  { ...commodityEtfs[1], marketPriceKrw: 27170, navKrw: 27182, deviationPercent: -0.04, marketCapKrw: 451022e6, volumeKrw: 2939380841, shares: 166e5, benchmarkPrice: 445.93, benchmarkCurrency: "USD" },
  { ...commodityEtfs[2], marketPriceKrw: 28630, navKrw: 28642, deviationPercent: -0.04, marketCapKrw: 148876e6, volumeKrw: 617991675, shares: 52e5, benchmarkPrice: 445.93, benchmarkCurrency: "USD" },
  { ...commodityEtfs[3], marketPriceKrw: 12980, navKrw: 12978, deviationPercent: 0.02, marketCapKrw: 1334344e6, volumeKrw: 24992863877, shares: 1028e5, benchmarkPrice: 73.63, benchmarkCurrency: "USD" },
  { ...commodityEtfs[4], marketPriceKrw: 20595, navKrw: 20589, deviationPercent: 0.03, marketCapKrw: 5869575e4, volumeKrw: 638454047, shares: 285e4, benchmarkPrice: 445.93, benchmarkCurrency: "USD" },
  { ...commodityEtfs[5], marketPriceKrw: 9440, navKrw: 9488, deviationPercent: -0.51, marketCapKrw: 50032e6, volumeKrw: 1280773716, shares: 53e5, benchmarkPrice: 37.29, benchmarkCurrency: "USD" },
  { ...commodityEtfs[6], marketPriceKrw: 6780, navKrw: 6854, deviationPercent: -1.08, marketCapKrw: 21696e6, volumeKrw: 1530132940, shares: 32e5, benchmarkPrice: 116.04, benchmarkCurrency: "USD" },
  { ...commodityEtfs[7], marketPriceKrw: 8270, navKrw: 8235, deviationPercent: 0.43, marketCapKrw: 32253e6, volumeKrw: 613956311, shares: 39e5, benchmarkPrice: 26.92, benchmarkCurrency: "USD" }
];
var memoryCache = /* @__PURE__ */ new Map();
function json(data, ttl = 3) {
  return new Response(JSON.stringify(data), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": `public, max-age=${ttl}`,
      "access-control-allow-origin": "*"
    }
  });
}
__name(json, "json");
async function memoize(key, ttlMs, producer) {
  const now = Date.now();
  const entry = memoryCache.get(key);
  if (entry?.value !== void 0 && entry.expiresAt > now) {
    return entry.value;
  }
  if (entry?.promise && entry.expiresAt > now) {
    return entry.promise;
  }
  const promise = producer().then((value) => {
    memoryCache.set(key, {
      expiresAt: now + ttlMs,
      value
    });
    return value;
  }).catch((error) => {
    memoryCache.delete(key);
    throw error;
  });
  memoryCache.set(key, { expiresAt: now + ttlMs, promise });
  return promise;
}
__name(memoize, "memoize");
async function fetchJson(url) {
  const response = await fetch(url, {
    headers: {
      "user-agent": "kimp-site-worker",
      accept: "application/json"
    }
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}`);
  }
  return await response.json();
}
__name(fetchJson, "fetchJson");
async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      "user-agent": "kimp-site-worker",
      accept: "text/html, text/plain;q=0.9, */*;q=0.8"
    }
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}`);
  }
  return await response.text();
}
__name(fetchText, "fetchText");
function decodeHtml(text) {
  return text.replaceAll("&amp;", "&").replaceAll("&quot;", '"').replaceAll("&#39;", "'").replaceAll("&apos;", "'").replaceAll("&lt;", "<").replaceAll("&gt;", ">");
}
__name(decodeHtml, "decodeHtml");
function parseNumber(value) {
  return Number(value.replace(/[^\d.-]/g, ""));
}
__name(parseNumber, "parseNumber");
function extractMetric(html, label) {
  const pattern = new RegExp(
    `${label}</span><div class="flex items-center justify-end gap-1"><span class="text-\\[12px\\] font-semibold">([^<]+)</span>`
  );
  return pattern.exec(html)?.[1] ?? "";
}
__name(extractMetric, "extractMetric");
function premium(localPriceKrw, globalPriceUsd, fxRate) {
  const converted = globalPriceUsd * fxRate;
  return Number(((localPriceKrw - converted) / converted * 100).toFixed(2));
}
__name(premium, "premium");
function relativeSpread(base, comparison) {
  return Number(((base - comparison) / comparison * 100).toFixed(2));
}
__name(relativeSpread, "relativeSpread");
function toneByFearGreed(value) {
  if (value <= 25) return "danger";
  if (value <= 40) return "watch";
  if (value >= 75) return "danger";
  if (value >= 60) return "watch";
  return "normal";
}
__name(toneByFearGreed, "toneByFearGreed");
function toneByAbsolute(value, warning, danger) {
  const abs = Math.abs(value);
  if (abs >= danger) return "danger";
  if (abs >= warning) return "watch";
  return "normal";
}
__name(toneByAbsolute, "toneByAbsolute");
async function getFxRate() {
  return memoize("fx-rate", 3e3, async () => {
    const response = await fetchJson("https://api.frankfurter.dev/v1/latest?from=USD&to=KRW");
    return response.rates.KRW;
  });
}
__name(getFxRate, "getFxRate");
async function getUpbitMarkets() {
  return memoize("upbit-markets", 60 * 60 * 1e3, async () => {
    const response = await fetchJson("https://api.upbit.com/v1/market/all?isDetails=false");
    return response.filter((item) => item.market.startsWith("KRW-"));
  });
}
__name(getUpbitMarkets, "getUpbitMarkets");
async function getUpbitTickers(markets) {
  return memoize("upbit-tickers", 3e3, async () => {
    const chunks = [];
    for (let index = 0; index < markets.length; index += 40) {
      chunks.push(markets.slice(index, index + 40));
    }
    const rows = await Promise.all(
      chunks.map(
        (chunk) => fetchJson(`https://api.upbit.com/v1/ticker?markets=${chunk.join(",")}`)
      )
    );
    return rows.flat();
  });
}
__name(getUpbitTickers, "getUpbitTickers");
async function getBithumbAllTicker() {
  return memoize("bithumb-all", 3e3, async () => {
    return await fetchJson("https://api.bithumb.com/public/ticker/ALL_KRW");
  });
}
__name(getBithumbAllTicker, "getBithumbAllTicker");
async function getBinanceAllPrices() {
  return memoize("binance-all", 3e3, async () => {
    return await fetchJson("https://api.binance.com/api/v3/ticker/price");
  });
}
__name(getBinanceAllPrices, "getBinanceAllPrices");
async function getFearGreed() {
  return memoize("fear-greed", 60 * 1e3, async () => {
    const response = await fetchJson("https://api.alternative.me/fng/?limit=7");
    return response.data.map((item) => ({
      value: Number(item.value),
      label: item.value_classification,
      timestamp: Number(item.timestamp)
    }));
  });
}
__name(getFearGreed, "getFearGreed");
async function getStooqClose(ticker) {
  return memoize(`stooq:${ticker}`, 60 * 60 * 1e3, async () => {
    const response = await fetchText(`https://stooq.com/q/l/?s=${ticker}&i=d`);
    const [, , , , , , close] = response.trim().split(",");
    const closePrice = Number(close);
    if (!Number.isFinite(closePrice)) {
      throw new Error(`Failed to parse benchmark price for ${ticker}`);
    }
    return closePrice;
  });
}
__name(getStooqClose, "getStooqClose");
function mockHistory(symbol) {
  const map = {
    BTC: [0.9, 0.8, 0.4, 0.2, -0.1, 0.02, 0.05],
    ETH: [0.6, 0.5, 0.31, 0.22, 0.16, 0.1, 0.08],
    XRP: [0.5, 0.4, 0.2, 0.1, 0.05, 0.01, -0.02]
  };
  return map[symbol];
}
__name(mockHistory, "mockHistory");
async function buildCoinSummaryRaw() {
  const upbitMarkets = await getUpbitMarkets();
  const [fxRate, upbitTickers, bithumbAll, binanceAll] = await Promise.all([
    getFxRate(),
    getUpbitTickers(upbitMarkets.map((item) => item.market)),
    getBithumbAllTicker(),
    getBinanceAllPrices()
  ]);
  const marketMap = new Map(upbitMarkets.map((item) => [item.market, item]));
  const upbitMap = new Map(upbitTickers.map((item) => [item.market, item]));
  const binanceMap = new Map(binanceAll.map((item) => [item.symbol, Number(item.price)]));
  const bithumbEntries = Object.entries(bithumbAll.data).filter(
    ([key, value]) => key !== "date" && typeof value === "object" && value !== null
  );
  const bithumbMap = new Map(bithumbEntries);
  const symbols = [.../* @__PURE__ */ new Set([...upbitMarkets.map((item) => item.market.replace("KRW-", "")), ...bithumbMap.keys()])];
  const rows = symbols.map((symbol) => {
    const upbit = upbitMap.get(`KRW-${symbol}`);
    const bithumb = bithumbMap.get(symbol);
    const binance = binanceMap.get(`${symbol}USDT`) ?? null;
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
      volumeKrw24h: Number((volumeRaw / 1e9).toFixed(1)),
      volumeKrw24hRaw: volumeRaw
    };
  }).filter((item) => item.upbit !== null || item.bithumb !== null).sort((left, right) => right.volumeKrw24hRaw - left.volumeKrw24hRaw);
  return {
    fxRate,
    rows,
    totalCount: rows.length
  };
}
__name(buildCoinSummaryRaw, "buildCoinSummaryRaw");
async function buildCoinSummary() {
  return memoize("coin-summary", 3e3, buildCoinSummaryRaw);
}
__name(buildCoinSummary, "buildCoinSummary");
async function buildAssetRows(configs, fallbackRows, key) {
  return memoize(key, 3e3, async () => {
    const benchmarkMap = /* @__PURE__ */ new Map();
    const uniqueTickers = [...new Set(configs.map((item) => item.benchmarkSymbol))];
    await Promise.all(
      uniqueTickers.map(async (ticker) => {
        const close = await getStooqClose(ticker);
        benchmarkMap.set(ticker, close);
      })
    );
    const rows = await Promise.all(
      configs.map(async (config, index) => {
        try {
          const html = await fetchText(`https://www.k-etf.com/etf/${config.code}`);
          const title = decodeHtml(/<title>K-ETF - ([^<]+)<\/title>/.exec(html)?.[1] ?? config.name);
          const marketCapKrw = parseNumber(extractMetric(html, "\uC2DC\uAC00\uCD1D\uC561"));
          const volumeKrw = parseNumber(extractMetric(html, "\uAC70\uB798\uB300\uAE08"));
          const shares = parseNumber(extractMetric(html, "\uC0C1\uC7A5\uC8FC\uC2DD\uC218"));
          const navKrw = parseNumber(extractMetric(html, "NAV"));
          const marketPriceKrw = Math.round(marketCapKrw / shares);
          const deviationPercent = Number(((marketPriceKrw - navKrw) / navKrw * 100).toFixed(2));
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
            benchmarkCurrency: "USD"
          };
        } catch {
          return {
            ...fallbackRows[index],
            benchmarkPrice: benchmarkMap.get(config.benchmarkSymbol) ?? fallbackRows[index].benchmarkPrice
          };
        }
      })
    );
    return rows;
  });
}
__name(buildAssetRows, "buildAssetRows");
function leadByAbsoluteValue(rows) {
  return [...rows].sort((left, right) => Math.abs(right.deviationPercent) - Math.abs(left.deviationPercent))[0] ?? null;
}
__name(leadByAbsoluteValue, "leadByAbsoluteValue");
async function buildSummaryRaw() {
  const [coinSummary, etfs, commodities] = await Promise.all([
    buildCoinSummary(),
    buildAssetRows(overseasEtfs, fallbackEtfs, "asset-etf"),
    buildAssetRows(commodityEtfs, fallbackCommodities, "asset-commodity")
  ]);
  const btc = coinSummary.rows.find((item) => item.symbol === "BTC") ?? coinDetailFallbacks.BTC;
  const etfLead = leadByAbsoluteValue(etfs);
  const commodityLead = leadByAbsoluteValue(commodities);
  return {
    updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
    rows: coinSummary.rows,
    totalCount: coinSummary.totalCount,
    etfs,
    commodities,
    overview: {
      fxRate: coinSummary.fxRate,
      cryptoGlobalLead: btc.leadPremium !== null ? {
        label: `BTC ${btc.leadPremium > 0 ? "+" : ""}${btc.leadPremium.toFixed(2)}%`,
        value: btc.leadPremium
      } : null,
      cryptoDomesticLead: btc.upbitVsBithumb !== null ? {
        label: `BTC ${btc.upbitVsBithumb > 0 ? "+" : ""}${btc.upbitVsBithumb.toFixed(2)}%`,
        value: btc.upbitVsBithumb
      } : null,
      etfLead: etfLead ? {
        label: `${etfLead.name} ${etfLead.deviationPercent > 0 ? "+" : ""}${etfLead.deviationPercent.toFixed(2)}%`,
        value: etfLead.deviationPercent
      } : null,
      commodityLead: commodityLead ? {
        label: `${commodityLead.name} ${commodityLead.deviationPercent > 0 ? "+" : ""}${commodityLead.deviationPercent.toFixed(2)}%`,
        value: commodityLead.deviationPercent
      } : null
    }
  };
}
__name(buildSummaryRaw, "buildSummaryRaw");
async function buildSummary() {
  return memoize("summary", 3e3, buildSummaryRaw);
}
__name(buildSummary, "buildSummary");
async function buildRiskSummaryRaw() {
  const [summary, fearGreed] = await Promise.all([buildSummary(), getFearGreed()]);
  const btc = summary.rows.find((item) => item.symbol === "BTC") ?? coinDetailFallbacks.BTC;
  const etfLead = leadByAbsoluteValue(summary.etfs);
  const commodityLead = leadByAbsoluteValue(summary.commodities);
  const currentFearGreed = fearGreed[0] ?? { value: 26, label: "Fear", timestamp: Date.now() / 1e3 };
  const usdKrw = Number(summary.overview.fxRate.toFixed(2));
  return {
    updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
    fearGreed: currentFearGreed,
    fearGreedHistory: fearGreed.slice().reverse().map((item) => item.value),
    usdKrw,
    btcGlobalPremium: btc.leadPremium,
    btcDomesticPremium: btc.upbitVsBithumb,
    etfLead,
    commodityLead,
    signals: [
      {
        id: "fear-greed",
        title: "Crypto Fear & Greed",
        value: currentFearGreed.value,
        label: currentFearGreed.label,
        tone: toneByFearGreed(currentFearGreed.value),
        note: currentFearGreed.value <= 25 ? "\uC2DC\uC7A5 \uC2EC\uB9AC\uAC00 \uAE09\uACA9\uD788 \uC704\uCD95\uB41C \uAD6C\uAC04" : "\uC2EC\uB9AC \uC9C0\uD45C\uAC00 \uADF9\uB2E8 \uAD6C\uAC04\uC740 \uC544\uB2D8"
      },
      {
        id: "usd-krw",
        title: "USD/KRW",
        value: usdKrw,
        label: `${usdKrw.toFixed(2)}`,
        tone: usdKrw >= 1450 ? "danger" : usdKrw >= 1400 ? "watch" : "normal",
        note: usdKrw >= 1450 ? "\uC6D0\uD654 \uC57D\uC138\uAC00 \uAC15\uD574\uC838 \uD574\uC678 \uD658\uC0B0 \uAC00\uACA9\uC5D0 \uBD80\uB2F4" : "\uD658\uC728 \uC2A4\uD2B8\uB808\uC2A4\uAC00 \uC81C\uD55C\uC801"
      },
      {
        id: "btc-global",
        title: "BTC \uD55C\uAD6D/\uD574\uC678 \uD504\uB9AC\uBBF8\uC5C4",
        value: btc.leadPremium ?? 0,
        label: btc.leadPremium !== null ? `${btc.leadPremium > 0 ? "+" : ""}${btc.leadPremium.toFixed(2)}%` : "-",
        tone: toneByAbsolute(btc.leadPremium ?? 0, 0.8, 1.5),
        note: btc.leadPremium !== null && Math.abs(btc.leadPremium) >= 1.5 ? "\uB300\uD45C \uCF54\uC778 \uD504\uB9AC\uBBF8\uC5C4\uC774 \uD06C\uAC8C \uBC8C\uC5B4\uC9D0" : "\uB300\uD45C \uCF54\uC778 \uD504\uB9AC\uBBF8\uC5C4\uC740 \uBE44\uAD50\uC801 \uC548\uC815\uC801"
      },
      {
        id: "btc-domestic",
        title: "BTC \uAD6D\uB0B4 \uAC70\uB798\uC18C \uCC28\uC774",
        value: btc.upbitVsBithumb ?? 0,
        label: btc.upbitVsBithumb !== null ? `${btc.upbitVsBithumb > 0 ? "+" : ""}${btc.upbitVsBithumb.toFixed(2)}%` : "-",
        tone: toneByAbsolute(btc.upbitVsBithumb ?? 0, 0.4, 0.8),
        note: btc.upbitVsBithumb !== null && Math.abs(btc.upbitVsBithumb) >= 0.8 ? "\uAD6D\uB0B4 \uB0B4\uBD80 \uC218\uAE09\uC774 \uD06C\uAC8C \uD754\uB4E4\uB9AC\uB294 \uAD6C\uAC04" : "\uAD6D\uB0B4 \uAC70\uB798\uC18C \uAC04 \uCC28\uC774\uB294 \uC81C\uD55C\uC801"
      },
      {
        id: "etf-gap",
        title: "ETF \uB300\uD45C \uAD34\uB9AC",
        value: etfLead?.deviationPercent ?? 0,
        label: etfLead ? `${etfLead.name} ${etfLead.deviationPercent > 0 ? "+" : ""}${etfLead.deviationPercent.toFixed(2)}%` : "-",
        tone: toneByAbsolute(etfLead?.deviationPercent ?? 0, 0.3, 0.8),
        note: etfLead && Math.abs(etfLead.deviationPercent) >= 0.8 ? "\uAD6D\uB0B4 ETF \uAD34\uB9AC\uAC00 \uD3C9\uC18C\uBCF4\uB2E4 \uD06C\uAC8C \uBC8C\uC5B4\uC9D0" : "ETF \uAD34\uB9AC\uC728\uC740 \uB300\uCCB4\uB85C \uAD00\uB9AC \uAC00\uB2A5\uD55C \uC218\uC900"
      },
      {
        id: "commodity-gap",
        title: "\uC6D0\uC790\uC7AC \uB300\uD45C \uAD34\uB9AC",
        value: commodityLead?.deviationPercent ?? 0,
        label: commodityLead ? `${commodityLead.name} ${commodityLead.deviationPercent > 0 ? "+" : ""}${commodityLead.deviationPercent.toFixed(2)}%` : "-",
        tone: toneByAbsolute(commodityLead?.deviationPercent ?? 0, 0.6, 1.2),
        note: commodityLead && Math.abs(commodityLead.deviationPercent) >= 1.2 ? "\uC6D0\uC790\uC7AC ETF \uC218\uAE09 \uC65C\uACE1\uC774 \uD06C\uAC8C \uD655\uB300\uB428" : "\uC6D0\uC790\uC7AC \uAD34\uB9AC\uC728\uC740 \uAC10\uC2DC \uC218\uC900"
      }
    ]
  };
}
__name(buildRiskSummaryRaw, "buildRiskSummaryRaw");
async function buildRiskSummary() {
  return memoize("risk-summary", 3e3, buildRiskSummaryRaw);
}
__name(buildRiskSummary, "buildRiskSummary");
function getSymbol(url) {
  const raw = (url.searchParams.get("symbol") || "BTC").toUpperCase();
  return coinSymbols.includes(raw) ? raw : "BTC";
}
__name(getSymbol, "getSymbol");
function getFallbackSummary() {
  const rows = Object.values(coinDetailFallbacks);
  return {
    updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
    rows,
    totalCount: rows.length,
    etfs: fallbackEtfs,
    commodities: fallbackCommodities,
    overview: {
      fxRate: 1478.99,
      cryptoGlobalLead: { label: "BTC +0.05%", value: 0.05 },
      cryptoDomesticLead: { label: "BTC +0.01%", value: 0.01 },
      etfLead: { label: "KODEX \uBBF8\uAD6D30\uB144\uAD6D\uCC44\uC6B8\uD2B8\uB77C\uC120\uBB3C(H) -0.41%", value: -0.41 },
      commodityLead: { label: "TIGER \uC6D0\uC720\uC120\uBB3CEnhanced(H) -1.08%", value: -1.08 }
    }
  };
}
__name(getFallbackSummary, "getFallbackSummary");
function getFallbackRisk() {
  return {
    updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
    fearGreed: {
      value: 26,
      label: "Fear",
      timestamp: Math.floor(Date.now() / 1e3)
    },
    fearGreedHistory: [16, 12, 21, 23, 23, 21, 26],
    usdKrw: 1478.99,
    btcGlobalPremium: 0.05,
    btcDomesticPremium: 0.01,
    etfLead: fallbackEtfs[7],
    commodityLead: fallbackCommodities[6],
    signals: [
      { id: "fear-greed", title: "Crypto Fear & Greed", value: 26, label: "Fear", tone: "watch", note: "\uC2DC\uC7A5 \uC2EC\uB9AC\uAC00 \uC704\uCD95\uB41C \uAD6C\uAC04" },
      { id: "usd-krw", title: "USD/KRW", value: 1478.99, label: "1478.99", tone: "danger", note: "\uC6D0\uD654 \uC57D\uC138 \uAD6C\uAC04" },
      { id: "btc-global", title: "BTC \uD55C\uAD6D/\uD574\uC678 \uD504\uB9AC\uBBF8\uC5C4", value: 0.05, label: "+0.05%", tone: "normal", note: "\uB300\uD45C \uCF54\uC778 \uD504\uB9AC\uBBF8\uC5C4\uC740 \uC81C\uD55C\uC801" },
      { id: "btc-domestic", title: "BTC \uAD6D\uB0B4 \uAC70\uB798\uC18C \uCC28\uC774", value: 0.01, label: "+0.01%", tone: "normal", note: "\uAD6D\uB0B4 \uB0B4\uBD80 \uC218\uAE09 \uCC28\uC774\uB294 \uC791\uC74C" },
      { id: "etf-gap", title: "ETF \uB300\uD45C \uAD34\uB9AC", value: -0.41, label: "KODEX \uBBF8\uAD6D30\uB144\uAD6D\uCC44\uC6B8\uD2B8\uB77C\uC120\uBB3C(H) -0.41%", tone: "watch", note: "\uCC44\uAD8C ETF \uAD34\uB9AC \uD655\uB300 \uAC10\uC2DC" },
      { id: "commodity-gap", title: "\uC6D0\uC790\uC7AC \uB300\uD45C \uAD34\uB9AC", value: -1.08, label: "TIGER \uC6D0\uC720\uC120\uBB3CEnhanced(H) -1.08%", tone: "danger", note: "\uC6D0\uC790\uC7AC ETF \uAD34\uB9AC \uD655\uB300" }
    ]
  };
}
__name(getFallbackRisk, "getFallbackRisk");
var src_default = {
  async fetch(request, env) {
    const ttl = Number(env.CACHE_TTL || "3");
    const url = new URL(request.url);
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "access-control-allow-origin": "*",
          "access-control-allow-methods": "GET, OPTIONS"
        }
      });
    }
    try {
      if (url.pathname === "/api/summary") {
        return json(await buildSummary(), ttl);
      }
      if (url.pathname === "/api/coins") {
        const coins = await buildCoinSummary();
        return json({ updatedAt: (/* @__PURE__ */ new Date()).toISOString(), rows: coins.rows, totalCount: coins.totalCount, fxRate: coins.fxRate }, ttl);
      }
      if (url.pathname === "/api/etf") {
        const rows = await buildAssetRows(overseasEtfs, fallbackEtfs, "asset-etf");
        return json({ updatedAt: (/* @__PURE__ */ new Date()).toISOString(), rows }, ttl);
      }
      if (url.pathname === "/api/commodities") {
        const rows = await buildAssetRows(commodityEtfs, fallbackCommodities, "asset-commodity");
        return json({ updatedAt: (/* @__PURE__ */ new Date()).toISOString(), rows }, ttl);
      }
      if (url.pathname === "/api/risk") {
        return json(await buildRiskSummary(), ttl);
      }
      if (url.pathname === "/api/premium") {
        const symbol = getSymbol(url);
        const summary = await buildCoinSummary();
        const row = summary.rows.find((item) => item.symbol === symbol) ?? coinDetailFallbacks[symbol];
        return json({ updatedAt: (/* @__PURE__ */ new Date()).toISOString(), row }, ttl);
      }
      if (url.pathname === "/api/spread") {
        const symbol = getSymbol(url);
        const summary = await buildCoinSummary();
        const row = summary.rows.find((item) => item.symbol === symbol) ?? coinDetailFallbacks[symbol];
        return json(
          {
            updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
            symbol,
            spread: {
              upbitVsBinance: row.upbitPremium,
              bithumbVsBinance: row.bithumbPremium,
              upbitVsBithumb: row.upbitVsBithumb
            }
          },
          ttl
        );
      }
      if (url.pathname === "/api/history") {
        const symbol = getSymbol(url);
        return json(
          {
            symbol,
            range: url.searchParams.get("range") || "7d",
            values: mockHistory(symbol)
          },
          ttl
        );
      }
      return new Response("Not found", { status: 404 });
    } catch (error) {
      if (url.pathname === "/api/risk") {
        return json({ ...getFallbackRisk(), error: error instanceof Error ? error.message : "Unknown error", fallback: true }, 0);
      }
      return json({ ...getFallbackSummary(), error: error instanceof Error ? error.message : "Unknown error", fallback: true }, 0);
    }
  }
};

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-JLAJZk/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = src_default;

// node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-JLAJZk/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=index.js.map
