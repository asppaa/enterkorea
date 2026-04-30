// 자동 생성 — QVGM+Moat 스크리너 결과 (수동 편집 비권장)
export const qvgmAsOf = '2026-04-30 12:49';

export type QvgmMetrics = {
  per: number | null;
  pbr: number | null;
  psr: number | null;
  roe: number | null;
  fcfYield: number | null;
  ret6m: number | null;
  ret12m: number | null;
};

export type QvgmPersonaVerdict = {
  score: number | null;
  verdict: string;  // BUY | HOLD | AVOID
  note: string;
};

export type QvgmPersonas = {
  buffett: QvgmPersonaVerdict | null;
  graham: QvgmPersonaVerdict | null;
  munger: QvgmPersonaVerdict | null;
  klarman: QvgmPersonaVerdict | null;
  consensus: number | null;
  summary: string;
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
  personas: QvgmPersonas | null;
};

export const qvgmKrTop: QvgmRecord[] = [
  {
    "rank": 1,
    "ticker": "000660",
    "name": "SK하이닉스",
    "sector": "Technology",
    "bottleneck": "AI인프라/HBM/전력",
    "totalScore": 84.96618351113239,
    "moatScore": 85.0,
    "moatType": "IP",
    "recommendation": "STRONG_BUY",
    "conviction": 90.0,
    "oneLiner": "AI 시대의 핵심 인프라인 HBM 시장의 절대 강자",
    "coreBusiness": "글로벌 선두권의 메모리 반도체(DRAM, NAND) 제조 및 판매",
    "competitiveEdge": "HBM 시장에서 압도적인 기술력과 점유율을 확보하고 있습니다. 엔비디아 등 핵심 AI 칩 벤더와의 강력한 파트너십이 진입장벽으로 작용합니다.",
    "catalysts": [
      "AI 서버 수요 증가에 따른 HBM 매출 급증",
      "메모리 반도체 업황 턴어라운드 및 가격 상승"
    ],
    "risks": [
      "글로벌 매크로 둔화에 따른 IT 수요 침체",
      "경쟁사의 HBM 시장 진입 및 점유율 확대"
    ],
    "valuationNote": "PER 22배 수준으로 AI 모멘텀을 반영 중이나, 압도적인 ROE(61%)와 성장성을 고려할 때 프리미엄 정당화가 가능합니다.",
    "metrics": {
      "per": 22.14,
      "pbr": null,
      "psr": 6.9912286,
      "roe": 0.61172,
      "fcfYield": null,
      "ret6m": 1.439252336448598,
      "ret12m": null
    },
    "personas": {
      "buffett": {
        "score": 80.0,
        "verdict": "BUY",
        "note": "압도적 기술 해자와 높은 ROE 매력"
      },
      "graham": {
        "score": 40.0,
        "verdict": "HOLD",
        "note": "PER 22배로 안전마진 부족"
      },
      "munger": {
        "score": 85.0,
        "verdict": "BUY",
        "note": "AI 사이클의 확실한 승자"
      },
      "klarman": {
        "score": 50.0,
        "verdict": "HOLD",
        "note": "사이클 고점 리스크 경계 필요"
      },
      "consensus": 64.0,
      "summary": "강력한 해자 인정되나 사이클 고점 우려 상존"
    }
  },
  {
    "rank": 2,
    "ticker": "005930",
    "name": "삼성전자",
    "sector": "Technology",
    "bottleneck": "AI인프라/HBM/전력",
    "totalScore": 80.5336015791033,
    "moatScore": 88.0,
    "moatType": "COST",
    "recommendation": "BUY",
    "conviction": 80.0,
    "oneLiner": "메모리 턴어라운드와 AI 밸류체인 합류가 기대되는 글로벌 IT 거인",
    "coreBusiness": "글로벌 1위의 메모리 반도체, 스마트폰, 가전 및 디스플레이 제조",
    "competitiveEdge": "막대한 자본력과 원가 경쟁력을 바탕으로 한 규모의 경제가 핵심 해자입니다. 반도체, 모바일, 가전을 아우르는 다각화된 포트폴리오로 안정적인 수익 창출이 가능합니다.",
    "catalysts": [
      "HBM3E 등 차세대 AI 메모리 공급 본격화",
      "온디바이스 AI 스마트폰(갤럭시 AI) 판매 호조"
    ],
    "risks": [
      "파운드리 부문의 수율 이슈 및 경쟁사와의 격차",
      "HBM 시장에서의 후발주자 리스크"
    ],
    "valuationNote": "PER 34배로 역사적 밴드 상단에 위치하나, 메모리 업황 회복과 AI 밸류체인 편입 시 리레이팅이 기대됩니다.",
    "metrics": {
      "per": 34.43,
      "pbr": null,
      "psr": 4.43865,
      "roe": 0.10783,
      "fcfYield": 0.01617032663746331,
      "ret6m": 1.21078431372549,
      "ret12m": null
    },
    "personas": {
      "buffett": {
        "score": 75.0,
        "verdict": "HOLD",
        "note": "규모의 경제 해자, 수익성 개선 필요"
      },
      "graham": {
        "score": 30.0,
        "verdict": "AVOID",
        "note": "PER 34배로 가치투자 매력 낮음"
      },
      "munger": {
        "score": 60.0,
        "verdict": "HOLD",
        "note": "파운드리 경쟁력 저하 우려됨"
      },
      "klarman": {
        "score": 55.0,
        "verdict": "HOLD",
        "note": "하방 경직성 있으나 밸류에이션 부담"
      },
      "consensus": 55.0,
      "summary": "안정적이나 밸류에이션과 경쟁력 우려로 관망"
    }
  },
  {
    "rank": 3,
    "ticker": "402340",
    "name": "SK스퀘어",
    "sector": "Technology",
    "bottleneck": "",
    "totalScore": 77.98439693169476,
    "moatScore": 75.0,
    "moatType": "NETWORK",
    "recommendation": "BUY",
    "conviction": 75.0,
    "oneLiner": "SK하이닉스의 성장 과실을 가장 싸게 누릴 수 있는 투자처",
    "coreBusiness": "반도체 및 ICT 산업 중심의 글로벌 투자 전문 기업",
    "competitiveEdge": "SK하이닉스 등 우량 자회사를 보유한 강력한 네트워크와 자본 배분 능력이 강점입니다. 그룹 내 핵심 투자 허브로서 딜 소싱 및 밸류업 역량을 갖추고 있습니다.",
    "catalysts": [
      "SK하이닉스 지분 가치 상승 및 배당 수익 증가",
      "보유 포트폴리오 기업의 성공적인 IPO 및 매각"
    ],
    "risks": [
      "자회사 실적 변동성에 따른 NAV(순자산가치) 하락",
      "지주사 디스카운트 심화"
    ],
    "valuationNote": "PER 12배 수준으로 SK하이닉스 지분 가치 대비 심각한 저평가 상태이며, 주주환원 정책 강화 시 밸류에이션 매력이 부각될 수 있습니다.",
    "metrics": {
      "per": 12.85,
      "pbr": null,
      "psr": 10.702937,
      "roe": 0.37138999,
      "fcfYield": 0.05157153172420359,
      "ret6m": 1.912521440823328,
      "ret12m": null
    },
    "personas": {
      "buffett": {
        "score": 80.0,
        "verdict": "BUY",
        "note": "우수한 자본 배분과 현금흐름 창출"
      },
      "graham": {
        "score": 85.0,
        "verdict": "BUY",
        "note": "낮은 PER과 지주사 할인 매력적"
      },
      "munger": {
        "score": 70.0,
        "verdict": "HOLD",
        "note": "복잡한 구조나 밸류에이션은 합리적"
      },
      "klarman": {
        "score": 80.0,
        "verdict": "BUY",
        "note": "NAV 대비 큰 할인율로 안전마진 확보"
      },
      "consensus": 79.0,
      "summary": "저평가된 가치와 우량 자회사 보유로 매력적"
    }
  },
  {
    "rank": 4,
    "ticker": "010120",
    "name": "LS ELECTRIC",
    "sector": "Industrials",
    "bottleneck": "AI인프라/HBM/전력",
    "totalScore": 74.45446400740677,
    "moatScore": 75.0,
    "moatType": "BRAND",
    "recommendation": "HOLD",
    "conviction": 60.0,
    "oneLiner": "전력 인프라 수혜는 확실하나 단기 주가 급등에 따른 숨고르기 필요",
    "coreBusiness": "전력기기, 자동화 기기 및 스마트 에너지 솔루션 제공",
    "competitiveEdge": "국내 배전 및 자동화 시장에서 확고한 1위 브랜드 파워를 보유하고 있습니다. 오랜 업력과 방대한 영업망이 신규 진입자의 위협을 차단하는 해자 역할을 합니다.",
    "catalysts": [
      "북미 중심의 전력 인프라 수출 확대",
      "스마트그리드 및 신재생에너지 연계 전력망 구축 수요 증가"
    ],
    "risks": [
      "국내 건설 및 설비투자 경기 침체",
      "글로벌 경쟁 심화에 따른 판가 인하 압력"
    ],
    "valuationNote": "PER 145배로 단기 급등에 따른 밸류에이션 부담이 매우 높습니다. 실적 성장 속도가 주가 상승을 후행할 가능성이 있습니다.",
    "metrics": {
      "per": 145.6,
      "pbr": null,
      "psr": 8.249382,
      "roe": 0.14061,
      "fcfYield": 0.0002189816292316865,
      "ret6m": 2.666666666666667,
      "ret12m": null
    },
    "personas": {
      "buffett": {
        "score": 40.0,
        "verdict": "AVOID",
        "note": "브랜드 해자 있으나 가격 터무니없음"
      },
      "graham": {
        "score": 10.0,
        "verdict": "AVOID",
        "note": "PER 145배는 절대 매수 불가"
      },
      "munger": {
        "score": 20.0,
        "verdict": "AVOID",
        "note": "유행에 편승한 극단적 고평가"
      },
      "klarman": {
        "score": 15.0,
        "verdict": "AVOID",
        "note": "하방 리스크가 너무 커서 회피"
      },
      "consensus": 21.0,
      "summary": "비이성적 고평가 상태로 전원 매수 회피"
    }
  },
  {
    "rank": 5,
    "ticker": "267260",
    "name": "HD현대일렉트릭",
    "sector": "Industrials",
    "bottleneck": "AI인프라/HBM/전력",
    "totalScore": 74.1203039090459,
    "moatScore": 75.0,
    "moatType": "BRAND",
    "recommendation": "BUY",
    "conviction": 85.0,
    "oneLiner": "AI 데이터센터가 쏘아올린 전력 슈퍼사이클의 최대 수혜주",
    "coreBusiness": "전력기기, 배전기기 및 회전기기 등 종합 중전기기 제조",
    "competitiveEdge": "북미 및 중동 시장에서 강력한 브랜드 인지도와 레퍼런스를 보유하고 있습니다. 고압 변압기 시장의 높은 진입장벽과 장기 공급 계약이 안정적인 해자를 형성합니다.",
    "catalysts": [
      "북미 전력망 노후화 교체 및 AI 데이터센터 전력 수요 급증",
      "고수익성 수주 잔고의 매출 인식 본격화"
    ],
    "risks": [
      "원자재(구리 등) 가격 급등에 따른 원가 부담",
      "글로벌 전력망 투자 지연 가능성"
    ],
    "valuationNote": "PER 62배로 밸류에이션 부담이 존재하나, 41%의 높은 ROE와 폭발적인 전력 인프라 수요를 감안하면 성장 프리미엄이 타당합니다.",
    "metrics": {
      "per": 62.0,
      "pbr": null,
      "psr": 11.04618,
      "roe": 0.4134,
      "fcfYield": 0.01507804041652209,
      "ret6m": 0.525609756097561,
      "ret12m": null
    },
    "personas": {
      "buffett": {
        "score": 60.0,
        "verdict": "HOLD",
        "note": "ROE 훌륭하나 가격이 너무 비쌈"
      },
      "graham": {
        "score": 20.0,
        "verdict": "AVOID",
        "note": "PER 62배는 안전마진 전혀 없음"
      },
      "munger": {
        "score": 50.0,
        "verdict": "HOLD",
        "note": "전력망 사이클 수혜나 가격 거품 우려"
      },
      "klarman": {
        "score": 30.0,
        "verdict": "AVOID",
        "note": "고평가로 인한 영구 손실 리스크 큼"
      },
      "consensus": 40.0,
      "summary": "우수한 사업이나 극심한 고평가로 투자 주의"
    }
  },
  {
    "rank": 6,
    "ticker": "062040",
    "name": "산일전기",
    "sector": "Industrials",
    "bottleneck": "AI인프라/HBM/전력",
    "totalScore": 73.51829968082308,
    "moatScore": 55.0,
    "moatType": "NONE",
    "recommendation": "BUY",
    "conviction": 70.0,
    "oneLiner": "특수 변압기 틈새 시장을 장악한 고수익성 강소기업",
    "coreBusiness": "전력망, 신재생에너지 및 산업용 특수 변압기 제조",
    "competitiveEdge": "다품종 소량 생산 체제를 구축하여 고객 맞춤형 특수 변압기 시장에서 틈새 경쟁력을 확보하고 있습니다. 빠른 납기 대응력이 주요 강점입니다.",
    "catalysts": [
      "미국 신재생에너지(태양광, 풍력) 연계 변압기 수요 급증",
      "글로벌 고객사 다변화 및 수출 비중 확대"
    ],
    "risks": [
      "대형 전력기기 업체 대비 제한적인 생산 능력",
      "신재생에너지 정책 변화에 따른 수요 변동성"
    ],
    "valuationNote": "PER 46배, ROE 127%라는 경이로운 자본 효율성을 보여주고 있습니다. 폭발적인 이익 성장이 고밸류에이션을 정당화하고 있습니다.",
    "metrics": {
      "per": 46.11,
      "pbr": null,
      "psr": 6.7112756,
      "roe": 1.27657,
      "fcfYield": 0.05603604934038713,
      "ret6m": 0.507177033492823,
      "ret12m": null
    },
    "personas": {
      "buffett": {
        "score": 50.0,
        "verdict": "HOLD",
        "note": "ROE 경이로우나 장기 해자 불확실"
      },
      "graham": {
        "score": 20.0,
        "verdict": "AVOID",
        "note": "PER 46배로 가치투자 기준 미달"
      },
      "munger": {
        "score": 40.0,
        "verdict": "HOLD",
        "note": "틈새시장이나 진입장벽 낮음"
      },
      "klarman": {
        "score": 30.0,
        "verdict": "AVOID",
        "note": "수요 변동성 리스크 대비 고평가"
      },
      "consensus": 35.0,
      "summary": "높은 수익성이나 해자 부족과 고평가로 관망"
    }
  },
  {
    "rank": 7,
    "ticker": "042700",
    "name": "한미반도체",
    "sector": "Technology",
    "bottleneck": "반도체장비/소부장",
    "totalScore": 72.60966884588774,
    "moatScore": 85.0,
    "moatType": "IP",
    "recommendation": "HOLD",
    "conviction": 55.0,
    "oneLiner": "HBM 장비의 절대 강자이나 밸류에이션은 이미 완벽함을 요구 중",
    "coreBusiness": "반도체 후공정 장비(TC 본더, 마이크로 쏘 등) 제조",
    "competitiveEdge": "HBM 제조의 핵심 장비인 TC 본더 시장에서 독보적인 기술력(IP)과 글로벌 점유율 1위를 차지하고 있습니다. SK하이닉스 등 핵심 고객사와의 공동 개발 레퍼런스가 강력한 진입장벽입니다.",
    "catalysts": [
      "글로벌 메모리 메이커들의 HBM CAPA 증설 경쟁",
      "차세대 HBM(HBM4 등) 공정 변화에 따른 신규 장비 수주"
    ],
    "risks": [
      "경쟁 장비 업체들의 TC 본더 시장 진입 시도",
      "특정 고객사(SK하이닉스)에 대한 높은 매출 의존도"
    ],
    "valuationNote": "PER 172배, PSR 63배로 극단적인 고평가 영역에 진입했습니다. 완벽한 실적 성장과 독점력 유지가 전제되어야만 현재 주가를 설명할 수 있습니다.",
    "metrics": {
      "per": 172.41,
      "pbr": null,
      "psr": 63.81818,
      "roe": 0.34764,
      "fcfYield": 0.003389344800307937,
      "ret6m": 1.606951871657754,
      "ret12m": null
    },
    "personas": {
      "buffett": {
        "score": 40.0,
        "verdict": "AVOID",
        "note": "훌륭한 기업이나 가격이 비이성적"
      },
      "graham": {
        "score": 10.0,
        "verdict": "AVOID",
        "note": "PER 172배는 투기적 수준"
      },
      "munger": {
        "score": 20.0,
        "verdict": "AVOID",
        "note": "AI 거품의 전형적인 고평가 사례"
      },
      "klarman": {
        "score": 10.0,
        "verdict": "AVOID",
        "note": "완벽한 가격 책정으로 하방 리스크 극대"
      },
      "consensus": 20.0,
      "summary": "압도적 기술력에도 극단적 고평가로 전원 회피"
    }
  },
  {
    "rank": 8,
    "ticker": "007660",
    "name": "이수페타시스",
    "sector": "Technology",
    "bottleneck": "반도체장비/소부장",
    "totalScore": 72.05932598965573,
    "moatScore": 75.0,
    "moatType": "IP",
    "recommendation": "BUY",
    "conviction": 80.0,
    "oneLiner": "글로벌 빅테크의 AI 인프라 구축에 필수적인 고다층 PCB 핵심 벤더",
    "coreBusiness": "고다층 인쇄회로기판(MLB) 제조 및 판매",
    "competitiveEdge": "18층 이상의 초고다층 PCB 제조에서 글로벌 최고 수준의 기술력(IP)을 보유하고 있습니다. 구글, 엔비디아 등 글로벌 빅테크를 고객사로 확보한 레퍼런스가 강력한 해자입니다.",
    "catalysts": [
      "AI 가속기 및 800G 네트워크 스위치용 고부가 MLB 수요 급증",
      "신규 공장 가동에 따른 생산 능력(CAPA) 확대"
    ],
    "risks": [
      "미중 패권 경쟁 완화 시 중국 경쟁사들의 위협 가능성",
      "AI 인프라 투자 사이클 둔화 시 실적 타격"
    ],
    "valuationNote": "PER 67배로 AI 모멘텀이 강하게 반영되어 있습니다. 고부가 제품 비중 확대를 통한 이익률 개선이 밸류에이션 부담을 낮출 핵심 키입니다.",
    "metrics": {
      "per": 67.66,
      "pbr": null,
      "psr": 10.140763,
      "roe": 0.29617,
      "fcfYield": -0.004794223742013965,
      "ret6m": 0.568893528183716,
      "ret12m": null
    },
    "personas": {
      "buffett": {
        "score": 30.0,
        "verdict": "AVOID",
        "note": "음수 현금흐름과 고평가 부담"
      },
      "graham": {
        "score": 20.0,
        "verdict": "AVOID",
        "note": "PER 67배로 안전마진 전무"
      },
      "munger": {
        "score": 30.0,
        "verdict": "AVOID",
        "note": "AI 인프라 사이클 고점 우려"
      },
      "klarman": {
        "score": 20.0,
        "verdict": "AVOID",
        "note": "현금흐름 악화 및 고평가 리스크"
      },
      "consensus": 25.0,
      "summary": "현금흐름 부진 및 사이클 고점 우려로 회피"
    }
  },
  {
    "rank": 9,
    "ticker": "103590",
    "name": "일진전기",
    "sector": "Industrials",
    "bottleneck": "AI인프라/HBM/전력",
    "totalScore": 71.82193864289023,
    "moatScore": 55.0,
    "moatType": "NONE",
    "recommendation": "HOLD",
    "conviction": 65.0,
    "oneLiner": "전력망 사이클의 수혜를 입고 있으나 밸류에이션 매력은 다소 감소",
    "coreBusiness": "초고압 케이블 및 변압기 등 전력 송배전 기기 제조",
    "competitiveEdge": "전선과 전력기기를 일괄 생산할 수 있는 국내 유일의 턴키(Turn-key) 역량을 갖추고 있습니다. 이를 통해 수주 경쟁력과 원가 효율성을 확보하고 있습니다.",
    "catalysts": [
      "미국 및 유럽의 노후 전력망 교체 수요 증가",
      "초고압 케이블 및 변압기 생산 능력(CAPA) 증설 효과"
    ],
    "risks": [
      "구리 등 주요 원자재 가격 변동성",
      "글로벌 메이저 업체 대비 상대적으로 낮은 브랜드 인지도"
    ],
    "valuationNote": "PER 55배로 전력기기 섹터 내 동반 상승 효과를 누리고 있으나, 뚜렷한 경제적 해자가 부족해 프리미엄 유지에 주의가 필요합니다.",
    "metrics": {
      "per": 55.3,
      "pbr": null,
      "psr": 2.7563267,
      "roe": 0.1908,
      "fcfYield": 0.008561856537080414,
      "ret6m": 1.388663967611336,
      "ret12m": null
    },
    "personas": {
      "buffett": {
        "score": 30.0,
        "verdict": "AVOID",
        "note": "뚜렷한 해자 부족, 가격 비쌈"
      },
      "graham": {
        "score": 20.0,
        "verdict": "AVOID",
        "note": "PER 55배로 안전마진 없음"
      },
      "munger": {
        "score": 30.0,
        "verdict": "AVOID",
        "note": "차별화된 경쟁 우위 찾기 어려움"
      },
      "klarman": {
        "score": 25.0,
        "verdict": "AVOID",
        "note": "원자재 리스크와 고평가 부담"
      },
      "consensus": 26.0,
      "summary": "해자 부족 및 밸류에이션 부담으로 투자 부적합"
    }
  },
  {
    "rank": 10,
    "ticker": "298040",
    "name": "효성중공업",
    "sector": "Industrials",
    "bottleneck": "AI인프라/HBM/전력",
    "totalScore": 71.38951222536829,
    "moatScore": 70.0,
    "moatType": "IP",
    "recommendation": "BUY",
    "conviction": 75.0,
    "oneLiner": "북미 전력망 호황의 수혜와 건설 부문 리스크가 공존하는 기업",
    "coreBusiness": "초고압 변압기, 차단기 등 중전기기 제조 및 건설 사업 영위",
    "competitiveEdge": "초고압 변압기 분야에서 글로벌 수준의 기술력(IP)과 레퍼런스를 보유하고 있습니다. 미국 멤피스 공장 등 현지 생산 거점을 통한 북미 시장 대응력이 우수합니다.",
    "catalysts": [
      "북미 전력망 투자 확대에 따른 고수익 변압기 수주 증가",
      "수소 충전소 및 ESS 등 신사업 부문의 성장"
    ],
    "risks": [
      "건설 부문의 PF 리스크 및 수익성 악화",
      "글로벌 공급망 차질에 따른 원가 상승"
    ],
    "valuationNote": "PER 70배 수준으로 전력기기 호황을 반영 중입니다. 건설 부문의 리스크가 해소될 경우 추가적인 밸류에이션 리레이팅이 가능합니다.",
    "metrics": {
      "per": 70.99,
      "pbr": null,
      "psr": 6.15321,
      "roe": 0.22125,
      "fcfYield": 0.005277532417468713,
      "ret6m": 1.054166666666667,
      "ret12m": null
    },
    "personas": {
      "buffett": {
        "score": 40.0,
        "verdict": "AVOID",
        "note": "건설 리스크가 본업 가치 훼손"
      },
      "graham": {
        "score": 20.0,
        "verdict": "AVOID",
        "note": "PER 70배 및 PF 리스크 부담"
      },
      "munger": {
        "score": 30.0,
        "verdict": "AVOID",
        "note": "건설업 리스크가 치명적 단점"
      },
      "klarman": {
        "score": 20.0,
        "verdict": "AVOID",
        "note": "PF 리스크로 영구 손실 우려됨"
      },
      "consensus": 28.0,
      "summary": "본업 호조에도 건설 PF 리스크로 전원 회피"
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
    "totalScore": 78.15584227847253,
    "moatScore": 80.0,
    "moatType": "REG",
    "recommendation": "BUY",
    "conviction": 75.0,
    "oneLiner": "산불 리스크만 통제된다면 매력적인 캘리포니아 전력 독점주.",
    "coreBusiness": "캘리포니아 남부 및 중부 지역에 전력을 공급하는 규제 기반 유틸리티 기업.",
    "competitiveEdge": "캘리포니아라는 거대 시장에서 독점적인 전력망을 운영하며 강력한 규제적 해자(REG)를 보유하고 있습니다. 재생에너지 전환 정책에 따른 인프라 투자 보장으로 안정적인 수익 창출이 가능합니다.",
    "catalysts": [
      "캘리포니아 주정부의 전력망 현대화 투자 승인",
      "전기차 보급 확대에 따른 전력 수요 구조적 증가"
    ],
    "risks": [
      "산불 발생에 따른 대규모 배상 책임 리스크",
      "금리 인상 시 배당 매력도 하락 및 자금 조달 비용 증가"
    ],
    "valuationNote": "PER 7.3배, PBR 1.5배로 유틸리티 섹터 내에서도 저평가 매력이 높으며, ROE 24%의 우수한 수익성을 보여줍니다.",
    "metrics": {
      "per": 7.384783,
      "pbr": 1.5304215,
      "psr": 1.3537563,
      "roe": 0.24103001,
      "fcfYield": -0.02483699236827505,
      "ret6m": 0.1938148413911076,
      "ret12m": null
    },
    "personas": {
      "buffett": {
        "score": 65.0,
        "verdict": "HOLD",
        "note": "산불 리스크로 현금흐름 예측 어려움"
      },
      "graham": {
        "score": 80.0,
        "verdict": "BUY",
        "note": "PER 7.3으로 가격 매력 높음"
      },
      "munger": {
        "score": 60.0,
        "verdict": "HOLD",
        "note": "규제 독점은 좋으나 꼬리 위험 큼"
      },
      "klarman": {
        "score": 40.0,
        "verdict": "AVOID",
        "note": "산불 배상 책임은 영구 손실 리스크"
      },
      "consensus": 61.0,
      "summary": "저평가 매력은 있으나 산불 리스크가 발목을 잡음."
    }
  },
  {
    "rank": 2,
    "ticker": "CF",
    "name": "CF Industries",
    "sector": "Basic Materials",
    "bottleneck": "",
    "totalScore": 75.02692669965532,
    "moatScore": 70.0,
    "moatType": "COST",
    "recommendation": "HOLD",
    "conviction": 60.0,
    "oneLiner": "저렴한 천연가스 기반의 원가 경쟁력을 갖춘 비료 대장주.",
    "coreBusiness": "북미를 중심으로 암모니아 및 질소 비료를 생산, 판매하는 농업 화학 기업.",
    "competitiveEdge": "북미의 저렴한 천연가스를 원료로 사용하여 글로벌 경쟁사 대비 압도적인 원가 우위(COST)를 확보하고 있습니다. 대규모 생산 설비와 물류 네트워크가 진입장벽입니다.",
    "catalysts": [
      "글로벌 곡물 가격 상승에 따른 비료 수요 증가",
      "청정 암모니아(블루/그린) 프로젝트 상용화 가시화"
    ],
    "risks": [
      "주요 원재료인 천연가스 가격의 급격한 변동",
      "중국 및 러시아의 비료 수출 통제 해제 시 공급 과잉"
    ],
    "valuationNote": "PER 14배, FCF 수익률 6.7%로 밸류에이션이 편안하며, 안정적인 현금흐름 창출 능력을 보여줍니다.",
    "metrics": {
      "per": 14.133779,
      "pbr": 4.0238676,
      "psr": 2.7492223,
      "roe": 0.23401,
      "fcfYield": 0.06715491570181745,
      "ret6m": 0.4675309604700393,
      "ret12m": null
    },
    "personas": {
      "buffett": {
        "score": 65.0,
        "verdict": "HOLD",
        "note": "원가 우위 좋으나 천연가스 변동성 부담"
      },
      "graham": {
        "score": 75.0,
        "verdict": "BUY",
        "note": "PER 14 수준으로 무난한 밸류에이션"
      },
      "munger": {
        "score": 60.0,
        "verdict": "HOLD",
        "note": "저비용 구조 훌륭하나 지정학적 변수 큼"
      },
      "klarman": {
        "score": 55.0,
        "verdict": "HOLD",
        "note": "공급 과잉 리스크와 원자재 변동성 주의"
      },
      "consensus": 64.0,
      "summary": "압도적 원가 우위가 돋보이나 매크로 변수에 민감함."
    }
  },
  {
    "rank": 3,
    "ticker": "MU",
    "name": "Micron Technology",
    "sector": "Technology",
    "bottleneck": "AI인프라/HBM/전력",
    "totalScore": 74.5229056029805,
    "moatScore": 80.0,
    "moatType": "IP",
    "recommendation": "STRONG_BUY",
    "conviction": 85.0,
    "oneLiner": "HBM 시장 진입으로 밸류에이션 리레이팅이 진행 중인 메모리 강자.",
    "coreBusiness": "D램 및 낸드플래시 메모리 반도체를 설계하고 제조하는 글로벌 선도 기업.",
    "competitiveEdge": "소수 과점화된 메모리 시장에서 강력한 지적재산권(IP)과 규모의 경제를 구축했습니다. 특히 HBM(고대역폭 메모리) 분야에서 기술 격차를 빠르게 좁히며 AI 인프라 핵심 공급망에 진입했습니다.",
    "catalysts": [
      "엔비디아 등 AI 가속기향 HBM3E 공급 본격화",
      "일반 서버 및 온디바이스 AI 수요 회복에 따른 메모리 판가 상승"
    ],
    "risks": [
      "메모리 반도체 특유의 극심한 사이클 변동성",
      "경쟁사(삼성, SK하이닉스)와의 HBM 수율 및 캐파 경쟁 심화"
    ],
    "valuationNote": "PER 24배 수준으로 과거 사이클 고점 대비 부담스럽지 않으며, 196%의 폭발적인 매출 성장세가 돋보입니다.",
    "metrics": {
      "per": 24.478754,
      "pbr": 8.07105,
      "psr": 10.060135,
      "roe": 0.39823002,
      "fcfYield": 0.004948818476481477,
      "ret6m": 1.355565686485344,
      "ret12m": null
    },
    "personas": {
      "buffett": {
        "score": 60.0,
        "verdict": "HOLD",
        "note": "IP 해자 훌륭하나 사이클 변동성 큼"
      },
      "graham": {
        "score": 40.0,
        "verdict": "AVOID",
        "note": "자산가치 대비 비싸고 실적 변동성 큼"
      },
      "munger": {
        "score": 55.0,
        "verdict": "HOLD",
        "note": "과점 시장은 좋으나 극심한 사이클 산업"
      },
      "klarman": {
        "score": 50.0,
        "verdict": "HOLD",
        "note": "사이클 고점 우려 및 하방 리스크 존재"
      },
      "consensus": 51.0,
      "summary": "과점 시장의 강자이나 메모리 사이클 변동성이 부담."
    }
  },
  {
    "rank": 4,
    "ticker": "GEV",
    "name": "GE Vernova",
    "sector": "Industrials",
    "bottleneck": "AI인프라/HBM/전력",
    "totalScore": 73.90265169237122,
    "moatScore": 75.0,
    "moatType": "IP",
    "recommendation": "BUY",
    "conviction": 75.0,
    "oneLiner": "AI 시대 전력 부족 문제를 해결할 글로벌 전력 인프라 거인.",
    "coreBusiness": "가스 발전, 풍력, 전력망 등 에너지 전환에 필요한 전력 인프라 장비 및 서비스 제공.",
    "competitiveEdge": "GE에서 분사하여 오랜 기간 축적된 터빈 기술력과 방대한 설치 기반(IP)을 보유하고 있습니다. 전 세계 전력의 약 30%가 동사의 장비를 통해 생산될 만큼 시장 지배력이 막강합니다.",
    "catalysts": [
      "AI 데이터센터 전력 수요 폭증에 따른 가스 터빈 수주 확대",
      "노후화된 글로벌 전력망 교체 사이클 도래"
    ],
    "risks": [
      "해상풍력 사업부의 지속적인 적자 및 프로젝트 지연",
      "원자재 가격 상승에 따른 고정 가격 계약의 마진 훼손"
    ],
    "valuationNote": "PER 31배로 다소 높으나, ROE 75%의 압도적 자본 효율성과 AI 전력 병목 수혜 기대감이 반영되어 있습니다.",
    "metrics": {
      "per": 31.094181,
      "pbr": 20.519794,
      "psr": 7.2553377,
      "roe": 0.75708,
      "fcfYield": 0.03260872276926885,
      "ret6m": 0.8191789022800424,
      "ret12m": null
    },
    "personas": {
      "buffett": {
        "score": 70.0,
        "verdict": "BUY",
        "note": "막강한 시장 지배력, 밸류에이션은 부담"
      },
      "graham": {
        "score": 30.0,
        "verdict": "AVOID",
        "note": "PER 31, PBR 20으로 너무 비쌈"
      },
      "munger": {
        "score": 60.0,
        "verdict": "HOLD",
        "note": "인프라 필수재이나 해상풍력 적자 거슬림"
      },
      "klarman": {
        "score": 50.0,
        "verdict": "HOLD",
        "note": "고정 가격 계약의 마진 훼손 리스크 존재"
      },
      "consensus": 53.0,
      "summary": "전력 인프라 지배력은 좋으나 밸류에이션이 부담됨."
    }
  },
  {
    "rank": 5,
    "ticker": "VRT",
    "name": "Vertiv",
    "sector": "Industrials",
    "bottleneck": "AI인프라/HBM/전력",
    "totalScore": 73.71709501228841,
    "moatScore": 75.0,
    "moatType": "SWITCHING",
    "recommendation": "BUY",
    "conviction": 80.0,
    "oneLiner": "AI 데이터센터 전력 및 냉각 병목 현상의 최대 수혜주.",
    "coreBusiness": "데이터센터 및 통신 네트워크용 전력, 냉각 등 핵심 디지털 인프라 솔루션 제공.",
    "competitiveEdge": "AI 데이터센터 확장에 필수적인 열 관리 및 전력 인프라 분야에서 글로벌 선두권의 기술력을 갖추고 있습니다. 고객사들의 높은 전환 비용(SWITCHING)이 강력한 진입장벽으로 작용합니다.",
    "catalysts": [
      "빅테크 기업들의 AI 데이터센터 CAPEX 가이던스 상향",
      "액체 냉각(Liquid Cooling) 솔루션 채택률 급증"
    ],
    "risks": [
      "AI 인프라 투자 사이클 둔화 시 직격탄",
      "공급망 차질에 따른 마진 압박 가능성"
    ],
    "valuationNote": "PER 77배, PBR 29배로 밸류에이션 부담이 높으나, 30% 이상의 매출 성장과 45%의 ROE가 프리미엄을 정당화하고 있습니다.",
    "metrics": {
      "per": 77.12342,
      "pbr": 29.717556,
      "psr": 10.8459,
      "roe": 0.45097,
      "fcfYield": 0.01670614358209321,
      "ret6m": 0.5872472906354065,
      "ret12m": null
    },
    "personas": {
      "buffett": {
        "score": 50.0,
        "verdict": "HOLD",
        "note": "해자는 있으나 PER 77은 너무 비쌈"
      },
      "graham": {
        "score": 20.0,
        "verdict": "AVOID",
        "note": "PBR 29 등 절대적 고평가 상태"
      },
      "munger": {
        "score": 40.0,
        "verdict": "AVOID",
        "note": "AI 유행에 편승한 가격, 사이클 주의"
      },
      "klarman": {
        "score": 30.0,
        "verdict": "AVOID",
        "note": "가격에 완벽함이 반영돼 하방 리스크 큼"
      },
      "consensus": 35.0,
      "summary": "훌륭한 기업이나 AI 테마로 인한 극심한 고평가."
    }
  },
  {
    "rank": 6,
    "ticker": "TXT",
    "name": "Textron",
    "sector": "Industrials",
    "bottleneck": "방산",
    "totalScore": 73.6476146455417,
    "moatScore": 75.0,
    "moatType": "BRAND",
    "recommendation": "HOLD",
    "conviction": 65.0,
    "oneLiner": "민항기와 방산의 균형 잡힌 포트폴리오를 갖춘 항공 명가.",
    "coreBusiness": "비즈니스 제트기(Cessna), 헬리콥터(Bell), 군용 차량 등을 제조하는 항공 및 방산 복합 기업.",
    "competitiveEdge": "세스나(Cessna)와 벨(Bell)이라는 강력한 브랜드 파워(BRAND)를 바탕으로 민간 및 군용 항공기 시장에서 확고한 입지를 다지고 있습니다. 다양한 포트폴리오로 실적 변동성을 방어합니다.",
    "catalysts": [
      "미 육군 차세대 헬기(FLRAA) 프로그램 본격 양산",
      "기업들의 비즈니스 제트기 수요 견조세 유지"
    ],
    "risks": [
      "경기 침체 시 민간 비즈니스 제트기 수요 급감",
      "국방 예산 삭감 또는 주요 군용 프로젝트 지연"
    ],
    "valuationNote": "PER 17.5배, PBR 1.9배로 방산/항공 섹터 내에서 합리적인 수준이며, 5.4%의 양호한 FCF 수익률을 기록 중입니다.",
    "metrics": {
      "per": 17.535156,
      "pbr": 1.9872503,
      "psr": 1.056193,
      "roe": 0.12242,
      "fcfYield": 0.05458044076432937,
      "ret6m": 0.1156952580758568,
      "ret12m": null
    },
    "personas": {
      "buffett": {
        "score": 65.0,
        "verdict": "HOLD",
        "note": "브랜드 파워와 양호한 현금흐름 긍정적"
      },
      "graham": {
        "score": 75.0,
        "verdict": "BUY",
        "note": "PER 17, PBR 1.9로 적절한 가격"
      },
      "munger": {
        "score": 70.0,
        "verdict": "BUY",
        "note": "다각화된 포트폴리오가 실적 방어에 유리"
      },
      "klarman": {
        "score": 60.0,
        "verdict": "HOLD",
        "note": "경기 침체 시 제트기 수요 급감 리스크"
      },
      "consensus": 68.0,
      "summary": "무난한 밸류에이션과 다각화된 사업 구조가 긍정적."
    }
  },
  {
    "rank": 7,
    "ticker": "HII",
    "name": "Huntington Ingalls Industries",
    "sector": "Industrials",
    "bottleneck": "방산",
    "totalScore": 73.11087873858682,
    "moatScore": 85.0,
    "moatType": "REG",
    "recommendation": "BUY",
    "conviction": 80.0,
    "oneLiner": "대체 불가능한 미국의 해양 패권 핵심 인프라 기업.",
    "coreBusiness": "미 해군의 핵추진 항공모함과 잠수함을 설계 및 건조하는 유일무이한 군함 조선소.",
    "competitiveEdge": "미국 내 핵추진 항공모함을 건조할 수 있는 유일한 기업으로, 대체 불가능한 국가 안보 자산이라는 강력한 규제적 해자(REG)를 지닙니다. 수십 년에 걸친 장기 계약으로 실적 가시성이 매우 높습니다.",
    "catalysts": [
      "미 해군의 함대 규모 확대 및 현대화 계획 추진",
      "AUKUS 동맹에 따른 핵잠수함 건조 수요 증가"
    ],
    "risks": [
      "숙련된 조선소 인력 부족 및 인건비 상승 압박",
      "미국 국방 예산 삭감 또는 건조 일정 지연에 따른 페널티"
    ],
    "valuationNote": "PER 23.5배로 안정적인 이익 가시성 대비 적절한 수준이며, 4.8%의 FCF 수익률로 배당 여력도 충분합니다.",
    "metrics": {
      "per": 23.532814,
      "pbr": 2.8015256,
      "psr": 1.1423607,
      "roe": 0.124239996,
      "fcfYield": 0.04810244077988751,
      "ret6m": 0.2004707166193698,
      "ret12m": null
    },
    "personas": {
      "buffett": {
        "score": 85.0,
        "verdict": "BUY",
        "note": "대체 불가한 독점력과 장기 계약 훌륭함"
      },
      "graham": {
        "score": 60.0,
        "verdict": "HOLD",
        "note": "다소 비싸나 독점력 감안 시 보유 만함"
      },
      "munger": {
        "score": 80.0,
        "verdict": "BUY",
        "note": "국가 안보와 직결된 완벽한 규제적 독점"
      },
      "klarman": {
        "score": 75.0,
        "verdict": "BUY",
        "note": "인건비 리스크 있으나 현금흐름 안정적"
      },
      "consensus": 75.0,
      "summary": "대체 불가능한 국가 안보 자산으로 강력한 해자 보유."
    }
  },
  {
    "rank": 8,
    "ticker": "NUE",
    "name": "Nucor",
    "sector": "Basic Materials",
    "bottleneck": "",
    "totalScore": 72.63282737676259,
    "moatScore": 80.0,
    "moatType": "COST",
    "recommendation": "BUY",
    "conviction": 70.0,
    "oneLiner": "압도적 원가 경쟁력과 유연성을 갖춘 미국 철강 대장주.",
    "coreBusiness": "전기로 방식을 활용하여 다양한 철강 제품을 생산하는 미국 최대의 철강 기업.",
    "competitiveEdge": "고철을 재활용하는 전기로(EAF) 기술을 통해 전통적인 고로 대비 유연한 생산과 압도적인 원가 우위(COST)를 자랑합니다. 성과급 위주의 독특한 기업 문화가 높은 생산성으로 이어집니다.",
    "catalysts": [
      "미국 인프라 투자 법안(IIJA)에 따른 철강 수요 본격화",
      "친환경 철강(Green Steel) 수요 증가에 따른 프리미엄 확보"
    ],
    "risks": [
      "글로벌 경기 둔화에 따른 전방 산업(건설, 자동차) 수요 침체",
      "저가 수입산 철강재 유입에 따른 판가 하락"
    ],
    "valuationNote": "PER 22배로 철강주 치고는 프리미엄을 받고 있으나, 꾸준한 이익 창출력과 주주환원 정책이 이를 뒷받침합니다.",
    "metrics": {
      "per": 22.0625,
      "pbr": 2.425085,
      "psr": 1.482615,
      "roe": 0.12285,
      "fcfYield": -0.007801681720448195,
      "ret6m": 0.5426608888752464,
      "ret12m": null
    },
    "personas": {
      "buffett": {
        "score": 60.0,
        "verdict": "HOLD",
        "note": "원가 우위 있으나 철강은 자본집약적임"
      },
      "graham": {
        "score": 50.0,
        "verdict": "HOLD",
        "note": "철강주치고 밸류에이션 매력이 떨어짐"
      },
      "munger": {
        "score": 75.0,
        "verdict": "BUY",
        "note": "전기로 기술과 훌륭한 기업 문화는 칭찬"
      },
      "klarman": {
        "score": 55.0,
        "verdict": "HOLD",
        "note": "경기 둔화 시 전방 수요 침체 리스크"
      },
      "consensus": 60.0,
      "summary": "우수한 기업 문화와 원가 경쟁력, 단 경기 민감도 큼."
    }
  },
  {
    "rank": 9,
    "ticker": "NEM",
    "name": "Newmont",
    "sector": "Basic Materials",
    "bottleneck": "",
    "totalScore": 70.60479697695656,
    "moatScore": 65.0,
    "moatType": "COST",
    "recommendation": "BUY",
    "conviction": 75.0,
    "oneLiner": "금 가격 상승의 레버리지를 온전히 누릴 수 있는 글로벌 1위 금광주.",
    "coreBusiness": "전 세계 주요 광산에서 금을 비롯해 구리, 은 등을 채굴하는 글로벌 1위 금 생산 기업.",
    "competitiveEdge": "다각화된 글로벌 광산 포트폴리오를 통해 지정학적 리스크를 분산하고, 규모의 경제를 통한 원가 통제력(COST)을 갖추고 있습니다. 뉴크레스트 인수로 구리 생산 능력도 크게 확충했습니다.",
    "catalysts": [
      "지정학적 긴장 및 금리 인하 기대감에 따른 금 가격 상승",
      "뉴크레스트 합병 시너지 본격화로 인한 단위당 생산 단가 하락"
    ],
    "risks": [
      "광산 노후화 및 채굴 난이도 증가에 따른 자본적 지출(CAPEX) 급증",
      "주요 조업 국가의 환경 규제 및 자원 민족주의 심화"
    ],
    "valuationNote": "PER 13.9배, FCF 수익률 8.5%로 밸류에이션 매력이 높으며, 금 가격 강세 시 강력한 이익 레버리지가 기대됩니다.",
    "metrics": {
      "per": 13.957198,
      "pbr": 3.305991,
      "psr": 4.6014323,
      "roe": 0.25832,
      "fcfYield": 0.08534931787740727,
      "ret6m": 0.3685616732699792,
      "ret12m": null
    },
    "personas": {
      "buffett": {
        "score": 40.0,
        "verdict": "AVOID",
        "note": "원가 통제력 좋으나 금광업은 선호 안 함"
      },
      "graham": {
        "score": 65.0,
        "verdict": "HOLD",
        "note": "PER 13.9로 가격은 나쁘지 않음"
      },
      "munger": {
        "score": 40.0,
        "verdict": "AVOID",
        "note": "금광업 자체의 장기적 가치 창출에 회의적"
      },
      "klarman": {
        "score": 50.0,
        "verdict": "HOLD",
        "note": "지정학적 리스크와 CAPEX 증가 부담"
      },
      "consensus": 49.0,
      "summary": "금광업 특유의 리스크와 자본 집약적 구조가 단점."
    }
  },
  {
    "rank": 10,
    "ticker": "ALB",
    "name": "Albemarle Corporation",
    "sector": "Basic Materials",
    "bottleneck": "희토류/배터리소재",
    "totalScore": 68.24611787549452,
    "moatScore": 80.0,
    "moatType": "COST",
    "recommendation": "HOLD",
    "conviction": 55.0,
    "oneLiner": "리튬 가격 바닥을 기다리는 인내심이 필요한 글로벌 1위 리튬주.",
    "coreBusiness": "전기차 배터리의 핵심 소재인 리튬 화합물을 전 세계에 공급하는 글로벌 1위 리튬 생산 기업.",
    "competitiveEdge": "칠레 아타카마 염호 등 세계 최고 품질의 저비용 리튬 자산을 확보하여 강력한 원가 우위(COST)를 누리고 있습니다. 장기 공급 계약을 통해 가격 변동성을 일부 방어합니다.",
    "catalysts": [
      "전기차 캐즘(Chasm) 통과 후 글로벌 배터리 수요 재점화",
      "리튬 가격 바닥 확인 및 공급 구조조정에 따른 판가 반등"
    ],
    "risks": [
      "전기차 수요 둔화 장기화에 따른 리튬 공급 과잉 지속",
      "칠레 등 주요 남미 국가의 리튬 국유화 및 규제 리스크"
    ],
    "valuationNote": "현재 순이익 적자(PER null)로 수익성이 악화되었으나, PBR 3배 수준으로 사이클 바닥권에 근접했다는 평가가 가능합니다.",
    "metrics": {
      "per": null,
      "pbr": 3.0787594,
      "psr": 4.3755436,
      "roe": -0.04656,
      "fcfYield": 0.02014404595134056,
      "ret6m": 0.983580985389825,
      "ret12m": null
    },
    "personas": {
      "buffett": {
        "score": 40.0,
        "verdict": "AVOID",
        "note": "수익성 악화 및 수요 둔화로 예측 불가"
      },
      "graham": {
        "score": 30.0,
        "verdict": "AVOID",
        "note": "수익성 악화로 가치투자 매력 없음"
      },
      "munger": {
        "score": 35.0,
        "verdict": "AVOID",
        "note": "리튬 사이클 변동성과 국유화 리스크 큼"
      },
      "klarman": {
        "score": 30.0,
        "verdict": "AVOID",
        "note": "공급 과잉 및 규제 리스크로 영구 손실"
      },
      "consensus": 34.0,
      "summary": "리튬 공급 과잉과 수요 둔화로 불확실성이 매우 큼."
    }
  }
];

export const qvgmWeights = {
  value: 0.16,
  quality: 0.12,
  growth: 0.15,
  momentum: 0.13,
  sector: 0.12,
  moat: 0.17,
  bottleneck: 0.05,
  persona: 0.1,
} as const;
