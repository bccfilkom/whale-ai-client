import { BASE_URL } from "@/utils/env";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  try {
    const { username, name, email, password } = body;
    const requestBody = {
      username,
      name,
      email,
      password,
    };
    const res = await axios.post(`${BASE_URL}users/register`, requestBody);
    if (res.status === 200 || res.status === 201) {
      return new Response(
        JSON.stringify({
          code: 200,
          ...res.data,
        }),
        { status: 200 }
      );
    }
  } catch (error) {
    console.log(error);
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
