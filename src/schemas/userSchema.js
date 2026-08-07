import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters"),

  email: z
    .email("Invalid email address"),

  age: z
    .number()
    .min(1, "Age must be greater than 0")
    .max(120, "Age cannot exceed 120"),
});