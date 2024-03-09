import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import EmailForm from "./EmailForm";
export default function EmailCard() {
  return (
    <Card className="w-[90%] h-[90%] justify-self-center self-center grid grid-rows-[auto_1fr]">
      <CardHeader className="flex flex-row items-center self-start">
        <p className="flex items-center justify-center">
          Gmail
          <EnvelopeIcon className="h-5 mx-2" />
        </p>
      </CardHeader>
      <CardContent className="grid">
        <EmailForm />
      </CardContent>
    </Card>
  );
}
