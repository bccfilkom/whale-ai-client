import { z } from "zod";

export const registerSchema = z.object({
  username: z.string().min(3, "Username must be at least 6 characters long"),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(5, "Password must be at least 8 characters long"),
});

export type RegisterFormData = z.infer<typeof registerSchema>;
