import { Market } from "@/types/markets";
import Image from "next/image";
import React from "react";
import marketIcon from "@/assets/icon/market-market.svg";

const MarketOverviewCard = ({ market }: { market: Market }) => {
  return (
    <div
      key={market.region}
      className="bg-gray/50 space-y-4 text-white py-8 px-6 rounded-3xl min-w-60"
    >
      <div className="flex gap-3 items-center">
        <Image src={marketIcon} alt="market" />
        <h2 className="text-white">{market.market_type}</h2>
      </div>
      <div className="space-y-4">
        <h2 className="font-bold text-xl text-white">{market.region}</h2>
        <div>
          <p
            className={`font-semibold ${
              market.current_status == "open" ? "text-green" : "text-red"
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
};

export default MarketOverviewCard;
