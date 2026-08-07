import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters"),

  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Invalid email address"),

  age: z
    .number({
      error: (issue) =>
        issue.input === undefined || Number.isNaN(issue.input)
          ? "Age is required"
          : "Age must be a number",
    })
    .min(1, "Age must be greater than 0")
    .max(120, "Age cannot exceed 120"),
});