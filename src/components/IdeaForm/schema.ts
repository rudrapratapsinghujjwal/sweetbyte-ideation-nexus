
import * as z from "zod";

export const formSchema = z.object({
  title: z.string().min(10, {
    message: "Title must be at least 10 characters.",
  }).max(100, {
    message: "Title must not exceed 100 characters."
  }),
  shortDescription: z.string().min(20, {
    message: "Short description must be at least 20 characters.",
  }).max(200, {
    message: "Short description must not exceed 200 characters."
  }),
  fullDescription: z.string().min(100, {
    message: "Full description must be at least 100 characters.",
  }).max(2000, {
    message: "Full description must not exceed 2000 characters."
  }),
  category: z.string({
    required_error: "Please select a category.",
  }),
  price: z.number().min(100, {
    message: "Price must be at least 100 SByte.",
  }).max(100000, {
    message: "Price cannot exceed 100,000 SByte."
  }),
});

export const CATEGORIES = [
  "Fintech",
  "Healthcare",
  "E-commerce",
  "Logistics & Supply Chain",
  "Sustainability",
  "Entertainment",
  "Education",
  "Real Estate",
  "Social Media",
  "Legal Tech",
  "Health & Nutrition",
  "Blockchain & Web3"
];
