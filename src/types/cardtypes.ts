import { FixedArray } from "./helpers";

export type pointCardPattern = FixedArray<0 | 1 | 2, 3>[];

//Point Cards
export interface PointCard {
  pattern: pointCardPattern;
}

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
