import { Dispatch, createContext } from "react";
import { PlayerObj, playerAction } from "./playersReducer";

export interface playersContextState {
  activePlayer: number;
  players: PlayerObj[];
}
interface playersContextProps {
  state: playersContextState;
  dispatch: Dispatch<playerAction>;
}

export const PlayersContext = createContext<playersContextProps>({
  state: {
    activePlayer: 0,
    players: [],
  },
  dispatch: (player) => {
    console.log(player);
  },
});
