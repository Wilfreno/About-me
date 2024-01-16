import { motion } from "framer-motion";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";
import EmailCard from "./EmailCard";
import GmailContact from "./GmailContact";
import GithubContact from "./GithubContact";
import LinkdenContact from "./LinkdenContact";
import PhoneContact from "./PhoneContact";
export default function Contact() {
  return (
    <>
      <div className="flex w-[100vw] justify-evenly">
        <EmailCard />
        <div className="flex flex-col h-full self-end md:w-[40vw] space-y-10 items-center ">
          <h1 className="text-3xl lg:text-5xl font-bold flex mb-10">
            {"Contact".split("").map((c, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {c}
              </motion.p>
            ))}
          </h1>
          <PhoneContact />
          <GmailContact />
          <GithubContact />
          <LinkdenContact />
        </div>
      </div>
    </>
  );
}
