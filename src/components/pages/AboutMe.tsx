"use client";
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
    <section
      id="me"
      className="h-[100dvh] w-screen snap-center grid grid-rows-[auto_1fr]"
    >
      <h2 className="justify-self-center mt-10 text-xl">About me</h2>

      <div className="flex flex-col sm:flex-row justify-evenly items-center">
        <div>
          <Image
            src="https://avatars.githubusercontent.com/u/48620014?v=4"
            alt="Wilfreno Gayongan"
            width={500}
            className="aspect-square h-auto w-[50vw] sm:w-[20vw] rounded-full"
            height={500}
            priority
          />
        </div>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, x: -50, transition: { duration: 0.3 } }}
            className="prose text-primary"
          >
            I discover my love in programming during the Covid-19 pandemic, Post
            pandemic i decided to enroll for a CS degree at MSU-IIT but i'm
            having a difficulty in terms of money and tools for studying web
            development. I want to financially support myself and still continue
            learning and becoming a better web developer. Using React / Next.js
            with Typescript , tailwind-css , and Node.js for the the backend i'm
            currently improving myself by creating my on personal project{" "}
            <Link
              href="https://hanapbh.vercel.app/nearby"
              as="https://hanapbh.vercel.app/nearby"
              target="_blank"
              className="underline font-bold italic text-primary"
            >
              Hanap BH
            </Link>
            . With this project, i'm confident in my capabilities as a web
            developer.
          </motion.p>
      </div>
    </section>
  );
}
