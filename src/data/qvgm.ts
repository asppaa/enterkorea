// 자동 생성 — QVGM+Moat 스크리너 결과 (수동 편집 비권장)
export const qvgmAsOf = '2026-04-26 17:52';

export type QvgmMetrics = {
  per: number | null;
  pbr: number | null;
  psr: number | null;
  roe: number | null;
  fcfYield: number | null;
  ret6m: number | null;
  ret12m: number | null;
};

export type QvgmRecord = {
  rank: number;
  ticker: string;
  name: string;
  sector: string;
  bottleneck: string;
  totalScore: number | null;
  moatScore: number | null;
  moatType: string;
  recommendation: string;
  conviction: number | null;
  oneLiner: string;
  coreBusiness: string;
  competitiveEdge: string;
  catalysts: string[];
  risks: string[];
  valuationNote: string;
  metrics: QvgmMetrics;
};

export const qvgmKrTop: QvgmRecord[] = [
  {
    "rank": 1,
    "ticker": "005930",
    "name": "삼성전자",
    "sector": "",
    "bottleneck": "AI인프라/HBM/전력",
    "totalScore": 62.22651689306862,
    "moatScore": 90.0,
    "moatType": "COST",
    "recommendation": "BUY",
    "conviction": 85.0,
    "oneLiner": "메모리 턴어라운드와 HBM 추격의 콜라보.",
    "coreBusiness": "글로벌 1위 메모리 반도체 및 스마트폰 제조",
    "competitiveEdge": "압도적인 자본력과 원가 경쟁력을 바탕으로 한 메모리 시장 지배력을 보유하고 있습니다. 파운드리와 세트 부문을 아우르는 수직 계열화로 강력한 생태계 해자를 구축했습니다.",
    "catalysts": [
      "HBM3E 공급 본격화 및 레거시 메모리 가격 반등",
      "파운드리 선단 공정 수율 안정화 및 대형 고객사 확보"
    ],
    "risks": [
      "HBM 시장에서의 경쟁사 대비 기술 리더십 지연",
      "글로벌 IT 수요 회복 지연"
    ],
    "valuationNote": "PER 33배 수준이나, 메모리 턴어라운드 사이클 진입을 고려하면 밸류에이션 매력이 높습니다.",
    "metrics": {
      "per": 33.44,
      "pbr": null,
      "psr": 3.846628773136526,
      "roe": 0.1085,
      "fcfYield": null,
      "ret6m": null,
      "ret12m": null
    }
  },
  {
    "rank": 2,
    "ticker": "009540",
    "name": "HD한국조선해양",
    "sector": "",
    "bottleneck": "조선/해양",
    "totalScore": 61.11183559735284,
    "moatScore": 75.0,
    "moatType": "COST",
    "recommendation": "BUY",
    "conviction": 80.0,
    "oneLiner": "조선업 슈퍼 사이클을 누리는 대장주.",
    "coreBusiness": "HD현대 그룹의 조선해양 부문 중간 지주사",
    "competitiveEdge": "세계 최대의 건조 능력과 친환경 선박 기술력을 보유하고 있습니다. 규모의 경제를 통한 원가 절감과 다수의 자회사를 통한 포트폴리오 다각화가 강점입니다.",
    "catalysts": [
      "고선가 수주 물량의 매출 인식 본격화",
      "친환경 이중연료 추진선 발주 확대"
    ],
    "risks": [
      "후판 가격 등 원자재 가격 변동성",
      "자회사 중복 상장에 따른 지주사 디스카운트"
    ],
    "valuationNote": "PER 15배 수준으로, 실적 턴어라운드와 수주 잔고를 감안할 때 저평가 구간입니다.",
    "metrics": {
      "per": 15.54,
      "pbr": null,
      "psr": 1.125438739023704,
      "roe": 0.1778,
      "fcfYield": null,
      "ret6m": null,
      "ret12m": null
    }
  },
  {
    "rank": 3,
    "ticker": "000660",
    "name": "SK하이닉스",
    "sector": "",
    "bottleneck": "AI인프라/HBM/전력",
    "totalScore": 60.15730755834204,
    "moatScore": 85.0,
    "moatType": "IP",
    "recommendation": "STRONG_BUY",
    "conviction": 95.0,
    "oneLiner": "AI 시대의 대체 불가능한 HBM 절대 강자.",
    "coreBusiness": "글로벌 최고 수준의 D램 및 낸드플래시 제조",
    "competitiveEdge": "HBM 시장에서 압도적인 기술 리더십과 시장 점유율 1위를 선점했습니다. 엔비디아 등 핵심 AI 고객사와의 강력한 파트너십이 진입 장벽으로 작용합니다.",
    "catalysts": [
      "엔비디아향 HBM3E 대규모 공급 확대",
      "AI 서버 투자 증가에 따른 고용량 D램 수요 폭증"
    ],
    "risks": [
      "경쟁사의 HBM 시장 진입에 따른 점유율 하락 우려",
      "낸드 부문의 더딘 수익성 개선"
    ],
    "valuationNote": "PER 20배 수준으로, AI 인프라 핵심 수혜주로서의 프리미엄 부여가 타당합니다.",
    "metrics": {
      "per": 20.73,
      "pbr": null,
      "psr": 8.965024279009034,
      "roe": 0.4415,
      "fcfYield": null,
      "ret6m": null,
      "ret12m": null
    }
  },
  {
    "rank": 4,
    "ticker": "329180",
    "name": "HD현대중공업",
    "sector": "",
    "bottleneck": "조선/해양",
    "totalScore": 59.60894461859979,
    "moatScore": 80.0,
    "moatType": "COST",
    "recommendation": "BUY",
    "conviction": 80.0,
    "oneLiner": "엔진 내재화로 수익성을 극대화하는 조선 대장.",
    "coreBusiness": "글로벌 1위 선박 건조 및 해양플랜트 제작",
    "competitiveEdge": "독보적인 엔진 기계 사업부 내재화로 원가 경쟁력과 납기 대응력이 뛰어납니다. 친환경 선박 및 특수선(방산) 분야에서 세계 최고 수준의 레퍼런스를 보유합니다.",
    "catalysts": [
      "고부가가치 선박(LNG, 암모니아) 수주 랠리",
      "미국 해군 함정 MRO 사업 진출 가시화"
    ],
    "risks": [
      "조선업 인력 부족 및 인건비 상승 압박",
      "글로벌 경기 침체로 인한 해운 물동량 감소"
    ],
    "valuationNote": "PER 42배로 다소 높아 보이나, 이익률 급증 구간에 진입하여 포워드 기준 매력적입니다.",
    "metrics": {
      "per": 42.73,
      "pbr": null,
      "psr": 4.006055923608873,
      "roe": 0.1882,
      "fcfYield": null,
      "ret6m": null,
      "ret12m": null
    }
  },
  {
    "rank": 5,
    "ticker": "010130",
    "name": "고려아연",
    "sector": "",
    "bottleneck": "희토류/배터리소재",
    "totalScore": 59.24090212469522,
    "moatScore": 85.0,
    "moatType": "COST",
    "recommendation": "HOLD",
    "conviction": 60.0,
    "oneLiner": "본업의 탄탄함과 신사업 기대, 변수는 경영권.",
    "coreBusiness": "글로벌 1위 비철금속 제련 및 이차전지 소재 사업",
    "competitiveEdge": "독보적인 통합 제련 기술을 통해 금, 은 등 부산물 수익을 극대화하는 원가 경쟁력을 갖췄습니다. 이를 바탕으로 이차전지 밸류체인으로의 확장이 용이합니다.",
    "catalysts": [
      "동박 및 전구체 등 이차전지 소재 신사업 가시화",
      "귀금속 및 비철금속 가격 상승 사이클 진입"
    ],
    "risks": [
      "경영권 분쟁 장기화에 따른 불확실성",
      "글로벌 산업 수요 둔화에 따른 아연 가격 하락"
    ],
    "valuationNote": "PER 42배 수준으로 경영권 분쟁 프리미엄이 반영되어 있어 단기 변동성에 유의해야 합니다.",
    "metrics": {
      "per": 42.63,
      "pbr": null,
      "psr": 2.066174844151921,
      "roe": 0.0848,
      "fcfYield": null,
      "ret6m": null,
      "ret12m": null
    }
  },
  {
    "rank": 6,
    "ticker": "064350",
    "name": "현대로템",
    "sector": "",
    "bottleneck": "방산",
    "totalScore": 58.77709160571229,
    "moatScore": 75.0,
    "moatType": "REG",
    "recommendation": "BUY",
    "conviction": 85.0,
    "oneLiner": "K-방산 수출 랠리의 최전선에 선 전차 군단.",
    "coreBusiness": "K2 전차 중심의 방산 및 철도차량 제조",
    "competitiveEdge": "K2 전차의 우수한 가성비와 빠른 납기 능력을 바탕으로 글로벌 방산 시장에서 독보적 입지를 구축했습니다. 정부의 강력한 방산 수출 지원이 규제적 해자로 작용합니다.",
    "catalysts": [
      "폴란드 K2 전차 2차 실행계약 체결",
      "루마니아 등 동유럽 추가 수출 수주"
    ],
    "risks": [
      "수출입은행 금융 지원 한도 등 정책적 변수",
      "철도 부문의 만성적인 저수익성"
    ],
    "valuationNote": "PER 33배 수준으로, 방산 수출 모멘텀이 실적으로 직결되며 밸류에이션 정당화가 가능합니다.",
    "metrics": {
      "per": 33.03,
      "pbr": null,
      "psr": 4.355208525450488,
      "roe": 0.3005,
      "fcfYield": null,
      "ret6m": null,
      "ret12m": null
    }
  },
  {
    "rank": 7,
    "ticker": "012450",
    "name": "한화에어로스페이스",
    "sector": "",
    "bottleneck": "방산",
    "totalScore": 58.38766283524904,
    "moatScore": 80.0,
    "moatType": "REG",
    "recommendation": "STRONG_BUY",
    "conviction": 90.0,
    "oneLiner": "글로벌 방산 톱티어로 도약하는 K-방산 대장.",
    "coreBusiness": "K9 자주포 및 항공우주, 방산 종합 솔루션 제공",
    "competitiveEdge": "K9 자주포의 글로벌 시장 점유율 1위라는 압도적 레퍼런스를 보유하고 있습니다. 육해공을 아우르는 방산 수직계열화로 강력한 시너지를 창출합니다.",
    "catalysts": [
      "호주, 폴란드 등 대규모 수출 물량의 실적 반영",
      "차세대 발사체 등 우주 사업 모멘텀 부각"
    ],
    "risks": [
      "지정학적 리스크 완화 시 방산 수요 감소 우려",
      "방산 수출 계약의 지정학적/정치적 취소 리스크"
    ],
    "valuationNote": "PER 51배로 밸류에이션 부담이 존재하나, 폭발적인 이익 성장세가 이를 상쇄합니다.",
    "metrics": {
      "per": 51.2,
      "pbr": null,
      "psr": null,
      "roe": 0.1914,
      "fcfYield": null,
      "ret6m": null,
      "ret12m": null
    }
  },
  {
    "rank": 8,
    "ticker": "042660",
    "name": "한화오션",
    "sector": "",
    "bottleneck": "조선/해양",
    "totalScore": 58.08536398467432,
    "moatScore": 70.0,
    "moatType": "IP",
    "recommendation": "BUY",
    "conviction": 75.0,
    "oneLiner": "한화 그룹의 날개를 단 특수선 명가.",
    "coreBusiness": "LNG선 및 잠수함, 수상함 건조 중심의 조선해양",
    "competitiveEdge": "잠수함 등 특수선 분야에서 국내 최고 수준의 기술력과 지적재산권(IP)을 보유하고 있습니다. 한화 그룹 편입 후 방산 시너지가 극대화되고 있습니다.",
    "catalysts": [
      "미국 해군 MRO 사업 수주 및 해외 조선소 인수 시너지",
      "카타르 LNG선 등 고선가 프로젝트 건조 본격화"
    ],
    "risks": [
      "상선 부문의 경쟁사 대비 상대적 열위",
      "과거 적자 누적으로 인한 재무구조 개선 부담"
    ],
    "valuationNote": "PER 33배 수준으로, 특수선 프리미엄과 턴어라운드 기대감이 반영되어 있습니다.",
    "metrics": {
      "per": 33.18,
      "pbr": null,
      "psr": 3.233477552964227,
      "roe": 0.2259,
      "fcfYield": null,
      "ret6m": null,
      "ret12m": null
    }
  },
  {
    "rank": 9,
    "ticker": "051600",
    "name": "한전KPS",
    "sector": "",
    "bottleneck": "원전/우라늄",
    "totalScore": 58.07655172413794,
    "moatScore": 80.0,
    "moatType": "REG",
    "recommendation": "HOLD",
    "conviction": 65.0,
    "oneLiner": "안정적 캐시카우에 원전 수출 모멘텀 한 스푼.",
    "coreBusiness": "국내외 발전설비 정비 및 유지보수(O&M)",
    "competitiveEdge": "국내 발전 정비 시장에서 독점적 지위를 누리고 있으며, 원전 및 화력 발전소 정비에 대한 대체 불가능한 기술력과 레퍼런스를 보유합니다.",
    "catalysts": [
      "체코 등 해외 원전 수주에 따른 정비 물량 확대 기대",
      "국내 노후 발전소 성능 개선 공사 증가"
    ],
    "risks": [
      "정부의 에너지 정책 변화에 따른 실적 변동성",
      "한전의 재무 악화로 인한 단가 인하 압박"
    ],
    "valuationNote": "PER 23배 수준으로, 안정적인 현금흐름과 배당 매력을 고려할 때 적정 수준입니다.",
    "metrics": {
      "per": 23.0,
      "pbr": null,
      "psr": null,
      "roe": 0.0929,
      "fcfYield": null,
      "ret6m": null,
      "ret12m": null
    }
  },
  {
    "rank": 10,
    "ticker": "042700",
    "name": "한미반도체",
    "sector": "",
    "bottleneck": "반도체장비/소부장",
    "totalScore": 58.02108324625566,
    "moatScore": 85.0,
    "moatType": "IP",
    "recommendation": "HOLD",
    "conviction": 70.0,
    "oneLiner": "HBM 장비의 절대 강자이나 밸류에이션은 부담.",
    "coreBusiness": "HBM용 TC 본더 등 반도체 후공정 장비 제조",
    "competitiveEdge": "HBM 핵심 공정인 TC 본더 시장에서 글로벌 독점적 기술력과 특허(IP)를 보유하고 있습니다. SK하이닉스 등 핵심 고객사와의 강력한 락인 효과가 존재합니다.",
    "catalysts": [
      "마이크론 등 글로벌 신규 고객사 확보",
      "HBM4 세대 전환에 따른 신규 장비 발주"
    ],
    "risks": [
      "경쟁사(한화정밀기계 등)의 TC 본더 시장 진입 우려",
      "단일 장비에 대한 지나치게 높은 매출 의존도"
    ],
    "valuationNote": "PER 132배, PSR 48배로 극도의 고평가 상태이나, HBM 시장 성장의 최대 수혜주 프리미엄입니다.",
    "metrics": {
      "per": 132.33,
      "pbr": null,
      "psr": 48.83917317424024,
      "roe": 0.3476,
      "fcfYield": null,
      "ret6m": null,
      "ret12m": null
    }
  }
];

