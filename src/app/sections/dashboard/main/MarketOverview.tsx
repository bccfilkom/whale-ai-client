import MarketOverviewCard from "@/components/card/market/overview";
import { Market } from "@/types/markets";

const MarketOverview = async () => {
  const { getGlobalMarketStatus } = await import("@/services/stocks/markets");
  const markets = (await getGlobalMarketStatus()) as Market[];

  return (
    <section className="py-10">
      <h2 className="text-white font-bold text-3xl">Market Overview</h2>
      <div className="overflow-x-auto whitespace-nowrap flex gap-9 pb-4">
        {markets.map((market) => {
          return <MarketOverviewCard market={market} key={market.region} />;
        })}
      </div>
    </section>
  );
};

export default MarketOverview;
