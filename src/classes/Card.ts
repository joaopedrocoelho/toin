import { PointCardProperties } from "./PointCard";

export type cardTypes = "PointCard" | "ActionCard" | "WildCard";

export type cardProperties = PointCardProperties;
export abstract class CardClass {
  private _type: cardTypes;
  private _faceUp: boolean = false;

  constructor(type: cardTypes) {
    this._type = type;
  }

  get faceUp() {
    return this._faceUp;
  }

  get type() {
    return this._type;
  }

  turnFaceUp() {
    this._faceUp = true;
  }

  turnFaceDown() {
    this._faceUp = false;
  }

  playCard() {
    console.log(this._type + " card played");
  }

  abstract getProperties(): cardProperties;
}
