import { z } from "zod";

export const UserSchema = z.object({
  email: z.string().email("Email must be a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  firstName: z.string().min(2, "First name must be at least 2 character"),
  lastName: z.string().min(2, "Last name must be at least 2 character"),
});
