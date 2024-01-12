import { readFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

export async function GET(request: Request) {
  try {
    const image = await readFile(path.join(process.cwd(), "public", "me.png"));
    const headers = new Headers();
    headers.append("Content-Disposition", 'attachment; filename="me.png"');
    headers.append("Content-Type", "image/png");

    return new Response(image, {
      headers,
    });
  } catch (error) {
    return NextResponse.json({ msg: error }, { status: 500 });
  }
}
