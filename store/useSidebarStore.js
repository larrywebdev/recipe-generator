import { create } from "zustand";

const useSidebarStore = create((set) => ({
  menuOpen: false,
  setMenuOpen: (menuOpen) => set({ menuOpen }),
}));

export default useSidebarStore;
