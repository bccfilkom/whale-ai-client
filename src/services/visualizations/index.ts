"use server";

import { BASE_URL } from "@/utils/env";
import axios from "axios";

const getTimeSeriesData = async (dataset: string) => {
  try {
    const res = await axios.get(
      `${BASE_URL}visual/time-series?mv=1&date-range=5%20year&dataset=${dataset}`
    );
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};

const getVolumeTimeSeriesData = async (dataset: string) => {
  try {
    const res = await axios.get(
      `${BASE_URL}visual/volume-analysis?dataset=${dataset}&date-range=year`
    );
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};
const getPriceAndPercentTimeSeriesData = async (dataset: string) => {
  try {
    const res = await axios.get(
      `${BASE_URL}visual/price-and-percent?dataset=${dataset}&date-range=month`
    );
    console.log(res.data)
    return res.data.data;

  } catch (error) {
    console.log(error);
  }
};

export {
  getTimeSeriesData,
  getVolumeTimeSeriesData,
  getPriceAndPercentTimeSeriesData,
};
