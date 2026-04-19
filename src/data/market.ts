export type CoinSymbol = 'BTC' | 'ETH' | 'XRP';

export type CoinSnapshot = {
  symbol: CoinSymbol;
  name: string;
  slug: string;
  localPriceKrw: number;
  secondLocalPriceKrw: number;
  globalPriceUsd: number;
  premiumPercent: number;
  domesticSpreadPercent: number;
  change24h: number;
  volumeKrwBn: number;
  lowHighRange: string;
  trend7d: number[];
  trend30d: number[];
  summary: string;
  caution: string;
};

export type PremiumSnapshot = {
  code: string;
  name: string;
  slug: string;
  category: string;
  marketPriceKrw: number;
  navKrw: number;
  deviationPercent: number;
  marketCapKrw: number;
  volumeKrw: number;
  shares: number;
  benchmarkLabel: string;
  benchmarkSymbol: string;
  benchmarkPrice: number;
  benchmarkCurrency: 'USD';
  benchmarkNote: string;
};

export const marketMeta = {
  updatedAt: '2026-04-18 22:45 KST',
  fxRateUsdKrw: 1478.99,
  cacheWindowSeconds: 3,
  dataPolicy:
    '코인은 업비트, 빗썸, 바이낸스와 환율 데이터를 묶어 3초 캐시로 집계합니다. ETF와 원자재는 국내 상장 ETF의 시장가격과 NAV 괴리율을 우선 추적하고, 해외 벤치마크는 보조 기준값으로 병기합니다.',
};

export const coinSnapshots: Record<CoinSymbol, CoinSnapshot> = {
  BTC: {
    symbol: 'BTC',
    name: '비트코인',
    slug: 'btc',
    localPriceKrw: 112_661_000,
    secondLocalPriceKrw: 112_650_000,
    globalPriceUsd: 76_135.19,
    premiumPercent: 0.05,
    domesticSpreadPercent: 0.01,
    change24h: -0.98,
    volumeKrwBn: 286.9,
    lowHighRange: '111.8M - 113.9M KRW',
    trend7d: [0.9, 0.8, 0.4, 0.2, -0.1, 0.02, 0.05],
    trend30d: [3.1, 2.8, 1.9, 1.2, 0.6, 0.3, 0.12, 0.05],
    summary:
      '비트코인은 한국/해외 김프와 국내 거래소 차이를 함께 보면 한국시장 전체의 위험 선호가 어떻게 움직이는지 읽기 좋습니다.',
    caution:
      '실제 차익 여부는 수수료, 출금 대기, 환전 비용, 세금에 크게 좌우되므로 화면 숫자를 그대로 수익으로 해석하면 안 됩니다.',
  },
  ETH: {
    symbol: 'ETH',
    name: '이더리움',
    slug: 'eth',
    localPriceKrw: 3_486_000,
    secondLocalPriceKrw: 3_487_000,
    globalPriceUsd: 2_355.21,
    premiumPercent: 0.08,
    domesticSpreadPercent: -0.03,
    change24h: -2.3,
    volumeKrwBn: 252.7,
    lowHighRange: '3.43M - 3.59M KRW',
    trend7d: [0.6, 0.5, 0.31, 0.22, 0.16, 0.1, 0.08],
    trend30d: [1.7, 1.5, 1.1, 0.8, 0.5, 0.22, 0.12, 0.08],
    summary:
      '이더리움은 국내 원화 수요와 글로벌 레이어1 리스크 선호가 섞여 움직여, 김프와 국내 거래소 차이를 함께 보는 편이 더 유효합니다.',
    caution:
      '알트 회전 장세가 강할 때는 실질 프리미엄보다 체감 프리미엄이 더 크게 느껴질 수 있습니다.',
  },
  XRP: {
    symbol: 'XRP',
    name: '리플',
    slug: 'xrp',
    localPriceKrw: 2_119,
    secondLocalPriceKrw: 2_121,
    globalPriceUsd: 1.433,
    premiumPercent: -0.02,
    domesticSpreadPercent: -0.09,
    change24h: -2.62,
    volumeKrwBn: 280.9,
    lowHighRange: '2,080 - 2,170 KRW',
    trend7d: [0.5, 0.4, 0.2, 0.1, 0.05, 0.01, -0.02],
    trend30d: [1.3, 1.1, 0.8, 0.5, 0.3, 0.1, 0.04, -0.02],
    summary:
      'XRP는 거래대금이 크고 국내 수급 민감도가 높아 한국시장 내부 프리미엄을 읽는 데 자주 쓰이는 코인입니다.',
    caution:
      '호가가 얇은 순간에는 작은 체결만으로도 프리미엄이 튀어 보일 수 있으니 거래대금과 함께 읽어야 합니다.',
  },
};

