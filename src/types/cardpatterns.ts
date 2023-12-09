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

const ThreeSameObj = {
  1: [],
  2: [1],
  3: [1],
  4: [1],
};

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

export function convertPatternToObj(pattern: pointCardPattern) {
  const obj: Record<number, number[]> = {};
  for (let i = 0; i < pattern.length; i++) {
    obj[i] = [];
    for (let j = 0; j < pattern[i].length; j++) {
      if (pattern[i][j] !== 0) obj[i].push(j);
    }
  }

  return obj;
}

export function convertActiveMatrixToObjBasedOnPattern(
  activeMatrix: number[][],
  patternObj: Record<number, number[]>
) {
  const obj: Record<number, number[]> = {
    0: [],
    1: [],
    2: [],
    3: [],
  };

  for (let i = 0; i < activeMatrix.length; i++) {
    for (let j = 0; j < patternObj[i].length; j++) {
      obj[i].push(activeMatrix[i][patternObj[i][j]]);
    }
  }
  return obj;
}
export function canPlayCard(activeMatrix: number[][], card: CardObj) {
  const patternObj = convertPatternToObj(card.properties.pattern);
  const rotatedPatternObj = convertPatternToObj(
    rotatePattern(card.properties.pattern)
  );

  const activeMatrixObj = convertActiveMatrixToObjBasedOnPattern(
    activeMatrix,
    patternObj
  );

  const rotatedActiveMatrixObj = convertActiveMatrixToObjBasedOnPattern(
    activeMatrix,
    rotatedPatternObj
  );

  //if the card is a same symbol pattern card
  if (card.properties.sameSymbol) {
    const keySymbol = activeMatrixObj[0][0];
    let canPlay = true;
    let canPlayRotated = true;

    for (const key in activeMatrixObj) {
      for (let i = 0; i < activeMatrixObj[key].length; i++) {
        if (activeMatrixObj[key][i] !== keySymbol) {
          canPlay = false;
        }
      }
    }
    for (const key in rotatedActiveMatrixObj) {
      for (let i = 0; i < rotatedActiveMatrixObj[key].length; i++) {
        if (activeMatrixObj[key][i] !== keySymbol) {
          canPlayRotated = false;
        }
      }
    }

    return canPlay || canPlayRotated;
  } else {
    const symbolsArr = [];
    let canPlay = true;
    let canPlayRotated = true;

    for (const key in activeMatrixObj) {
      for (let i = 0; i < activeMatrixObj[key].length; i++) {
        symbolsArr.push(activeMatrixObj[key][i]);
      }
    }
    canPlay = new Set(symbolsArr).size === symbolsArr.length;

    const rotatedSymbolsArr = [];
    for (const key in rotatedActiveMatrixObj) {
      for (let i = 0; i < rotatedActiveMatrixObj[key].length; i++) {
        if (activeMatrixObj[key][i] === 0) {
          rotatedSymbolsArr.push(activeMatrixObj[key][i]);
        }
      }
    }
    canPlayRotated =
      new Set(rotatedSymbolsArr).size === rotatedSymbolsArr.length;

    return canPlay || canPlayRotated;
  }
}
