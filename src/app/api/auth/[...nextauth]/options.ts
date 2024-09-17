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
        email: {
          label: "email",
          type: "email",
          placeholder: "whaleai@gmail.com",
        },
      },

      async authorize(credentials) {
        try {
          const res = await axios.post(
            `${BASE_URL}/login`,
            {
              password: credentials?.password,
              username: credentials?.email,
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
          if (err.response?.status === 401) {
            throw new Error("CredentialsSignin");
          }
          throw new Error("An error occurred during authentication.");
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      return session;
    },
    async jwt({ token, user, account }) {
      if (user) token.id = user.id;

      return { ...token, ...user };
    },
  },
  secret: NEXTAUTH_SECRET,
};
