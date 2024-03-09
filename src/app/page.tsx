"use client";
import AboutMe from "@/components/pages/AboutMe";
import { ThemeToggler } from "@/components/ThemeToggler";
import Projects from "@/components/pages/projects/Projects";
import { TouchEvent, WheelEvent, useState } from "react";
import Opening from "@/components/pages/opening/Opening";
import Skills from "@/components/pages/skills/Skills";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import Contact from "@/components/pages/contact/Contact";
export default function Home() {
  const [index, setIndex] = useState(0);
  const [start, setStart] = useState<Record<string, number | null>>({
    x: null,
    y: null,
  });

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
  function touchStartHandler(e: TouchEvent<HTMLElement>) {
    setStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  }

  function touchEndHandler(e: TouchEvent<HTMLElement>) {
    if (!start.x || !start.y) return;

    const deltax = e.changedTouches[0].clientX - start.x;
    const deltay = e.changedTouches[0].clientY - start.y;

    const distance = Math.sqrt(deltax ** 2 + deltay ** 2);

    if (distance >= 50) {
      Math.abs(deltax) > Math.abs(deltay)
        ? deltax > 0
          ? index > 0 && setIndex((prev) => prev - 1)
          : index < 4 && setIndex((prev) => prev + 1)
        : deltay > 0
          ? index > 0 && setIndex((prev) => prev - 1)
          : index < 4 && setIndex((prev) => prev + 1);
    }

    setStart({ x: null, y: null });
  }
  return (
    <main
      className="w-screen h-screen grid grid-rows-[auto_1fr_auto]"
      onWheel={handleScroll}
      onTouchStart={touchStartHandler}
      onTouchEndCapture={touchEndHandler}
    >
      <header className="font-['Poiret_One'] grid grid-cols-[auto_1fr_auto] px-5 py-3 md:flex md:justify-between items-center md:px-10 sm:py-5">
        <h1 className="text-4xl cursor-pointer" onClick={() => setIndex(0)}>
          W
        </h1>
        <ThemeToggler />
        <div className="flex items-center space-x-5 cursor-point">
          <Link href="https://github.com/Wilfreno" target="_blank">
            <GitHubLogoIcon className="h-auto w-7" />
          </Link>
          <Link href="https://www.linkedin.com/in/wgayongan/" target="_blank">
            <LinkedInLogoIcon className="h-auto w-7" />
          </Link>
        </div>
      </header>
      {index === 0 && <Opening setIndex={setIndex} />}
      {index === 1 && <AboutMe setIndex={setIndex} />}
      {index === 2 && <Skills />}
      {index === 3 && <Projects />}
      {index === 4 && <Contact />}
      <Navigation page_index={index} setIndex={setIndex} />
    </main>
  );
}
