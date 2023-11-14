import Link from "next/link";

export default function Navigation() {
  return (
    <section className="hidden md:flex space-x-3">
      <Link
        className=" p-2  rounded-lg hover:drop-shadow-md text-gray-800 text-xl hover:bg-gray-700 hover:text-white transform transition duration-300 ease-out"
        href="#about-me"
      >
        About me
      </Link>
      <Link
        className=" p-2  rounded-lg hover:drop-shadow-md text-gray-800 text-xl hover:bg-gray-700 hover:text-white transform transition duration-300 ease-out"
        href="#skills"
      >
        Skills
      </Link>
      <Link
        className=" p-2  rounded-lg hover:drop-shadow-md text-gray-800 text-xl hover:bg-gray-700 hover:text-white transform transition duration-300 ease-out"
        href="#projects"
      >
        Projects
      </Link>
      <Link
        className=" p-2  rounded-lg hover:drop-shadow-md text-gray-800 text-xl hover:bg-gray-700 hover:text-white transform transition duration-300 ease-out"
        href="#contact"
      >
        Contact
      </Link>
    </section>
  );
}
