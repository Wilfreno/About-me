import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function AboutMe() {
  const [width, setWidth] = useState<number>();
  useEffect(() => {
    setWidth(window.innerWidth);
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.p
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, x: -50, transition: { duration: 0.3 } }}
      className="text-justify text-xs md:text-lg p-3 self-center"
    >
      <span className="grow flex justify-center">
        <Image
          src="https://avatars.githubusercontent.com/u/48620014?v=4"
          alt="Wilfreno Gayongan"
          width={500}
          height={500}
          className="aspect-square h-auto md:w-[15vw] rounded-full"
          priority
        />
      </span>
      I discover my love in programming during the Covid-19 pandemic, Post
      pandemic i decided to enroll for a CS degree at MSU-IIT but i'm having a
      difficulty in terms of money and tools for studying web development. I
      want to financially support myself and still continue learning and
      becoming a better web developer. Using React / Next.js with Typescript ,
      tailwind-css , and Node.js for the the backend i'm currently improving
      myself by creating my on personal project{" "}
      <Link
        href="https://croom-wing.vercel.app/"
        as="https://croom-wing.vercel.app/"
        target="_blank"
        className="text-primary underline font-bold"
      >
        croom
      </Link>
      . With this project, i'm confident in my capabilities as a web developer.
    </motion.p>
  );
}
