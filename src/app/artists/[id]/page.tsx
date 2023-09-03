import { PageLayout } from "@/components/layouts/pageLayout";

export default async function ArtistPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const res = await fetch(`http://localhost:3000/api/music/artists/${id}`);
  const artist = await res.json();

  return (
    <>
      <PageLayout>
        <div className="h-1/2 bg-gray-200 dark:bg-gray-800 flex flex-wrap items-center justify-center">
          <div className="container px-0 lg:w-2/3 xl:w-2/3 sm:w-full md:w-2/3  bg-white  shadow-lg transform duration-200 easy-in-out">
            <div className="flex justify-center px-5">
              <img
                className="h-64 w-64 bg-white p-2 rounded-full   "
                src={
                  artist?.images[0].url ||
                  "https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"
                }
                alt={artist?.id || "123123123"}
              />
            </div>
            <div className=" ">
              <div className="text-center px-14">
                <h2 className="text-gray-800 text-3xl font-bold">
                  {artist?.name || "Artist Unavailable"}
                </h2>
                <a
                  className="text-gray-400 mt-2 hover:text-blue-500"
                  href={`https://open.spotify.com/artist/${artist?.id || ""}`}
                  target="BLANK()"
                >
                  View Full Profile
                </a>
                <div className="flex w-full text-base">
                  <div className="text-center w-1/5 p-4">
                    <p>
                      <span className="font-semibold">
                        {artist?.followers.total || 0}
                        <br></br>
                      </span>{" "}
                      Followers
                    </p>
                  </div>
                  <div className="text-center w-3/5 p-4">
                    <p>
                      <span className="font-semibold">
                        {artist?.genres.join(", ") || "N/A"}
                        <br></br>
                      </span>{" "}
                      Genres
                    </p>
                  </div>
                  <div className="text-center w-1/5 p-4">
                    <p>
                      <span className="font-semibold">
                        {artist?.popularity.toString() || 0}%<br></br>
                      </span>{" "}
                      Popularity
                    </p>
                  </div>
                </div>
              </div>
              <hr className="mt-6" />
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}
