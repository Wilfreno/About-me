import { Dispatch, SetStateAction } from "react";
import { Button } from "../../ui/button";
import { motion } from "framer-motion";
import Name from "./Name";

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
    <section className="grid grid-rows-[1fr_auto_auto] justify-center space-y-10">
      <Name />
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-4xl lg:text-6xl font-semibold mx-auto"
      >
        Web Developer
      </motion.h2>
      <div className="mx-auto flex space-x-5">
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
    </section>
  );
}
