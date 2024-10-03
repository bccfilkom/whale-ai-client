"use client";
import { TimeSeriesData } from "@/types/chart";
import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TimeSeriesChart = ({
  data,
  title = "",
  price = "",
}: {
  data: TimeSeriesData[];
  title: string;
  price: string;
}) => {
  const chartData = {
    labels: data.map((d) => d.Date),
    datasets: [
      {
        label: "Close Price",
        data: data.map((d) => d.Close),
        borderColor: "rgba(255, 255, 255, 1)",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderWidth: 1,
        tension: 0.01,
      },
    ],
  };
  const options = {
    scales: {
      x: {
        ticks: { color: "white" },
      },
      y: {
        ticks: { color: "white" },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="space-y-2">
      <div className="flex flex-row gap-3 text-3xl">
        <span className="text-white font-bold">{title}</span>
        <span className="text-[#7E7E7E] font-medium">{price}</span>
      </div>
      <div style={{ backgroundColor: "transparent", padding: "1rem" }}>
        <Line data={chartData} options={options} height={500} />
      </div>
    </div>
  );
};

export default TimeSeriesChart;
