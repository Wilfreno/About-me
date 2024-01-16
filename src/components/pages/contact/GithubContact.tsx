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
            className="flex items-center self-start group hover:bg-secondary rounded-lg p-2"
          >
            <GitHubLogoIcon className="h-auto w-12 " />
            <p className="mx-5 text-xl group-hover:underline">/Wilfreno</p>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>https://github.com/Wilfreno</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
