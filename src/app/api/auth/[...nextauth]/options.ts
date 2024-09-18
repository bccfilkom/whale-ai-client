import { API_KEY, BASE_URL, NEXTAUTH_SECRET } from "@/utils/env";
import axios from "axios";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
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
        } catch (err: any) {
          console.log(err);
          if (err.response?.status === 500) {
            throw new Error(err.response.data.data);
          }
          throw new Error("An error occurred during authentication.");
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
      if (user) token.id = user.id;

      return { ...token, ...user };
    },
  },
  secret: NEXTAUTH_SECRET,
};
