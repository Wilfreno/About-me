import Link from "next/link";

export default function Navigation() {
  return (
    <section className="hidden md:flex space-x-3 text-xl">
      <Link
        className=" p-3  rounded-lg hover:drop-shadow-md hover:bg-[#222831] hover:text-[#FFD369] transform transition duration-300 ease-out"
        href="#about-me"
      >
        About me
      </Link>
      <Link
        className=" p-3  rounded-lg hover:drop-shadow-md hover:bg-[#222831] hover:text-[#FFD369] transform transition duration-300 ease-out"
        href="#skills"
      >
        Skills
      </Link>
      <Link
        className=" p-3  rounded-lg hover:drop-shadow-md hover:bg-[#222831] hover:text-[#FFD369] transform transition duration-300 ease-out"
        href="#projects"
      >
        Projects
      </Link>
      <Link
        className=" p-3  rounded-lg hover:drop-shadow-md hover:bg-[#222831] hover:text-[#FFD369] transform transition duration-300 ease-out"
        href="#contact"
      >
        Contact
      </Link>
    </section>
  );
}
