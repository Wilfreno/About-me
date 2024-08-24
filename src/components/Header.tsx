import { Button } from "./ui/button";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  const pages = [
    { name: "About Me", link: "me" },
    { name: "Skills", link: "skills" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];
  return (
    <header className="fixed inset-x-0 top-0 flex sm:justify-end py-3 px-3 sm:px-5 bg-transparent sm:backdrop-blur-md">
      <nav className="space-x-5 hidden sm:inline-flex">
        {pages.map((page) => (
          <Link key={page.name} href={"#" + page.link}>
            <Button
              variant="ghost"
              key={page.name}
              type="button"
              className="font-semibold"
            >
              {page.name}
            </Button>
          </Link>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="secondary" size="icon" className="sm:hidden p-1">
            <Menu className="h-full w-auto" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="space-y-5 grid py-5">
            {pages.map((page) => (
              <Link key={page.name} href={"#" + page.link}>
                <Button
                  variant="ghost"
                  key={page.name}
                  type="button"
                  className="font-semibold w-full justify-start"
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
