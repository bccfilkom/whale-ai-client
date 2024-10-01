import SentimentLabel from "@/components/label/sentiment";
import { News } from "@/types/news";

const NewsCard = ({ news }: { news: News }) => {
  return (
    <div
      key={news.title}
      className="shadow-xl text-base-black bg-base-white flex flex-col gap-4 md:gap-8 p-4 rounded-lg "
    >
      <div className="w-full">
        <img
          src={news.banner_image}
          alt=""
          className="rounded-xl w-full max-h-52"
        />
      </div>
      <div className="flex flex-col gap-4 h-full justify-between w-full">
        <div className="space-y-4 line-clamp-3">
          <h3 className="font-bold text-xl md:text-2xl line-clamp-2">
            {news.title}
          </h3>
          <p className="text-sm md:text-base">{news.summary}</p>
        </div>
        <div className="w-full flex flex-col gap-4">
          <ul className="overflow-x-auto whitespace-nowrap py-4 space-x-1">
            {news.ticker_sentiment.map((ticker) => (
              <SentimentLabel
                key={ticker.ticker}
                sentiment={ticker}
              ></SentimentLabel>
            ))}
          </ul>
          <a
            href={news.url}
            target="_blank"
            className="text-center bg-base-black py-4 font-semibold text-base md:text-lg text-base-white rounded-xl px-8 w-full"
          >
            See Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
