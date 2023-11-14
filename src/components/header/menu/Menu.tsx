"use client";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useEffect, useRef, useState } from "react";
import DropDownMenu from "./DropDownMenu";

export default function Menu() {
  const [open, setOpen] = useState<boolean>(false);
  const button_ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function clickHandler(e: MouseEvent) {
      if (!button_ref.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, []);
  return (
    <>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="hover:shadow-lg p-1 rounded-lg hover:border hover:border-gray-200 md:hidden"
        ref={button_ref}
      >
        <Bars3Icon className="h-8" />
      </button>
      {open && <DropDownMenu setOpen={setOpen} />}
    </>
  );
}
