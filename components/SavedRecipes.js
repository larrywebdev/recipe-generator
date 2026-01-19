"use client";
import { getSavedRecipes } from "@/lib/saveRecipe";
import useRecipeStore from "@/store/useRecipeStore";
import getRecipeTitle from "./getRecipeTitle";
import useSidebarStore from "@/store/useSidebarStore";

export default function SavedRecipes() {
  const setMenuOpen = useSidebarStore((state) => state.setMenuOpen);
  const setRecipe = useRecipeStore((state) => state.setRecipe);
  const recipeArr = getSavedRecipes();

  return recipeArr.map((recipe, index) => {
    const recipeTitles = getRecipeTitle(recipe.recipeMd);
    return (
      <button
        key={recipe.recipeId}
        onClick={() => {
          setRecipe(recipe);
          setMenuOpen(false);
        }}
        className="w-57.5"
      >
        <h3 className="bg-gray-100 text-black rounded-sm text-[12px] p-2 truncate mt-1 cursor-pointer">
          <span>{index + 1 + "."}</span> {recipeTitles}
        </h3>
      </button>
    );
  });
}
