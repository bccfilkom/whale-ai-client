import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";
import { AdminType } from "./role";
import { JwtPayload } from "./jwt";

declare module "next-auth" {
  interface Session {
    user: {
      username: string;
      jwtToken: string;
      refreshToken: string;
    };
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    code: number;
    status: string;
    message: string;
    data: {
      username: string;
      jwtToken: string;
      refreshToken: string;
    };
    iat: number;
    exp: number;
    jti: string;
  }
}
