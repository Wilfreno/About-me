import {
  DrawerClose,
  DrawerContent,
  DrawerHeader,
} from "@/components/ui/drawer";
import { EnvelopeIcon, XMarkIcon } from "@heroicons/react/24/outline";
import EmailForm from "./EmailForm";
export default function EmailDrawer() {
  return (
    <DrawerContent className="grid h-[70dvh] grid-rows-[auto_auto_1fr] p-1">
      <DrawerClose className="absolute w-fit h-fit top-2 right-2">
        <XMarkIcon className="h-6" />
      </DrawerClose>
      <DrawerHeader className="flex items-center"></DrawerHeader>
      <EmailForm />
    </DrawerContent>
  );
}
