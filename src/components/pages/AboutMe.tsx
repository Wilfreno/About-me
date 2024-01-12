import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
export default function AboutMe() {
  return (
    <>
      <h1 className="text-3xl lg:text-5xl font-bold">About Me</h1>
      <p className=" leading-[1.5rem] px-5 my-5 text-sm text-justify lg:text-lg lg:leading-[2rem] md:px-0 sm:w-[75%] md:w-[50%]">
        Hi! &#128075; I'm <strong>Wilfreno Gayongan</strong>. An enthusiastic,
        online game loving, <strong>Full Stack Web Developer</strong>. The
        moment I wrote my first "Hello world". I felt like I was a kid in a
        candy store. I didn't know what to do, I didn't know what to take, but I
        knew I would enjoy exploring every corner of it. As I dove deeper into
        programming, I decided to take the path on web development. Learning web
        development became my hobby, I actually spend more time now trying to
        learn web development than playing online games. As of now, I'm learning
        the full stack <strong>React.js</strong> framework{" "}
        <strong>Next.js</strong> with <strong>typescript</strong>,{" "}
        <strong>mongoDB</strong>, <strong>Google Places Api</strong>, and{" "}
        <strong>tailwind css</strong>. Go to my{" "}
        <strong className="underline">PROJECT</strong>
        section to see what I've built with it &#128077; .
      </p>
    </>
  );
}
