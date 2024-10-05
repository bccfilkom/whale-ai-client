import HighlightStockTable from "@/components/table/stock/highlight";
import { Market } from "@/types/markets";
import { HighlightStockResponse } from "@/types/stocks";

export default async function StocksPage() {
  const { getGlobalMarketStatus } = await import("@/services/stocks/markets");
  const markets = (await getGlobalMarketStatus()) as Market[];
  const { getHighlightStocks } = await import("@/services/stocks");
  const highlightStocks =
    (await getHighlightStocks()) as HighlightStockResponse;
  return (
    <main className="container py-10 md:py-20">
      <h2 className="font-bold text-3xl md:text-6xl">
        Global Market Open & Close Status
      </h2>
      <section className="py-10">
        <div className="overflow-x-auto whitespace-nowrap flex gap-4 pb-4">
          {markets.map((market) => {
            return (
              <div
                key={market.region}
                className="space-y-4 bg-white border text-base-black border-gray-200 py-8 px-6 rounded-xl min-w-60"
              >
                <h2 className="text-neutral-400">{market.market_type}</h2>
                <div className="space-y-4">
                  <h2 className="font-bold text-xl">{market.region}</h2>
                  <div>
                    <p
                      className={`font-semibold ${
                        market.current_status == "open"
                          ? "text-success-60"
                          : "text-danger-80"
                      }`}
                    >
                      {market.current_status.charAt(0).toUpperCase() +
                        market.current_status.slice(1)}
                    </p>
                    <p className="text-neutral-400">
                      {market.local_open}-{market.local_close}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="py-10">
        <h2 className="font-bold text-3xl md:text-6xl">Stock Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-10 py-10">
          <HighlightStockTable
            link=""
            stocks={highlightStocks.most_actively_traded}
            title="🔥Most Actively Traded"
          />
          <HighlightStockTable
            link=""
            stocks={highlightStocks.top_gainers}
            title="🚀Top Gainers"
          />
          <HighlightStockTable
            link=""
            stocks={highlightStocks.top_losers}
            title="🚨Top Losers"
          />
        </div>
      </section>
    </main>
  );
}
