"use client";
import {
  Bars3Icon,
  HomeIcon,
  Squares2X2Icon,
  UserIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { Button } from "../ui/button";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggler from "../ThemeToggler";
import Link from "next/link";
import ContactSvg from "../svg/ContactSvg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export default function Options() {
  const [display, setDisplay] = useState(false);

  const items = [
    { name: "toogle theme", icon: <ThemeToggler /> },
    { name: "contact", icon: <ContactSvg className="h-6 w-auto fill-white" /> },
    { name: "skills", icon: <WrenchScrewdriverIcon className="h-6 w-auto" /> },
    { name: "projects", icon: <Squares2X2Icon className="h-6 w-auto" /> },
    { name: "profile", icon: <UserIcon className="h-6 w-auto" /> },
    { name: "start", icon: <HomeIcon className="h-6 w-auto" /> },
  ];

  return (
    <section className="fixed bottom-8 right-8 flex flex-col items-center space-y-2 ">
      <ul className="flex flex-col items-center space-y-2">
        <AnimatePresence>
          {display &&
            items.map((item, index) => (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <motion.li
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: items.length - index * 0.1 },
                      }}
                      exit={{ opacity: 0, y: 10 }}
                    >
                      <Link
                        href={"#" + item.name}
                        as={"#" + item.name}
                        prefetch
                      >
                        <Button
                          variant="outline"
                          className="aspect-square h-fit w-auto p-2 rounded-full hover:fill-primary"
                        >
                          {item.icon}
                        </Button>
                      </Link>
                    </motion.li>
                  </TooltipTrigger>
                  <TooltipContent>{item.name}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
        </AnimatePresence>
      </ul>
      <Button
        variant="secondary"
        className="aspect-square h-fit w-auto p-2 rounded-full shadow-md"
        onClick={() => setDisplay((prev) => !prev)}
      >
        <Bars3Icon className="h-6 stroke-primary" />
      </Button>
    </section>
  );
}
