import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { NavigationMenuContent } from "@radix-ui/react-navigation-menu";
import { Dispatch, SetStateAction } from "react";
import { Separator } from "../ui/separator";

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
    <nav className="my-12">
      <ul className="flex space-x-5">
        {pages.map((page, index) => (
          <li
            key={index}
            className={`flex space-x-2 justify-center whitespace-nowrap cursor-pointer md:space-x-5 ${
              page_index === index + 1 ? "underline" : ""
            }`}
            onClick={() => setIndex(index + 1)}
          >
            {index !== 0 && index !== 4 && <Separator orientation="vertical" />}
            <p className=" text-base lg:text-xl">{page.name}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
}
