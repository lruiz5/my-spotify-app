import { topTracks } from "@/lib/spotify";
import { NextRequest, NextResponse } from "next/server"; // Import the Next.js types for request and response

export async function GET(req: NextRequest, res: NextResponse) {
  const response = await topTracks();
  const { items } = await response.json();

  const tracks = items.slice(0, 5).map((track: any) => ({
    title: track.name,
    artist: track.artists.map((_artist: any) => _artist.name).join(", "),
    url: track.external_urls.spotify,
    coverImage: track.album.images[1],
  }));

  return NextResponse.json(tracks, {headers:  {"Cache-control": "public, s-maxage=86400, stale-while-revalidate=43200"}, status: 200, statusText: "OK" });
}
