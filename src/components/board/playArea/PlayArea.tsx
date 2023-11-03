import React from "react";
import Board from "./Board";
import PlayerArea from "../playerArea/PlayerArea";
import Deck from "./Deck";
import { DeckClass } from "src/classes/DeckClass";
import { Player } from "src/classes/Player";
import { BoardClass } from "src/classes/BoardClass";
import { FixedArray } from "src/types/helpers";

const PlayArea = () => {
  const deck = new DeckClass();
  const player = new Player(1, "player1", 11);

  player.addStartingHand(deck.drawCards(5));
  return (
    <div className="flex w-full relative justify-center items-center">
      <div className="relative w-fit h-fit">
        <Deck cards={deck.getCards()} />
      </div>

      <div className="flex flex-col w-fit h-fit">
        <div>
          <Board />
        </div>

        <PlayerArea player={player} />
      </div>
    </div>
  );
};

export default PlayArea;
