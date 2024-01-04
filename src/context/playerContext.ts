import { Dispatch, createContext } from "react";
import { PlayerObj, playerAction } from "./playerReducer";

export interface playerContextState {
  activePlayer: number;
  players: PlayerObj[];
}
interface playerContextProps {
  state: playerContextState;
  dispatch: Dispatch<playerAction>;
}

export const PlayerContext = createContext<playerContextProps>({
  state: {
    activePlayer: 0,
    players: [],
  },
  dispatch: (player) => {
    console.log(player);
  },
});
