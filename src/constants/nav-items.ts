import {
  BsPersonCircle,
  BsPlayCircle,
  BsCollection,
  BsBoombox,
  BsMusicNoteList,
  BsMusicNoteBeamed,
  BsPerson,
  BsPalette,
} from "react-icons/bs";
import { BiLibrary } from "react-icons/bi";

export interface NavItem {
  title: string;
  Icon: React.ElementType;
  href: string;
}

export const discoverNavItems: Array<NavItem> = [
  {
    title: "Profile",
    Icon: BsPersonCircle,
    href: "/",
  },
  {
    title: "Listen Now",
    Icon: BsPlayCircle,
    href: "/now-playing",
  },
  {
    title: "Browse",
    Icon: BsCollection,
    href: "/browse",
  },
  {
    title: "Radio",
    Icon: BsBoombox,
    href: "/radio",
  },
];

export const libraryNavItems: Array<NavItem> = [
  {
    title: "Playlists",
    Icon: BsMusicNoteList,
    href: "/playlists",
  },
  {
    title: "Songs",
    Icon: BsMusicNoteBeamed,
    href: "/songs",
  },
  {
    title: "Made For You",
    Icon: BsPerson,
    href: "/for-you",
  },
  {
    title: "Artists",
    Icon: BsPalette,
    href: "/artists",
  },
  {
    title: "Albums",
    Icon: BiLibrary,
    href: "/albums",
  },
];
