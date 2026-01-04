"use client";
import { useEffect, useState } from "react";
import Drawer from "./Drawer";
import SidebarToggle from "./SidebarToggle";

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((bool) => !bool);
  const closeMenu = () => setMenuOpen(false);

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
    <>
      <Drawer closeMenu={closeMenu} menuOpen={menuOpen} />
      <SidebarToggle toggleMenu={toggleMenu} menuOpen={menuOpen} />
    </>
  );
}
