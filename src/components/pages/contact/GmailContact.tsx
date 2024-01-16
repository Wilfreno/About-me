import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import EmailDrawer from "./EmailDrawer";
export default function GmailContact() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="flex md:hidden items-center self-start group hover:bg-secondary rounded-lg p-2 cursor-pointer">
          <EnvelopeIcon className="h-12 mx-2" />
          <p className="mx-5 text-xl group-hover:underline">
            w.gayongan@gmail.com
          </p>
        </div>
      </DrawerTrigger>
      <EmailDrawer />
    </Drawer>
  );
}
