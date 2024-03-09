"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

import { useEffect, useState } from "react";

export function ThemeToggler() {
  const [width, setWidth] = useState<number>();
  const [is_dark, setIsDark] = useState(true);
  const { setTheme } = useTheme();
  useEffect(() => {
    if (is_dark) setTheme("dark");
    else setTheme("light");
  }, [is_dark]);

  useEffect(() => {
    setWidth(window.innerWidth);
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="flex items-center justify-center md:fixed bottom-5 right-10 z-50">
      <Button
        variant={width! > 640 ? "outline" : "ghost"}
        size="icon"
        className="h-6 w-auto -mr-10 md:mr-0 md:h-8 p-1"
        onClick={() => setIsDark((prev) => !prev)}
      >
        {!is_dark && <SunIcon className=" h-full w-full " />}
        {is_dark && <MoonIcon className=" h-full w-full" />}
      </Button>
    </div>
  );
}
