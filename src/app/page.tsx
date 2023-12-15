"use client";
import AboutMe from "@/components/AboutMe";
import Opening from "@/components/Opening";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
export default function Home() {
  return (
    <main className=" w-screen h-screen bg-gradient-to-bl from-[#222831] to-[#393E46] text-[#EEEEEE] snap-y snap-mandatory overflow-auto scroll-smooth">
      <Opening />
      <AboutMe />
      <Skills />
      <Projects />
    </main>
  );
}
