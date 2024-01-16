import { PhoneIcon } from "@heroicons/react/24/outline";
import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export default function PhoneContact() {
  const [copied, setCopied] = useState(false);

  return (
    <div className="flex items-center self-start group rounded-lg p-2 ">
      <PhoneIcon className="h-12 mx-2" />
      <p className="mx-5 text-xl ">+63 9600252024</p>
      {copied ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <CheckIcon className="h-auto w-5" />
          <p className="text-xs">copied</p>
        </motion.span>
      ) : (
        <CopyIcon
          className="h-auto w-5 group-hover:fill-secondary group-hover:scale-125 duration-300 ease-out cursor-pointer"
          onClick={async () => {
            await navigator.clipboard.writeText("+63 9600252024");
            setCopied(true);
          }}
        />
      )}
    </div>
  );
}
