"use client";
import AboutMe from "@/components/pages/AboutMe";
import { ThemeToggler } from "@/components/ThemeToggler";
import Projects from "@/components/pages/projects/Projects";
import { WheelEvent, useState } from "react";
import Opening from "@/components/pages/Opening";
import Skills from "@/components/pages/skills/Skills";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { AnimatePresence, motion } from "framer-motion";
import Contact from "@/components/pages/contact/Contact";
export default function Home() {
  const [index, setIndex] = useState(0);
  function handleScroll(event: WheelEvent<HTMLElement>) {
    if (event.deltaY > 0) {
      if (index < 4) {
        setIndex((prev) => prev + 1);
        return;
      }
      setIndex(4);
      return;
    } else if (event.deltaY < 0) {
      if (index > 0) {
        setIndex((prev) => prev - 1);
        return;
      }
      setIndex(0);
    }
  }
  return (
    <main
      className="flex flex-col w-screen h-screen items-center "
      onWheel={handleScroll}
    >
      <header className="font-['Poiret_One'] self-start w-full flex justify-between items-center px-5 md:px-10 py-5">
        <h1 className="text-4xl cursor-pointer" onClick={() => setIndex(0)}>
          W
        </h1>
        <div className="flex items-center space-x-5 cursor-point">
          <Link href="https://github.com/Wilfreno" target="_blank">
            <GitHubLogoIcon className="h-auto w-8" />
          </Link>
          <Link href="https://www.linkedin.com/in/wgayongan/" target="_blank">
            <LinkedInLogoIcon className="h-auto w-8" />
          </Link>
        </div>
      </header>
      <ThemeToggler />
      <section className="flex flex-col items-center grow w-[100vw]">
        <motion.div className="w-full relative flex flex-col items-center justify-center grow">
          {index === 0 && <Opening setIndex={setIndex} />}
          {index === 1 && <AboutMe />}
          {index === 2 && <Skills />}
          {index === 3 && <Projects />}
          {index === 4 && <Contact />}
        </motion.div>
        <Navigation page_index={index} setIndex={setIndex} />
      </section>
    </main>
  );
}
