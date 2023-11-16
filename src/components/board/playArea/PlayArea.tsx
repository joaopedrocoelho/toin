import React, { useContext, useEffect, useState } from "react";
import Board from "./Board";
import PlayerArea from "../playerArea/PlayerArea";
import Deck from "./Deck";
import { DeckClass } from "src/classes/DeckClass";
import { Player } from "src/classes/Player";
import { BoardClass } from "src/classes/BoardClass";
import { FixedArray } from "src/types/helpers";
import { DeckContext } from "src/context/deckContext";
import { PlayerContext } from "src/context/playerContext";

const PlayArea = () => {
  const { deck } = useContext(DeckContext);
  const { player } = useContext(PlayerContext);

  useEffect(() => {
    player.addStartingHand(deck.drawCards(5));
  }, [deck]);

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
