import { Dispatch, SetStateAction } from "react";
import { Button } from "../../ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

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
    <section className="flex items-center justify-between">
      <div>
        <Image
          src="https://avatars.githubusercontent.com/u/48620014?v=4"
          alt="Wilfreno Gayongan"
          width={500}
          height={500}
          className="aspect-square h-auto w-[clamp(20vw,_20vw,_90vw)]"
        />
        <h1>Wilfreno Gayongan</h1>
        <h2 className="text-4xl lg:text-6xl font-semibold mx-auto">
          Web Developer
        </h2>
      </div>
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
