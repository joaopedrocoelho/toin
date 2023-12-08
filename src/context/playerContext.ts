import { Dispatch, createContext } from "react";
import { PlayerObj, playerAction } from "./playerReducer";

interface playerContextProps {
  state: PlayerObj;
  dispatch: Dispatch<playerAction>;
}

export const PlayerContext = createContext<playerContextProps>({
  state: {
    id: 0,
    name: "",
    score: 0,
    hand: [],
    arrow: {
      playerId: 0,
      arrowIndex: 0,
      activeMatrix: [],
    },
  },
  dispatch: (player) => {
    console.log(player);
  },
});
