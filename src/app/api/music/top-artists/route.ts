import { topArtists } from "@/lib/spotify";
import { NextRequest, NextResponse } from "next/server"; // Import the Next.js types for request and response

export async function GET(req: NextRequest, res: NextResponse) {
  const response = await topArtists();
  const { items } = await response.json();

  const artists = items.slice(0, 5).map((artist: any) => ({
    name: artist.name,
    url: artist.external_urls.spotify,
    coverImage: artist.images[1],
    followers: artist.followers.total,
  }));

  return NextResponse.json(artists, {
    headers: {
      "Cache-control": "public, s-maxage=86400, stale-while-revalidate=43200",
    },
    status: 200,
    statusText: "OK",
  });
}
