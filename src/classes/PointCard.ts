import { pointCardPattern } from "src/types/cardpatterns";
import { CardClass } from "./Card";

export class PointCard extends CardClass {
  private _points: number;
  private _pattern: pointCardPattern;
  private _sameSymbol: boolean;

  constructor(points: number, pattern: pointCardPattern, sameSymbol: boolean) {
    super("PointCard");
    this._points = points;
    this._pattern = pattern;
    this._sameSymbol = sameSymbol;
  }

  get points() {
    return this._points;
  }

  get pattern() {
    return this._pattern;
  }

  getProperties() {
    return {
      points: this._points,
      pattern: this._pattern,
      sameSymbol: this._sameSymbol,
    };
  }
}

// Zizag example pattern
// [1,0,0] -> inner layer
// [0,1,0]
// [1,0,0]
// [0,1,0] -> outer layer
