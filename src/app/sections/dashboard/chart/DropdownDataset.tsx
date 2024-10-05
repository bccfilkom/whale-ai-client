"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

const datasets = [
  { id: 1, dataset: "tkm" },
  { id: 2, dataset: "bca" },
];

const DropdownDataset = () => {
  const searchParams = useSearchParams();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDataset = event.target.value;
    const params = new URLSearchParams(searchParams.toString());
    params.set("dataset", selectedDataset);
    window.history.pushState({}, "", `?${params.toString()}`);
    window.location.reload();
  };

  return (
    <select
      className="text-white bg-gray/100 py-2 px-4 rounded-md"
      onChange={handleChange}
      defaultValue={searchParams.get("dataset") || ""}
    >
      <option value="" disabled>
        Select a dataset
      </option>
      {datasets.map((data) => (
        <option key={data.id} value={data.dataset}>
          {data.dataset}
        </option>
      ))}
    </select>
  );
};

export default DropdownDataset;
