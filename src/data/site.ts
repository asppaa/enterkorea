import { DEFAULT_SITE_URL } from '../lib/runtime';

export type Locale = 'ko';

export type SeoPage = {
  title: string;
  description: string;
  path: string;
  locale: Locale;
};

export const siteConfig = {
  brand: {
    ko: '김프보드',
  },
  domain: 'kimpboard.com',
  siteUrl: DEFAULT_SITE_URL,
  defaultLocale: 'ko' as Locale,
  topNav: {
    ko: [
      { href: '/', label: '한국 프리미엄' },
      { href: '/coins', label: '코인 김프' },
      { href: '/etf', label: 'ETF 괴리율' },
      { href: '/commodities', label: '원자재' },
      { href: '/risk', label: '위험 신호' },
      { href: '/portfolio', label: '포트폴리오' },
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
  },
  {
    title: '빗썸 vs 바이낸스 | 한국·해외 프리미엄 비교',
    description:
      '빗썸과 바이낸스를 기준으로 국내 가격과 해외 가격 차이를 비교하는 페이지.',
    path: '/compare/bithumb-binance',
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
    title: '정적배분 포트폴리오 | ISA, 병목 인프라, 올웨더 비중',
    description:
      '정적배분의 뜻과 운용 원칙을 설명하고 ISA, 병목 인프라, 올웨더 포트폴리오의 목표 비중을 공개합니다.',
    path: '/portfolio',
    locale: 'ko',
  },
  {
    title: '김치프리미엄 뜻 | 코인·ETF·원자재로 확장하는 한국 프리미엄',
    description:
      '김치프리미엄의 뜻과 발생 구조를 코인에만 묶지 않고 ETF 괴리율과 원자재 프리미엄까지 확장해 설명합니다.',
    path: '/guide/김치프리미엄-뜻',
    locale: 'ko',
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
    title: '트래블룰이란 | 김프와 차익거래에서 꼭 알아야 할 송금 규칙',
    description:
      '국내 거래소 간 송금, 해외 거래소 이동, 김프 차익거래에 직접 영향을 주는 트래블룰 개념과 체크 포인트를 정리합니다.',
    path: '/guide/트래블룰',
    locale: 'ko',
  },
  {
    title: '숫자 읽는 법 | 김프·ETF·원자재 프리미엄 해석 순서',
    description:
      'USD/KRW부터 Fear & Greed까지 7단계로 한국 프리미엄을 읽는 순서, 프리미엄 구간 해석, FAQ를 정리한 가이드.',
    path: '/how-to-read',
    locale: 'ko',
  },
  {
    title: '용어 설명 | 김프·역프·NAV·괴리율 핵심 용어',
    description:
      '김프, 역프, 스테이블코인 김프, BTC 김프, 거래소 차이, ETF 괴리율, NAV, Fear & Greed 등 핵심 용어를 짧게 정리한 페이지.',
    path: '/glossary',
    locale: 'ko',
  },
  {
    title: '방법론 | 데이터 출처·계산 방식·프리미엄 구간표',
    description:
      '김프보드가 코인·ETF·원자재 프리미엄을 계산하는 공식, 데이터 출처와 한계, 참고 구간표, 갱신 주기와 면책을 한 번에 정리합니다.',
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
];
