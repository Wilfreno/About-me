import HanapBH from "./HanapBH";
import { motion } from "framer-motion";
export default function Projects() {
  return (
    <>
      <motion.h1 className="flex text-3xl lg:text-5xl font-bold">
        {" Projects".split("").map((c, index) =>
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
      </motion.h1>
      <div className="flex flex-col items-center justify-evenly md:flex-row grow w-[100vw]">
        <HanapBH />
      </div>
    </>
  );
}
