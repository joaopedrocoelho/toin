import { useContext } from "react";
import Board from "./Board";
import PlayerArea from "../playerArea/PlayerArea";
import Deck from "./Deck";

import { DeckContext } from "src/context/deckContext";
import { PlayerContext } from "src/context/playerContext";
import ScoreBoard from "../scoreboard/ScoreBoard";

const PlayArea = () => {
  const { deck } = useContext(DeckContext);
  const { state } = useContext(PlayerContext);

  return (
    <div className="flex w-full relative justify-center items-center">
      <div className="relative w-fit h-fit">
        <Deck cards={deck} />
      </div>

      <div className="flex flex-col w-fit h-fit">
        <div className="flex gap-x-4 items-center">
          <Board />
          <ScoreBoard />
        </div>

        <PlayerArea player={state.players[state.activePlayer]} />
      </div>
    </div>
  );
};

export default PlayArea;
