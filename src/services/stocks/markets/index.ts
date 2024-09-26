"use server";

import { ALPHA_VANTAGE_BASE_URL } from "@/utils/env";
import axios from "axios";

const getGlobalMarketStatus = async () => {
  try {
    const res = await axios.get(
      `${ALPHA_VANTAGE_BASE_URL}query?function=MARKET_STATUS&apikey=demo`
    );
    return res.data.markets;
  } catch (error) {
    console.log(error);
  }
};

export { getGlobalMarketStatus };
