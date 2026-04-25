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

type BtcFundingSnapshot = {
  rate: number;
  markPrice: number;
};

type BtcOiSnapshot = {
  change24hPercent: number;
  openInterestBtc: number;
  openInterestUsd: number;
};

interface Env {
  CACHE_TTL?: string;
  MACRO_KV?: KVNamespace;
  MACRO_API_TOKEN?: string;
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
  { code: '444490', slug: 'won-us-sp500', name: 'WON 미국S&P500', category: '해외지수 ETF', benchmarkLabel: 'S&P 500 기준', benchmarkSymbol: 'SPY.US', benchmarkNote: '후발 S&P500 ETF와 대형 ETF 괴리를 비교하기 좋은 상품' },
  { code: '448290', slug: 'tiger-us-sp500-hedged', name: 'TIGER 미국S&P500(H)', category: '해외지수 ETF', benchmarkLabel: 'S&P 500 기준', benchmarkSymbol: 'SPY.US', benchmarkNote: '환헤지형 S&P500 ETF로 원달러 영향이 작은 편입니다.' },
  { code: '449770', slug: 'kiwoom-us-sp500', name: 'KIWOOM 미국S&P500', category: '해외지수 ETF', benchmarkLabel: 'S&P 500 기준', benchmarkSymbol: 'VOO.US', benchmarkNote: '국내 상장 S&P500 추종 상품 간 체감 괴리를 비교하는 축입니다.' },
  { code: '429000', slug: 'tiger-us-sp500-dividend-aristocrats', name: 'TIGER 미국S&P500배당귀족', category: '배당 ETF', benchmarkLabel: '미국 배당귀족 기준', benchmarkSymbol: 'NOBL.US', benchmarkNote: '배당 스타일 ETF의 국내 괴리를 따로 읽을 수 있는 상품' },
  { code: '438080', slug: 'ace-us-sp500-us-treasury-mix', name: 'ACE 미국S&P500미국채혼합50액티브', category: '채권혼합 ETF', benchmarkLabel: 'S&P500·미국채 혼합 기준', benchmarkSymbol: 'AOA.US', benchmarkNote: '주식과 채권을 섞은 자산배분 ETF의 괴리 감각을 보는 축입니다.' },
  { code: '483240', slug: 'tiger-us-nasdaq100-etf-futures', name: 'TIGER 미국나스닥100ETF선물', category: '해외지수 ETF', benchmarkLabel: 'NASDAQ 100 기준', benchmarkSymbol: 'QQQ.US', benchmarkNote: '선물형 나스닥100 상품과 일반 현물형의 괴리 차이를 비교합니다.' },
  { code: '453080', slug: 'kiwoom-us-nasdaq100-hedged', name: 'KIWOOM 미국나스닥100(H)', category: '해외지수 ETF', benchmarkLabel: 'NASDAQ 100 기준', benchmarkSymbol: 'QQQ.US', benchmarkNote: '환헤지형 나스닥100 ETF로 환율 영향이 작은 비교축입니다.' },
  { code: '200030', slug: 'kodex-us-sp500-industrials', name: 'KODEX 미국S&P500산업재(합성)', category: '섹터 ETF', benchmarkLabel: '미국 산업재 기준', benchmarkSymbol: 'XLI.US', benchmarkNote: '미국 산업재 섹터 괴리를 따로 추적할 수 있는 상품입니다.' },
  { code: '463640', slug: 'kodex-us-sp500-utilities', name: 'KODEX 미국S&P500유틸리티', category: '섹터 ETF', benchmarkLabel: '미국 유틸리티 기준', benchmarkSymbol: 'XLU.US', benchmarkNote: '방어주 성격의 유틸리티 ETF를 따로 보는 보조 지표입니다.' },
  { code: '453650', slug: 'kodex-us-sp500-financials', name: 'KODEX 미국S&P500금융', category: '섹터 ETF', benchmarkLabel: '미국 금융 섹터 기준', benchmarkSymbol: 'XLF.US', benchmarkNote: '미국 금융주 수급과 국내 체감 괴리를 같이 읽는 섹터 ETF입니다.' },
  { code: '218420', slug: 'kodex-us-sp500-energy', name: 'KODEX 미국S&P500에너지(합성)', category: '섹터 ETF', benchmarkLabel: '미국 에너지 섹터 기준', benchmarkSymbol: 'XLE.US', benchmarkNote: '미국 에너지 섹터와 원유 심리가 같이 반영되는 보조 축입니다.' },
  { code: '0137V0', slug: 'kiwoom-us-sp500-momentum', name: 'KIWOOM 미국S&P500모멘텀', category: '스타일 ETF', benchmarkLabel: '미국 모멘텀 스타일 기준', benchmarkSymbol: 'MTUM.US', benchmarkNote: 'S&P500 내 모멘텀 강한 종목만 따로 묶어 읽는 스타일 ETF입니다.' },
  { code: '0019K0', slug: 'time-us-nasdaq100-bond-mix', name: 'TIME 미국나스닥100채권혼합50액티브', category: '채권혼합 ETF', benchmarkLabel: '미국 나스닥100·단기채 혼합 기준', benchmarkSymbol: 'QQQ.US', benchmarkNote: '나스닥100과 채권을 섞은 혼합형 ETF로 위험 선호 완화 구간 비교에 유용합니다.' },
  { code: '0137W0', slug: 'kiwoom-sp500-gold', name: 'KIWOOM S&P500 & GOLD', category: '혼합자산 ETF', benchmarkLabel: 'S&P500·Gold 혼합 기준', benchmarkSymbol: 'GLD.US', benchmarkNote: '미국 주식과 금을 섞은 혼합형 ETF로 한국식 프리미엄 관점과 잘 맞는 상품입니다.' },
  { code: '0041E0', slug: 'kodex-us-sp500-active', name: 'KODEX 미국S&P500액티브', category: '액티브 ETF', benchmarkLabel: 'S&P 500 액티브 기준', benchmarkSymbol: 'SPY.US', benchmarkNote: '액티브 방식으로 S&P500 초과성과를 노리는 ETF라 일반형과 괴리를 비교하기 좋습니다.' },
  { code: '483570', slug: 'kcgi-us-sp500-top10', name: 'KCGI 미국S&P500TOP10', category: '집중형 ETF', benchmarkLabel: 'S&P500 TOP10 기준', benchmarkSymbol: 'SPY.US', benchmarkNote: '미국 대형주 상위 10종목 집중형이라 체감 괴리가 빠르게 드러나는 축입니다.' },
  { code: '0089C0', slug: 'kodex-us-sp500-covered-call', name: 'KODEX 미국S&P500변동성확대시커버드콜', category: '커버드콜 ETF', benchmarkLabel: 'S&P500 변동성 커버드콜 기준', benchmarkSymbol: 'SPY.US', benchmarkNote: '월배당·커버드콜 수급까지 함께 읽을 수 있어 일반 S&P500 ETF와 결이 다른 상품입니다.' },
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
  { code: '0072R0', slug: 'tiger-krx-gold-spot', name: 'TIGER KRX금현물', category: '원자재 ETF', benchmarkLabel: 'KRX 금현물 기준', benchmarkSymbol: 'GLD.US', benchmarkNote: '국내 금현물 ETF를 서로 비교할 때 유용한 기준 축입니다.' },
  { code: '261220', slug: 'kodex-wti-oil-futures', name: 'KODEX WTI원유선물(H)', category: '원자재 ETF', benchmarkLabel: 'WTI 원유 기준', benchmarkSymbol: 'USO.US', benchmarkNote: '국내 원유 ETF 간 괴리 차이를 크게 비교할 수 있는 축입니다.' },
  { code: '137610', slug: 'tiger-agriculture-futures', name: 'TIGER 농산물선물Enhanced(H)', category: '원자재 ETF', benchmarkLabel: '농산물 ETF 기준', benchmarkSymbol: 'DBA.US', benchmarkNote: '주요 농산물선물 ETF 간 괴리를 비교할 수 있는 상품입니다.' },
  { code: '280940', slug: 'kodex-gold-futures-inverse', name: 'KODEX 골드선물인버스(H)', category: '원자재 ETF', benchmarkLabel: 'Gold ETF 기준', benchmarkSymbol: 'GLD.US', benchmarkNote: '금 가격 하락 베팅형 상품까지 같이 보면 귀금속 수급 해석 폭이 넓어집니다.' },
  { code: '225130', slug: 'ace-gold-futures-leverage', name: 'ACE 골드선물 레버리지(합성 H)', category: '원자재 ETF', benchmarkLabel: 'Gold ETF 기준', benchmarkSymbol: 'GLD.US', benchmarkNote: '금 레버리지 상품까지 함께 보면 귀금속 과열 구간을 더 빨리 체감할 수 있습니다.' },
  { code: '334690', slug: 'rise-palladium-futures', name: 'RISE 팔라듐선물(H)', category: '원자재 ETF', benchmarkLabel: '팔라듐 선물 기준', benchmarkSymbol: 'PALL.US', benchmarkNote: '팔라듐 선물 ETF까지 포함해 귀금속 범위를 더 넓혔습니다.' },
  { code: '334700', slug: 'rise-palladium-inverse', name: 'RISE 팔라듐인버스선물(H)', category: '원자재 ETF', benchmarkLabel: '팔라듐 선물 인버스 기준', benchmarkSymbol: 'PALL.US', benchmarkNote: '팔라듐 인버스 상품까지 넣어 원자재 보드를 더 넓게 읽을 수 있게 했습니다.' },
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
  { ...overseasEtfs[8], marketPriceKrw: 19485, navKrw: 19355, deviationPercent: 0.67, marketCapKrw: 70146000000, volumeKrw: 426429090, shares: 3600000, benchmarkPrice: 710.14, benchmarkCurrency: 'USD' },
  { ...overseasEtfs[9], marketPriceKrw: 16275, navKrw: 16084, deviationPercent: 1.19, marketCapKrw: 484995000000, volumeKrw: 3861082238, shares: 29800000, benchmarkPrice: 710.14, benchmarkCurrency: 'USD' },
  { ...overseasEtfs[10], marketPriceKrw: 17460, navKrw: 17395, deviationPercent: 0.37, marketCapKrw: 250765000000, volumeKrw: 1204381550, shares: 14400000, benchmarkPrice: 652.78, benchmarkCurrency: 'USD' },
  { ...overseasEtfs[11], marketPriceKrw: 13995, navKrw: 14072, deviationPercent: -0.55, marketCapKrw: 142049250000, volumeKrw: 1635460961, shares: 10150000, benchmarkPrice: 101.77, benchmarkCurrency: 'USD' },
  { ...overseasEtfs[12], marketPriceKrw: 14210, navKrw: 14169, deviationPercent: 0.29, marketCapKrw: 964859000000, volumeKrw: 6910649730, shares: 67900000, benchmarkPrice: 59.44, benchmarkCurrency: 'USD' },
  { ...overseasEtfs[13], marketPriceKrw: 6520, navKrw: 6513, deviationPercent: 0.11, marketCapKrw: 215160000000, volumeKrw: 3214580220, shares: 33000000, benchmarkPrice: 648.85, benchmarkCurrency: 'USD' },
  { ...overseasEtfs[14], marketPriceKrw: 22240, navKrw: 22180, deviationPercent: 0.27, marketCapKrw: 312540000000, volumeKrw: 2208114445, shares: 14100000, benchmarkPrice: 648.85, benchmarkCurrency: 'USD' },
  { ...overseasEtfs[15], marketPriceKrw: 44175, navKrw: 44248, deviationPercent: -0.16, marketCapKrw: 50359500000, volumeKrw: 145649147, shares: 1140000, benchmarkPrice: 139.22, benchmarkCurrency: 'USD' },
  { ...overseasEtfs[16], marketPriceKrw: 13860, navKrw: 13912, deviationPercent: -0.37, marketCapKrw: 64325000000, volumeKrw: 258410220, shares: 4630000, benchmarkPrice: 76.33, benchmarkCurrency: 'USD' },
  { ...overseasEtfs[17], marketPriceKrw: 18240, navKrw: 17986, deviationPercent: 1.41, marketCapKrw: 42147250000, volumeKrw: 303160743, shares: 2350000, benchmarkPrice: 49.88, benchmarkCurrency: 'USD' },
  { ...overseasEtfs[18], marketPriceKrw: 8965, navKrw: 8921, deviationPercent: 0.49, marketCapKrw: 39091300000, volumeKrw: 182435690, shares: 4360000, benchmarkPrice: 97.42, benchmarkCurrency: 'USD' },
  { ...overseasEtfs[19], marketPriceKrw: 12935, navKrw: 12882, deviationPercent: 0.41, marketCapKrw: 86664500000, volumeKrw: 611905217, shares: 6700000, benchmarkPrice: 216.47, benchmarkCurrency: 'USD' },
  { ...overseasEtfs[20], marketPriceKrw: 12680, navKrw: 12606, deviationPercent: 0.59, marketCapKrw: 177520000000, volumeKrw: 7157499591, shares: 14000000, benchmarkPrice: 648.85, benchmarkCurrency: 'USD' },
  { ...overseasEtfs[21], marketPriceKrw: 10420, navKrw: 10366, deviationPercent: 0.52, marketCapKrw: 57310000000, volumeKrw: 268420510, shares: 5500000, benchmarkPrice: 445.93, benchmarkCurrency: 'USD' },
  { ...overseasEtfs[22], marketPriceKrw: 11215, navKrw: 11168, deviationPercent: 0.42, marketCapKrw: 132337000000, volumeKrw: 894511462, shares: 11800000, benchmarkPrice: 710.14, benchmarkCurrency: 'USD' },
  { ...overseasEtfs[23], marketPriceKrw: 16140, navKrw: 16052, deviationPercent: 0.55, marketCapKrw: 64560000000, volumeKrw: 348190420, shares: 4000000, benchmarkPrice: 710.14, benchmarkCurrency: 'USD' },
  { ...overseasEtfs[24], marketPriceKrw: 9870, navKrw: 9816, deviationPercent: 0.55, marketCapKrw: 73038000000, volumeKrw: 511235882, shares: 7400000, benchmarkPrice: 710.14, benchmarkCurrency: 'USD' },
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
  { ...commodityEtfs[8], marketPriceKrw: 15250, navKrw: 15144, deviationPercent: 0.7, marketCapKrw: 1510512500000, volumeKrw: 27391302524, shares: 99050000, benchmarkPrice: 445.93, benchmarkCurrency: 'USD' },
  { ...commodityEtfs[9], marketPriceKrw: 22930, navKrw: 24325, deviationPercent: -5.73, marketCapKrw: 85414250000, volumeKrw: 21397978840, shares: 3725000, benchmarkPrice: 116.04, benchmarkCurrency: 'USD' },
  { ...commodityEtfs[10], marketPriceKrw: 5290, navKrw: 5226, deviationPercent: 1.22, marketCapKrw: 13225000000, volumeKrw: 226466215, shares: 2500000, benchmarkPrice: 26.92, benchmarkCurrency: 'USD' },
  { ...commodityEtfs[11], marketPriceKrw: 6180, navKrw: 6205, deviationPercent: -0.4, marketCapKrw: 28740000000, volumeKrw: 512440900, shares: 4650000, benchmarkPrice: 445.93, benchmarkCurrency: 'USD' },
  { ...commodityEtfs[12], marketPriceKrw: 20880, navKrw: 20740, deviationPercent: 0.68, marketCapKrw: 78220000000, volumeKrw: 1180224500, shares: 3770000, benchmarkPrice: 445.93, benchmarkCurrency: 'USD' },
  { ...commodityEtfs[13], marketPriceKrw: 7540, navKrw: 7368, deviationPercent: 2.33, marketCapKrw: 5162500000, volumeKrw: 51600588, shares: 700000, benchmarkPrice: 96.42, benchmarkCurrency: 'USD' },
  { ...commodityEtfs[14], marketPriceKrw: 7180, navKrw: 7244, deviationPercent: -0.88, marketCapKrw: 4665000000, volumeKrw: 39957372, shares: 650000, benchmarkPrice: 96.42, benchmarkCurrency: 'USD' },
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

function formatSignedPercent(value: number) {
  return `${value > 0 ? '+' : ''}${value.toFixed(2)}%`;
}

function buildKimpIndex(rows: CoinRow[]) {
  const weights: Record<string, number> = { BTC: 0.5, ETH: 0.3, USDT: 0.2 };
  let total = 0;
  let weightSum = 0;

  for (const [symbol, weight] of Object.entries(weights)) {
    const row = rows.find((item) => item.symbol === symbol);
    if (row?.leadPremium === null || row?.leadPremium === undefined) continue;
    total += row.leadPremium * weight;
    weightSum += weight;
  }

  const value = weightSum ? Number((total / weightSum).toFixed(2)) : 0;
  const label = value < -1 ? '얼음' : value <= 1 ? '정상' : value <= 3 ? '과열' : '극단 과열';
  const tone = value < -1 || value > 3 ? 'danger' : value > 1 ? 'watch' : 'normal';

  return {
    value,
    label,
    tone,
    display: `${formatSignedPercent(value)} · ${label}`,
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

async function getBtcFunding() {
  return memoize('btc-funding', 60 * 1000, async () => {
    const response = await fetchJson<{ lastFundingRate: string; markPrice: string }>(
      'https://fapi.binance.com/fapi/v1/premiumIndex?symbol=BTCUSDT',
    );

    return {
      rate: Number(response.lastFundingRate),
      markPrice: Number(response.markPrice),
    } satisfies BtcFundingSnapshot;
  });
}

async function getBtcOpenInterest() {
  return memoize('btc-open-interest', 60 * 1000, async () => {
    const response = await fetchJson<Array<{ sumOpenInterest: string; sumOpenInterestValue: string }>>(
      'https://fapi.binance.com/futures/data/openInterestHist?symbol=BTCUSDT&period=1h&limit=25',
    );
    const latest = response.at(-1);
    const oldest = response[0];
    const latestUsd = Number(latest?.sumOpenInterestValue ?? 0);
    const oldestUsd = Number(oldest?.sumOpenInterestValue ?? 0);

    if (!latest || !oldest || oldestUsd <= 0) {
      throw new Error('Failed to parse BTC open interest history');
    }

    return {
      change24hPercent: Number((((latestUsd - oldestUsd) / oldestUsd) * 100).toFixed(2)),
      openInterestBtc: Number(latest.sumOpenInterest),
      openInterestUsd: latestUsd,
    } satisfies BtcOiSnapshot;
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
  const [summary, fearGreed, funding, openInterest] = await Promise.all([
    buildSummary(),
    getFearGreed(),
    getBtcFunding().catch(() => null),
    getBtcOpenInterest().catch(() => null),
  ]);
  const btc = summary.rows.find((item) => item.symbol === 'BTC') ?? coinDetailFallbacks.BTC;
  const etfLead = leadByAbsoluteValue(summary.etfs);
  const commodityLead = leadByAbsoluteValue(summary.commodities);
  const currentFearGreed = fearGreed[0] ?? { value: 26, label: 'Fear', timestamp: Date.now() / 1000 };
  const usdKrw = Number(summary.overview.fxRate.toFixed(2));
  const kimpIndex = buildKimpIndex(summary.rows);

  return {
    updatedAt: new Date().toISOString(),
    fearGreed: currentFearGreed,
    fearGreedHistory: fearGreed.slice().reverse().map((item) => item.value),
    usdKrw,
    kimpIndex,
    btcGlobalPremium: btc.leadPremium,
    btcDomesticPremium: btc.upbitVsBithumb,
    btcFunding: funding,
    btcOpenInterest: openInterest,
    etfLead,
    commodityLead,
    signals: [
      {
        id: 'kimp-index',
        title: 'KIMP Index',
        value: kimpIndex.value,
        label: kimpIndex.display,
        tone: kimpIndex.tone,
        note: 'BTC·ETH·USDT 가중 평균 한국 프리미엄',
      },
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
      ...(funding
        ? [
            {
              id: 'btc-funding',
              title: 'BTC 선물 펀딩비',
              value: Number((funding.rate * 100).toFixed(4)),
              label: `${funding.rate > 0 ? '+' : ''}${(funding.rate * 100).toFixed(4)}%`,
              tone: funding.rate >= 0.0005 || funding.rate <= -0.0003 ? 'danger' : Math.abs(funding.rate) >= 0.0002 ? 'watch' : 'normal',
              note:
                funding.rate >= 0.0005
                  ? '롱 편향 과밀 구간'
                  : funding.rate <= -0.0003
                    ? '숏 편향 과밀 구간'
                    : '선물 포지션 쏠림은 제한적',
            },
          ]
        : []),
      ...(openInterest
        ? [
            {
              id: 'btc-open-interest',
              title: 'BTC OI 24h 변화',
              value: openInterest.change24hPercent,
              label: formatSignedPercent(openInterest.change24hPercent),
              tone: toneByAbsolute(openInterest.change24hPercent, 3, 5),
              note:
                Math.abs(openInterest.change24hPercent) >= 5
                  ? '레버리지 포지션 급변 감시'
                  : '청산 대리지표는 안정권',
            },
          ]
        : []),
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
    kimpIndex: { value: 0.06, label: '정상', tone: 'normal', display: '+0.06% · 정상' },
    btcGlobalPremium: 0.05,
    btcDomesticPremium: 0.01,
    btcFunding: { rate: 0.0001, markPrice: 76135.19 },
    btcOpenInterest: { change24hPercent: 1.2, openInterestBtc: 52000, openInterestUsd: 3959000000 },
    etfLead: fallbackEtfs[7],
    commodityLead: fallbackCommodities[6],
    signals: [
      { id: 'kimp-index', title: 'KIMP Index', value: 0.06, label: '+0.06% · 정상', tone: 'normal', note: 'BTC·ETH·USDT 가중 평균 한국 프리미엄' },
      { id: 'fear-greed', title: 'Crypto Fear & Greed', value: 26, label: 'Fear', tone: 'watch', note: '시장 심리가 위축된 구간' },
      { id: 'usd-krw', title: 'USD/KRW', value: 1478.99, label: '1478.99', tone: 'danger', note: '원화 약세 구간' },
      { id: 'btc-global', title: 'BTC 한국/해외 프리미엄', value: 0.05, label: '+0.05%', tone: 'normal', note: '대표 코인 프리미엄은 제한적' },
      { id: 'btc-domestic', title: 'BTC 국내 거래소 차이', value: 0.01, label: '+0.01%', tone: 'normal', note: '국내 내부 수급 차이는 작음' },
      { id: 'etf-gap', title: 'ETF 대표 괴리', value: -0.41, label: 'KODEX 미국30년국채울트라선물(H) -0.41%', tone: 'watch', note: '채권 ETF 괴리 확대 감시' },
      { id: 'commodity-gap', title: '원자재 대표 괴리', value: -1.08, label: 'TIGER 원유선물Enhanced(H) -1.08%', tone: 'danger', note: '원자재 ETF 괴리 확대' },
      { id: 'btc-funding', title: 'BTC 선물 펀딩비', value: 0.01, label: '+0.0100%', tone: 'normal', note: '선물 포지션 쏠림은 제한적' },
      { id: 'btc-open-interest', title: 'BTC OI 24h 변화', value: 1.2, label: '+1.20%', tone: 'normal', note: '청산 대리지표는 안정권' },
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
          'access-control-allow-methods': 'GET, POST, OPTIONS',
          'access-control-allow-headers': 'Authorization, Content-Type',
        },
      });
    }

    try {
      // 모닝 매크로 요약 (Python에서 POST, 사이트에서 GET)
      if (url.pathname === '/api/macro-summary') {
        if (request.method === 'POST') {
          if (!env.MACRO_API_TOKEN) {
            return json({ error: 'MACRO_API_TOKEN unset' }, 0);
          }
          const auth = request.headers.get('authorization') || '';
          const expected = `Bearer ${env.MACRO_API_TOKEN}`;
          if (auth !== expected) {
            return new Response(JSON.stringify({ error: 'unauthorized' }), {
              status: 401,
              headers: {
                'content-type': 'application/json; charset=utf-8',
                'access-control-allow-origin': '*',
              },
            });
          }
          if (!env.MACRO_KV) {
            return json({ error: 'MACRO_KV unbound' }, 0);
          }
          let payload: Record<string, unknown>;
          try {
            payload = (await request.json()) as Record<string, unknown>;
          } catch {
            return new Response(JSON.stringify({ error: 'invalid json' }), {
              status: 400,
              headers: { 'content-type': 'application/json; charset=utf-8' },
            });
          }
          const record = {
            updatedAt: new Date().toISOString(),
            ...payload,
          };
          await env.MACRO_KV.put('latest', JSON.stringify(record));
          return json({ ok: true, updatedAt: record.updatedAt }, 0);
        }
        // GET — 최신 요약 반환
        if (!env.MACRO_KV) {
          return json({ error: 'MACRO_KV unbound', record: null }, 0);
        }
        const raw = await env.MACRO_KV.get('latest');
        if (!raw) {
          return json({ record: null }, 60);
        }
        try {
          return json(JSON.parse(raw), 60);
        } catch {
          return json({ record: null, error: 'parse failed' }, 0);
        }
      }

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
