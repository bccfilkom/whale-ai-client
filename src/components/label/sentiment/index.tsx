import { SentimentLabelType, TickerSentiment } from "@/types/news";

const getSentimentColor = (sentiment: SentimentLabelType): string => {
  switch (sentiment) {
    case "Bullish":
    case "Somewhat-Bullish":
      return "bg-success-80 text-white";
    case "Bearish":
    case "Somewhat-Bearish":
      return "bg-danger-80 text-white";
    case "Neutral":
    default:
      return "bg-white text-black";
  }
};

const SentimentLabel = ({ sentiment }: { sentiment: TickerSentiment }) => {
  return (
    <span
      className={`rounded-lg px-3 py-2 font-medium ${getSentimentColor(
        sentiment.ticker_sentiment_label
      )}`}
    >
      {sentiment.ticker}
    </span>
  );
};

export default SentimentLabel;
