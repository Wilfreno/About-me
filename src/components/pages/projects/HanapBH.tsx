import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
export default function HanapBH() {
  const [width, setWidth] = useState<number>();

  useEffect(() => {
    setWidth(window.innerWidth);
    function handleResize() {
      setWidth(window.innerWidth);
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {},
      (error) => {
        throw error;
      }
    );

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="grid md:grid-cols-2">
      <motion.div className="grid grid-rows-[auto_auto_1fr_auto] p-5 space-y-5">
        <motion.h2
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-3xl md:text-4xl font-semibold whitespace-nowrap italic mx-auto"
        >
          Hanap - BH
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-base text-justify"
        >
          A complete <strong>Full-Stack </strong> Web Application that help
          filipinos locate the nearest lodging in their vicinity
        </motion.p>
        <ul className="list-disc text-xs md:text-base text-justify space-y-3 px-2">
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
        {width! <= 640 && (
          <Button variant="outline">
            <Link href="https://hanapbh.vercel.app/" target="_blank">
              https://hanap-bh.vercel.app/
            </Link>
          </Button>
        )}
      </motion.div>
      {width! > 640 && (
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="relative grow m-3"
        >
          <Link
            href="https://hanapbh.vercel.app/"
            target="_blank"
            className="absolute top-0 left-0 z-10 bg-transparent h-full w-full border rounded-lg"
          ></Link>
          <iframe
            src="https://hanapbh.vercel.app/"
            className="h-full w-full rounded-lg cursor-pointer shadow-lg border-none"
          ></iframe>
        </motion.div>
      )}
    </div>
  );
}
