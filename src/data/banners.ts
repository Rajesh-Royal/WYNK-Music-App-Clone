import { bannersImages } from "../utils/AllProjectImages";

interface bannersType {
  title: string;
  image: string;
}

export const banners: bannersType[] = [
  {
    title: "anniversary",
    image: bannersImages["anniversary"].default,
  },
  {
    title: "Desi Hip Hop",
    image: bannersImages["desihiphop"].default,
  },
  {
    title: "feel good",
    image: bannersImages["feelgood"].default,
  },
  {
    title: "Hip Hop",
    image: bannersImages["hiphop"].default,
  },
  {
    title: "Hot right now",
    image: bannersImages["hotrightnow"].default,
  },
  {
    title: "hottest collaborations",
    image: bannersImages["hottestcollaborations"].default,
  },
  {
    title: "K Pop",
    image: bannersImages["kpop"].default,
  },
  {
    title: "love stories",
    image: bannersImages["lovestories"].default,
  },
  {
    title: "New English",
    image: bannersImages["newenglish"].default,
  },
  {
    title: "ummid",
    image: bannersImages["ummid"].default,
  },
];
