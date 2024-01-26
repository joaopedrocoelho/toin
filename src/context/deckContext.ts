import { createContext } from "react";

import { CardObj } from "src/types/card";

interface deckContextProps {
  deck: CardObj[];
  setDeck: React.Dispatch<React.SetStateAction<CardObj[]>>;
}

export function shuffle(deck: CardObj[]) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const swap = deck[i];
    deck[i] = deck[j];
    deck[j] = swap;
  }

  return deck;
}
export function drawCard(deck: CardObj[]) {
  return {
    card: deck.shift(),
    cards: deck,
  };
}

export function drawCards(count: number, deck: CardObj[]) {
  const deckCopy = [...deck];
  const playerCards: CardObj[] = deck.slice(0, count);
  deckCopy.splice(0, count);

  return {
    cards: playerCards,
    deck: deckCopy,
  };
}

export function drawHands(
  playerCount: number,
  cardsPerPlayer: number,
  deck: CardObj[]
) {
  let deckCopy = [...deck];
  const hands: CardObj[][] = [];
  for (let i = 0; i < playerCount; i++) {
    const { cards, deck: newDeck } = drawCards(cardsPerPlayer, deckCopy);
    deckCopy = newDeck;
    hands.push(cards);
  }

  return {
    hands,
    deck: deckCopy,
  };
}

export const DeckContext = createContext<deckContextProps>({
  deck: [],
  setDeck: () => {},
});
