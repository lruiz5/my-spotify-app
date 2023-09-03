import { getArtist } from "@/lib/spotify"; // Import the getArtist function from the specified location
import { NextRequest, NextResponse } from "next/server"; // Import the Next.js types for request and response

/**
 * Handles the GET request to retrieve artist data using the Spotify API.
 *
 * @param req - The incoming request object.
 * @param params - An object containing route parameters, with the 'id' parameter indicating the artist ID.
 * @returns A JSON response containing artist data and appropriate headers.
 */
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    // Call the getArtist function to fetch artist data by ID
    const response = await getArtist(id);

    // Create a JSON response using NextResponse.json()
    return NextResponse.json(response, {
      headers: {
        "Cache-control": "public, s-maxage=86400, stale-while-revalidate=43200",
      },
      status: 200,
      statusText: "OK",
    });
  } catch (error) {
    console.error("Error fetching or handling artist data:", error);

    // Return an error response with appropriate status and message
    return NextResponse.json(
      { error: "An error occurred while fetching artist data." },
      {
        status: 500,
        statusText: "Internal Server Error",
      }
    );
  }
}
