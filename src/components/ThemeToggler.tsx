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
      variant="outline"
      className="aspect-square h-fit w-auto fill-primary p-2 rounded-full hover:stroke-primary"
      onClick={() => setIsDark((prev) => !prev)}
    >
      {!is_dark && <SunIcon className=" h-6 w-full " />}
      {is_dark && <MoonIcon className=" h-6 w-full" />}
    </Button>
  );
});

export default ThemeToggler;
