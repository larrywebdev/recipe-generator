export default function SidebarToggle({ toggleMenu, menuOpen }) {
  return (
    <div
      className="w-10 h-full relative flex flex-col justify-center items-center cursor-pointer z-30"
      onClick={toggleMenu}
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
