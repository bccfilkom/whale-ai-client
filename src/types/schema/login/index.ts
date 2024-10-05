import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(3, "Username must be at least 6 characters long"),
  password: z.string().min(5, "Password must be at least 8 characters long"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
