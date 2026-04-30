import { DEFAULT_SITE_URL } from '../lib/runtime';

export type Locale = 'ko';

export type SeoPage = {
  title: string;
  description: string;
  path: string;
  locale: Locale;
};

export type TopNavChild = {
  href: string;
  label: string;
  description?: string;
};

export type TopNavItem = {
  href: string;
  label: string;
  children?: TopNavChild[];
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
      {
        href: '/',
        label: '한국 프리미엄',
        children: [
          { href: '/coins', label: '코인 김프', description: '업비트·빗썸·바이낸스 가격차' },
          { href: '/etf', label: 'ETF 괴리율', description: '국내 상장 해외 ETF NAV 차이' },
          { href: '/commodities', label: '원자재', description: '금·은·구리 국내 괴리율' },
          { href: '/risk', label: '위험 신호', description: 'F&G·환율·김프 종합' },
        ],
      },
      { href: '/realestate', label: '부동산' },
      {
        href: '/qvgm',
        label: 'QVGM',
        children: [
          { href: '/qvgm', label: 'QVGM 스크리너', description: 'TOP 10 종목 발굴 + 페르소나 합의' },
          { href: '/qvgm-portfolio', label: 'QVGM 포트폴리오', description: '월간 자동 ETF 백테스트' },
          { href: '/portfolio', label: '정적배분 포트폴리오', description: 'ISA·올웨더 비중' },
        ],
      },
      { href: '/journal', label: '일지' },
      { href: '/guide', label: '가이드' },
    ] satisfies TopNavItem[],
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
    title: '서울/추적지역 대장 아파트 주간 스냅샷 | 가격·거래량 대장',
    description:
      '서울 25개구 + 추적지역의 가격 대장 단지와 거래량 대장 단지를 매주 한 표로 정리. 국토부 실거래가 기반, 90일 평균과 전고점·전세가율 동봉.',
    path: '/realestate',
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
    title: 'QVGM+Moat 스크리너 | 저평가·성장·해자·병목 종목 발굴',
    description:
      'KOSPI/KOSDAQ 시총 상위 265종과 미국 S&P 500/MidCap 400을 대상으로 가치·품질·성장·모멘텀·섹터·경제적 해자·공급 병목 7대 점수를 합산한 LLM 보강 스크리너 결과 TOP 10.',
    path: '/qvgm',
    locale: 'ko',
  },
  {
    title: 'QVGM 포트폴리오 | LLM 추천 ETF 비중 (국장·국장상장미국·미국)',
    description:
      '국장 ETF, 국장 상장 미국추종 ETF, 미국 상장 ETF 세 개 카테고리에 대해 Gemini 가 후보 5개를 제안하고 3년 백테스트(CAGR·Sharpe·MaxDD)로 최적 1개를 채택한 월간 자동 포트폴리오.',
    path: '/qvgm-portfolio',
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
  {
    title: '연락처 | 김프보드 운영팀에게 문의·제보·제휴 보내기',
    description:
      '데이터 오류 제보, 콘텐츠 보강 요청, 광고·제휴 문의, 개인정보 관련 요청을 받는 김프보드 공식 연락처 페이지.',
    path: '/contact',
    locale: 'ko',
  },
  {
    title: 'USDT 김프 | 스테이블코인 김치프리미엄과 BTC 김프의 차이',
    description:
      'USDT 김프가 한국 시장의 달러 수급을 어떻게 보여주는지, BTC·ETH 김프와는 어떻게 다른지 차이와 해석법을 정리합니다.',
    path: '/guide/USDT-김프',
    locale: 'ko',
  },
  {
    title: '김프 차익거래의 실제 비용 | 표면 김프와 실수익이 다른 이유',
    description:
      '한 사이클에 발생하는 매수·매도 수수료, 출금 수수료, 환전 스프레드, 송금 지연 비용까지 합산해 표면 김프와 실수익의 차이를 정리한 가이드.',
    path: '/guide/김프-차익거래-비용',
    locale: 'ko',
  },
  {
    title: 'ETF 괴리율 읽기 | 시장가격·NAV 차이를 단순 규칙으로 보지 않기',
    description:
      '국내 상장 해외 ETF의 괴리율이 왜 벌어지는지, 환헤지·LP 헤지 비용·국내 수요·한도 등 구조적 요인과 함께 읽는 순서를 정리합니다.',
    path: '/guide/ETF-괴리율-읽기',
    locale: 'ko',
  },
  {
    title: '코인 송금 네트워크 선택 | 김프 사이클을 가르는 결정적 변수',
    description:
      'TRC20·ERC20·Solana·XRP 메인넷 등 코인별 송금 네트워크 특성과 도착 거래소 호환·트래블룰 영향까지 김프 차익거래 관점에서 정리한 가이드.',
    path: '/guide/송금-네트워크-선택',
    locale: 'ko',
  },
  {
    title: '가이드 | 한국 프리미엄·김프·ETF·차익거래 기본 글 모음',
    description:
      '김치프리미엄·역프·USDT 김프·ETF 괴리율·트래블룰·송금 네트워크 등 한국 프리미엄 시장을 읽는 데 필요한 핵심 가이드를 한곳에 모은 페이지.',
    path: '/guide',
    locale: 'ko',
  },
  {
    title: '일지 | 김프보드 운영자의 주간 매매·시장 일지',
    description:
      '김프보드 데이터와 함께 운영자의 주간 매매·시장 해석·교훈을 정리하는 일지. 1인칭, 비중 단위, 실패까지 함께 공개.',
    path: '/journal',
    locale: 'ko',
  },
];
