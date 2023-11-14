import Logo from "./Logo";
import Menu from "./menu/Menu";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="fixed top-0 w-screen bg-white shadow-md flex items-center justify-between px-5 py-2 z-50 lg:px-10">
      <Logo />
      <Navigation />
      <Menu />
    </header>
  );
}
