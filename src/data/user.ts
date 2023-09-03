export interface Image {
  url: string;
  height: number;
  width: number;
}
export interface Followers {
  href: string | null;
  total: number;
}
export interface User {
  display_name: string;
  external_urls: object;
  href: string;
  id: string;
  images: Array<Image>;
  type: string;
  uri: string;
  followers: Followers;
}
export const user: User = {
  display_name: "username",
  external_urls: { spotify: "https://open.spotify.com/user/id" },
  href: "https://api.spotify.com/v1/users/id",
  id: "user.id",
  images: [
    {
      url: "https://i.scdn.co/image/ab67757000003b82c6adf9fb5d2336aa6ffc6555",
      height: 64,
      width: 64,
    },
    {
      url: "https://i.scdn.co/image/ab6775700000ee85c6adf9fb5d2336aa6ffc6555",
      height: 300,
      width: 300,
    },
  ],
  type: "user",
  uri: "spotify:user:user.id",
  followers: { href: null, total: 0 },
};

export const following: any = {
  items: [
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/2WjvvwAX0mdWwq3aFuUdtc",
      },
      followers: {
        href: null,
        total: 818197,
      },
      genres: ["reggae rock"],
      href: "https://api.spotify.com/v1/artists/2WjvvwAX0mdWwq3aFuUdtc",
      id: "2WjvvwAX0mdWwq3aFuUdtc",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5eb8ff13c6a427bd750f017e646",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab676161000051748ff13c6a427bd750f017e646",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f1788ff13c6a427bd750f017e646",
          width: 160,
        },
      ],
      name: "Rebelution",
      popularity: 62,
      type: "artist",
      uri: "spotify:artist:2WjvvwAX0mdWwq3aFuUdtc",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/711MCceyCBcFnzjGY4Q7Un",
      },
      followers: {
        href: null,
        total: 27169455,
      },
      genres: ["australian rock", "hard rock", "rock"],
      href: "https://api.spotify.com/v1/artists/711MCceyCBcFnzjGY4Q7Un",
      id: "711MCceyCBcFnzjGY4Q7Un",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5ebc4c77549095c86acb4e77b37",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab67616100005174c4c77549095c86acb4e77b37",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f178c4c77549095c86acb4e77b37",
          width: 160,
        },
      ],
      name: "AC/DC",
      popularity: 79,
      type: "artist",
      uri: "spotify:artist:711MCceyCBcFnzjGY4Q7Un",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/7DWBR7jipfQ89DO1cUjuGL",
      },
      followers: {
        href: null,
        total: 243,
      },
      genres: [],
      href: "https://api.spotify.com/v1/artists/7DWBR7jipfQ89DO1cUjuGL",
      id: "7DWBR7jipfQ89DO1cUjuGL",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273734209b44e50135775f427b8",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02734209b44e50135775f427b8",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851734209b44e50135775f427b8",
          width: 64,
        },
      ],
      name: "Chill Akiles",
      popularity: 16,
      type: "artist",
      uri: "spotify:artist:7DWBR7jipfQ89DO1cUjuGL",
    },
  ],
  next: null,
  total: 3,
  cursors: {
    after: null,
  },
  limit: 20,
  href: "https://api.spotify.com/v1/me/following?type=artist&limit=20&locale=*",
};

