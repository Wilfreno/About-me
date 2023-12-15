import Image from "next/image";
import meImage from "../../public/me.png";
import Link from "next/link";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
export default function Opening() {
  return (
    <section
      id="opening"
      className="min-h-screen flex flex-col items-center justify-center drop-shadow-lg snap-center"
    >
      <div className="relative overflow-hidden aspect-square h-[20vh] w-auto lg:h-[40vh]">
        <Image src={meImage} alt="image" className=" object-contain" />
      </div>
      <p className=" text-[#EEEEEE] text-2xl font-bold lg:text-3xl lg:my-5">
        Wilfreno Gayongan
      </p>
      <p className="z-20 mt-10 flex items-center bg-gradient-to-r from-[#EEEEEE] to-[#FFD369] bg-clip-text text-transparent  text-3xl sm:text-4xl lg:text-7xl lg:mt-2 font-bold whitespace-nowrap flex-wrap drop-shadow-xl">
        Full Stack Web Developer
      </p>
      <div className="flex flex-col items-center justify-center whitespace-nowrap my-5 space-y-8 xl:space-y-0 xl:space-x-8 xl:flex-row">
        <Link
          href="#contact"
          className="bg-[#393E46] rounded-lg p-2 font-semibold hover:scale-110 shadow-lg hover:text-[#FFD369] lg:text-xl lg:p-3"
        >
          Contact me
        </Link>
        <button className="flex items-center bg-[#393E46] rounded-lg p-2 text-sm font-semibold hover:scale-110 shadow-lg hover:text-[#FFD369] lg:text-xl lg:p-3">
          <p>Download my Resume</p>
          <ArrowDownTrayIcon className="h-5 mx-2" />
        </button>
      </div>
    </section>
  );
}
