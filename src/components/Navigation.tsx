import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { NavigationMenuContent } from "@radix-ui/react-navigation-menu";
import { Dispatch, SetStateAction } from "react";
import { Separator } from "./ui/separator";

export default function Navigation({
  setIndex,
  page_index,
}: {
  setIndex: Dispatch<SetStateAction<number>>;
  page_index: number;
}) {
  const pages = [
    { name: "About Me" },
    { name: "Skills" },
    { name: "Projects" },
    { name: "Contact" },
  ];
  return (
    <nav className="mb-10">
      <ul className="flex sm:space-x-5">
        {pages.map((page, index) => (
          <li
            key={index}
            className={`flex justify-center items-center whitespace-nowrap cursor-pointer p-2 space-x-5 duration-300 ease-out ${
              page_index === index + 1 ? "font-bold" : "hover:font-bold"
            }`}
            onClick={() => setIndex(index + 1)}
          >
            <p className=" text-base lg:text-xl">{page.name}</p>
            {index !== 3 && <Separator orientation="vertical" />}
          </li>
        ))}
      </ul>
    </nav>
  );
}
