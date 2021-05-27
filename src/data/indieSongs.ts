import { indieImages } from "../utils/AllProjectImages";

interface TopChartsType {
  title: string;
  description?: string;
  image: string;
}

export const IndieSongs: TopChartsType[] = [
  {
    title: "Asli Hip Hop",
    image: indieImages["aslihiphop"].default,
  },
  {
    title: "Beyond Bollywood",
    image: indieImages["beyondbollywood"].default,
  },
  {
    title: "Edm India",
    image: indieImages["edmindia"].default,
  },
  {
    title: "Indie Rock",
    image: indieImages["indieRock"].default,
  },
  {
    title: "Latest Indie",
    image: indieImages["latestindie"].default,
  },
  {
    title: "New Age Indie",
    image: indieImages["newageindie"].default,
  },
  {
    title: "Soul Indie",
    image: indieImages["soulindie"].default,
  },
];
