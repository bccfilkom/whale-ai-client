import { jwtDecode } from "jwt-decode";

export function decodeJwt(token: string): DecodedJWT {
  const decoded = jwtDecode<DecodedJWT>(token);
  return decoded;
}
