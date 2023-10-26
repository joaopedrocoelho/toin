import { PlayerArrow } from "./PlayerArrow";
import { Card } from "./PointCard";

export class Player {
  id: number;
  name: string;
  points: number;
  hand: Card[];
  arrow: PlayerArrow;
  constructor(id: number, name: string, arrowStartingIdx: number) {
    this.id = id;
    this.name = name;
    this.points = 0;
    this.hand = [];
    this.arrow = new PlayerArrow(id, arrowStartingIdx);
  }

  addStartingHand(hand: Card[]) {
    this.hand = hand;
  }
  addCard(card: Card | Card[]) {
    this.hand.concat(card);
  }
  removeCard(card: Card) {
    this.hand = this.hand.filter((c) => c !== card);
  }
  moveArrow(newIndex: number) {
    this.arrow.moveArrow(newIndex);
  }
  addPoints(points: number) {
    this.points += points;
  }
}
