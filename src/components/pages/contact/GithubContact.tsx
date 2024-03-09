import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function GithubContact() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="https://github.com/Wilfreno"
            target="_blank"
            className="flex items-center group hover:bg-secondary rounded-lg md:p-2"
          >
            <GitHubLogoIcon className="h-auto w-5 md:w-10 " />
            <p className="mx-5 text-sm md:text-xl group-hover:underline">
              /Wilfreno
            </p>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>https://github.com/Wilfreno</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
