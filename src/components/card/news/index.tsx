import Button from "@/components/button";
import SentimentLabel from "@/components/label/sentiment";
import { News } from "@/types/news";
import seeDetailArrow from "@/assets/icon/see-details.svg";
import Image from "next/image";

const NewsCard = ({ news }: { news: News }) => {
  return (
    <div
      key={news.title}
      className="text-white bg-gray/50 flex flex-col gap-4 md:gap-6 p-4 sm:p-9 rounded-[36px] "
    >
      <div className="w-full rounded-[36px]">
        <img
          src={news.banner_image}
          alt=""
          className="rounded-[36px] w-full max-h-56"
        />
      </div>
      <div className="flex flex-col gap-6 h-full justify-between w-full">
        <div className="space-y-3 line-clamp-2">
          <h3 className="font-bold text-xl md:text-3xl line-clamp-2">
            {news.title}
          </h3>
          <p className="text-sm md:text-base">{news.summary}</p>
        </div>
        <div className="w-full flex flex-col gap-6">
          <ul className="overflow-x-auto whitespace-nowrap py-4 space-x-4">
            {news.ticker_sentiment.map((ticker) => (
              <SentimentLabel
                key={ticker.ticker}
                sentiment={ticker}
              ></SentimentLabel>
            ))}
          </ul>
          <a href={news.url} target="_blank" className="w-full">
            <Button
              rounded="4xl"
              className="w-full text-base md:text-[20px] flex justify-center items-center gap-4 "
            >
              <p>See Details</p>
              <Image alt="arrow" src={seeDetailArrow} />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
