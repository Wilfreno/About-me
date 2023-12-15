import Link from "next/link";
import Img from "../../public/AboutMe.png";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
export default function AboutMe() {
  return (
    <section
      id="about-me"
      className="min-h-screen pt-20 flex flex-col px-2 justify-evenly items-center lg:flex-row md:px-10 snap-center"
    >
      <div className="flex flex-col items-center justify-center space-y-8  xl:w-[40%]">
        <h1 className="bg-gradient-to-br from-[#EEEEEE] to-[#FFD369] bg-clip-text text-transparent text-3xl font-bold whitespace-nowrap xl:text-5xl">
          About Me
        </h1>
        <p className=" leading-[1.5rem] px-5 text-sm text-justify md:text-xl md:leading-[2rem] md:px-0">
          Hi! &#128075; I'm{" "}
          <strong className="text-[#FFD369]">Wilfreno Gayongan</strong>. An
          enthusiastic, online game loving,{" "}
          <strong className="text-[#FFD369] italic">
            Full Stack Web Developer
          </strong>
          . The moment I wrote my first "Hello world". I felt like I was a kid
          in a candy store. I didn't know what to do, I didn't know what to
          take, but I knew I would enjoy exploring every corner of it. As I dove
          deeper into programming, I decided to take the path on web
          development. Learning web development became my hobby, I actually
          spend more time now trying to learn web development than playing
          online games. As of now, I'm learning the full stack{" "}
          <strong className="italic text-[#FFD369]">React.js</strong> framework{" "}
          <strong className="italic text-[#FFD369]">Next.js</strong> with{" "}
          <strong className="italic text-[#FFD369]">typescript</strong>,{" "}
          <strong className="italic text-[#FFD369]">mongoDB</strong>,{" "}
          <strong className="italic text-[#FFD369]">Google Places Api</strong>,
          and <strong className="italic text-[#FFD369]">tailwind css</strong>.
          Go to my{" "}
          <Link href="#projects">
            <strong className="font-bold text-[#FFD369] underline">PROJECT</strong>
          </Link>{" "}
          section to see what I've built with it &#128077; .
        </p>
      </div>
      <div className="flex flex-col ">
        <div className="aspect-square h-auto w-[30vw] hidden lg:inline-flex">
          <Image src={Img} alt="image" className=" object-contain" />
        </div>
        <button className="flex items-center my-5 bg-[#343434] text-[#F3F3F3] font-semibold mx-auto p-3  rounded-lg lg:text-2xl hover:text-[#FFD369] hover:scale-110 hover:shadow-lg  ">
          Download my Resume <ArrowDownTrayIcon className="h-8 mx-2" />
        </button>
      </div>
    </section>
  );
}
