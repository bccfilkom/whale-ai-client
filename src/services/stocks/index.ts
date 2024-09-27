"use server";

import { ALPHA_VANTAGE_BASE_URL } from "@/utils/env";
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

export { getHighlightStocks };
