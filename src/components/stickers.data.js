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

export const cancelImgSize = 24;

export const TEXTS = [
  {
    id: uuidv4(),
    x: 50,
    y: 50,
    font: "fantasy",
    insertedText: "ale smiszne xD",
  },
  {
    id: uuidv4(),
    x: 189,
    y: 256,
    font: "monospace",
    insertedText: "co nie, ten tekst da sie ruszac",
  },
  {
    id: uuidv4(),
    x: 500,
    y: 240,
    font: "sans-serif",
    insertedText: "sans-serif to font",
  },
];
