import { internationalHitImages } from "../utils/AllProjectImages";

interface TopChartsType {
  title: string;
  description?: string;
  image: string;
}
export const InternationalHits: TopChartsType[] = [
  {
    title: "On My Way",
    image: internationalHitImages["onmyway"].default,
    description: "Sabrina Carpenter - on my way",
  },
  {
    title: "Faded",
    image: internationalHitImages["faded"].default,
    description: "Alan Walker - Faded",
  },
  {
    title: "Let Me Love You",
    image: internationalHitImages["letmeloveyou"].default,
    description: "DJ Snake - Encore",
  },
  {
    title: "Memories",
    image: internationalHitImages["memories"].default,
    description: "Maroon 5 - Memories",
  },
  {
    title: "Intentions",
    image: internationalHitImages["intentions"].default,
    description: "Justin Bieber - Intentions",
  },
  {
    title: "Peaches",
    image: internationalHitImages["peaches"].default,
    description: "Justin Bieber - Justice",
  },
  {
    title: "Safari",
    image: internationalHitImages["safari"].default,
    description: "Serena - Safari",
  },
  {
    title: "Senorita",
    image: internationalHitImages["senorita"].default,
    description: "Shawn Mendes - Señorita",
  },
  {
    title: "sugar",
    image: internationalHitImages["sugar"].default,
    description: "Selena Gomez - waka waka",
  },
];
