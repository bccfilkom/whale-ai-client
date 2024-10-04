import HighlightStockTable from "@/components/table/stock/highlight";
import { HighlightStockResponse } from "@/types/stocks";
import Image from "next/image";
import React from "react";
import mostActiveIcon from "@/assets/icon/topten-most-active.svg";
import gainersIcon from "@/assets/icon/topten-gainers.svg";
import losersIcon from "@/assets/icon/topten-losers.svg";

const MarketTopTen = async () => {
  const { getHighlightStocks } = await import("@/services/stocks");
  const highlightStocks =
    (await getHighlightStocks()) as HighlightStockResponse;
  return (
    <section className="pb-10">
      <h2 className="text-white font-bold text-3xl">Market Overview</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 md:gap-8 py-10">
        <HighlightStockTable
          link=""
          stocks={highlightStocks.most_actively_traded}
          title={
            <div className="flex flex-row gap-3">
              <p>Most Actively Traded</p>
              <Image src={mostActiveIcon} alt="" />
            </div>
          }
        />
        <HighlightStockTable
          link=""
          stocks={highlightStocks.top_gainers}
          title={
            <div className="flex flex-row gap-3">
              <p>Top Gainers</p>
              <Image src={gainersIcon} alt="" />
            </div>
          }
        />
        <HighlightStockTable
          link=""
          stocks={highlightStocks.top_losers}
          title={
            <div className="flex flex-row gap-3">
              <p>Top Losers</p>
              <Image src={losersIcon} alt="" />
            </div>
          }
        />
      </div>
    </section>
  );
};

export default MarketTopTen;
