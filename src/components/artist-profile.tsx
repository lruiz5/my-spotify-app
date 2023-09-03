"use client";

import { PageLayout } from "@/components/layouts/pageLayout";
import { user, following, playlists } from "@/data/user";
import { useEffect, useState } from "react";
import { ArtistList } from "@/components/artist-list";
import { TrackList } from "@/components/track-list";
import { artists } from "@/data/artists";
import { tracks } from "@/data/tracks";

interface Genre {
  tag: string;
}
interface Country {
  tag: string;
}

interface Artist {
  ratingKey: string;
  key: string;
  guid: string;
  type: string;
  title: string;
  titleSort: string;
  summary: string;
  index: number;
  viewCount: number;
  skipCount: number;
  lastViewedAt: number;
  thumb: string;
  art: string;
  addedAt: number;
  updatedAt: number;
  Genre: Array<Genre>;
  Country: Array<Country>;
}

export default function ProfilePage() {
  const [bgUrl, setBgUrl] = useState("");
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch("/api/unsplashify");
        const data = await response.json();
        setBgUrl(data);
      } catch (error) {
        console.error("Error fetching image data:", error);
      }
    };
    fetchImage();
  }, []);
  return (
    <>
      <PageLayout>
        <div className="h-1/2 bg-gray-200 dark:bg-gray-800 flex flex-wrap items-center justify-center">
          <div className="container px-0 lg:w-2/3 xl:w-2/3 sm:w-full md:w-2/3  bg-white  shadow-lg transform duration-200 easy-in-out">
            <div className="flex justify-center px-5  -mt-12">
              <img
                className="h-32 w-32 bg-white p-2 rounded-full   "
                src={user.images[0].url}
                alt={user.id}
              />
            </div>
            <div className=" ">
              <div className="text-center px-14">
                <h2 className="text-gray-800 text-3xl font-bold">
                  {user.display_name}
                </h2>
                <a
                  className="text-gray-400 mt-2 hover:text-blue-500"
                  href={`https://open.spotify.com/user/${user.id}`}
                  target="BLANK()"
                >
                  {user.id}
                </a>
                <div className="flex w-2/3 m-auto">
                  <div className="text-center w-1/3 p-4 hover:bg-gray-100 cursor-pointer">
                    <p>
                      <span className="font-semibold">
                        {user.followers.total}
                      </span>{" "}
                      Followers
                    </p>
                  </div>
                  <div className="text-center w-1/3 p-4 hover:bg-gray-100 cursor-pointer">
                    <p>
                      <span className="font-semibold">{following.total}</span>{" "}
                      Following
                    </p>
                  </div>
                  <div className="text-center w-1/3 p-4 hover:bg-gray-100 cursor-pointer">
                    <p>
                      <span className="font-semibold">{playlists.total}</span>{" "}
                      playlists
                    </p>
                  </div>
                </div>
              </div>
              <hr className="mt-6" />
              <div className="flex  bg-gray-50 ">
                <div className="text-center w-1/2 p-4 cursor-pointer">
                  <p>Top Artists</p>
                  <ArtistList data={artists} />
                </div>
                <div className="border"></div>
                <div className="text-center w-1/2 p-4 cursor-pointer">
                  <p>Top Tracks</p>
                  <TrackList data={tracks} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}
