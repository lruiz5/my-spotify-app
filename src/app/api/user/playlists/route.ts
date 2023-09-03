import { userPlaylists } from "@/lib/spotify";
import { NextRequest, NextResponse } from "next/server"; // Import the Next.js types for request and response

export async function GET(req: NextRequest, res: NextResponse) {
  const response = await userPlaylists();

  const data = await response.json();

  return NextResponse.json(data, {
    headers: {
      "Cache-control": "public, s-maxage=86400, stale-while-revalidate=43200",
    },
    status: 200,
    statusText: "OK",
  });
}
