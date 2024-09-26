"use server";
import { ALPHA_VANTAGE_BASE_URL } from "@/utils/env";
import axios from "axios";

const getAllNews = async () => {
  try {
    const res = await axios.get(
      `${ALPHA_VANTAGE_BASE_URL}query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=demo`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export { getAllNews };

