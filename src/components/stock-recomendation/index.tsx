import { Stock } from "@/types/stocks";
import React from "react";

const StockRecommendation = ({ stock }: { stock: Stock }) => {
  return (
    <div className="flex flex-col gap-3 min-w-56">
      <h5 className="text-lg md:text-2xl">{stock.ticker}</h5>
      <div className="flex justify-between w-full">
        <p className="text-[#7E7E7E]">Price</p>
        <span className="text-white">${stock.price}</span>
      </div>
      <div className="flex justify-between w-full">
        <p className="text-[#7E7E7E]">%Change</p>
        <span className="text-green">+{stock.change_percentage}</span>
      </div>
    </div>
  );
};

export default StockRecommendation;
