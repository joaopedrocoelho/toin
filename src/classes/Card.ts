export type cardTypes = "PointCard" | "ActionCard" | "WildCard";
export class Card {
  private _type: cardTypes;
  private _faceUp: boolean = false;

  constructor(type: cardTypes) {
    this._type = type;
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
}
