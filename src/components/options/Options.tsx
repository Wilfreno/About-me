"use client";
import {
  ArrowTopRightOnSquareIcon,
  Bars3Icon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { Button } from "../ui/button";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggler from "../ThemeToggler";
import Link from "next/link";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Options() {
  const [display, setDisplay] = useState(false);

  return (
    <section className="fixed bottom-8 right-8 flex flex-col items-center space-y-2 ">
      <ul className="flex flex-col items-center space-y-2">
        <AnimatePresence>
          {display && (
            <>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 3 * 0.1 },
                }}
                exit={{ opacity: 0, y: 10 }}
              >
                <ThemeToggler />
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 2 * 0.1 },
                }}
                exit={{ opacity: 0, y: 10 }}
              >
                <Link
                  href="https://www.linkedin.com/in/wgayongan/"
                  target="_blank"
                >
                  <Button
                    variant="outline"
                    className="aspect-square h-fit w-auto p-2 rounded-full relative"
                  >
                    <LinkedInLogoIcon className="h-6 w-auto" />
                  </Button>
                </Link>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 1 * 0.1 },
                }}
                exit={{ opacity: 0, y: 10 }}
              >
                <Link href="https://github.com/Wilfreno" target="_blank">
                  <Button
                    variant="outline"
                    className="aspect-square h-fit w-auto p-2 rounded-full"
                  >
                    <GitHubLogoIcon className="h-6 w-auto" />
                  </Button>
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0 * 0.1 },
                }}
                exit={{ opacity: 0, y: 10 }}
              >
                <Link href="/" as="/">
                  <Button
                    variant="outline"
                    className="aspect-square h-fit w-auto p-2 rounded-full"
                  >
                    <HomeIcon className="h-6" />
                  </Button>
                </Link>
              </motion.li>
            </>
          )}
        </AnimatePresence>
      </ul>
      <Button
        variant="secondary"
        className="aspect-square h-fit w-auto p-2 rounded-full shadow-md"
        onClick={() => setDisplay((prev) => !prev)}
      >
        <Bars3Icon className="h-6 stroke-primary" />
      </Button>
    </section>
  );
}
