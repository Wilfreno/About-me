import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { AtSign, X } from "lucide-react";
import EmailForm from "./EmailForm";
import { Button } from "@/components/ui/button";
export default function GmailContact() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          size="lg"
          className="justify-between p-2 space-x-4"
        >
          <AtSign className="h-full w-auto" />
          <span>w.gayongan@gmail.com</span>
        </Button>
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
