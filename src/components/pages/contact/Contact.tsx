"use client";

import GmailContact from "./GmailContact";
import GithubContact from "./GithubContact";
import LinkedInContact from "./LinkdenContact";
import PhoneContact from "./PhoneContact";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
import EmailForm from "./EmailForm";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function Contact() {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 snap-center w-screen h-[100dvh] p-10"
      id="contact"
    >
      <Card className="w-[90%] h-[90%] justify-self-center self-center grid grid-rows-[auto_1fr]">
        <CardHeader className="flex flex-row items-center self-start">
          <p className="flex items-center justify-center">
            Gmail
            <Mail className="h-5 mx-2" />
          </p>
        </CardHeader>
        <CardContent className="grid">
          <EmailForm />
        </CardContent>
      </Card>
      <div className="grid grid-rows-[auto_1fr] space-y-20">
        <h2 className="justify-self-center mt-10 text-xl">Contacts</h2>
        <div className="space-y-8 justify-self-center flex flex-col">
          <TooltipProvider>
            <PhoneContact />
            <GmailContact />
            <GithubContact />
            <LinkedInContact />
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
}
