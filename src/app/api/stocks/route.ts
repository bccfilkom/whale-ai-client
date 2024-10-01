"use server";
import { FINNHUB_API_KEY, FINNHUB_BASE_URL } from "@/utils/env";
import axios from "axios";

export async function GET() {
  try {
    const response = await axios.get(
      `${FINNHUB_BASE_URL}search?q=%&token=${FINNHUB_API_KEY}`
    );
    if (response.status === 200 || response.status === 201) {
      return new Response(
        JSON.stringify({
          code: 200,
          ...response.data,
        }),
        { status: 200 }
      );
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return new Response(
        JSON.stringify({
          code: error.response?.status,
          ...error.response?.data,
        }),
        { status: error.response?.status || 500 }
      );
    } else {
      return new Response(
        JSON.stringify({
          code: 500,
          message: "Unknown error occurred",
        }),
        { status: 500 }
      );
    }
  }
}
