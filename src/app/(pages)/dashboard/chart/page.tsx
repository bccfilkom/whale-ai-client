import ChartImage from "@/app/sections/dashboard/chart/ChartImage";
import DropdownDataset from "@/app/sections/dashboard/chart/DropdownDataset";
import PriceAndPercentTimeSeriesChart from "@/components/chart/price-and-percent-time-series";
import TimeSeriesChartWithSMA from "@/components/chart/sma-time-series";
import VolumeTimeSeriesChart from "@/components/chart/volume-time-series";

export default async function ChartDashboardPage({
  searchParams,
}: {
  searchParams: {
    dataset: string;
  };
}) {
  const dataset = searchParams.dataset || "tkm";
  const {
    getTimeSeriesData,
    getVolumeTimeSeriesData,
    getPriceAndPercentTimeSeriesData,
  } = await import("@/services/visualizations");
  const priceAndPercentTimeSeriesData = await getPriceAndPercentTimeSeriesData(
    dataset
  );
  const timeSeriesData = await getTimeSeriesData(dataset);
  const volumeTimeSeriesData = await getVolumeTimeSeriesData(dataset);

  return (
    <main className="py-12 w-full">
      <div className="flex justify-between w-full gap-3 flex-col md:flex-row">
        <h1 className="text-3xl text-white font-bold ">
          Chart {dataset.toUpperCase()}
        </h1>
        <DropdownDataset />
      </div>

      <div className="text-white bg-gray/100 rounded-3xl px-8 mt-10 py-10 grid grid-cols-1 xl:grid-cols-2 gap-10 md:gap-16 ">
        <div className="flex flex-col items-center text-lg gap-5 md:text-2xl font-bold">
          <h2>Monthly Price Change for Stock</h2>
          <ChartImage dataset={dataset} />
        </div>
        <div className="flex flex-col items-center text-lg gap-5 md:text-2xl font-bold">
          <h2>Price and Percent Time Series Chart</h2>
          <PriceAndPercentTimeSeriesChart
            data={priceAndPercentTimeSeriesData}
            price=""
            title=""
          />
        </div>
        <div className="flex flex-col items-center text-lg gap-5 md:text-2xl font-bold">
          <h2>Time Series Chart</h2>
          <TimeSeriesChartWithSMA data={timeSeriesData} title="" price="" />
        </div>
        <div className="flex flex-col items-center text-lg gap-5 md:text-2xl font-bold">
          <h2>Volume Trend</h2>
          <VolumeTimeSeriesChart
            data={volumeTimeSeriesData}
            price=""
            title=""
          />
        </div>
      </div>
    </main>
  );
}
