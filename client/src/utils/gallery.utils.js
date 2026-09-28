import { img } from "../assets/data/data";

export const RATIO = [
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[4/3]",
];

export const FULL = 1600;

export const warmed = new Set();
export const ready = new Set();

export const preload = (id) => {
  if (warmed.has(id)) return;

  warmed.add(id);

  const image = new Image();

  image.decoding = "async";
  image.src = img(id, FULL);

  image
    .decode?.()
    .then(() => ready.add(id))
    .catch(() => {});
};

export const slide = {
  enter: (direction) => ({
    x:
      direction === 0
        ? 0
        : direction > 0
          ? "25%"
          : "-25%",
    opacity: 0,
  }),

  center: {
    x: 0,
    opacity: 1,
  },

  exit: (direction) => ({
    x: direction > 0 ? "-25%" : "25%",
    opacity: 0,
  }),
};