export const featuredOrder: CoinSymbol[] = ['BTC', 'ETH', 'XRP'];

export const etfSnapshots: PremiumSnapshot[] = [
  {
    code: '379800',
    name: 'KODEX 미국S&P500',
    slug: 'kodex-us-sp500',
    category: '해외지수 ETF',
    marketPriceKrw: 23_705,
    navKrw: 23_715,
    deviationPercent: -0.04,
    marketCapKrw: 8_485_204_750_000,
    volumeKrw: 473_308_839_826,
    shares: 357_950_000,
    benchmarkLabel: 'S&P 500 기준',
    benchmarkSymbol: 'SPY.US',
    benchmarkPrice: 710.14,
    benchmarkCurrency: 'USD',
    benchmarkNote: '미국 대표지수 ETF의 국내 상장 괴리율',
  },
  {
    code: '360200',
    name: 'ACE 미국S&P500',
    slug: 'ace-us-sp500',
    category: '해외지수 ETF',
    marketPriceKrw: 26_220,
    navKrw: 26_226,
    deviationPercent: -0.02,
    marketCapKrw: 3_558_054_000_000,
    volumeKrw: 26_224_261_005,
    shares: 135_700_000,
    benchmarkLabel: 'S&P 500 기준',
    benchmarkSymbol: 'VOO.US',
    benchmarkPrice: 652.78,
    benchmarkCurrency: 'USD',
    benchmarkNote: '동일 지수 국내 상품 간 괴리율 비교용',
  },
  {
    code: '133690',
    name: 'TIGER 미국나스닥100',
    slug: 'tiger-us-nasdaq100',
    category: '해외지수 ETF',
    marketPriceKrw: 172_915,
    navKrw: 173_181,
    deviationPercent: -0.15,
    marketCapKrw: 8_746_040_700_000,
    volumeKrw: 73_348_177_932,
    shares: 50_580_000,
    benchmarkLabel: 'NASDAQ 100 기준',
    benchmarkSymbol: 'QQQ.US',
    benchmarkPrice: 648.85,
    benchmarkCurrency: 'USD',
    benchmarkNote: '성장주 강세 구간에서 괴리율 체감이 커지는 종목',
  },
  {
    code: '379810',
    name: 'KODEX 미국나스닥100',
    slug: 'kodex-us-nasdaq100',
    category: '해외지수 ETF',
    marketPriceKrw: 25_905,
    navKrw: 25_952,
    deviationPercent: -0.18,
    marketCapKrw: 6_586_346_250_000,
    volumeKrw: 90_709_511_056,
    shares: 254_250_000,
    benchmarkLabel: 'NASDAQ 100 기준',
    benchmarkSymbol: 'QQQ.US',
    benchmarkPrice: 648.85,
    benchmarkCurrency: 'USD',
    benchmarkNote: '미국 성장주 대표 축',
  },
  {
    code: '381170',
    name: 'TIGER 미국테크TOP10 INDXX',
    slug: 'tiger-us-tech-top10',
    category: '테마 ETF',
    marketPriceKrw: 31_565,
    navKrw: 31_651,
    deviationPercent: -0.27,
    marketCapKrw: 4_082_932_750_000,
    volumeKrw: 23_893_197_722,
    shares: 129_350_000,
    benchmarkLabel: '미국 대형 테크 기준',
    benchmarkSymbol: 'XLK.US',
    benchmarkPrice: 154.35,
    benchmarkCurrency: 'USD',
    benchmarkNote: '빅테크 집중 수급이 반영되는 상품',
  },
  {
    code: '381180',
    name: 'TIGER 미국필라델피아반도체나스닥',
    slug: 'tiger-us-semiconductor',
    category: '테마 ETF',
    marketPriceKrw: 36_255,
    navKrw: 36_226,
    deviationPercent: 0.08,
    marketCapKrw: 4_142_133_750_000,
    volumeKrw: 44_415_510_821,
    shares: 114_250_000,
    benchmarkLabel: '반도체 ETF 기준',
    benchmarkSymbol: 'SOXX.US',
    benchmarkPrice: 415.71,
    benchmarkCurrency: 'USD',
    benchmarkNote: '반도체 심리 과열 시 괴리 확대 여부 확인용',
  },
  {
    code: '402970',
    name: 'ACE 미국배당다우존스',
    slug: 'ace-us-dividend-dow',
    category: '배당 ETF',
    marketPriceKrw: 14_765,
    navKrw: 14_757,
    deviationPercent: 0.05,
    marketCapKrw: 816_504_500_000,
    volumeKrw: 4_358_695_732,
    shares: 55_300_000,
    benchmarkLabel: '미국 배당 ETF 기준',
    benchmarkSymbol: 'SCHD.US',
    benchmarkPrice: 31.05,
    benchmarkCurrency: 'USD',
    benchmarkNote: '배당형 수급과 안정 자금 유입 확인용',
  },
  {
    code: '304660',
    name: 'KODEX 미국30년국채울트라선물(H)',
    slug: 'kodex-us-30y-bond',
    category: '채권 ETF',
    marketPriceKrw: 7_520,
    navKrw: 7_551,
    deviationPercent: -0.41,
    marketCapKrw: 183_488_000_000,
    volumeKrw: 822_485_130,
    shares: 24_400_000,
    benchmarkLabel: '미국 장기채 ETF 기준',
    benchmarkSymbol: 'TLT.US',
    benchmarkPrice: 87.07,
    benchmarkCurrency: 'USD',
    benchmarkNote: '위험 회피 자금이 채권으로 이동할 때 참고',
  },
];

