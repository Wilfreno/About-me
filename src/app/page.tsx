import Header from "@/components/Header";
import Opening from "@/components/pages/opening/Opening";
import ThemeToggler from "@/components/ThemeToggler";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <Header />
      <Opening />
      {/* <Projects /> */}
      {/* <Skills /> */}
      {/* <Contact/> */}
    </main>
  );
}
