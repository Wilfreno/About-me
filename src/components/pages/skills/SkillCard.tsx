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
  setHold: Dispatch<SetStateAction<boolean>>;
};
const SkillCard = forwardRef<HTMLDivElement, Props>(
  ({ name, icons, setHold }, ref) => {
    return (
      <motion.div
        ref={ref}
        key={name}
        className="grid grid-rows-[auto_1fr] md:grid-rows-1 md:grid-cols-2  cursor-grab "
        onMouseDown={() => setHold(true)}
        onMouseUp={() => setHold(false)}
      >
        <motion.h2
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-7xl font-semibold self-center justify-self-center"
        >
          {name}
        </motion.h2>
        <ul className="grid grid-cols-3">
          {icons.map((icon, index) => (
            <motion.li
              className="flex flex-col justify-center items-center space-y-2"
              key={icon.name}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <div className="relative overflow-hidden aspect-square h-12 w-auto md:h-14">
                <Image
                  src={icon.svg}
                  className="h-full w-full object-contain"
                  alt={icon.name}
                  priority
                />
              </div>
              <p className="text-xs font-semibold">{icon.name}</p>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    );
  }
);

export default SkillCard;
