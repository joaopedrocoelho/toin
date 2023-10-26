import { PlayerArrow } from "./PlayerArrow";
import { CardClass } from "./Card";

export class Player {
  id: number;
  name: string;
  points: number;
  hand: CardClass[];
  arrow: PlayerArrow;
  constructor(id: number, name: string, arrowStartingIdx: number) {
    this.id = id;
    this.name = name;
    this.points = 0;
    this.hand = [];
    this.arrow = new PlayerArrow(id, arrowStartingIdx);
  }

  addStartingHand(hand: CardClass[]) {
    this.hand = hand;
  }
  addCard(card: CardClass | CardClass[]) {
    this.hand.concat(card);
  }
  removeCard(card: CardClass) {
    this.hand = this.hand.filter((c) => c !== card);
  }
  moveArrow(newIndex: number) {
    this.arrow.moveArrow(newIndex);
  }
  addPoints(points: number) {
    this.points += points;
  }
}
