import z from "zod";

// form data schema for registration form
export const formSchema = z.object({
  // personal information step fields
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.email(),
  dob: z.iso.date("Date format must be DD/MM/YYYY").min(1, "Date of Birth is required"),
  telephone: z.string().min(1, "Phone number is required"),
  country: z.string().refine(val => val, { message: "Country is required" }),
  // account information step fields
  username: z.string()
    .min(1, "Username is required")
    .regex(/^[a-zA-Z0-9-]+$/, "Only letters, numbers, and hyphens allowed"),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .max(30, "Password must be less than 30 characters")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter")
    .regex(/[a-z]/, "Must contain at least one lowercase letter")
    .regex(/[^a-zA-Z0-9]/, "Must contain at least one special character"),
  confirmPassword: z.string().min(1, "Please confirm your password"),
  // customer preferences step fields
  favouriteGenre: z.array(z.string()),
  watchWith: z.string().nullable(),
  watchFrequency: z.string().nullable(),
  movies: z.array(z.string()),
  acceptTerms: z.boolean().refine(val => val === true, { message: "You must accept the terms and conditions" }),
}).refine(
  (data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ['confirmPassword']
  }
);

// use schema to create type
export type RegisterData = z.infer<typeof formSchema>;