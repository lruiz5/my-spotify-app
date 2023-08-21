export interface User {
  display_name: string;
  external_urls: object;
  href: string;
  id: string;
  images: Array<string>;
  type: string;
  uri: string;
  followers: object;
}
export const user: User = {
  display_name: "username",
  external_urls: { spotify: "https://open.spotify.com/user/id" },
  href: "https://api.spotify.com/v1/users/id",
  id: "user.id",
  images: [],
  type: "user",
  uri: "spotify:user:user.id",
  followers: { href: null, total: 0 },
};
