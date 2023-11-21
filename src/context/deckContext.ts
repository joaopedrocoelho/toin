import { createContext } from "react";
import { cardProperties, cardTypes } from "src/classes/Card";
import { PointCardProperties } from "src/classes/PointCard";

export interface CardObj {
  type: cardTypes;
  faceUp: boolean;
  properties: cardProperties;
}

export interface PointCard extends CardObj {
  type: "PointCard";
  properties: PointCardProperties;
}

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

export const DeckContext = createContext<deckContextProps>({
  deck: [],
  setDeck: () => {},
});
