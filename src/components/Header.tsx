"use client";
import { Button } from "./ui/button";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Home, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function Header() {
  const [hash, setHash] = useState("");

  const router = useRouter();
  const pages = [
    { name: "About Me", link: "me" },
    { name: "Skills", link: "skills" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];

  useEffect(() => {
    if (!window) return;
    setHash(window.location.hash.substring(1));
    window.location.hash.substring(1) && router.push(window.location.hash);
  }, []);

  return (
    <header className="fixed top-0 w-screen flex py-3 sm:py-0  px-3 sm:px-5 bg-transparent ">
      <nav className="hidden w-full sm:inline-flex justify-between items-center">
        <Link href="#w" onClick={() => setHash("w")}>
          <Button
            variant={!hash ? "default" : hash === "w" ? "default" : "ghost"}
            type="button"
            className="p-1 rounded-full h-fit"
          >
            <Home className={cn("h-6 w-auto")} />
          </Button>
        </Link>
        <span className="flex items-center space-x-5 sm:backdrop-blur-lg py-3 rounded-lg">
          {pages.map((page) => (
            <Link
              key={page.name}
              href={"#" + page.link}
              onClick={() => setHash(page.link)}
            >
              <Button
                variant={page.link === hash ? "secondary" : "ghost"}
                key={page.name}
                type="button"
                className={cn("font-semibold")}
              >
                {page.name}
              </Button>
            </Link>
          ))}
        </span>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="secondary" size="icon" className="sm:hidden p-1 ">
            <Menu className="h-full w-auto" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="space-y-5 grid py-5">
            <Link href="#w" onClick={() => setHash("w")}>
              <Button
                type="button"
                variant={!hash ? "default" : hash === "w" ? "default" : "ghost"}
                className="font-semibold w-full justify-start"
              >
                Top
              </Button>
            </Link>
            {pages.map((page) => (
              <Link
                key={page.name}
                href={"#" + page.link}
                onClick={() => setHash(page.link)}
              >
                <Button
                  variant={page.link === hash ? "secondary" : "ghost"}
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
