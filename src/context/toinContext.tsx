import { createContext } from "react";
import { CardClass } from "src/classes/Card";

export type cardProp = CardClass | null;

export interface ToinContextProps {
  card: cardProp;
  setCard: (card: cardProp) => void;
}

export const ToinContext = createContext<ToinContextProps>({
  card: null,
  setCard: (card: CardClass | null) => {
    console.log(card);
  },
});
