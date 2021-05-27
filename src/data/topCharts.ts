import { topChartsImages } from "../utils/AllProjectImages";

interface TopChartsType {
  title: string;
  description?: string;
  image: string;
}
export const TopCharts: TopChartsType[] = [
  {
    title: "Weekly Top 20: English",
    image: topChartsImages["weeklytop20english"].default,
  },
  {
    title: "Wynk Top 100",
    image: topChartsImages["wynktop20"].default,
  },
  {
    title: "Romance Top 40: English",
    image: topChartsImages["romancetop20"].default,
  },
  {
    title: "Weekly Top 20",
    image: topChartsImages["weeklytop20"].default,
  },
  {
    title: "Social Media Top 20: English",
    image: topChartsImages["socialtop20"].default,
  },
  {
    title: "Dance Top 50",
    image: topChartsImages["dancetop20"].default,
  },
  {
    title: "Pop Top 20",
    image: topChartsImages["top20"].default,
  },
];
