import { readFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

export async function GET(request: Request) {
  try {
    const image = await readFile(
      path.join(process.cwd(), "public", "Wilfreno.pdf")
    );
    const headers = new Headers();
    headers.append(
      "Content-Disposition",
      'attachment; filename="Wilfreno.pdf"'
    );
    headers.append("Content-Type", "application/pdf");

    return new Response(image, {
      headers,
    });
  } catch (error) {
    return NextResponse.json({ msg: error }, { status: 500 });
  }
}
