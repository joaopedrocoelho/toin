import React from "react";
import Board from "./Board";
import PlayerArea from "../playerArea/PlayerArea";
import Deck from "./Deck";
import { DeckClass } from "src/classes/DeckClass";
import { Player } from "src/classes/Player";
import { BoardClass } from "src/classes/BoardClass";
import { FixedArray } from "src/types/helpers";
const circleArr: FixedArray<number, 24> = [
  4, 1, 2, 2, 3, 5, 1, 1, 4, 2, 3, 5, 5, 1, 2, 4, 3, 3, 2, 5, 4, 4, 1, 3,
];

const PlayArea = () => {
  const deck = new DeckClass();
  const player = new Player(1, "player1", 11);
  const board = new BoardClass(circleArr, circleArr, circleArr, circleArr);

  player.addStartingHand(deck.drawCards(5));
  return (
    <div className="flex w-full relative justify-center items-center">
      <div className="relative w-fit h-fit">
        <Deck cards={deck.getCards()} />
      </div>

      <div className="flex flex-col w-fit h-fit">
        <div>
          <Board board={board} />
        </div>

        <PlayerArea player={player} />
      </div>
    </div>
  );
};

export default PlayArea;
