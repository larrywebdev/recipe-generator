"use client";

const STORAGE_KEY = "recipe";

export function getSavedRecipes() {
  if (typeof window === "undefined") return [];

  const recipeArr = localStorage.getItem(STORAGE_KEY);
  return recipeArr ? JSON.parse(recipeArr) : [];
}

function saveRecipe(recipeArr) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(recipeArr));
}

export function onSave(recipeId, recipeMd) {
  const recipeArr = getSavedRecipes();
  const index = recipeArr.findIndex((r) => r.recipeId === recipeId);

  // UNSAVE
  if (index !== -1) {
    recipeArr.splice(index, 1);
    saveRecipe(recipeArr);
    return { saved: false };
  }

  // SAVE
  recipeArr.push({
    recipeId,
    recipeMd,
    createdAt: Date.now(),
  });

  saveRecipe(recipeArr);
  return { saved: true };
}
