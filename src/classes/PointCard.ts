import { pointCardPattern } from "src/types/cardpatterns";
import { CardClass } from "./Card";

export interface PointCardProperties {
  points: number;
  pattern: pointCardPattern;
}

export class PointCard extends CardClass {
  private _points: number;
  private _pattern: pointCardPattern;

  constructor(points: number, pattern: pointCardPattern) {
    super("PointCard");
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

  getProperties() {
    return {
      points: this._points,
      pattern: this._pattern,
    };
  }
}

// Zizag example pattern
// [1,0,0] -> inner layer
// [0,1,0]
// [1,0,0]
// [0,1,0] -> outer layer
