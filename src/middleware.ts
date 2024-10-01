import { NextResponse } from "next/server";
import protectedRoutes from "./middlewares/protectedRoutes";

export function mainMiddleware() {
  return NextResponse.next();
}

export default protectedRoutes(mainMiddleware, [
  "/dashboard",
  "/dashboard/:path*",
]);
