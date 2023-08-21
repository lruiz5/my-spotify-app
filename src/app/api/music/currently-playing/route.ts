import { currentlyPlayingSong } from "@/lib/spotify";
import { NextRequest, NextResponse } from "next/server"; // Import the Next.js types for request and response

export async function GET(req: NextRequest, res: NextResponse) {
  const response = await currentlyPlayingSong();

  if (response.status === 204 || response.status > 400) {
    return NextResponse.json(
      { isPlaying: false },
      { status: 200, statusText: "OK" }
    );
  }

  const song = await response.json();

  if (song.item === null) {
    return NextResponse.json(
      { isPlaying: false },
      { status: 200, statusText: "OK" }
    );
  }

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists
    .map((_artist: any) => _artist.name)
    .join(", ");
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;

  return NextResponse.json(
    {
      album,
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
    },
    {
      headers: {
        "Cache-control": "public, s-maxage=60, stale-while-revalidate=30",
      },
      status: 200,
      statusText: "OK",
    }
  );
}
