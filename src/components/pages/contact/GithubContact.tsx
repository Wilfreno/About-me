import { Button } from "@/components/ui/button";
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
    <Tooltip>
      <TooltipTrigger asChild>
        <Link href="https://github.com/Wilfreno" target="_blank">
          <Button
            variant="ghost"
            size="lg"
            className="justify-between p-2 space-x-4"
          >
            <GitHubLogoIcon className="h-full w-auto" />
            <span>/Wilfreno</span>
          </Button>
        </Link>
      </TooltipTrigger>
      <TooltipContent>
        <p>https://github.com/Wilfreno</p>
      </TooltipContent>
    </Tooltip>
  );
}
