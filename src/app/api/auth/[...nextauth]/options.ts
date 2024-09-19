import {
  API_KEY,
  BASE_URL,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  NEXTAUTH_SECRET,
} from "@/utils/env";
import axios from "axios";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID || "",
      clientSecret: GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      credentials: {
        password: {
          label: "Password",
          type: "password",
        },
        username: {
          label: "username",
          type: "username",
          placeholder: "whaleai@gmail.com",
        },
      },

      async authorize(credentials) {
        try {
          const res = await axios.post(
            `${BASE_URL}users/login`,
            {
              password: credentials?.password,
              username: credentials?.username,
            },
            {
              headers: {
                "x-api-key": `Key ${API_KEY}`,
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            }
          );
          return res.data;
        } catch (err) {
          if (axios.isAxiosError(err)) {
            throw new Error(err.response?.data.data);
          } else {
            throw new Error("An error occurred during authentication.");
          }
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24,
  },
  callbacks: {
    async session({ session, token }) {
      session.user.jwtToken = token.data.jwtToken;
      session.user.refreshToken = token.data.refreshToken;
      session.user.username = token.data.username;
      return session;
    },
    async jwt({ token, user, account }) {
      if (account && account.provider && account.provider === "google") {
        const access_token = account.access_token;
        try {
          const res = await axios.post(`${BASE_URL}oauth/login`, {
            access_token: access_token,
          });
          token.data = res.data.data;
        } catch (error) {
          console.error("Error during OAuth login:", error);
        }
      }
      if (user) token.id = user.id;

      return { ...token, ...user };
    },
  },
  secret: NEXTAUTH_SECRET,
};
