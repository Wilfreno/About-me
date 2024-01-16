import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
  Dispatch,
  Ref,
  SetStateAction,
  TouchEvent,
  forwardRef,
  useState,
} from "react";

type Props = {
  name: string;
  icons: {
    name: string;
    svg: any;
  }[];
  setIndex: Dispatch<SetStateAction<number>>;
  setHold: Dispatch<SetStateAction<boolean>>;
};
const SkillCard = forwardRef<HTMLDivElement, Props>(
  ({ name, icons, setHold, setIndex }, ref) => {
    const [swipe_start, setSwipeStart] = useState(0);

    return (
      <motion.div
        ref={ref}
        key={name}
        className="grow flex flex-col items-center justify-evenly w-screen  md:flex-row cursor-grab"
        onMouseDown={() => setHold(true)}
        onMouseUp={() => setHold(false)}
        onTouchStart={(e) => {
          setHold(true);
          setSwipeStart(e.touches[0].clientX);
        }}
        onTouchEnd={(e) => {
          setHold(false);
          if (swipe_start > e.changedTouches[0].clientX) {
            setIndex((prev) => (prev - 1) % 3);
          } else {
            setIndex((prev) => (prev + 1) % 3);
          }
        }}
      >
        <motion.h2
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="text-5xl my-5 md:text-8xl lg:text-9xl font-semibold md:my-0"
        >
          {name}
        </motion.h2>
        <ul className="grid grid-cols-3 gap-5 h-[50vh] ">
          {icons.map((icon, index) => (
            <motion.li
              className="flex flex-col justify-center items-center"
              key={icon.name}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <div className="relative overflow-hidden aspect-square h-12 w-auto md:h-16 lg:h-20">
                <Image
                  src={icon.svg}
                  className="h-full w-full object-contain"
                  alt={icon.name}
                  priority
                />
              </div>
              <p className="text-sm font-semibold">{icon.name}</p>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    );
  }
);

export default SkillCard;
