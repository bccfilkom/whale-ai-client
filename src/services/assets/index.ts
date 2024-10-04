"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { BASE_URL } from "@/utils/env";
import axios from "axios";
import { getServerSession } from "next-auth";

const getAllUserAssets = async () => {
  const session = await getServerSession(authOptions);
  const TOKEN = session?.user.jwtToken;
  try {
    const res = await axios.get(`${BASE_URL}user-assets`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    return res.data;
    console.log(res.data);
    console.log(TOKEN);
  } catch (error) {
    console.log(error);
    console.log(session);
  }
};

export { getAllUserAssets };
