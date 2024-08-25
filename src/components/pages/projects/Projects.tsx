"use client";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import HanapBH from "./HanapBH";
import HanapBHSvg from "@/components/svg/HanapBHSvg";
import { useState } from "react";
export default function Projects() {
  const [selected, setSelected] = useState("");
  const items = [
    {
      title: "Hanap BH",
      logo: <HanapBHSvg className="h-4 w-auto fill-primary" />,
      content: <HanapBH />,
    },
  ];
  return (
    <section
      className="grid grid-rows-[auto_1fr] w-screen h-[100dvh] max-h-screen snap-center"
      id="projects"
    >
      <h2 className="justify-self-center mt-10 text-xl">Projects</h2>

      <div className="hidden sm:grid grid-cols-4 p-10">
        {items.map((item) => (
          <Card key={item.title}>
            <CardHeader className="flex-row items-center justify-center space-x-4">
              <CardTitle>{item.title}</CardTitle>
              {item.logo}
            </CardHeader>
            {item.content}
          </Card>
        ))}
      </div>
      <div className="p-10 sm:hidden">
        {items.map((item) => (
          <Card
            key={item.title}
            onClick={() =>
              setSelected((prev) => (prev !== item.title ? item.title : ""))
            }
          >
            <CardHeader className="flex-row items-end space-x-4">
              <CardTitle>{item.title}</CardTitle>
              {item.logo}
            </CardHeader>
            {selected === item.title && item.content}
          </Card>
        ))}
      </div>
    </section>
  );
}
