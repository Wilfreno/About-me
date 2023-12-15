import Image from "next/image";
import meImage from "../../public/me.png";
import Link from "next/link";
export default function Opening() {
  return (
    <section
      id="opening"
      className="min-h-screen flex flex-col items-center justify-center drop-shadow-lg p-2"
    >
      <div className="relative overflow-hidden aspect-square h-[20vh] w-auto lg:h-[45vh]">
        <Image src={meImage} alt="image" className=" object-contain" />
      </div>
      <p className="text-2xl font-bold lg:text-4xl lg:my-5">
        Wilfreno Gayongan
      </p>
      <p className="z-20 mt-10 flex items-center text-[#FFD369]  text-3xl sm:text-4xl lg:text-8xl lg:mt-2 font-bold whitespace-nowrap flex-wrap drop-shadow-xl">
        Full Stack Web Developer
      </p>
      <Link
        href="#contact"
        className="bg-[#393E46] rounded-lg p-2 text-2xl font-semibold my-5 hover:scale-110 shadow-lg hover:text-[#FFD369] lg:text-3xl lg:p-3"
      >
        Contact me
      </Link>
    </section>
  );
}
