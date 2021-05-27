import { hindiHitsImages } from "../utils/AllProjectImages";

interface TopChartsType {
  title: string;
  description?: string;
  image: string;
}
console.log(hindiHitsImages);
export const HindiHits: TopChartsType[] = [
  {
    title: "Baarish Ki Jaaye",
    image: hindiHitsImages["baarishkijaaye"].default,
    description: "B Praak - Baarish Ki Jaaye",
  },
  {
    title: "Bepanaah Pyaar",
    image: hindiHitsImages["bepanaah"].default,
    description: "Yasser Desai - Bepanah",
  },
  {
    title: "Hawa Banke",
    image: hindiHitsImages["hawabanke"].default,
    description: "Darshan Raval - Hawa Banke",
  },
  {
    title: "ik Mulakaat",
    image: hindiHitsImages["ikmulakat"].default,
    description: "Altamash Faridi - Dream ...",
  },
  {
    title: "Mazaa",
    image: hindiHitsImages["maza"].default,
    description: "B Praak - Mazaa",
  },
  {
    title: "Pal Pal Dil Ke Paas",
    image: hindiHitsImages["palpaldilkepaas"].default,
    description: "Arjit Singh - Pal Pal Dil K..",
  },
  {
    title: "Rabba Maher",
    image: hindiHitsImages["rabbamaher"].default,
    description: "Darshan Raval - Rabba Maher",
  },
  {
    title: "Radhe Title Track",
    image: hindiHitsImages["radhe"].default,
    description: "Sajid - Radhe - Your Most Wanted Bhai",
  },
  {
    title: "Thoda Thoda Pyaar",
    image: hindiHitsImages["thodathodapyaar"].default,
    description: "Stebin Ben - Thoda Thoda Pyaar",
  },
];