export const playlists: any = {
  href: "https://api.spotify.com/v1/users/l.ruiz5/playlists?offset=0&limit=20",
  items: [
    {
      collaborative: false,
      description: "",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/6hsuFFbiHdUedIJaAi0xqO",
      },
      href: "https://api.spotify.com/v1/playlists/6hsuFFbiHdUedIJaAi0xqO",
      id: "6hsuFFbiHdUedIJaAi0xqO",
      images: [
        {
          height: 640,
          url: "https://mosaic.scdn.co/640/ab67616d0000b27355d9dd30075d1e1ea1375f01ab67616d0000b2735f24bd12c4ea2e50f36f1e07ab67616d0000b2739c40a9d89f52999189c4dfb0ab67616d0000b273b75b4ae6a03cdbfc5d6e299f",
          width: 640,
        },
        {
          height: 300,
          url: "https://mosaic.scdn.co/300/ab67616d0000b27355d9dd30075d1e1ea1375f01ab67616d0000b2735f24bd12c4ea2e50f36f1e07ab67616d0000b2739c40a9d89f52999189c4dfb0ab67616d0000b273b75b4ae6a03cdbfc5d6e299f",
          width: 300,
        },
        {
          height: 60,
          url: "https://mosaic.scdn.co/60/ab67616d0000b27355d9dd30075d1e1ea1375f01ab67616d0000b2735f24bd12c4ea2e50f36f1e07ab67616d0000b2739c40a9d89f52999189c4dfb0ab67616d0000b273b75b4ae6a03cdbfc5d6e299f",
          width: 60,
        },
      ],
      name: "worship ",
      owner: {
        display_name: "l.ruiz5",
        external_urls: {
          spotify: "https://open.spotify.com/user/l.ruiz5",
        },
        href: "https://api.spotify.com/v1/users/l.ruiz5",
        id: "l.ruiz5",
        type: "user",
        uri: "spotify:user:l.ruiz5",
      },
      primary_color: null,
      public: true,
      snapshot_id:
        "MjAsNDllNDFjNWQzZWMxMmZmY2RiYzMxNTNlYWYyYWU2OTgyMjc2YzA0ZA==",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/6hsuFFbiHdUedIJaAi0xqO/tracks",
        total: 19,
      },
      type: "playlist",
      uri: "spotify:playlist:6hsuFFbiHdUedIJaAi0xqO",
    },
    {
      collaborative: false,
      description: "",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/6oxGDWM60hD4RtSkxx2oZE",
      },
      href: "https://api.spotify.com/v1/playlists/6oxGDWM60hD4RtSkxx2oZE",
      id: "6oxGDWM60hD4RtSkxx2oZE",
      images: [
        {
          height: 640,
          url: "https://mosaic.scdn.co/640/ab67616d0000b27345b28d1e09cded285fc2a0caab67616d0000b273540fc1d083eac5bcff8dad21ab67616d0000b27366d82c5fdf81c2d0bfb98bd2ab67616d0000b2736b3e3357c9192722c1236b49",
          width: 640,
        },
        {
          height: 300,
          url: "https://mosaic.scdn.co/300/ab67616d0000b27345b28d1e09cded285fc2a0caab67616d0000b273540fc1d083eac5bcff8dad21ab67616d0000b27366d82c5fdf81c2d0bfb98bd2ab67616d0000b2736b3e3357c9192722c1236b49",
          width: 300,
        },
        {
          height: 60,
          url: "https://mosaic.scdn.co/60/ab67616d0000b27345b28d1e09cded285fc2a0caab67616d0000b273540fc1d083eac5bcff8dad21ab67616d0000b27366d82c5fdf81c2d0bfb98bd2ab67616d0000b2736b3e3357c9192722c1236b49",
          width: 60,
        },
      ],
      name: "My playlist #7",
      owner: {
        display_name: "l.ruiz5",
        external_urls: {
          spotify: "https://open.spotify.com/user/l.ruiz5",
        },
        href: "https://api.spotify.com/v1/users/l.ruiz5",
        id: "l.ruiz5",
        type: "user",
        uri: "spotify:user:l.ruiz5",
      },
      primary_color: null,
      public: true,
      snapshot_id:
        "MTEsYzY1ZTdjM2Q3NTJlYmJmMTc0ZTQ4N2FhYjQ1ZDc1Y2JjMjA5NDhhMQ==",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/6oxGDWM60hD4RtSkxx2oZE/tracks",
        total: 10,
      },
      type: "playlist",
      uri: "spotify:playlist:6oxGDWM60hD4RtSkxx2oZE",
    },
    {
      collaborative: false,
      description: "",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/5llTzBR9ud1NqF3vFxWJbz",
      },
      href: "https://api.spotify.com/v1/playlists/5llTzBR9ud1NqF3vFxWJbz",
      id: "5llTzBR9ud1NqF3vFxWJbz",
      images: [
        {
          height: 640,
          url: "https://mosaic.scdn.co/640/ab67616d0000b27317fa909b4782bf216e50a272ab67616d0000b2732d007a29087c4e80fb4bf301ab67616d0000b273542eba0857513c66ac057089ab67616d0000b273ffb73c5595cda9560474e501",
          width: 640,
        },
        {
          height: 300,
          url: "https://mosaic.scdn.co/300/ab67616d0000b27317fa909b4782bf216e50a272ab67616d0000b2732d007a29087c4e80fb4bf301ab67616d0000b273542eba0857513c66ac057089ab67616d0000b273ffb73c5595cda9560474e501",
          width: 300,
        },
        {
          height: 60,
          url: "https://mosaic.scdn.co/60/ab67616d0000b27317fa909b4782bf216e50a272ab67616d0000b2732d007a29087c4e80fb4bf301ab67616d0000b273542eba0857513c66ac057089ab67616d0000b273ffb73c5595cda9560474e501",
          width: 60,
        },
      ],
      name: "Unto The Lamb",
      owner: {
        display_name: "l.ruiz5",
        external_urls: {
          spotify: "https://open.spotify.com/user/l.ruiz5",
        },
        href: "https://api.spotify.com/v1/users/l.ruiz5",
        id: "l.ruiz5",
        type: "user",
        uri: "spotify:user:l.ruiz5",
      },
      primary_color: null,
      public: true,
      snapshot_id:
        "MTQsNzkyNTJkMDAzZTNjZjUyYWFiNzRmZWY4ZDg0NzVjNzUwYzFlMzBkZg==",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/5llTzBR9ud1NqF3vFxWJbz/tracks",
        total: 8,
      },
      type: "playlist",
      uri: "spotify:playlist:5llTzBR9ud1NqF3vFxWJbz",
    },
    {
      collaborative: false,
      description: "",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/12BfIF3gwiaBHPKLyPQtTk",
      },
      href: "https://api.spotify.com/v1/playlists/12BfIF3gwiaBHPKLyPQtTk",
      id: "12BfIF3gwiaBHPKLyPQtTk",
      images: [
        {
          height: 640,
          url: "https://mosaic.scdn.co/640/ab67616d0000b2733f25a9e36efdc0adb6d9f081ab67616d0000b273542eba0857513c66ac057089ab67616d0000b273acfb719242ce7efe08505a91ab67616d0000b273ffb73c5595cda9560474e501",
          width: 640,
        },
        {
          height: 300,
          url: "https://mosaic.scdn.co/300/ab67616d0000b2733f25a9e36efdc0adb6d9f081ab67616d0000b273542eba0857513c66ac057089ab67616d0000b273acfb719242ce7efe08505a91ab67616d0000b273ffb73c5595cda9560474e501",
          width: 300,
        },
        {
          height: 60,
          url: "https://mosaic.scdn.co/60/ab67616d0000b2733f25a9e36efdc0adb6d9f081ab67616d0000b273542eba0857513c66ac057089ab67616d0000b273acfb719242ce7efe08505a91ab67616d0000b273ffb73c5595cda9560474e501",
          width: 60,
        },
      ],
      name: "worship nite",
      owner: {
        display_name: "l.ruiz5",
        external_urls: {
          spotify: "https://open.spotify.com/user/l.ruiz5",
        },
        href: "https://api.spotify.com/v1/users/l.ruiz5",
        id: "l.ruiz5",
        type: "user",
        uri: "spotify:user:l.ruiz5",
      },
      primary_color: null,
      public: true,
      snapshot_id: "NSw4MGE4OTVkYjAxMWQ5YjgyODhlNjdkMTBkYWZlNDVhNDViMzliNTRh",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/12BfIF3gwiaBHPKLyPQtTk/tracks",
        total: 4,
      },
      type: "playlist",
      uri: "spotify:playlist:12BfIF3gwiaBHPKLyPQtTk",
    },
    {
      collaborative: false,
      description: "",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/6mz6wOBXGjy5hlyQOlfQTE",
      },
      href: "https://api.spotify.com/v1/playlists/6mz6wOBXGjy5hlyQOlfQTE",
      id: "6mz6wOBXGjy5hlyQOlfQTE",
      images: [
        {
          height: 640,
          url: "https://mosaic.scdn.co/640/ab67616d0000b273240611d7fe460debea9d3cefab67616d0000b2738794282921c5e78dc245ff90ab67616d0000b273acfb719242ce7efe08505a91ab67616d0000b273ad29a40953b33e52530e399e",
          width: 640,
        },
        {
          height: 300,
          url: "https://mosaic.scdn.co/300/ab67616d0000b273240611d7fe460debea9d3cefab67616d0000b2738794282921c5e78dc245ff90ab67616d0000b273acfb719242ce7efe08505a91ab67616d0000b273ad29a40953b33e52530e399e",
          width: 300,
        },
        {
          height: 60,
          url: "https://mosaic.scdn.co/60/ab67616d0000b273240611d7fe460debea9d3cefab67616d0000b2738794282921c5e78dc245ff90ab67616d0000b273acfb719242ce7efe08505a91ab67616d0000b273ad29a40953b33e52530e399e",
          width: 60,
        },
      ],
      name: "worship",
      owner: {
        display_name: "l.ruiz5",
        external_urls: {
          spotify: "https://open.spotify.com/user/l.ruiz5",
        },
        href: "https://api.spotify.com/v1/users/l.ruiz5",
        id: "l.ruiz5",
        type: "user",
        uri: "spotify:user:l.ruiz5",
      },
      primary_color: null,
      public: true,
      snapshot_id:
        "NTEsNmZmMDE3OTVjOTBlYWI4NzIxMjUzZDY2NzkyYzUzOTY5MWRlZTgzNQ==",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/6mz6wOBXGjy5hlyQOlfQTE/tracks",
        total: 42,
      },
      type: "playlist",
      uri: "spotify:playlist:6mz6wOBXGjy5hlyQOlfQTE",
    },
    {
      collaborative: false,
      description: "",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/5Bu8TK3qFdY9wXWkmZ8ktT",
      },
      href: "https://api.spotify.com/v1/playlists/5Bu8TK3qFdY9wXWkmZ8ktT",
      id: "5Bu8TK3qFdY9wXWkmZ8ktT",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2739a1f046788da8de23bbb681e",
          width: 640,
        },
      ],
      name: "instrumental worship ",
      owner: {
        display_name: "l.ruiz5",
        external_urls: {
          spotify: "https://open.spotify.com/user/l.ruiz5",
        },
        href: "https://api.spotify.com/v1/users/l.ruiz5",
        id: "l.ruiz5",
        type: "user",
        uri: "spotify:user:l.ruiz5",
      },
      primary_color: null,
      public: true,
      snapshot_id: "NCwyZWVlODVlZDQ5Yzg5N2IxNjJlNWJmNWJjNzBiM2RlMmUzZWMxNDYx",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/5Bu8TK3qFdY9wXWkmZ8ktT/tracks",
        total: 3,
      },
      type: "playlist",
      uri: "spotify:playlist:5Bu8TK3qFdY9wXWkmZ8ktT",
    },
  ],
  limit: 20,
  next: null,
  offset: 0,
  previous: null,
  total: 6,
};
