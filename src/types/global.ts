// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface User {
  UserId: string;
  username: string;
  name: string;
  email: string;
  password: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface DecodedJWT {
  UserId: string;
  exp: number;
}
