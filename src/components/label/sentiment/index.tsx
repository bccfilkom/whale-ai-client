import { SentimentLabelType, TickerSentiment } from "@/types/news";

const getSentimentColor = (sentiment: SentimentLabelType): string => {
  switch (sentiment) {
    case "Bullish":
    case "Somewhat-Bullish":
      return "bg-success-80";
    case "Bearish":
    case "Somewhat-Bearish":
      return "bg-danger-80";
    case "Neutral":
    default:
      return "bg-gray-500";
  }
};

const SentimentLabel = ({ sentiment }: { sentiment: TickerSentiment }) => {
  return (
    <span
      className={`rounded-2xl text-white px-3 py-2 ${getSentimentColor(
        sentiment.ticker_sentiment_label
      )}`}
    >
      {sentiment.ticker}
    </span>
  );
};

export default SentimentLabel;
