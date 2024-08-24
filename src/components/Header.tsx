import { Button } from "./ui/button";
import Link from "next/link";

export default function Header() {
  const pages = [
    { name: "About Me", link: "me" },
    { name: "Skills", link: "skills" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];
  return (
    <header className="fixed inset-x-0 top-0 flex justify-end py-3 px-5">
      <nav className="space-x-5">
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
    </header>
  );
}
