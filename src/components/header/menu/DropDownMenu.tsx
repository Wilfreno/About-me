import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

export default function DropDownMenu({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <section className="z-10 absolute top-full left-0 bg-white space-y-px w-screen border-2 drop-shadow-xl flex flex-col md:hidden">
      <Link
        className=" py-3 px-5  bg-slate-100 hover:scale-105 hover:text-xl hover:text-white hover:font-semibold hover:drop-shadow-lg hover:bg-gray-800  transform transition duration-100 ease-out"
        href="#about-me"
        onClick={() => setOpen(false)}
      >
        About me
      </Link>
      <Link
        className=" py-3 px-5 bg-slate-100 hover:scale-105 hover:text-xl hover:text-white hover:font-semibold hover:drop-shadow-lg hover:bg-gray-800  transform transition duration-100 ease-out"
        href="#skills"
        onClick={() => setOpen(false)}
      >
        Skills
      </Link>
      <Link
        className=" py-3 px-5 bg-slate-100 hover:scale-105 hover:text-xl hover:text-white hover:font-semibold hover:drop-shadow-lg hover:bg-gray-800  transform transition duration-100 ease-out"
        href="#projects"
        onClick={() => setOpen(false)}
      >
        Projects
      </Link>
      <Link
        className=" py-3 px-5 bg-slate-100 hover:scale-105 hover:text-xl hover:text-white hover:font-semibold hover:drop-shadow-lg hover:bg-gray-800  transform transition duration-100 ease-out"
        href="#contact"
        onClick={() => setOpen(false)}
      >
        Contact
      </Link>
    </section>
  );
}
