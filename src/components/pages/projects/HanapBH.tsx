import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
export default function HanapBH() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {},
      (error) => {
        throw error;
      }
    );
  }, []);
  return (
    <>
      <motion.div className="space-y-10 px-5 flex flex-col md:w-[50vw]">
        <motion.h2
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          // transition={{ duration: 0.3 }}
          className="text-4xl lg:text-8xl font-semibold whitespace-nowrap italic self-center"
        >
          Hanap - BH
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl text-justify"
        >
          A complete <strong>Full-Stack </strong> Web Application that help
          filipinos locate the nearest lodging / boarding house in their
          vicinity
        </motion.p>
        <ul className="list-disc text-sm lg:text-lg text-justify">
          <motion.li
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * 0, duration: 0.2 }}
          >
            Utilizes the <strong>Google Maps JavaScript API</strong> to Have an{" "}
            <strong>interactive map</strong> to locate the nearest lodging /
            boarding houses
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * 1, duration: 0.2 }}
          >
            Utilizes the <strong>Google Places API</strong> to provide reliable
            data
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * 2, duration: 0.2 }}
          >
            Users can <strong>log-in</strong> to <strong>add</strong> or{" "}
            <strong>claim</strong> a new or existing lodging / boarding house
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * 3, duration: 0.2 }}
          >
            Has a simple <strong>responsive UI</strong> for{" "}
            <strong>better user experience</strong>
          </motion.li>
        </ul>
      </motion.div>
      <Button variant="link" className="md:hidden">
        <Link href="https://hanap-bh.vercel.app/" target="_blank">
          https://hanap-bh.vercel.app/
        </Link>
      </Button>
      <div className="hidden md:flex first-letter:relative aspect-[9/16] h-[56vh] w-auto hover:scale-105 transform translate duration-300 ease-out">
        <Link
          href="https://hanap-bh.vercel.app/"
          target="_blank"
          className="absolute z-10 bg-transparent h-full w-full border rounded-lg"
        ></Link>
        <iframe
          src="https://hanap-bh.vercel.app/"
          className=" h-full w-full rounded-lg cursor-pointer shadow-lg border-none"
        ></iframe>
      </div>
    </>
  );
}
