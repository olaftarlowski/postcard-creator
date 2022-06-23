import { v4 as uuidv4 } from "uuid";
import {
  star,
  plus,
  doge,
  emoji,
  laptop,
  postcard,
  sticker,
  backgroundImg1,
  backgroundImg2,
} from "../assets";

export const stickersData = [
  {
    id: uuidv4(),
    url: sticker,
    width: 60,
    alt: "sticker",
  },
  {
    id: uuidv4(),
    url: star,
    width: 60,
    alt: "star",
  },
  {
    id: uuidv4(),
    url: doge,
    width: 60,
    alt: "doge",
  },
  {
    id: uuidv4(),
    url: emoji,
    width: 60,
    alt: "emoji",
  },
  {
    id: uuidv4(),
    url: postcard,
    width: 60,
    alt: "postcard",
  },
  {
    id: uuidv4(),
    url: plus,
    width: 60,
    alt: "plus sign",
  },
  {
    id: uuidv4(),
    url: laptop,
    width: 60,
    alt: "laptop",
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
