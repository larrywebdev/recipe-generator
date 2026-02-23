"use client";
import useSidebarStore from "@/store/useSidebarStore";
import SavedRecipes from "./SavedRecipes";

export default function Sidebar() {
  const menuOpen = useSidebarStore((state) => state.menuOpen);

  return (
    <aside
      className={`z-2 fixed top-0 right-0 h-screen w-75 bg-amber-500 text-center transform transition-transform duration-300 overflow-y-auto flex flex-col items-center justify-start pt-15 px-5 ${
        menuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <nav className="w-full">
        <div className="text-white border-b">Saved recipes</div>
        <div className="w-full text-white h-90 bg-white rounded-sm pt-3 mt-5 overflow-y-auto">
          <SavedRecipes />
        </div>
      </nav>
    </aside>
  );
}
