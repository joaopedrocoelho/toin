import React from "react";
import Board from "./Board";
import PlayerArea from "../playerArea/PlayerArea";
import Deck from "./Deck";
import { DeckClass } from "src/classes/DeckClass";
import { Player } from "src/classes/Player";

const PlayArea = () => {
  const deck = new DeckClass();
  const player = new Player(1, "player1", 11);

  player.addStartingHand(deck.drawCards(5));
  return (
    <div className="flex w-full relative justify-center items-center">
      <div className="relative w-fit h-fit">
        <Deck cards={deck.getCards()} />
      </div>

      <div className="flex flex-col w-fit items-center">
        <div className="aspect-square">
          <Board />
        </div>

        <div className="w-full max-w-[10%] aspect-square">
          <PlayerArea player={player} />
        </div>
      </div>
    </div>
  );
};

export default PlayArea;
