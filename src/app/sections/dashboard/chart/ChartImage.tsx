"use client"
import { PUBLIC_BASE_URL } from "@/utils/env";
import React from "react";

const ChartImage = ({ dataset }: { dataset: string }) => {
  return (
    <img src={`${PUBLIC_BASE_URL}visual/monthly-average?dataset=${dataset}`} />
  );
};

export default ChartImage;
