import { Card } from "./Card";

export class Deck {
  cards: Card[];
  constructor() {
    this.cards = [];
    this.cards = [];
  }
  addCard(card: Card) {
    this.cards.push(card);
  }
  getCards() {
    return this.cards;
  }
  getCard(index: number) {
    return this.cards[index];
  }
  getCardCount() {
    return this.cards.length;
  }
  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const swap = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = swap;
    }
  }
  drawCard() {
    return this.cards.shift();
  }
  drawCards(count: number) {
    const cards = [];
    for (let i = 0; i < count; i++) {
      cards.push(this.drawCard());
    }
    return cards;
  }
}
