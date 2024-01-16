import { Dispatch, SetStateAction } from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function Opening({
  setIndex,
}: {
  setIndex: Dispatch<SetStateAction<number>>;
}) {
  async function handleClick() {
    console.log("yssysys");
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
  return (
    <>
      <motion.h1
        key="h1"
        className="flex flex-col relative justify-center items-center w-full text-7xl lg:text-8xl xl:text-9xl font-bold text-center my-5"
      >
        <div className="grid md:grid-flow-col">
          <div className="grid grid-flow-col">
            {"Wilfreno".split("").map((c, index) => (
              <motion.p
                key={index}
                initial={{
                  opacity: 0,
                  y: -100,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  WebkitTextStroke: "trasparent 1px",
                  WebkitTextFillColor: "hsl(var(--primary))",
                }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ delay: 0.05 * index }}
              >
                {c}
              </motion.p>
            ))}
          </div>
          <span className="mx-5"></span>
          <div className="grid grid-flow-col">
            {"Gayongan".split("").map((c, index) => (
              <motion.p
                key={index}
                initial={{
                  opacity: 0,
                  y: -100,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  WebkitTextStroke: "trasparent 1px",
                  WebkitTextFillColor: "hsl(var(--primary))",
                }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ delay: 0.05 * index }}
              >
                {c}
              </motion.p>
            ))}
          </div>
        </div>
        <motion.div
          animate={{ display: "none" }}
          transition={{ delay: 1 }}
          className="absolute top-0 grid md:grid-flow-col "
        >
          <div className="grid grid-flow-col">
            {"Wilfreno ".split("").map((c, index) => (
              <motion.p
                key={index}
                initial={{
                  WebkitTextStroke: "white 1px",
                  WebkitTextFillColor: "transparent",
                }}
                animate={{
                  opacity: 0,
                  WebkitTextStroke: "trasparent 1px",
                  // WebkitTextFillColor: "hsl(var(--primary))",
                }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ delay: 0.05 * index }}
              >
                {c}
              </motion.p>
            ))}
          </div>
          <span className="mx-5"></span>

          <div className="grid grid-flow-col">
            {"Gayongan".split("").map((c, index) => (
              <motion.p
                key={index}
                initial={{
                  WebkitTextStroke: "white 1px",
                  WebkitTextFillColor: "transparent",
                }}
                animate={{
                  opacity: 0,
                  WebkitTextStroke: "trasparent 1px",
                  WebkitTextFillColor: "hsl(var(--primary))",
                }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ delay: 0.05 * index }}
              >
                {c}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-4xl lg:text-6xl font-semibold my-8 mx-auto"
      >
        Web Developer
      </motion.h2>
      <div className="space-x-5 my-5 flex items-center">
        <motion.div
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.div
            animate={{ rotate: ["0", "5deg", "-5deg", "0"] }}
            transition={{ delay: 1.7, duration: 0.2 }}
          >
            <Button className="text-2xl" onClick={handleClick}>
              Resumé
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ delay: 2.5, duration: 0.5 }}
        >
          <motion.div
            animate={{ rotate: ["0", "5deg", "-5deg", "0"] }}
            transition={{ delay: 2.7, duration: 0.2 }}
          >
            <Button
              className="text-2xl"
              variant="secondary"
              onClick={() => setIndex(4)}
            >
              Contact me
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
