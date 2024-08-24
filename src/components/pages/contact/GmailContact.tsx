import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { AtSign, X } from "lucide-react";
import EmailForm from "./EmailForm";
export default function GmailContact() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="flex md:hidden items-center group hover:bg-secondary rounded-lg cursor-pointer">
          <AtSign className="h-5 w-auto" />
          <p className="mx-5 text-sm md:text-xl group-hover:underline">
            w.gayongan@gmail.com
          </p>
        </div>
      </DrawerTrigger>
      <DrawerContent className="grid h-[70dvh] grid-rows-[auto_auto_1fr] p-1">
        <DrawerClose className="absolute w-fit h-fit top-2 right-2">
          <X className="h-6" />
        </DrawerClose>
        <DrawerHeader className="flex items-center"></DrawerHeader>
        <EmailForm />
      </DrawerContent>
    </Drawer>
  );
}
