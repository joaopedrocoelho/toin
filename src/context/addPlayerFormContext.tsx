import { createContext } from "react";

export interface NewPlayer {
  name: string;
  id: number;
}

interface AddPlayerFormContext {
  totalPlayers: number;
  setTotalPlayers: React.Dispatch<React.SetStateAction<number>>;
  players: NewPlayer[];
  setPlayers: React.Dispatch<React.SetStateAction<NewPlayer[]>>;
  errorFields: number[];
  setErrorFields: React.Dispatch<React.SetStateAction<number[]>>;
}

export const AddPlayerFormContext = createContext<AddPlayerFormContext>({
  totalPlayers: 0,
  setTotalPlayers: () => {},
  players: [],
  setPlayers: () => {},
  errorFields: [],
  setErrorFields: () => {},
});
