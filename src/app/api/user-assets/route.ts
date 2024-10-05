import { BASE_URL } from "@/utils/env";
import axios from "axios";
import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";
import { authOptions } from "../auth/[...nextauth]/options";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const TOKEN = session?.user.jwtToken;
  const body = await req.json();
  try {
    const { asset, currency, value } = body;
    const requestBody = {
      asset,
      currency,
      value,
    };
    const response = await axios.post(`${BASE_URL}user-assets`, requestBody, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
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
