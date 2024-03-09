import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import EmailDrawer from "./EmailDrawer";
export default function GmailContact() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="flex md:hidden items-center group hover:bg-secondary rounded-lg cursor-pointer">
          <EnvelopeIcon className=" h-5" />
          <p className="mx-5 text-sm md:text-xl group-hover:underline">
            w.gayongan@gmail.com
          </p>
        </div>
      </DrawerTrigger>
      <EmailDrawer />
    </Drawer>
  );
}
