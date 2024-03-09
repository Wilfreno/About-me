import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
export default function AboutMe({
  setIndex,
}: {
  setIndex: Dispatch<SetStateAction<number>>;
}) {
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
    <section className="grid grid-rows-[auto_1fr]">
      <h1 className="text-3xl lg:text-5xl font-bold flex mx-auto my-5">
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
      {width! > 640 ? (
        <div className="grow leading-[1.5rem] text-sm  flex-col items-center justify-center md:flex lg:text-xl lg:leading-[2rem]">
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
            <strong>Developer</strong>. The moment I wrote my first "Hello
            world". I felt like I was a kid in a candy
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
            <strong className="underline" onClick={() => setIndex(3)}>
              PROJECT
            </strong>
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
      ) : (
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="leading-[1.5rem] text-md text-justify p-3 self-end"
        >
          Hi! &#128075; I'm <strong>{"Wilfreno Gayongan"}</strong>. An
          enthusiastic, online game loving,
          <strong> Full Stack Web Developer</strong>. The moment I wrote my
          first "Hello world". I felt like I was a kid in a candy store. I
          didn't know what to do, I didn't know what to take, but I knew I would
          enjoy exploring every corner of it. As I dove deeper into programming,
          I decided to take the path on web development. Learning web
          development became my hobby, I actually spend more time now trying to
          learn web development than playing online games. As of now, I'm
          learning the full stack <strong>React.js</strong>
          framework <strong>Next.js</strong> with <strong>typescript</strong>,
          <strong>mongoDB</strong>,<strong>Google Places Api</strong>, and
          <strong>tailwind css</strong>. Go to my{" "}
          <strong className="underline" onClick={() => setIndex(3)}>
            PROJECT
          </strong>{" "}
          section to see what I've built with it. &#128077;
        </motion.p>
      )}
    </section>
  );
}
