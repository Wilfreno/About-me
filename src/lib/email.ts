import Email from "@/components/Email";
import { render } from "@react-email/components";
import { createTransport } from "nodemailer";

export default async function sendEmail({
  from,
  subject,
  message,
}: {
  from: string;
  subject: string;
  message: string;
}) {
  try {
    const password = process.env.GMAIL_APP_2FAUTH_PASS;
    const transport = createTransport({
      service: "gmail",
      auth: {
        user: "w.gayongan@gmail.com",
        pass: password,
      },
    });

    const verify = await transport.verify();
    if (!verify) new Error(verify);

    const html = render(Email({ from, message }));

    await transport.sendMail({
      from: from,
      to: "w.gayongan@gmail.com",
      replyTo: from,
      subject,
      html: html,
    });
    return { success: true, msg: "Email Sent" };
  } catch (error) {
    console.log(error);
    return { success: false, msg: error };
  }
}
