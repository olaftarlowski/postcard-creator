import { v4 as uuidv4 } from "uuid";
import { star, plus, doge } from "../assets";

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
