import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function PhoneContact() {
  const [copied, setCopied] = useState(false);

  return (
    <Button
      variant="ghost"
      size="lg"
      onClick={async () => {
        await navigator.clipboard.writeText("+63 9600252024");
        setCopied(true);
      }}
      className="justify-between p-2  "
    >
      <Phone className="h-full w-auto" />
      <span>+63 9600252024</span>
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
        <CopyIcon className="h-auto w-5 group-hover:fill-secondary group-hover:scale-125 duration-300 ease-out cursor-pointer" />
      )}
    </Button>
  );
}
