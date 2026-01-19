import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipe: null,
  setRecipe: (recipe) => set({ recipe }),
}));

export default useRecipeStore;
