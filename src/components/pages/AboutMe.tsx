import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
export default function AboutMe() {
  return (
    <>
      <h1 className="text-3xl lg:text-5xl font-bold flex">
        {"About Me".split("").map((c, index) =>
          c === " " ? (
            <span key={index} className="mx-2"></span>
          ) : (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              {c}
            </motion.p>
          )
        )}
      </h1>
      <div className="hidden grow leading-[1.5rem] px-5 my-5 text-sm md:flex flex-col items-center justify-center lg:text-xl lg:leading-[2rem] md:px-0">
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-justify"
        >
          Hi! &#128075; I'm <strong>{"Wilfreno Gayongan"}</strong>. An
          enthusiastic, online game loving, <strong>Full Stack Web</strong>
        </motion.p>{" "}
        <motion.p
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-justify"
        >
          <strong>Developer</strong>. The moment I wrote my first "Hello world".
          I felt like I was a kid in a candy
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-justify"
        >
          store. I didn't know what to do, I didn't know what to take, but I
          knew I would enjoy
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-justify"
        >
          exploring every corner of it. As I dove deeper into programming, I
          decided to take the
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-justify"
        >
          path on web development. Learning web development became my hobby, I
          actually
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-justify"
        >
          spend more time now trying to learn web development than playing
          online games. As
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-justify"
        >
          of now, I'm learning the full stack <strong>React.js</strong>{" "}
          framework <strong>Next.js</strong> with <strong>typescript</strong>,{" "}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-justify"
        >
          <strong>mongoDB</strong>, <strong>Google Places Api</strong>, and{" "}
          <strong>tailwind css</strong>. Go to my{" "}
          <strong className="underline">PROJECT</strong>
          section to see
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-justify"
        >
          what I've built with it &#128077; .
        </motion.p>
      </div>
      <div className="grow leading-[1.5rem] px-5 my-5 text-md flex flex-col items-center justify-center md:hidden lg:text-xl lg:leading-[2rem] md:px-0">
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * 0, duration: 0.3 }}
          className="text-center"
        >
          Hi! &#128075; I'm <strong>{"Wilfreno Gayongan"}</strong>. An
          enthusiastic,
        </motion.p>{" "}
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * 1, duration: 0.3 }}
          className="text-center"
        >
          online game loving, <strong> Full Stack Web Developer</strong>.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * 2, duration: 0.3 }}
          className="text-center"
        >
          The moment I wrote my first "Hello world". I felt
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * 3, duration: 0.3 }}
          className="text-center"
        >
          like I was a kid in a candy store. I didn't know
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * 4, duration: 0.3 }}
          className="text-center"
        >
          what to do, I didn't know what to take, but I
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * 5, duration: 0.3 }}
          className="text-center"
        >
          knew I would enjoy exploring every corner of it.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * 6, duration: 0.3 }}
          className="text-center"
        >
          As I dove deeper into programming, I decided
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * 7, duration: 0.3 }}
          className="text-center"
        >
          to take the path on web development. Learning
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * 8, duration: 0.3 }}
          className="text-center"
        >
          web development became my hobby, I actually
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * 9, duration: 0.3 }}
          className="text-center"
        >
          spend more time now trying to learn web
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * 10, duration: 0.3 }}
          className="text-center"
        >
          development than playing online games. As of
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * 11, duration: 0.3 }}
          className="text-center"
        >
          now, I'm learning the full stack <strong>React.js</strong>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * 12, duration: 0.3 }}
          className="text-center"
        >
          framework <strong>Next.js</strong> with <strong>typescript</strong>,{" "}
          <strong>mongoDB</strong>,
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * 13, duration: 0.3 }}
          className="text-center"
        >
          <strong>Google Places Api</strong>, and <strong>tailwind css</strong>.
          Go to my
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * 14, duration: 0.3 }}
          className="text-center"
        >
          <strong className="underline">PROJECT</strong>
          section to see what I've built with it.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * 15, duration: 0.3 }}
          className="text-center"
        >
          &#128077;{" "}
        </motion.p>
      </div>
    </>
  );
}
