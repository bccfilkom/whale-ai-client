export interface NewsResponse {
  items: number;
  sentiment_score_definition: string;
  relevance_score_definition: string;
  feed: News[];
}

export interface News {
  title: string;
  url: string;
  time_published: string;
  authors: string[];
  summary: string;
  banner_image: string;
  source: string;
  category_within_source: string;
  source_domain: string;
  topics: Topic[];
  overall_sentiment_score: number;
  overall_sentiment_label: string;
  ticker_sentiment: TickerSentiment[];
}

export interface TickerSentiment {
  ticker: string;
  relevance_score: string;
  ticker_sentiment_score: string;
  ticker_sentiment_label: SentimentLabelType;
}
export interface Topic {
  topic: string;
  relevance_score: string;
}

export type SentimentLabelType =
  | "Bullish"
  | "Somewhat-Bullish"
  | "Bearish"
  | "Somewhat-Bearish"
  | "Neutral";
