const getAccessToken = async (): Promise<any> => {
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

  const requestBody = new URLSearchParams();
  requestBody.append("grant_type", "refresh_token");
  requestBody.append("refresh_token", refresh_token || "");

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: requestBody,
  });

  return response.json();
};

export const topTracks = async () => {
  const { access_token } = await getAccessToken();

  return fetch("https://api.spotify.com/v1/me/top/tracks", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const topArtists = async () => {
  const { access_token } = await getAccessToken();

  return fetch("https://api.spotify.com/v1/me/top/artists", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const currentlyPlayingSong = async () => {
  const { access_token } = await getAccessToken();

  return fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const me = async () => {
  const { access_token } = await getAccessToken();

  return fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const userPlaylists = async () => {
  const { access_token } = await getAccessToken();

  return fetch(`https://api.spotify.com/v1/users/l.ruiz5/playlists`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const following = async () => {
  const { access_token } = await getAccessToken();

  return fetch("https://api.spotify.com/v1/me/following?type=artist", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

/**
 * Fetches artist data from the Spotify API based on the provided artist ID.
 *
 * @param id - The unique identifier of the artist on Spotify.
 * @returns A Promise that resolves to the artist data object or null if an error occurs.
 */
export const getArtist = async (id: string) => {
  // Obtain the access token required for making the API request
  const { access_token } = await getAccessToken(); // Replace with your access token retrieval logic

  try {
    // Fetch artist data from the Spotify API using the provided artist ID
    const response = await fetch(`https://api.spotify.com/v1/artists/${id}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    // If the response status is not in the 200-299 range, throw an error
    if (!response.ok) {
      throw new Error("Failed to fetch artist data");
    }

    // Parse the JSON response to extract artist data
    const artistData = await response.json();

    // Return the fetched artist data object
    return artistData;
  } catch (error) {
    // Handle errors by logging and returning null
    console.error("Error fetching artist:", error);
    return null;
  }
};
