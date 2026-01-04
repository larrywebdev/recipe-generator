import Link from "next/link";

export default function Drawer({ closeMenu, menuOpen }) {
  return (
    <aside
      className={`fixed top-0 right-0 h-screen w-[80vw] max-w-75 bg-amber-500 text-center transform transition-transform duration-300 overflow-y-auto flex flex-col items-center justify-start pt-20 px-5 ${
        menuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <nav className="w-full">
        <ul className="flex justify-between">
          {["Saved recipes", "History"].map((text) => (
            <li key={text}>
              <Link href="#">{text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
