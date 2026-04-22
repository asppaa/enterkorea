export type PortfolioHolding = {
  name: string;
  targetWeight: number;
  role: string;
};

export type PortfolioGroup = {
  name: string;
  description: string;
  objective: string;
  holdings: PortfolioHolding[];
};

export const portfolioAsOf = '2026-04-22';

export const portfolioGroups: PortfolioGroup[] = [
  {
    name: 'ISA',
    description: '세제 계좌 안에서 금, 원자력, 방산, 조선 테마를 같은 비중으로 나누어 담는 집중형 정적배분입니다.',
    objective: '테마별 판단을 매번 바꾸기보다 25%씩 같은 출발선에 두고, 비중이 크게 틀어질 때만 조정합니다.',
    holdings: [
      { name: 'ACE KRX 금현물', targetWeight: 25, role: '실물 금 가격에 가까운 방어 자산 축' },
      { name: 'RISE 글로벌원자력', targetWeight: 25, role: '전력 수요와 원전 밸류체인 노출' },
      { name: 'PLUS K방산', targetWeight: 25, role: '국내 방산 수출과 안보 사이클 노출' },
      { name: 'SOL 조선TOP3플러스', targetWeight: 25, role: '조선 대형주와 해양 사이클 노출' },
    ],
  },
  {
    name: '병목 인프라',
    description: 'AI 전력 인프라, 원자력, 희토류, 금처럼 공급 병목이 생기기 쉬운 자산을 묶은 포트폴리오입니다.',
    objective: '성장 테마를 좇되, 전력망과 핵심 자원처럼 실제 병목이 될 수 있는 축에 비중을 둡니다.',
    holdings: [
      { name: 'RISE AI전력인프라', targetWeight: 30, role: 'AI 데이터센터 전력 수요와 전력 인프라 핵심 축' },
      { name: 'KODEX 미국AI전력핵심인프라', targetWeight: 30, role: '미국 전력 인프라와 AI 수요 확장 노출' },
      { name: 'RISE 글로벌원자력', targetWeight: 20, role: '기저 전원과 원자력 공급망 보조 축' },
      { name: 'PLUS 글로벌희토류&전략자원', targetWeight: 10, role: '희토류와 전략자원 병목 노출' },
      { name: 'ACE KRX 금현물', targetWeight: 10, role: '테마 변동성을 낮추는 금 방어 축' },
    ],
  },
  {
    name: '올웨더',
    description: '주식, 채권, 달러, 금을 함께 배치해 특정 경기 국면 하나에만 기대지 않도록 만든 정적배분입니다.',
    objective: '상승장 참여와 하락장 완충을 동시에 노리며, 큰 전망보다 자산군 간 균형을 우선합니다.',
    holdings: [
      { name: 'KIWOOM 미국달러선물', targetWeight: 5, role: '원화 약세와 글로벌 위험 회피에 대비하는 달러 축' },
      { name: 'KIWOOM 국고채5년', targetWeight: 10, role: '중기 국채 기반의 방어 자산' },
      { name: 'TIGER 미국S&P500선물(H)', targetWeight: 10, role: '환헤지형 미국 대형주 노출' },
      { name: 'KIWOOM 국고채10년', targetWeight: 10, role: '장기 금리 하락 국면의 완충 자산' },
      { name: 'KODEX MSCI선진국', targetWeight: 15, role: '미국 외 선진국까지 포함하는 글로벌 주식 축' },
      { name: 'KODEX 미국나스닥100선물(H)', targetWeight: 10, role: '미국 성장주와 기술주 노출' },
      { name: 'ACE KRX 금현물', targetWeight: 20, role: '인플레이션과 금융시장 스트레스 방어 축' },
      { name: 'KIWOOM 200', targetWeight: 20, role: '국내 대표 주식시장 노출' },
    ],
  },
];
