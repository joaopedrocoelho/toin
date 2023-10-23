import { pointCardPattern } from "src/types/cardtypes";
import { FixedArray } from "src/types/helpers";

export class PointCard {
  private _points: number;
  private _pattern: pointCardPattern;

  constructor(points: number, pattern: pointCardPattern) {
    this._points = points;
    this._pattern = pattern;
  }

  get points() {
    return this._points;
  }

  get pattern() {
    return this._pattern;
  }

  //create code to check mirror pattern
  matchPattern(playerPattern: pointCardPattern) {
    for (let i = 0; i < playerPattern.length; i++) {
      for (let j = 0; j < playerPattern[i].length; j++) {
        if (playerPattern[i][j] !== this._pattern[i][j]) {
          return false;
        }
      }
    }
    return true;
  }
}

// Zizag example pattern
// [1,0,0] -> inner layer
// [0,1,0]
// [1,0,0]
// [0,1,0] -> outer layer
