import Home from "@/components/pages/Home";
import { Metadata, ResolvingMetadata } from "next";

export default function page() {
  return <Home />;
}

export async function generateMetadata(
  {
    params,
    searchParams,
  }: {
    params: { id: string };
    searchParams: { [key: string]: string | string[] | undefined };
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  let page = "";
  const index = Number(searchParams.index);

  switch (index) {
    case 1:
      page += "| About Me";
      break;
    case 2:
      page += "| Skills";
      break;
    case 3:
      page += "| Projects";
      break;
    case 4:
      page += "| Contact";
      break;
    default:
      break;
  }

  return {
    title: `Wilfreno Gayongan ${page}`,
    description: "Wilfreno Gayongan (Wing) Web Developer",
  };
}
