import { FixedArray } from "./helpers";

export type pointCardPattern = FixedArray<0 | 1 | 2, 3>[];

//Point Cards
export interface PointCard {
  pattern: pointCardPattern;
}

//Same Pattern has a red star symbol and different has a green pentagon symbol

export const ThreeSamePattern: pointCardPattern = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 0],
];

export const TwoSamePattern: pointCardPattern = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 1, 0],
  [0, 1, 0],
];

export const allSamePattern: pointCardPattern = [
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 0],
];

export const allSameOneSidePattern: pointCardPattern = [
  [0, 1, 0],
  [0, 0, 1],
  [0, 1, 0],
  [0, 1, 0],
];

export const allSameTwoSidePattern: pointCardPattern = [
  [0, 1, 0],
  [0, 0, 1],
  [0, 0, 1],
  [0, 1, 0],
];

export const allDiffPattern: pointCardPattern = [
  [0, 2, 0],
  [0, 2, 0],
  [0, 2, 0],
  [0, 2, 0],
];

export const allDiffOneSidePattern: pointCardPattern = [
  [0, 2, 0],
  [0, 0, 2],
  [0, 2, 0],
  [0, 2, 0],
];

export const allDiffTwoSidePattern: pointCardPattern = [
  [0, 2, 0],
  [0, 0, 2],
  [0, 0, 2],
  [0, 2, 0],
];

export const cards = [
  ThreeSamePattern,
  TwoSamePattern,
  allSamePattern,
  allSameOneSidePattern,
  allSameTwoSidePattern,
  allDiffPattern,
  allDiffOneSidePattern,
  allDiffTwoSidePattern,
];
