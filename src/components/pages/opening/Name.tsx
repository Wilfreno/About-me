import { motion } from "framer-motion";

export default function Name() {
  return (
    <motion.h1
      key="h1"
      className="flex flex-col relative justify-center items-center w-full text-7xl lg:text-8xl xl:text-9xl font-bold text-center grow"
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
  );
}
