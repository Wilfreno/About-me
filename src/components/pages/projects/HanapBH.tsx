"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CodeXml } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import HanapBHSvg from "@/components/svg/HanapBHSvg";
export default function HanapBH() {
  const items = [
    {
      name: "Github Repository",
      link: "https://github.com/Wilfreno/hanapbh",
      icon: <GitHubLogoIcon className="h-full w-auto p-1" />,
    },
    {
      name: "Website",
      link: "https://hanapbh.vercel.app/",
      icon: <CodeXml className="h-full w-auto p-1" />,
    },
  ];

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-center space-x-4">
        <HanapBHSvg className="h-4 w-auto fill-primary" />
        <CardTitle className="text-center"> Hanap BH</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5 text-sm justify-between">
        <p>
          A complete <strong>Full-Stack </strong> Web Application that help
          filipinos locate the nearest lodging in their vicinity
        </p>
        <ul className="list-disc space-y-3 text-xs">
          <li>
            Utilizes the <strong>Google Maps JavaScript API</strong> to Have an{" "}
            <strong>interactive map</strong> to locate the nearest lodging /
            boarding houses
          </li>
          <li>
            Utilizes the <strong>Google Places API</strong> to provide reliable
            data
          </li>
          <li>
            Users can <strong>log-in</strong> to <strong>add</strong> or{" "}
            <strong>claim</strong> a new or existing lodging / boarding house
          </li>
          <li>
            Has a simple <strong>responsive UI</strong> for{" "}
            <strong>better user experience</strong>
          </li>
        </ul>
        <div className="flex justify-evenly">
          <TooltipProvider>
            {items.map((item) => (
              <Tooltip key={item.name}>
                <TooltipTrigger asChild>
                  <Link href={item.link} target="_blank">
                    <Button variant="link" size="icon" className="w-fit">
                      {item.icon}
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>{item.name}</TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </CardContent>
    </Card>
  );
}
