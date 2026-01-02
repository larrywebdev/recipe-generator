import { z } from "zod";

export const recipeSchema = z.object({
  ingredients: z.string().min(3, "Please enter at least one ingredient"),

  diet: z.string(),

  mealType: z.string().min(1, "Select a meal type"),

  time: z.string().min(1, "Select available time"),

  extra: z.boolean(),
});
