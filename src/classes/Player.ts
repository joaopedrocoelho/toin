import { PlayerArrow } from "./PlayerArrow";
import { PointCard } from "./PointCard";

export class Player {
  id: number;
  name: string;
  points: number;
  cards: Array<PointCard>;
  arrow: PlayerArrow;
  constructor(id: number, name: string, arrowStartingIdx: number) {
    this.id = id;
    this.name = name;
    this.points = 0;
    this.cards = [];
    this.arrow = new PlayerArrow(id, arrowStartingIdx);
  }
  addCard(card: PointCard) {
    this.cards.push(card);
  }
  removeCard(card: PointCard) {
    this.cards = this.cards.filter((c) => c !== card);
  }
  moveArrow(newIndex: number) {
    this.arrow.moveArrow(newIndex);
  }
  addPoints(points: number) {
    this.points += points;
  }
}
