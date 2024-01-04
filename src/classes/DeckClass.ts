// import { CardClass } from "./Card";
// import { deckCards } from "./cards";

// export class DeckClass {
//   cards: CardClass[];
//   constructor() {
//     this.cards = deckCards;
//     this.shuffle();
//   }
//   addCard(card: CardClass) {
//     this.cards.push(card);
//   }
//   getCards() {
//     return this.cards;
//   }
//   getCard(index: number) {
//     return this.cards[index];
//   }
//   getCardCount() {
//     return this.cards.length;
//   }
//   shuffle() {
//     for (let i = this.cards.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       const swap = this.cards[i];
//       this.cards[i] = this.cards[j];
//       this.cards[j] = swap;
//     }
//   }
//   drawCard() {
//     return this.cards.shift();
//   }
//   drawCards(count: number) {
//     const playerCards: CardClass[] = [];
//     for (let i = 0; i <= count; i++) {
//       if (this.cards.length > 0) playerCards.push(this.drawCard()!);
//     }

//     return playerCards;
//   }
// }
