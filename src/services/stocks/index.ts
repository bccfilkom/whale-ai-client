"use server";

import {
  ALPHA_VANTAGE_BASE_URL,
  FINNHUB_API_KEY,
  FINNHUB_BASE_URL,
} from "@/utils/env";
import axios from "axios";

const getHighlightStocks = async () => {
  try {
    const res = await axios.get(
      `${ALPHA_VANTAGE_BASE_URL}query?function=TOP_GAINERS_LOSERS&apikey=demo`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getAllStocks = async () => {
  try {
    const res = await axios.get(
      `${FINNHUB_BASE_URL}search?q=%&token=${FINNHUB_API_KEY}`
    );
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const searchStocks = async (query: string) => {
  try {
    const res = await axios.get(
      `${FINNHUB_BASE_URL}search?q=${query}&token=${FINNHUB_API_KEY}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export { getHighlightStocks, getAllStocks, searchStocks };
