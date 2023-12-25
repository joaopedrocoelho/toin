import { act } from "react-dom/test-utils";
import { CardObj } from "./card";
import { FixedArray } from "./helpers";

export type pointCardPattern = FixedArray<0 | 1 | 2, 3>[];

//Point Cards

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

export function rotatePattern(pattern: pointCardPattern) {
  const newPattern: pointCardPattern = [];
  for (let i = pattern.length - 1; i >= 0; i--) {
    const reversed = [...pattern[i]].reverse() as FixedArray<0 | 1 | 2, 3>;
    newPattern.push(reversed);
  }
  return newPattern;
}

export function convertPatternToObj(
  pattern: pointCardPattern
): Record<number, number> {
  const obj: Record<number, number> = {};
  for (let i = 0; i < pattern.length; i++) {
    for (let j = 0; j < pattern[i].length; j++) {
      if (pattern[i][j] !== 0) obj[i] = j;
    }
  }

  console.log("patternObj", obj);
  return obj;
}

export function convertActiveMatrixToObjBasedOnPattern(
  activeMatrix: number[][],
  patternObj: Record<number, number>
): Record<number, number> {
  const obj: Record<number, number> = {};

  for (let i = 0; i < activeMatrix.length; i++) {
    if (patternObj[i] !== undefined) {
      obj[i] = activeMatrix[i][patternObj[i]];
    }
  }
  return obj;
}
export function canPlayCard(activeMatrix: number[][], card: CardObj) {
  //pattern numbers:
  // 0 = empty
  // 1 =  same symbol
  // 2 = different symbol
}

export function checkSameSymbolPatternObj(
  activeMatrixObj: Record<number, number>
) {
  const keySymbol = activeMatrixObj[3];
  for (const prop in activeMatrixObj) {
    if (activeMatrixObj[prop] !== keySymbol) return false;
  }
  return true;
}

export function checkDiffSymbolPatternObj(
  activeMatrixObj: Record<number, number>
) {
  const symbolSet = new Set();
  for (const prop in activeMatrixObj) {
    if (symbolSet.has(prop)) return false;
    symbolSet.add(prop);
  }
  return true;
}
