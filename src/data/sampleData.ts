export interface Indicator {
  id: string;
  name: string;
  description: string;
  category: string;
  trend: "bullish" | "bearish" | "neutral";
  data: Array<{
    date: string;
    value: number;
  }>;
  explanation: string;
  suggestedStocks: {
    bullish: string[];
    bearish: string[];
  };
  reasoning: string;
}

export interface Metric {
  id: string;
  name: string;
  description: string;
  category: string;
  currentValue: number;
  unit: string;
  trend: "up" | "down" | "stable";
  data: Array<{
    date: string;
    value: number;
  }>;
  explanation: string;
  suggestedStocks: {
    bullish: string[];
    bearish: string[];
  };
  reasoning: string;
}

export const sampleIndicators: Indicator[] = [
  {
    id: "mens-underwear-index",
    name: "Men's Underwear Index",
    description: "Consumer confidence indicator based on men's underwear sales",
    category: "Consumer Behavior",
    trend: "bearish",
    data: [
      { date: "2024-01", value: 85 },
      { date: "2024-02", value: 82 },
      { date: "2024-03", value: 78 },
      { date: "2024-04", value: 75 },
      { date: "2024-05", value: 72 },
      { date: "2024-06", value: 70 },
    ],
    explanation: "Men tend to delay purchasing underwear during economic uncertainty. A declining trend suggests consumers are tightening spending on discretionary items.",
    suggestedStocks: {
      bullish: ["WMT", "TGT", "COST"],
      bearish: ["LULU", "UA", "NKE"]
    },
    reasoning: "Declining sales favor discount retailers over premium brands. Consumers shift to value-oriented shopping during uncertain times."
  },
  {
    id: "google-trends-recession",
    name: "Google Trends: 'Recession'",
    description: "Search volume for recession-related terms",
    category: "Sentiment",
    trend: "bullish",
    data: [
      { date: "2024-01", value: 45 },
      { date: "2024-02", value: 52 },
      { date: "2024-03", value: 58 },
      { date: "2024-04", value: 63 },
      { date: "2024-05", value: 67 },
      { date: "2024-06", value: 71 },
    ],
    explanation: "Increasing searches for recession indicate growing public concern about economic conditions. This often precedes actual market movements.",
    suggestedStocks: {
      bullish: ["GLD", "TLT", "VIX"],
      bearish: ["SPY", "QQQ", "IWM"]
    },
    reasoning: "Rising recession fears typically benefit safe-haven assets like gold and treasuries while pressuring equity markets."
  },
  {
    id: "air-traffic-volume",
    name: "Global Air Traffic Volume",
    description: "International passenger flight frequency",
    category: "Economic Activity",
    trend: "neutral",
    data: [
      { date: "2024-01", value: 92 },
      { date: "2024-02", value: 94 },
      { date: "2024-03", value: 91 },
      { date: "2024-04", value: 93 },
      { date: "2024-05", value: 95 },
      { date: "2024-06", value: 94 },
    ],
    explanation: "Air traffic reflects business activity and consumer spending on travel. Stable volumes suggest steady economic conditions.",
    suggestedStocks: {
      bullish: ["AAL", "DAL", "UAL"],
      bearish: ["ZM", "WORK"]
    },
    reasoning: "Stable air traffic supports airlines and pressures remote work technologies as business travel normalizes."
  }
];

export const sampleMetrics: Metric[] = [
  {
    id: "shipping-container-rates",
    name: "Baltic Dry Index",
    description: "Global shipping rates for dry commodities",
    category: "Trade",
    currentValue: 1250,
    unit: "points",
    trend: "down",
    data: [
      { date: "2024-01", value: 1450 },
      { date: "2024-02", value: 1380 },
      { date: "2024-03", value: 1320 },
      { date: "2024-04", value: 1280 },
      { date: "2024-05", value: 1260 },
      { date: "2024-06", value: 1250 },
    ],
    explanation: "Declining shipping rates suggest weakening global trade demand. This often precedes broader economic slowdowns.",
    suggestedStocks: {
      bullish: ["STNG", "FRO"],
      bearish: ["CAT", "DE", "FCX"]
    },
    reasoning: "Lower shipping rates benefit tanker companies through cheaper transportation but hurt industrial and commodity companies."
  },
  {
    id: "copper-gold-ratio",
    name: "Copper/Gold Ratio",
    description: "Industrial metal vs safe haven comparison",
    category: "Commodities",
    currentValue: 0.42,
    unit: "ratio",
    trend: "up",
    data: [
      { date: "2024-01", value: 0.38 },
      { date: "2024-02", value: 0.39 },
      { date: "2024-03", value: 0.40 },
      { date: "2024-04", value: 0.41 },
      { date: "2024-05", value: 0.42 },
      { date: "2024-06", value: 0.42 },
    ],
    explanation: "Rising copper/gold ratio indicates optimism about industrial demand relative to safe-haven seeking. Suggests economic growth expectations.",
    suggestedStocks: {
      bullish: ["FCX", "SCCO", "CAT"],
      bearish: ["GLD", "GOLD"]
    },
    reasoning: "Higher ratio favors industrial metals and machinery companies while reducing appeal of gold investments."
  },
  {
    id: "vix-term-structure",
    name: "VIX Term Structure",
    description: "Volatility expectations across time periods",
    category: "Market Structure",
    currentValue: 18.5,
    unit: "volatility",
    trend: "stable",
    data: [
      { date: "2024-01", value: 19.2 },
      { date: "2024-02", value: 18.8 },
      { date: "2024-03", value: 18.5 },
      { date: "2024-04", value: 18.7 },
      { date: "2024-05", value: 18.4 },
      { date: "2024-06", value: 18.5 },
    ],
    explanation: "Current VIX levels suggest moderate market concern. Stable readings indicate neither extreme fear nor complacency.",
    suggestedStocks: {
      bullish: ["SPY", "QQQ"],
      bearish: ["UVXY", "VXX"]
    },
    reasoning: "Moderate volatility supports equity markets while making volatility products less attractive."
  }
];
