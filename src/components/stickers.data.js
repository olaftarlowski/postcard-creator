import { v4 as uuidv4 } from "uuid";
import { star, plus, doge, backgroundImg1, backgroundImg2 } from "../assets";

export const stickersData = [
  {
    id: uuidv4(),
    url: star,
    width: 60,
    alt: "star",
  },
  {
    id: uuidv4(),
    url: plus,
    width: 60,
    alt: "plus sign",
  },
  {
    id: uuidv4(),
    url: doge,
    width: 60,
    alt: "doge",
  },
];

export const backgroundData = [
  {
    id: uuidv4(),
    url: backgroundImg1,
    width: 100,
    alt: "fullbleed doge",
  },
  {
    id: uuidv4(),
    url: backgroundImg2,
    width: 100,
    alt: "sleeping cat",
  },
];
