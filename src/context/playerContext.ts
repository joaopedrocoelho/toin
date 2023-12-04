import { createContext } from "react";
import { PlayerObj } from "./playerReducer";

interface playerContextProps {
  player: PlayerObj | undefined;
  setPlayer: React.Dispatch<React.SetStateAction<PlayerObj | undefined>>;
}

export const PlayerContext = createContext<playerContextProps>({
  player: {
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
  setPlayer: (player) => {
    console.log(player);
  },
});
