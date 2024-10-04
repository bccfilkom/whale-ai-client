import fs from "fs";
import path from "path";
import TimeSeriesChart from "@/components/chart/time-series";
import React from "react";
import { TimeSeriesData } from "@/types/chart";
import HighlightStockTable from "@/components/table/stock/highlight";
import { HighlightStockResponse } from "@/types/stocks";

const MarketHighlight = async() => {
  const filePath = path.join(process.cwd(), "src/utils/tlkm_time_series.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const data: TimeSeriesData[] = JSON.parse(jsonData);
  const { getHighlightStocks } = await import("@/services/stocks");
  const highlightStocks =
    (await getHighlightStocks()) as HighlightStockResponse;
  return (
    <section className="py-10">
      <h2 className="text-white font-bold text-3xl">Market Highlight</h2>
      <div className="rounded-3xl p-9 bg-gray/50 grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-20 xl:items-end">
        <HighlightStockTable link={"/dashboard/chart"} title={null} stocks={highlightStocks.most_actively_traded} />
        <TimeSeriesChart data={data} price="2920" title="TLKM" />
      </div>
    </section>
  );
};

export default MarketHighlight;
