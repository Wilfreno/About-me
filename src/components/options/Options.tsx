"use client";
import {
  Bars3Icon,
  HomeIcon,
  Squares2X2Icon,
  UserIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

import { Button } from "../ui/button";
import {  useMemo, useState } from "react";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default function Options() {
  const MotionDropdownMenuItem = useMemo(() => motion(DropdownMenuItem), []);
  const items = [
    { name: "toggle theme", icon: <ThemeToggler /> },
    {
      name: "contact",
      icon: <ContactSvg className="h-6 w-auto fill-accent-foreground" />,
    },
    { name: "skills", icon: <WrenchScrewdriverIcon className="h-6 w-auto" /> },
    { name: "projects", icon: <Squares2X2Icon className="h-6 w-auto" /> },
    { name: "profile", icon: <UserIcon className="h-6 w-auto" /> },
    { name: "start", icon: <HomeIcon className="h-6 w-auto" /> },
  ];


  return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="secondary"
            className="aspect-square h-fit w-auto p-2 rounded-full shadow-md fixed bottom-5 right-6"
          >
            <Bars3Icon className="h-6 stroke-primary" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-fit h-fit bg-transparent rounded-full focus-visible:ring-0 border-none">
          <DropdownMenuGroup className="space-y-3">
            <AnimatePresence>
              {items.map((item, index) => (
                <TooltipProvider key={index}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <MotionDropdownMenuItem
                        key={item.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: {
                            delay: (items.length - index) * 0.1,
                          },
                        }}
                        exit={{ opacity: 0, y: 10 }}
                        className="aspect-square h-fit w-auto p-2 rounded-full "
                      >
                        <Link
                          href={"#" + item.name}
                          as={"#" + item.name}
                          prefetch
                          className="hover:fill-primary"
                        >
                          {item.icon}
                        </Link>
                      </MotionDropdownMenuItem>
                    </TooltipTrigger>
                    <TooltipContent side="left" align="start" alignOffset={-5}>
                      {item.name}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </AnimatePresence>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
  );
}
