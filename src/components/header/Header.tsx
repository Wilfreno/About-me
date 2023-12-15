"use client";
import Logo from "./Logo";
import Menu from "./menu/Menu";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="fixed bg-gradient-to-l from-[#FFD369] to-[#222831] text-[#EEEEEE] top-0 w-screen shadow-md flex items-center justify-between px-5 py-2 z-50 md:py-3 lg:px-10">
      <Logo />
      <Navigation />
      <Menu />
    </header>
  );
}
