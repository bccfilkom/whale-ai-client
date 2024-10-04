import NewsCard from "@/components/card/news";
import { NewsResponse } from "@/types/news";
import Link from "next/link";
import React from "react";

const MarketNews = async () => {
  const { getAllNews } = await import("@/services/news");
  const news = (await getAllNews()) as NewsResponse;
  return (
    <section className="pb-10 w-full">
      <div className="flex justify-between gap-3 items-center">
        <h2 className="text-white font-bold text-3xl">Market News</h2>
        <Link href={"/dashboard/news"} className="text-light-blue-text text-base lg:text-2xl">See All</Link>
      </div>
      <div className="py-10 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 md:gap-8 ">
        {news.feed.slice(0, 3).map((newsItem) => {
          return <NewsCard key={newsItem.title} news={newsItem} />;
        })}
      </div>
    </section>
  );
};

export default MarketNews;