export const commoditySnapshots: PremiumSnapshot[] = [
  {
    code: '411060',
    name: 'ACE KRX금현물',
    slug: 'ace-krx-gold-spot',
    category: '원자재 ETF',
    marketPriceKrw: 31_850,
    navKrw: 31_856,
    deviationPercent: -0.02,
    marketCapKrw: 4_924_010_000_000,
    volumeKrw: 34_299_435_142,
    shares: 154_600_000,
    benchmarkLabel: 'Gold ETF 기준',
    benchmarkSymbol: 'GLD.US',
    benchmarkPrice: 445.93,
    benchmarkCurrency: 'USD',
    benchmarkNote: '국내 금 현물 수급과 해외 금 가격 감각을 함께 보는 기준',
  },
  {
    code: '132030',
    name: 'KODEX 골드선물(H)',
    slug: 'kodex-gold-futures',
    category: '원자재 ETF',
    marketPriceKrw: 27_170,
    navKrw: 27_182,
    deviationPercent: -0.04,
    marketCapKrw: 451_022_000_000,
    volumeKrw: 2_939_380_841,
    shares: 16_600_000,
    benchmarkLabel: 'Gold ETF 기준',
    benchmarkSymbol: 'GLD.US',
    benchmarkPrice: 445.93,
    benchmarkCurrency: 'USD',
    benchmarkNote: '환헤지 금 상품의 괴리율 확인용',
  },
  {
    code: '319640',
    name: 'TIGER 골드선물(H)',
    slug: 'tiger-gold-futures',
    category: '원자재 ETF',
    marketPriceKrw: 28_630,
    navKrw: 28_642,
    deviationPercent: -0.04,
    marketCapKrw: 148_876_000_000,
    volumeKrw: 617_991_675,
    shares: 5_200_000,
    benchmarkLabel: 'Gold ETF 기준',
    benchmarkSymbol: 'GLD.US',
    benchmarkPrice: 445.93,
    benchmarkCurrency: 'USD',
    benchmarkNote: '동일 원자재 내 상품간 괴리 비교용',
  },
  {
    code: '144600',
    name: 'KODEX 은선물(H)',
    slug: 'kodex-silver-futures',
    category: '원자재 ETF',
    marketPriceKrw: 12_980,
    navKrw: 12_978,
    deviationPercent: 0.02,
    marketCapKrw: 1_334_344_000_000,
    volumeKrw: 24_992_863_877,
    shares: 102_800_000,
    benchmarkLabel: 'Silver ETF 기준',
    benchmarkSymbol: 'SLV.US',
    benchmarkPrice: 73.63,
    benchmarkCurrency: 'USD',
    benchmarkNote: '은 수급 왜곡이 빠르게 드러나는 대표 상품',
  },
  {
    code: '139320',
    name: 'TIGER 금은선물(H)',
    slug: 'tiger-gold-silver-futures',
    category: '원자재 ETF',
    marketPriceKrw: 20_595,
    navKrw: 20_589,
    deviationPercent: 0.03,
    marketCapKrw: 58_695_750_000,
    volumeKrw: 638_454_047,
    shares: 2_850_000,
    benchmarkLabel: 'Gold ETF 기준',
    benchmarkSymbol: 'GLD.US',
    benchmarkPrice: 445.93,
    benchmarkCurrency: 'USD',
    benchmarkNote: '귀금속 혼합 상품의 한국시장 수급 체크용',
  },
  {
    code: '138910',
    name: 'KODEX 구리선물(H)',
    slug: 'kodex-copper-futures',
    category: '원자재 ETF',
    marketPriceKrw: 9_440,
    navKrw: 9_488,
    deviationPercent: -0.51,
    marketCapKrw: 50_032_000_000,
    volumeKrw: 1_280_773_716,
    shares: 5_300_000,
    benchmarkLabel: 'Copper ETF 기준',
    benchmarkSymbol: 'CPER.US',
    benchmarkPrice: 37.29,
    benchmarkCurrency: 'USD',
    benchmarkNote: '산업 금속 심리와 국내 유동성 왜곡을 함께 보는 지점',
  },
  {
    code: '130680',
    name: 'TIGER 원유선물Enhanced(H)',
    slug: 'tiger-oil-futures',
    category: '원자재 ETF',
    marketPriceKrw: 6_780,
    navKrw: 6_854,
    deviationPercent: -1.08,
    marketCapKrw: 21_696_000_000,
    volumeKrw: 1_530_132_940,
    shares: 3_200_000,
    benchmarkLabel: '원유 ETF 기준',
    benchmarkSymbol: 'USO.US',
    benchmarkPrice: 116.04,
    benchmarkCurrency: 'USD',
    benchmarkNote: '에너지 리스크 심리와 괴리 확대 여부 체크용',
  },
  {
    code: '271060',
    name: 'KODEX 3대농산물선물(H)',
    slug: 'kodex-agriculture-futures',
    category: '원자재 ETF',
    marketPriceKrw: 8_270,
    navKrw: 8_235,
    deviationPercent: 0.43,
    marketCapKrw: 32_253_000_000,
    volumeKrw: 613_956_311,
    shares: 3_900_000,
    benchmarkLabel: '농산물 ETF 기준',
    benchmarkSymbol: 'DBA.US',
    benchmarkPrice: 26.92,
    benchmarkCurrency: 'USD',
    benchmarkNote: '농산물 인플레이션 기대가 반영되는지 확인용',
  },
];

