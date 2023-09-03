export interface Artist {
  name: string;
  url: string;
  coverImage: Image;
  followers: number;
}
export interface ArtistDetail {
  external_urls: ExternalUrls;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}
export interface Followers {
  href: string | null;
  total: number;
}
export interface ExternalUrls {
  spotify: string;
}
export interface Image {
  height: number;
  width: number;
  url: string;
}

export const artists: Artist[] = [
  {
    name: "UPPERROOM",
    url: "https://open.spotify.com/artist/107CG0UhUl9GJnPwF83N63",
    coverImage: {
      height: 320,
      url: "https://i.scdn.co/image/ab676161000051746aabc6839b14e968265b7257",
      width: 320,
    },
    followers: 0,
  },
  {
    name: "Arctic Monkeys",
    url: "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH",
    coverImage: {
      height: 320,
      url: "https://i.scdn.co/image/ab676161000051747da39dea0a72f581535fb11f",
      width: 320,
    },
    followers: 0,
  },
  {
    name: "Kanye West",
    url: "https://open.spotify.com/artist/5K4W6rqBFWDnAN6FQUkS6x",
    coverImage: {
      height: 320,
      url: "https://i.scdn.co/image/ab67616100005174867008a971fae0f4d913f63a",
      width: 320,
    },
    followers: 0,
  },
  {
    name: "The Worship Initiative",
    url: "https://open.spotify.com/artist/1bMkQIx4MpNHLxoylvipdQ",
    coverImage: {
      height: 320,
      url: "https://i.scdn.co/image/ab676161000051746f6ffd042123fa1bf487697c",
      width: 320,
    },
    followers: 0,
  },
  {
    name: "Chris Stapleton",
    url: "https://open.spotify.com/artist/4YLtscXsxbVgi031ovDDdh",
    coverImage: {
      height: 320,
      url: "https://i.scdn.co/image/ab67616100005174a0c87c8f329b436eac8b9784",
      width: 320,
    },
    followers: 0,
  },
];

export const artistDetail: ArtistDetail = {
  external_urls: {
    spotify: "https://open.spotify.com/artist/107CG0UhUl9GJnPwF83N63",
  },
  followers: {
    href: null,
    total: 269838,
  },
  genres: [
    "ccm",
    "deep ccm",
    "instrumental worship",
    "world worship",
    "worship",
  ],
  href: "https://api.spotify.com/v1/artists/107CG0UhUl9GJnPwF83N63",
  id: "107CG0UhUl9GJnPwF83N63",
  images: [
    {
      height: 640,
      url: "https://i.scdn.co/image/ab6761610000e5eb6aabc6839b14e968265b7257",
      width: 640,
    },
    {
      height: 320,
      url: "https://i.scdn.co/image/ab676161000051746aabc6839b14e968265b7257",
      width: 320,
    },
    {
      height: 160,
      url: "https://i.scdn.co/image/ab6761610000f1786aabc6839b14e968265b7257",
      width: 160,
    },
  ],
  name: "UPPERROOM",
  popularity: 61,
  type: "artist",
  uri: "spotify:artist:107CG0UhUl9GJnPwF83N63",
};
