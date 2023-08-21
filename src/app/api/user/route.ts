import { me } from "@/lib/spotify";
import { NextRequest, NextResponse } from "next/server"; // Import the Next.js types for request and response

export async function GET(req: NextRequest, res: NextResponse) {
  const response = await me();
  const user_data = await response.json();

  return NextResponse.json(user_data, {
    headers: {
      "Cache-control": "public, s-maxage=86400, stale-while-revalidate=43200",
    },
    status: 200,
    statusText: "OK",
  });
}