export const compareSnapshots = {
  'upbit-binance': {
    pair: '업비트 vs 바이낸스',
    headline: '한국 원화 시장과 글로벌 달러 시장의 가격 차이를 바로 확인하는 비교',
    rows: [
      { symbol: 'BTC', buy: '업비트', sell: '바이낸스', spreadPercent: 0.05, spreadKrw: '+53,000 KRW' },
      { symbol: 'ETH', buy: '업비트', sell: '바이낸스', spreadPercent: 0.08, spreadKrw: '+3,000 KRW' },
      { symbol: 'XRP', buy: '업비트', sell: '바이낸스', spreadPercent: -0.02, spreadKrw: '-1 KRW' },
    ],
    interpretation:
      '업비트-바이낸스 비교는 가장 익숙한 김프 축입니다. 절대 수치뿐 아니라 환율과 거래대금을 함께 읽어야 해석이 맞아집니다.',
  },
  'bithumb-binance': {
    pair: '빗썸 vs 바이낸스',
    headline: '국내 보조 거래소 축에서 해외 대비 가격차를 보는 비교',
    rows: [
      { symbol: 'BTC', buy: '빗썸', sell: '바이낸스', spreadPercent: 0.04, spreadKrw: '+42,000 KRW' },
      { symbol: 'ETH', buy: '빗썸', sell: '바이낸스', spreadPercent: 0.11, spreadKrw: '+4,000 KRW' },
      { symbol: 'XRP', buy: '빗썸', sell: '바이낸스', spreadPercent: 0.08, spreadKrw: '+2 KRW' },
    ],
    interpretation:
      '빗썸-바이낸스 축은 업비트보다 한 단계 더 민감하게 국내 수급 왜곡을 보여주는 경우가 있습니다.',
  },
  'upbit-bithumb': {
    pair: '업비트 vs 빗썸',
    headline: '국내 거래소 내부의 가격차를 직접 보는 비교',
    rows: [
      { symbol: 'BTC', buy: '업비트', sell: '빗썸', spreadPercent: 0.01, spreadKrw: '+11,000 KRW' },
      { symbol: 'ETH', buy: '업비트', sell: '빗썸', spreadPercent: -0.03, spreadKrw: '-1,000 KRW' },
      { symbol: 'XRP', buy: '업비트', sell: '빗썸', spreadPercent: -0.09, spreadKrw: '-2 KRW' },
    ],
    interpretation:
      '국내 거래소 간 차이는 한국시장 내부 프리미엄을 읽는 가장 직접적인 축입니다. ETF 괴리율을 보는 감각과도 닮아 있습니다.',
  },
};

