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

    await transport.sendMail({
      from,
      to: "w.gayongan@gmail.com",
      subject,
      html: message,
    });
    return { success: true, msg: "Email Sent" };
  } catch (error) {
    console.log(error);
    return { success: false, msg: error };
  }
}
