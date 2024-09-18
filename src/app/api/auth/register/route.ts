import { BASE_URL } from "@/utils/env";
import axios from "axios";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    const { username, name, email, password } = body;
    const requestBody = {
      username,
      name,
      email,
      password,
    };
    const response = await axios.post(`${BASE_URL}users/register`, requestBody);
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
