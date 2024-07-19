"use client";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Button } from "../../ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import AboutMe from "../AboutMe";
import { motion } from "framer-motion";

export default function Opening() {
  const [view_about_me, setViewAboutMe] = useState(false);
  const [hold, setHold] = useState(false);

  async function handleClick() {
    try {
      const response = await fetch("/api/download");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Wilfreno.pdf";
      link.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      throw error;
    }
  }
  useEffect(() => {
    let id: NodeJS.Timeout;

    if (!hold) id = setInterval(() => setViewAboutMe((prev) => !prev), 2000);

    return () => clearInterval(id);
  }, [hold]);

  return (
    <section
      className="w-screen h-[100dvh] grid grid-rows-[1fr_auto] justify"
      id="start"
    >
      <div className="flex flex-col md:flex-row items-center justify-evenly">
        <div className="flex flex-col justify-center items-center space-y-5 md:space-y-10 py-5">
          <Image
            src="https://avatars.githubusercontent.com/u/48620014?v=4"
            alt="Wilfreno Gayongan"
            width={500}
            height={500}
            className="aspect-square h-auto w-[60vw] md:w-[20vw] rounded-full"
          />
          <h1 className="text-2xl md:text-3xl font-bold">Wilfreno Gayongan</h1>
          <div className="md:flex items-center space-x-5 cursor-point hidden">
            <Link
              href="https://github.com/Wilfreno"
              target="_blank"
              className="hover:scale-110"
            >
              <GitHubLogoIcon className="h-auto w-10" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/wgayongan/"
              target="_blank"
              className="hover:scale-110"
            >
              <LinkedInLogoIcon className="h-auto w-10" />
            </Link>
          </div>
        </div>
        <div className="grid grid-rows-[1fr_auto] h-full text-wrap md:w-[50vw] hover:cursor-grabbing">
          <div
            className="grid"
            onMouseEnter={() => setHold(true)}
            onMouseLeave={() => setHold(false)}
          >
            <AnimatePresence initial={false} mode="wait">
              {view_about_me ? (
                <AboutMe key="about-me" />
              ) : (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
                  exit={{ opacity: 0, x: -50, transition: { duration: 0.3 } }}
                  key="resume"
                  className="space-y-12 self-center flex flex-col items-center md:justify-center"
                >
                  <h2 className=" text-5xl md:text-6xl lg:text-8xl font-semibold whitespace-nowrap">
                    Web Developer
                  </h2>
                  <div className="space-x-5 ">
                    <Button
                      className="text-lg md:text-2xl hover:scale-110"
                      onClick={handleClick}
                    >
                      Resume
                    </Button>

                    <Button
                      className="text-lg md:text-2xl hover:scale-110"
                      variant="secondary"
                    >
                      Contact me
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="justify-self-center space-x-5 py-3 md:py-10">
            <Button
              variant={view_about_me ? "secondary" : "default"}
              onClick={() => setViewAboutMe(false)}
              className="rounded-full h-3 md:h-5 w-auto aspect-square p-0 hover:scale-110 transition duration-300 ease-out"
            ></Button>
            <Button
              variant={!view_about_me ? "secondary" : "default"}
              onClick={() => setViewAboutMe(true)}
              className="rounded-full h-3 md:h-5 w-auto aspect-square p-0 hover:scale-110 transition duration-300 ease-out"
            ></Button>
          </div>
        </div>
      </div>
      <nav className="justify-self-center py-5">
        <Button variant="link">
          <Link href="#projects" as="#projects" prefetch className="text-xl">
            projects
          </Link>
        </Button>
        <Button variant="link">
          <Link href="#skills" as="#skills" prefetch className="text-xl">
            skills
          </Link>
        </Button>
        <Button variant="link">
          <Link href="#contacts" as="#contacts" prefetch className="text-xl">
            contact
          </Link>
        </Button>
      </nav>
    </section>
  );
}