const strongestEtf = [...etfSnapshots].sort((left, right) => Math.abs(right.deviationPercent) - Math.abs(left.deviationPercent))[0];
const strongestCommodity = [...commoditySnapshots].sort(
  (left, right) => Math.abs(right.deviationPercent) - Math.abs(left.deviationPercent),
)[0];

export const heroSummaryFallback = {
  globalPremiumLabel: `BTC ${coinSnapshots.BTC.premiumPercent > 0 ? '+' : ''}${coinSnapshots.BTC.premiumPercent.toFixed(2)}%`,
  domesticPremiumLabel: `BTC ${coinSnapshots.BTC.domesticSpreadPercent > 0 ? '+' : ''}${coinSnapshots.BTC.domesticSpreadPercent.toFixed(2)}%`,
  etfLeadLabel: `${strongestEtf.name} ${strongestEtf.deviationPercent > 0 ? '+' : ''}${strongestEtf.deviationPercent.toFixed(2)}%`,
  commodityLeadLabel: `${strongestCommodity.name} ${strongestCommodity.deviationPercent > 0 ? '+' : ''}${strongestCommodity.deviationPercent.toFixed(2)}%`,
};

export const riskSnapshotFallback = {
  fearGreedValue: 26,
  fearGreedLabel: 'Fear',
  fearGreedHistory: [26, 21, 23, 23, 21, 12, 16],
  usdKrw: 1478.99,
};

export const guideSnippets = {
  kimchiDefinition: [
    '김치프리미엄은 원래 한국 거래소 가격이 해외 거래소보다 높게 형성되는 현상을 뜻하지만, 더 넓게 보면 한국시장 안팎의 가격 차이를 읽는 프레임입니다.',
    '이 프레임을 코인에만 묶지 않고 국내상장 해외 ETF의 괴리율, 금·은·구리 같은 원자재 ETF의 국내 수급 차이까지 확장하면 사이트의 관점이 선명해집니다.',
    '그래서 김프보드는 단순한 코인 김프판이 아니라 한국 프리미엄 관측소를 지향합니다.',
  ],
  howToRead: [
    '프리미엄 수치 하나만 보는 대신 24시간 변화, 거래대금, 같은 자산의 국내 내부 가격차를 함께 봐야 맥락이 잡힙니다.',
    '같은 1%라도 코인, ETF, 원자재는 의미가 다릅니다. 기초자산 구조와 NAV 산식, 환헤지 여부를 함께 확인해야 합니다.',
    '이 사이트의 목적은 숫자를 많이 모으는 것이 아니라 같은 기준으로 비교 가능한 화면을 만드는 데 있습니다.',
  ],
  reversePremium: [
    '역프는 한국시장 가격이 해외 기준이나 NAV보다 낮게 형성되는 상태입니다. 코인에서는 원화 수급 이탈, ETF에서는 할인 거래, 원자재에서는 환율과 거래량 영향으로 나타납니다.',
    '즉 모양은 다르지만 한국시장 가격이 글로벌 기준보다 약한 상태라는 공통된 해석축이 있습니다.',
    '이 사이트는 그 공통축을 코인, ETF, 원자재에 걸쳐 한 화면에서 읽을 수 있게 만드는 것을 목표로 합니다.',
  ],
};
