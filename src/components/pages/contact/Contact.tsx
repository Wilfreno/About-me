import { motion } from "framer-motion";

import EmailCard from "./EmailCard";
import GmailContact from "./GmailContact";
import GithubContact from "./GithubContact";
import LinkdenContact from "./LinkdenContact";
import PhoneContact from "./PhoneContact";
import { useEffect, useState } from "react";
export default function Contact() {
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
    <section className="grid grid-cols-1 md:grid-cols-2">
      {width! > 640 && <EmailCard />}
      <div className="grid grid-rows-[auto_1fr]">
        <h1 className="text-3xl lg:text-5xl font-bold flex mx-auto my-5">
          {"Contact".split("").map((c, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              {c}
            </motion.p>
          ))}
        </h1>
        <div className="space-y-14 flex flex-col justify-center items-start self-center justify-self-center">
          <PhoneContact />
          <GmailContact />
          <GithubContact />
          <LinkdenContact />
        </div>
      </div>
    </section>
  );
}
