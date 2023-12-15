import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

export default function DropDownMenu({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <section className="z-10 absolute top-full left-0 text-xl font-semibold bg-gradient-to-bl from-[#FFD369] via-[#393E46] to-[#222831] space-y-px w-screen border border-[#222831] drop-shadow-xl flex flex-col md:hidden">
      <Link
        className=" py-3 px-5  100 hover:scale-105 hover:text-2xl hover:text-[#F3F3F3] hover:font-semibold hover:drop-shadow-lg hover:bg-[#]  transform transition 100 ease-out"
        href="#about-me"
        onClick={() => setOpen(false)}
      >
        About me
      </Link>
      <Link
        className=" py-3 px-5 100 hover:scale-105 hover:text-2xl hover:text-[#F3F3F3] hover:font-semibold hover:drop-shadow-lg hover:bg-[#]  transform transition 100 ease-out"
        href="#skills"
        onClick={() => setOpen(false)}
      >
        Skills
      </Link>
      <Link
        className=" py-3 px-5 100 hover:scale-105 hover:text-2xl hover:text-[#F3F3F3] hover:font-semibold hover:drop-shadow-lg hover:bg-[#]  transform transition 100 ease-out"
        href="#projects"
        onClick={() => setOpen(false)}
      >
        Projects
      </Link>
      <Link
        className=" py-3 px-5 100 hover:scale-105 hover:text-2xl hover:text-[#F3F3F3] hover:font-semibold hover:drop-shadow-lg hover:bg-[#]  transform transition 100 ease-out"
        href="#contact"
        onClick={() => setOpen(false)}
      >
        Contact
      </Link>
    </section>
  );
}
