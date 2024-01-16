import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import EmailForm from "./EmailForm";
export default function EmailCard() {
  const [copied, setCopied] = useState(false);

  return (
    <Card className="hidden md:inline self-start w-[50vw]">
      <CardHeader className="flex flex-row items-center">
        <p className="flex items-center justify-center">
          Gmail
          <EnvelopeIcon className="h-5 mx-2" />
        </p>
      </CardHeader>
      <CardContent className="space-y-5">
        <EmailForm />
      </CardContent>
    </Card>
  );
}
