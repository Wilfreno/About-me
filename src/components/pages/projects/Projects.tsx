import HanapBH from "./HanapBH";
import { motion } from "framer-motion";
export default function Projects() {
  return (
    <section className="grid grid-rows-[auto_1fr]">
      <motion.h1 className="flex text-3xl lg:text-5xl font-bold mx-auto my-5">
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
      <div className="grid">
        <HanapBH />
      </div>
    </section>
  );
}
