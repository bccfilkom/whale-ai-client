import { Assets } from "@/types/assets";
import { Search } from "lucide-react";
import Image from "next/image";
import React from "react";
import chartIcon from "@/assets/icon/topten-most-active.svg";
import { HighlightStockResponse } from "@/types/stocks";
import StockRecommendation from "@/components/stock-recomendation";
export default async function DashboardAssetsPage({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const query = searchParams.query || "%";
  const { getAllUserAssets } = await import("@/services/assets");
  const userAssets = await getAllUserAssets();
  const userAssetsData = userAssets?.data as Assets[] | null;
  const { getHighlightStocks } = await import("@/services/stocks");
  const recommendationStocks =
    (await getHighlightStocks()) as HighlightStockResponse;
  const { searchStocks } = await import("@/services/stocks");
  const stocks = await searchStocks(query);
  console.log(stocks)
  return (
    <>
      {userAssetsData ? (
        <main>
          <section className="grid grid-cols-1 xl:grid-cols-5 gap-6 md:gap-16">
            <div className="flex flex-col gap-9 xl:col-span-2">
              <h2 className="text-xl text-white md:text-3xl font-bold">
                My Portfolio
              </h2>
              <div className="bg-gray/50 rounded-3xl text-white p-6 md:p-9 space-y-4 md:space-y-9 w-full">
                <div className="flex gap-3">
                  <Image src={chartIcon} alt="" />
                  <h4 className="">My Stocks</h4>
                </div>
                <table className="w-full">
                  <thead>
                    <tr className="text-[#7E7E7E] self-start">
                      <th className="text-start pr-4 pb-9 w-1/3">Symbol</th>
                      <th className=" pb-9 w-1/3">Currency</th>
                      <th className="pl-4 pb-9 w-1/3">Share</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userAssetsData &&
                      userAssetsData.map((assets) => {
                        return (
                          <tr key={assets.id}>
                            <td className="text-base 2xl:text-xl text-start pr-4 w-1/3">
                              {assets.asset}
                            </td>
                            <td className="text-base 2xl:text-xl text-center w-1/3">
                              {assets.currency}
                            </td>
                            <td className="text-base 2xl:text-xl text-center pl-4 w-1/3">
                              {assets.value}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex flex-col gap-9 max-w-full xl:col-span-3">
              <h2 className="text-xl text-white md:text-3xl font-bold">
                Stocks Recommendation
              </h2>
              <div className="bg-gray/50 rounded-3xl text-white p-6 md:p-9 space-y-4 md:space-y-9 w-full">
                <div className="flex flex-row gap-16 overflow-x-auto whitespace-nowrap pb-10">
                  {recommendationStocks.top_gainers.map((stock) => {
                    return (
                      <StockRecommendation key={stock.ticker} stock={stock} />
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </main>
      ) : (
        <main className="container flex justify-center items-center h-full py-10 md:py-20">
          <div className="flex gap-6 flex-col justify-center items-center ">
            <h2 className="text-white text-center font-bold text-xl md:text-4xl">
              Build Your Personalized Portfolio{" "}
            </h2>
            <p className="text-justify text-[#7E7E7E] text-base md:text-2xl">
              Let us know the stocks you own, and we will tailor our
              recommendations just for you!
            </p>
            <div className="w-full py-3 px-9 flex gap-3 bg-gray/50 rounded-3xl">
              <Search size={40} className="text-white" />
              <input
                className="text-white focus:border-none w-full bg-transparent"
                type="text"
                placeholder="Search for companies"
              />
            </div>
          </div>
        </main>
      )}
    </>
  );
}
