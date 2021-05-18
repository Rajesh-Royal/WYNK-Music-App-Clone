import {
  BookmarkAltIcon,
  CalendarIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  CollectionIcon,
  ReceiptRefundIcon,
  RssIcon,
  MusicNoteIcon,
} from "@heroicons/react/outline";
import { DownloadIcon, ThumbUpIcon } from "@heroicons/react/solid";

export const MyMusic = [
  {
    name: "My Playlists",
    description: "You will find all your playlists here",
    href: "#",
    icon: CollectionIcon,
  },
  {
    name: "Liked Songs",
    description: "List of all the songs which you have liked",
    href: "#",
    icon: ThumbUpIcon,
  },
  {
    name: "Recently Played Songs",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ReceiptRefundIcon,
  },
  {
    name: "Followed Artists",
    description: "List of Artists you have been following",
    href: "#",
    icon: ViewGridIcon,
  },
  {
    name: "Followed Playlists",
    description: "List of playlists you have been following.",
    href: "#",
    icon: RssIcon,
  },
  {
    name: "Recommended Songs",
    description: "Recommended songs by our platform based on your like.",
    href: "#",
    icon: MusicNoteIcon,
  },
  {
    name: "Downloaded Songs",
    description: "List of all the songs you have downloaded over time.",
    href: "#",
    icon: DownloadIcon,
  },
];

export const resources = [
  {
    name: "Help Center",
    description: "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: SupportIcon,
  },
  {
    name: "Guides",
    description: "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkAltIcon,
  },
  {
    name: "Events",
    description: "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];
