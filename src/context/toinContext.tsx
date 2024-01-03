import { createContext } from "react";
import { CardObj } from "src/types/card";

export type cardProp = CardObj | null;

export interface ToinContextProps {
  card: cardProp;
  setCard: (card: cardProp) => void;
}

export const ToinContext = createContext<ToinContextProps>({
  card: null,
  setCard: (card: CardObj | null) => {
    console.log(card);
  },
});
