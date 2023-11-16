import { createContext } from "react";
import { DeckClass } from "src/classes/DeckClass";

interface deckContextProps {
  deck: DeckClass;
  setDeck: React.Dispatch<React.SetStateAction<DeckClass>>;
}

export const DeckContext = createContext<deckContextProps>({
  deck: new DeckClass(),
  setDeck: () => {},
});
