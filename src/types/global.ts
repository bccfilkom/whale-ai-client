interface User {
  username: string;
  name: string;
  email: string;
  password: string;
}

type Message = { success: string } | { error: string } | { message: string };
