import { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/button";

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
    <nav className="py-10">
      <ul className="flex sm:space-x-5 justify-center">
        {pages.map((page, index) => (
          <Button
            key={page.name}
            variant={page_index === index + 1 ? "outline" : "ghost"}
            onClick={() => setIndex(index + 1)}
            type="button"
            className="focus:bg-background"
          >
            <p className=" text-base lg:text-xl">{page.name}</p>
          </Button>
        ))}
      </ul>
    </nav>
  );
}