export const qvgmUsTop: QvgmRecord[] = [
  {
    "rank": 1,
    "ticker": "EIX",
    "name": "Edison International",
    "sector": "Utilities",
    "bottleneck": "",
    "totalScore": 72.16521599391484,
    "moatScore": 80.0,
    "moatType": "REG",
    "recommendation": "BUY",
    "conviction": 75.0,
    "oneLiner": "산불 리스크를 감내할 수 있다면 매력적인 저평가 유틸리티.",
    "coreBusiness": "캘리포니아 남부 및 중부 지역에 전력을 공급하는 규제 기반 유틸리티 기업입니다.",
    "competitiveEdge": "규제 독점 사업자로서 안정적인 현금흐름을 창출합니다. 캘리포니아의 강력한 친환경 정책에 따른 전력망 현대화 투자가 요금 기저(Rate Base) 성장을 보장합니다.",
    "catalysts": [
      "캘리포니아 전력망 인프라 투자 확대",
      "전기차 보급에 따른 전력 수요 구조적 증가"
    ],
    "risks": [
      "산불 발생에 따른 대규모 배상 책임 리스크",
      "금리 인상 시 배당 매력도 하락"
    ],
    "valuationNote": "PER 5.9배, PBR 1.5배로 유틸리티 섹터 내 저평가 구간입니다. 산불 등 규제 리스크가 반영된 밸류에이션입니다.",
    "metrics": {
      "per": 5.9619045,
      "pbr": 1.5511454,
      "psr": 1.372088,
      "roe": 0.24103001,
      "fcfYield": -0.02450515913235893,
      "ret6m": 0.1856060337369503,
      "ret12m": null
    }
  },
  {
    "rank": 2,
    "ticker": "VRT",
    "name": "Vertiv",
    "sector": "Industrials",
    "bottleneck": "AI인프라/HBM/전력",
    "totalScore": 70.9943875861429,
    "moatScore": 75.0,
    "moatType": "SWITCHING",
    "recommendation": "BUY",
    "conviction": 80.0,
    "oneLiner": "AI 데이터센터 전력/냉각 인프라의 대체 불가 핵심 기업.",
    "coreBusiness": "데이터센터 및 통신 네트워크용 전력 관리 및 냉각 인프라 솔루션을 제공합니다.",
    "competitiveEdge": "AI 데이터센터 확장에 필수적인 고밀도 전력 및 열 관리 기술에서 글로벌 선두권입니다. 고객 전환 비용이 매우 높아 강력한 락인(Lock-in) 효과를 누립니다.",
    "catalysts": [
      "AI 데이터센터 전력 밀도 증가에 따른 액침 냉각 수요 급증",
      "빅테크 기업들의 인프라 CAPEX 확대"
    ],
    "risks": [
      "AI 투자 사이클 둔화 시 수주 잔고 감소",
      "고평가에 따른 밸류에이션 부담"
    ],
    "valuationNote": "PER 81배, PBR 31배로 밸류에이션 부담이 높으나, AI 인프라 병목 현상의 최대 수혜주로서 프리미엄이 정당화됩니다.",
    "metrics": {
      "per": 81.271355,
      "pbr": 31.394737,
      "psr": 11.458014,
      "roe": 0.45097,
      "fcfYield": 0.0158136623121524,
      "ret6m": 0.8850748782471503,
      "ret12m": null
    }
  },
  {
    "rank": 3,
    "ticker": "CF",
    "name": "CF Industries",
    "sector": "Basic Materials",
    "bottleneck": "",
    "totalScore": 68.80628175853303,
    "moatScore": 70.0,
    "moatType": "COST",
    "recommendation": "BUY",
    "conviction": 70.0,
    "oneLiner": "압도적 원가 경쟁력을 갖춘 질소 비료 시장의 강자.",
    "coreBusiness": "북미를 중심으로 암모니아 및 질소 비료를 생산, 판매하는 글로벌 농업 화학 기업입니다.",
    "competitiveEdge": "북미의 저렴한 천연가스를 원료로 사용하여 글로벌 경쟁사 대비 압도적인 원가 우위를 확보하고 있습니다. 대규모 생산 설비와 물류 네트워크가 진입 장벽으로 작용합니다.",
    "catalysts": [
      "글로벌 식량 안보 강화 기조",
      "친환경 블루/그린 암모니아 시장 선점"
    ],
    "risks": [
      "천연가스 가격 변동성에 따른 마진 축소",
      "농산물 가격 하락 시 비료 수요 감소"
    ],
    "valuationNote": "PER 13.4배, FCF 수익률 7%로 우수한 현금 창출력 대비 저평가 매력이 돋보입니다.",
    "metrics": {
      "per": 13.481605,
      "pbr": 3.8381946,
      "psr": 2.622365,
      "roe": 0.23401,
      "fcfYield": 0.07040354156009666,
      "ret6m": 0.407308272730122,
      "ret12m": null
    }
  },
  {
    "rank": 4,
    "ticker": "GEV",
    "name": "GE Vernova",
    "sector": "Industrials",
    "bottleneck": "AI인프라/HBM/전력",
    "totalScore": 68.55500398609509,
    "moatScore": 75.0,
    "moatType": "SWITCHING",
    "recommendation": "STRONG_BUY",
    "conviction": 85.0,
    "oneLiner": "AI 전력 병목을 해결할 글로벌 에너지 인프라 대장주.",
    "coreBusiness": "전력 발전, 풍력, 전력망 전반에 걸친 에너지 인프라 장비 및 서비스를 제공합니다.",
    "competitiveEdge": "전 세계 전력의 약 30%를 생산하는 방대한 설치 기반을 보유하고 있습니다. 장기 서비스 계약을 통한 높은 전환 비용이 강력한 해자를 형성합니다.",
    "catalysts": [
      "AI 데이터센터 전력 수요 폭증에 따른 가스터빈 수주 확대",
      "글로벌 전력망 현대화 및 재생에너지 전환"
    ],
    "risks": [
      "해상 풍력 사업부의 수익성 개선 지연",
      "거시 경제 둔화에 따른 인프라 투자 지연"
    ],
    "valuationNote": "PER 33.5배로 다소 높으나, ROE 75%의 뛰어난 자본 효율성과 전력 슈퍼 사이클 수혜를 고려하면 합리적입니다.",
    "metrics": {
      "per": 33.55299,
      "pbr": 22.18128,
      "psr": 7.842802,
      "roe": 0.75708,
      "fcfYield": 0.03016617134311311,
      "ret6m": 0.9951214260525174,
      "ret12m": null
    }
  },
  {
    "rank": 5,
    "ticker": "MU",
    "name": "Micron Technology",
    "sector": "Technology",
    "bottleneck": "AI인프라/HBM/전력",
    "totalScore": 67.96061727036418,
    "moatScore": 80.0,
    "moatType": "IP",
    "recommendation": "STRONG_BUY",
    "conviction": 90.0,
    "oneLiner": "HBM 수요 폭발이 이끄는 메모리 슈퍼 사이클의 핵심 수혜주.",
    "coreBusiness": "D램 및 낸드 플래시 메모리 반도체를 설계하고 제조하는 글로벌 선도 기업입니다.",
    "competitiveEdge": "소수의 과점 체제인 메모리 시장에서 강력한 지적재산권(IP)과 공정 기술력을 보유하고 있습니다. 특히 HBM 분야에서 경쟁력을 빠르게 입증하고 있습니다.",
    "catalysts": [
      "AI 서버용 HBM 및 고용량 D램 수요 폭발",
      "메모리 반도체 가격 상승 사이클 진입"
    ],
    "risks": [
      "전통적 IT 수요(PC, 스마트폰) 회복 지연",
      "경쟁사들의 HBM 캐파 증설에 따른 공급 과잉 우려"
    ],
    "valuationNote": "매출 성장률 196%의 폭발적 턴어라운드 진행 중이며, PER 23배는 AI 모멘텀 대비 매력적인 수준입니다.",
    "metrics": {
      "per": 23.419144,
      "pbr": 7.7326155,
      "psr": 9.638294,
      "roe": 0.39823002,
      "fcfYield": 0.005165414098075153,
      "ret6m": 1.502745997710451,
      "ret12m": null
    }
  },
  {
    "rank": 6,
    "ticker": "NEM",
    "name": "Newmont",
    "sector": "Basic Materials",
    "bottleneck": "",
    "totalScore": 66.53853162025092,
    "moatScore": 60.0,
    "moatType": "COST",
    "recommendation": "BUY",
    "conviction": 75.0,
    "oneLiner": "금값 강세 사이클을 온전히 누릴 수 있는 세계 최대 금광주.",
    "coreBusiness": "글로벌 다각화된 포트폴리오를 보유한 세계 최대의 금 생산 기업입니다.",
    "competitiveEdge": "지정학적 리스크가 낮은 지역에 우량 광산을 다수 보유하여 원가 경쟁력과 생산 안정성이 뛰어납니다. 대규모 자본이 필요한 광산업 특성상 진입 장벽이 높습니다.",
    "catalysts": [
      "중앙은행들의 금 매입 지속 및 금값 상승",
      "Newcrest 인수에 따른 시너지 및 원가 절감 본격화"
    ],
    "risks": [
      "인플레이션에 따른 채굴 원가(인건비, 에너지) 상승",
      "광산 운영 국가의 규제 및 세금 정책 변경"
    ],
    "valuationNote": "PER 15.6배, FCF 수익률 7.6%로 금 가격 강세 환경에서 매우 매력적인 밸류에이션과 현금흐름을 보여줍니다.",
    "metrics": {
      "per": 15.654993,
      "pbr": 3.7081413,
      "psr": 5.161164,
      "roe": 0.25832,
      "fcfYield": 0.07609312926956684,
      "ret6m": 0.3871968047910597,
      "ret12m": null
    }
  },
  {
    "rank": 7,
    "ticker": "HII",
    "name": "Huntington Ingalls Industries",
    "sector": "Industrials",
    "bottleneck": "방산",
    "totalScore": 66.24174402230825,
    "moatScore": 85.0,
    "moatType": "REG",
    "recommendation": "HOLD",
    "conviction": 65.0,
    "oneLiner": "대체 불가능한 미 해군 핵심 파트너이나 성장성은 제한적.",
    "coreBusiness": "미국 해군의 핵추진 항공모함 및 잠수함을 독점적으로 설계, 건조하는 방산 기업입니다.",
    "competitiveEdge": "미 해군 항공모함의 유일한 건조사이며, 핵잠수함 건조가 가능한 단 두 기업 중 하나입니다. 국가 안보와 직결된 강력한 규제 및 기술적 해자를 보유합니다.",
    "catalysts": [
      "미국 국방 예산 증액 및 해군 함대 현대화 계획",
      "AUKUS 동맹에 따른 잠수함 수요 증가"
    ],
    "risks": [
      "미국 정부 예산 삭감 또는 집행 지연",
      "숙련된 노동력 부족 및 인건비 상승 압박"
    ],
    "valuationNote": "PER 23배, PBR 2.7배로 독점적 사업 지위와 안정적인 수주 잔고를 고려할 때 적정 수준입니다.",
    "metrics": {
      "per": 23.360859,
      "pbr": 2.7792475,
      "psr": 1.1332766,
      "roe": 0.124239996,
      "fcfYield": 0.04848801971014535,
      "ret6m": 0.2667112889210996,
      "ret12m": null
    }
  },
  {
    "rank": 8,
    "ticker": "ETN",
    "name": "Eaton Corporation",
    "sector": "Industrials",
    "bottleneck": "AI인프라/HBM/전력",
    "totalScore": 65.69253619444436,
    "moatScore": 80.0,
    "moatType": "SWITCHING",
    "recommendation": "BUY",
    "conviction": 80.0,
    "oneLiner": "전력화 메가트렌드와 AI 인프라 확장의 든든한 조력자.",
    "coreBusiness": "전력 분배, 제어 및 관리 솔루션을 제공하는 글로벌 전력 관리 기업입니다.",
    "competitiveEdge": "다각화된 산업군에 걸쳐 필수적인 전력 인프라를 제공하며, 높은 전환 비용과 브랜드 신뢰도를 바탕으로 시장을 선도합니다.",
    "catalysts": [
      "AI 데이터센터 전력 인프라 수요 급증",
      "미국 리쇼어링 및 인프라 법안(IIJA) 수혜"
    ],
    "risks": [
      "글로벌 경기 침체에 따른 산업용 수요 둔화",
      "공급망 차질에 따른 원자재 비용 상승"
    ],
    "valuationNote": "PER 40배로 역사적 밴드 상단이나, 전력 슈퍼 사이클과 AI 인프라 수혜를 고려하면 프리미엄 부여가 가능합니다.",
    "metrics": {
      "per": 40.489017,
      "pbr": 8.4653635,
      "psr": 5.9922304,
      "roe": 0.21525998,
      "fcfYield": 0.01579573852480719,
      "ret6m": 0.1755962458471001,
      "ret12m": null
    }
  },
  {
    "rank": 9,
    "ticker": "STLD",
    "name": "Steel Dynamics",
    "sector": "Basic Materials",
    "bottleneck": "",
    "totalScore": 65.04110766159873,
    "moatScore": 75.0,
    "moatType": "COST",
    "recommendation": "HOLD",
    "conviction": 60.0,
    "oneLiner": "원가 경쟁력이 뛰어난 미국 철강 산업의 우등생.",
    "coreBusiness": "전기로(EAF) 방식을 사용하여 고부가가치 철강 제품을 생산하는 미국 철강 기업입니다.",
    "competitiveEdge": "전통적 고로 대비 유연하고 비용 효율적인 전기로 기술을 통해 업계 최고 수준의 원가 경쟁력과 마진 방어력을 갖추고 있습니다.",
    "catalysts": [
      "미국 인프라 투자 확대에 따른 철강 수요 증가",
      "친환경 저탄소 철강 제품 수요 확대"
    ],
    "risks": [
      "글로벌 철강 공급 과잉 및 가격 하락",
      "미국 내 제조업 경기 둔화"
    ],
    "valuationNote": "PER 24배로 철강주 치고는 높으나, ROE 15%의 우수한 수익성과 안정적인 이익 창출력이 돋보입니다.",
    "metrics": {
      "per": 24.33369,
      "pbr": 3.6698003,
      "psr": 1.7282484,
      "roe": 0.15247,
      "fcfYield": -0.0009674658688908036,
      "ret6m": 0.5265885636319041,
      "ret12m": null
    }
  },
  {
    "rank": 10,
    "ticker": "FAF",
    "name": "First American Financial Corporation",
    "sector": "Financial Services",
    "bottleneck": "",
    "totalScore": 64.75442477337258,
    "moatScore": 75.0,
    "moatType": "NETWORK",
    "recommendation": "BUY",
    "conviction": 75.0,
    "oneLiner": "금리 인하 사이클 진입 시 폭발할 부동산 시장 회복 수혜주.",
    "coreBusiness": "주거용 및 상업용 부동산 거래에 필수적인 권원 보험(Title Insurance) 및 결제 서비스를 제공합니다.",
    "competitiveEdge": "방대한 부동산 데이터베이스와 오랜 업력을 바탕으로 강력한 네트워크 효과를 구축했습니다. 과점화된 미국 권원 보험 시장에서 확고한 지위를 차지합니다.",
    "catalysts": [
      "미국 연준 금리 인하에 따른 주택 거래량 회복",
      "부동산 시장 디지털화에 따른 운영 효율성 개선"
    ],
    "risks": [
      "고금리 장기화로 인한 주택 시장 침체 지속",
      "사이버 보안 사고 및 데이터 유출 리스크"
    ],
    "valuationNote": "PER 10.9배, FCF 수익률 23.6%로 극심한 저평가 상태이며, 주택 시장 회복 시 강력한 턴어라운드가 기대됩니다.",
    "metrics": {
      "per": 10.903077,
      "pbr": 1.3180948,
      "psr": 0.9406249,
      "roe": 0.12796,
      "fcfYield": 0.2360783030133546,
      "ret6m": 0.154234543735503,
      "ret12m": null
    }
  }
];

export const qvgmWeights = {
  value: 0.16,
  quality: 0.12,
  growth: 0.15,
  momentum: 0.18,
  sector: 0.12,
  moat: 0.17,
  bottleneck: 0.10,
} as const;
