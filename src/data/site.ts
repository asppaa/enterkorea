import { DEFAULT_SITE_URL } from '../lib/runtime';

export type Locale = 'ko' | 'en';

export type SeoPage = {
  title: string;
  description: string;
  path: string;
  locale: Locale;
  alternates?: Partial<Record<Locale, string>>;
};

export const siteConfig = {
  brand: {
    ko: '김프보드',
    en: 'KimpBoard',
  },
  domain: 'enterkorea.mcjeff-park.workers.dev',
  siteUrl: DEFAULT_SITE_URL,
  defaultLocale: 'ko' as Locale,
  reservedEnglishPaths: [
    '/en/bitcoin-premium',
    '/en/upbit-vs-binance',
    '/en/what-is-kimchi-premium',
  ],
  topNav: {
    ko: [
      { href: '/', label: '한국 프리미엄' },
      { href: '/coins', label: '코인 김프' },
      { href: '/compare/upbit-bithumb', label: '국내 거래소 차이' },
      { href: '/etf', label: 'ETF 괴리율' },
      { href: '/commodities', label: '원자재' },
      { href: '/risk', label: '위험 신호' },
    ],
    en: [
      { href: '/en/bitcoin-premium', label: 'Premium' },
      { href: '/en/upbit-vs-binance', label: 'Spread' },
      { href: '/en/what-is-kimchi-premium', label: 'Guide' },
    ],
  },
};

