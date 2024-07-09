import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-primary flex justify-between py-2 px-5">
      <h1 className="text-4xl cursor-pointer font-['Poiret_One']">W</h1>
      <div className="flex items-center space-x-5 cursor-point">
        <Link href="https://www.linkedin.com/in/wgayongan/" target="_blank">
          <LinkedInLogoIcon className="h-auto w-7" />
        </Link>
      </div>
    </header>
  );
}
