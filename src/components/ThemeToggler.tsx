"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";

export function ThemeToggler() {
  const [is_dark, setIsDark] = useState(true);
  const { setTheme } = useTheme();
  useEffect(() => {
    if (is_dark) setTheme("dark");
    else setTheme("light");
  }, [is_dark]);
  return (
    <Button
      variant="outline"
      size="icon"
      className="w-6 h-auto border fixed top-7 left-[50%] -translate-x-[50%] md:w-10 md:top-[90%] md:left-[95%] md:border-2 md:p-1 "
      onClick={() => setIsDark((prev) => !prev)}
    >
      {!is_dark && <SunIcon className=" h-full w-full " />}
      {is_dark && <MoonIcon className=" h-full w-full" />}
    </Button>
  );
}
