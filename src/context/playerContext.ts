import { createContext } from "react";
import { CardClass } from "src/classes/Card";
import { Player } from "src/classes/Player";

export interface PlayerArrowObj {
  playerId: number;
  arrowIndex: number; //relative to the board
  activeMatrix: number[][];
}
export interface PlayerObj {
  id: number;
  name: string;
  score: number;
  hand: CardClass[];
  arrow: PlayerArrowObj;
}
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
