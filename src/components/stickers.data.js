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
    width: 140,
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
    width: 140,
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
    width: 140,
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

export const COLOR_INPUTS = [
  { id: "radio-1", color: "#4285f4" },
  { id: "radio-2", color: "#ea4335" },
  { id: "radio-3", color: "#fbbc05" },
  { id: "radio-4", color: "#34a853" },
  { id: "radio-5", color: "#121212" },
  { id: "radio-6", color: "#f7f7f7" },
  { id: "radio-7", color: "#d502d9" },
  { id: "radio-8", color: "#35fc3f" },
];

export const FONTS = ["monospace", "fantasy", "sans-serif"];
