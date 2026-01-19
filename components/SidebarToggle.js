import useSidebarStore from "@/store/useSidebarStore";
import { useEffect } from "react";

export default function SidebarToggle() {
  const menuOpen = useSidebarStore((state) => state.menuOpen);
  const setMenuOpen = useSidebarStore((state) => state.setMenuOpen);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // cleanup
    };
  }, [menuOpen]);
  return (
    <div
      className="w-10 h-full absolute justify-center items-center cursor-pointer z-3 right-0 top-4"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <div className="relative h-6 w-8">
        {/* Top bar */}
        <span
          className={`absolute left-0 h-0.5 w-8.25 bg-white rounded-full transition-transform duration-300 ease-in-out
      ${
        menuOpen
          ? "transform rotate-45 translate-y-2.5"
          : "transform rotate-0 translate-y-0.75"
      }
    `}
        />

        {/* Middle bar */}
        <span
          className={`absolute left-0 h-0.5 w-8.25 bg-white rounded-full transition-opacity duration-300 ease-in-out translate-y-2.5
      ${menuOpen ? "opacity-0" : "opacity-100"}
    `}
        />

        {/* Bottom bar */}
        <span
          className={`absolute left-0 h-0.5 w-8.25 bg-white rounded-full transition-transform duration-300 ease-in-out
      ${
        menuOpen
          ? "transform -rotate-45 translate-y-2.5"
          : "transform rotate-0 translate-y-4.25"
      }
    `}
        />
      </div>
    </div>
  );
}
