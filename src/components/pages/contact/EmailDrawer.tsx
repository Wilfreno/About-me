import {
  DrawerClose,
  DrawerContent,
  DrawerHeader,
} from "@/components/ui/drawer";
import { EnvelopeIcon, XMarkIcon } from "@heroicons/react/24/outline";
import EmailForm from "./EmailForm";
export default function EmailDrawer() {
  return (
    <DrawerContent>
      <DrawerClose>
        <XMarkIcon className="absolute right-1 top-1 h-8" />
      </DrawerClose>
      <DrawerHeader className="flex items-center">
        <p className="flex items-center justify-center">
          Gmail
          <EnvelopeIcon className="h-5 mx-2" />
        </p>
      </DrawerHeader>
      <EmailForm />
    </DrawerContent>
  );
}
