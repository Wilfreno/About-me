"use server";

import sendEmail from "./email";
import { FormContent } from "./types";
import * as z from "zod";
export async function submitForm(
  prevState: FormContent,
  formData: FormData
): Promise<FormContent> {
  const from = formData.get("from") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  try {
    const schema = z.object({
      from: z.string().min(1),
      subject: z.string().min(1),
      message: z.string().min(1),
    });

    schema.parse({
      from,
      subject,
      message,
    });

    const { success, msg } = await sendEmail({ from, subject, message });

    if (!success) {
      return {
        message: "Email Sending Unsuccessful ",
        error: String(msg),
        values: {
          from,
          subject,
          message,
        },
      };
    }

    return {
      message: "Email Sent Successfuly",
      error: undefined,
      values: {
        from,
        subject,
        message,
      },
    };
  } catch (error) {
    const zodError = error as z.ZodError;
    const errorMap = zodError.flatten().fieldErrors;

    return {
      message: "error",
      error:
        errorMap["from"]?.[0] ??
        errorMap["message"]?.[0] ??
        errorMap["subject"]?.[0],
      values: {
        from,
        subject,
        message,
      },
    };
  }
}
