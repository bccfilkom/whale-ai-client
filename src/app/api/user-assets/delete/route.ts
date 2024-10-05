import { BASE_URL } from "@/utils/env";
import axios from "axios";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const session = await getServerSession(authOptions);
    const TOKEN = session?.user.jwtToken;
    const body = await req.json();
    const { id } = body;
    const requestBody = {
      id,
    };
    try {
      const response = await axios.delete(
        `${BASE_URL}user-assets/${requestBody.id}`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );
  
      if (response.status === 200 || response.status === 201) {
        return new NextResponse(
          JSON.stringify({
            code: 200,
            ...response.data,
          }),
          { status: 200 }
        );
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return new NextResponse(
          JSON.stringify({
            code: error.response?.status,
            ...error.response?.data,
          }),
          { status: error.response?.status || 500 }
        );
      } else {
        return new NextResponse(
          JSON.stringify({
            code: 500,
            message: "Unknown error occurred",
          }),
          { status: 500 }
        );
      }
    }
  }
  