export const sitePages: SeoPage[] = [
  {
    title: '김프보드 | 코인·ETF·원자재를 함께 보는 한국 프리미엄 관측소',
    description:
      '코인 김프, 국내 거래소 차이, 국내 상장 해외 ETF 괴리율, 금·은·구리 원자재 프리미엄, 위험 신호를 한 화면에서 보는 한국 프리미엄 관측소.',
    path: '/',
    locale: 'ko',
  },
  {
    title: '코인 김프 보드 | 거래대금 순 한국 거래 코인 프리미엄',
    description:
      '한국 거래소에서 거래되는 코인을 거래대금 순으로 정렬해 업비트·빗썸·바이낸스 가격과 김프, 국내 거래소 차이를 보여주는 코인 보드.',
    path: '/coins',
    locale: 'ko',
  },
  {
    title: '비트코인 김프 | BTC 한국·해외 프리미엄과 국내 거래소 차이',
    description:
      '업비트·빗썸·바이낸스 기준으로 비트코인 김프와 국내 거래소 가격 차이를 함께 보는 상세 페이지.',
    path: '/btc',
    locale: 'ko',
    alternates: {
      en: '/en/bitcoin-premium',
    },
  },
  {
    title: '이더리움 김프 | ETH 한국·해외 프리미엄과 국내 거래소 차이',
    description:
      '이더리움의 한국·해외 프리미엄, 업비트·빗썸 차이, 7일 추세를 함께 보는 상세 페이지.',
    path: '/eth',
    locale: 'ko',
  },
  {
    title: 'XRP 김프 | 리플 한국 가격 차이와 국내 거래소 스프레드',
    description:
      'XRP 김프와 국내 거래소 차이를 같은 화면에서 확인하는 상세 페이지.',
    path: '/xrp',
    locale: 'ko',
  },
  {
    title: '업비트 vs 바이낸스 | 한국·해외 김프 비교',
    description:
      '업비트와 바이낸스의 주요 코인 가격 차이를 비교해 한국·해외 김프를 읽는 비교 페이지.',
    path: '/compare/upbit-binance',
    locale: 'ko',
    alternates: {
      en: '/en/upbit-vs-binance',
    },
  },
  {
    title: '빗썸 vs 바이낸스 | 한국·해외 프리미엄 비교',
    description:
      '빗썸과 바이낸스를 기준으로 국내 가격과 해외 가격 차이를 비교하는 페이지.',
    path: '/compare/bithumb-binance',
    locale: 'ko',
  },
  {
    title: '업비트 vs 빗썸 | 국내 거래소 차이 비교',
    description:
      '업비트와 빗썸 가격 차이로 한국 시장 내부 프리미엄과 자금 흐름을 읽는 비교 페이지.',
    path: '/compare/upbit-bithumb',
    locale: 'ko',
  },
  {
    title: 'ETF 괴리율 | 국내 상장 해외 ETF 프리미엄',
    description:
      '국내 상장 해외 ETF의 시장가격과 NAV 차이를 실시간으로 읽는 ETF 괴리율 페이지.',
    path: '/etf',
    locale: 'ko',
  },
  {
    title: '원자재 프리미엄 | 금·은·구리 국내 괴리율',
    description:
      '금, 은, 구리, 원유, 농산물 ETF의 국내 괴리율과 해외 벤치마크를 함께 보는 원자재 페이지.',
    path: '/commodities',
    locale: 'ko',
  },
  {
    title: '위험 신호 | Fear & Greed, 환율, 김프, ETF 괴리',
    description:
      'Fear and Greed Index, USD/KRW, BTC 프리미엄, ETF·원자재 괴리율을 묶어 보는 위험 신호 페이지.',
    path: '/risk',
    locale: 'ko',
  },
  {
    title: '김치프리미엄 뜻 | 코인·ETF·원자재로 확장하는 한국 프리미엄',
    description:
      '김치프리미엄의 뜻과 발생 구조를 코인에만 묶지 않고 ETF 괴리율과 원자재 프리미엄까지 확장해 설명합니다.',
    path: '/guide/김치프리미엄-뜻',
    locale: 'ko',
    alternates: {
      en: '/en/what-is-kimchi-premium',
    },
  },
  {
    title: '김프 보는 법 | 코인·ETF·원자재 프리미엄 읽는 기본',
    description:
      '프리미엄 수치를 어떻게 읽고, 자산별로 무엇을 함께 봐야 하는지 정리한 기본 가이드.',
    path: '/guide/김프-보는법',
    locale: 'ko',
  },
  {
    title: '역프 뜻 | 한국시장 가격이 글로벌 기준보다 낮을 때 읽는 법',
    description:
      '코인, ETF, 원자재에서 역프가 어떻게 나타나는지와 해석 포인트를 정리한 가이드.',
    path: '/guide/역프-뜻',
    locale: 'ko',
  },
  {
    title: '방법론 | 한국 프리미엄 관측소 계산 기준',
    description:
      '김프보드가 코인, ETF, 원자재 프리미엄을 계산하는 방식과 캐시 정책, 데이터 처리 원칙을 설명합니다.',
    path: '/methodology',
    locale: 'ko',
  },
  {
    title: '소개 | 김프보드가 지향하는 한국 프리미엄 관측소',
    description:
      '김프보드의 운영 목적과 코인에서 ETF, 원자재까지 확장하는 이유를 소개합니다.',
    path: '/about',
    locale: 'ko',
  },
  {
    title: '개인정보처리방침 | 김프보드',
    description:
      '김프보드의 개인정보 처리 범위, 쿠키, 광고, 분석 도구 사용 원칙입니다.',
    path: '/privacy',
    locale: 'ko',
  },
  {
    title: '이용약관 | 김프보드',
    description:
      '김프보드의 이용 조건과 데이터 사용 제한, 책임 범위를 안내합니다.',
    path: '/terms',
    locale: 'ko',
  },
  {
    title: '면책조항 | 김프보드',
    description:
      '이 사이트의 데이터와 콘텐츠는 정보 제공용이며 투자 권유가 아니라는 점을 안내합니다.',
    path: '/disclaimer',
    locale: 'ko',
  },
  {
    title: 'Bitcoin Premium in Korea | KimpBoard',
    description:
      'Track Bitcoin premium between Korean exchanges and global venues inside a wider Korea premium observatory.',
    path: '/en/bitcoin-premium',
    locale: 'en',
    alternates: {
      ko: '/btc',
    },
  },
  {
    title: 'Upbit vs Binance Bitcoin Price Spread | KimpBoard',
    description:
      'Compare Upbit and Binance Bitcoin prices inside a Korea premium observatory for crypto, ETFs, and commodities.',
    path: '/en/upbit-vs-binance',
    locale: 'en',
    alternates: {
      ko: '/compare/upbit-binance',
    },
  },
  {
    title: 'What Is Kimchi Premium? | KimpBoard',
    description:
      'A compact English guide to the kimchi premium phenomenon and how it fits into a broader Korea premium framework.',
    path: '/en/what-is-kimchi-premium',
    locale: 'en',
    alternates: {
      ko: '/guide/김치프리미엄-뜻',
    },
  },
];
