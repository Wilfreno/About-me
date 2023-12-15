"use client";
import AboutMe from "@/components/AboutMe";
import Opening from "@/components/Opening";
import Skills from "@/components/skills/Skills";
export default function Home() {
  return (
    <main className=" bg-gradient-to-bl from-[#222831] to-[#393E46] text-[#EEEEEE]">
      <Opening />
      <AboutMe />
      <Skills />
    </main>
  );
}
