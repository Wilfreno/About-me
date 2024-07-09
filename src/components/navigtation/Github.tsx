import Link from "next/link";
import { Button } from "../ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Github() {
  return (
    <Link href="https://github.com/Wilfreno" target="_blank">
      <Button>
        <GitHubLogoIcon className="h-auto w-7" />
      </Button>
    </Link>
  );
}
