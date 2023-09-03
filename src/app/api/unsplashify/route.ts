import { randomImage } from "@/lib/unsplash";
import { NextRequest, NextResponse } from "next/server"; // Import the Next.js types for request and response
export const dynamic = "force-dynamic";
export async function GET(req: NextRequest, res: NextResponse) {
  const response = await randomImage();
  const { imageUrl } = await response.json();

  return NextResponse.json(imageUrl, {
    headers: {
      "Cache-control": "no-store",
    },
    status: 200,
    statusText: "OK",
  });
}
