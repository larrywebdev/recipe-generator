"use server";
import { recipeSchema } from "@/lib/recipeSchema";
import { GoogleGenAI } from "@google/genai";
import { z } from "zod";

const ai = new GoogleGenAI({});

const getRecipe = async (recipe) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Make a recipe with the following ingredients ${
        recipe.ingredients
      }. My dietary preference is ${recipe.diet}. The meal is ${
        recipe.mealType
      }. I have ${recipe.time} to prepare this meal.${
        recipe.extra
          ? "I'm okay with a few extra ingredients"
          : "Don't add any extra ingredients"
      }`,
    });
    return response.text;
  } catch {
    throw new Error("Error generating recipe");
  }
};

export async function generateRecipe(formData) {
  try {
    const raw = Object.fromEntries(formData);
    raw.extra = raw.extra === "true";

    const parsed = recipeSchema.safeParse(raw);

    if (!parsed.success) {
      return { error: z.flattenError(parsed.error).fieldErrors };
    }

    const recipe = await getRecipe(parsed.data);
    return { success: true, recipe };
  } catch (error) {
    return {
      success: false,
      error: "Error fetching recipe",
    };
  }
}
