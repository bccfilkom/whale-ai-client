import NewsCard from "@/components/card/news";
import { NewsResponse } from "@/types/news";

export default async function DashboardNewsPage() {
  const { getAllNews } = await import("@/services/news");
  const news = (await getAllNews()) as NewsResponse;
  return (
    <main className="py-12">
      <h1 className="text-3xl text-white font-bold ">Market News</h1>
      <div className="py-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-10 ">
        {news.feed.map((newsItem) => {
          return <NewsCard key={newsItem.title} news={newsItem} />;
        })}
      </div>
    </main>
  );
}
