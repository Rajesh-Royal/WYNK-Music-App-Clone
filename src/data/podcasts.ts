import { podcastImages } from "../utils/AllProjectImages";

interface TopChartsType {
  title: string;
  description?: string;
  image: string;
}
export const Podcasts: TopChartsType[] = [
  {
    title: "Stories of Mahabharata ..",
    image: podcastImages["storiesofmahabharat"].default,
    description: "Vamshikrishnareddymanda",
  },
  {
    title: "Crazy For Kishore",
    image: podcastImages["crazyforkishore"].default,
    description: "Radio Nasha - HT Smartcast",
  },
  {
    title: "Sadguru",
    image: podcastImages["sadguru"].default,
    description: "Art of Living",
  },
  {
    title: "Mahabharat",
    image: podcastImages["mahabharat"].default,
    description: "Fever FM - HT smartcast",
  },
  {
    title: "Galib",
    image: podcastImages["galib"].default,
    description: "Galib Tanha he 😭",
  },
  {
    title: "Kissa Roz Ka",
    image: podcastImages["kissarozka"].default,
    description: "Fever FM - HT smartcast",
  },
  {
    title: "Stories of Mahabharata ..",
    image: podcastImages["storiesofmahabharat"].default,
    description: "Vamshikrishnareddymanda",
  },
];
