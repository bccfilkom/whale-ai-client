import DropdownDataset from "@/app/sections/dashboard/chart/DropdownDataset";
import { BASE_URL } from "@/utils/env";

export default async function ChartDashboardPage({
  searchParams,
}: {
  searchParams: {
    dataset: string;
  };
}) {
  return (
    <main className="py-12 w-full">
      <div className="flex justify-between w-full gap-3 flex-col md:flex-row">
        <h1 className="text-3xl text-white font-bold ">Chart</h1>
        <DropdownDataset />
      </div>

      <div className="text-white bg-gray/100 rounded-3xl px-8 mt-10 py-10 grid grid-cols-1 xl:grid-cols-2 gap-10 md:gap-16 ">
        <div className="flex flex-col items-center text-lg gap-5 md:text-2xl font-bold">
          <h2>Monthly Price Change for Stock</h2>
          <img
            src={`${BASE_URL}visual/monthly-average?dataset=${searchParams.dataset}`}
          />
        </div>
        <div className="flex flex-col items-center text-lg gap-5 md:text-2xl font-bold">
          <h2>Monthly Price Change for Stock</h2>
          <img
            src={`${BASE_URL}visual/price-and-percent?dataset=${searchParams.dataset}&date-range=month`}
          />
        </div>
        <div className="flex flex-col items-center text-lg gap-5 md:text-2xl font-bold">
          <h2>Time Series Chart</h2>
          <img
            src={`${BASE_URL}visual/time-series?mv=1&date-range=5%20year&dataset=${searchParams.dataset}`}
          />
        </div>
        <div className="flex flex-col items-center text-lg gap-5 md:text-2xl font-bold">
          <h2>Volume Trend</h2>
          <img
            src={`${BASE_URL}visual/volume-analysis?dataset=${searchParams.dataset}&date-range=year`}
          />
        </div>
      </div>
    </main>
  );
}
