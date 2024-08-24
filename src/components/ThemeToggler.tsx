"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

import { forwardRef, useEffect, useState } from "react";

const ThemeToggler = forwardRef(function () {
  const [is_dark, setIsDark] = useState(true);
  const { setTheme } = useTheme();
  useEffect(() => {
    if (is_dark) setTheme("dark");
    else setTheme("light");
  }, [is_dark]);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setIsDark((prev) => !prev)}
      className="p-1 absolute top-0 right-0"
    >
      {!is_dark && <SunIcon className=" h-auto w-full " />}
      {is_dark && <MoonIcon className=" h-auto w-full" />}
    </Button>
  );
});

export default ThemeToggler;
