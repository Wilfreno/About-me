import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function LinkedInContact() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link href="https://www.linkedin.com/in/wgayongan/" target="_blank">
          <Button
            variant="ghost"
            size="lg"
            className="justify-between p-2 space-x-4"
          >
            <LinkedInLogoIcon className="h-full w-auto" />
            <span>Wilfreno Gayongan</span>
          </Button>
        </Link>
      </TooltipTrigger>
      <TooltipContent align="start">
        <p>https://www.linkedin.com/in/wgayongan/</p>
      </TooltipContent>
    </Tooltip>
  );
}
