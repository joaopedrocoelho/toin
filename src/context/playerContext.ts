import { createContext } from "react";
import { Player } from "src/classes/Player";

interface playerContextProps {
  player: Player;
  setPlayer: React.Dispatch<React.SetStateAction<Player>>;
}

export const PlayerContext = createContext<playerContextProps>({
  player: new Player(0, "player", 0),
  setPlayer: () => {},
});
