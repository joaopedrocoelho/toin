import React from "react";
import PlayerHand from "./PlayerHand";
import {
  ThreeSameCard,
  TwoSameCard,
  AllSameCard,
  AllSameTwoSideCard,
  AllDiffCard,
  AllDIffOneSide,
  AllDiffTwoSide,
} from "src/classes/cards/pointcards";

const PlayerArea = () => {
  const cards = [
    ThreeSameCard,
    TwoSameCard,
    AllSameCard,
    AllSameTwoSideCard,
    AllDiffCard,
    AllDIffOneSide,
    AllDiffTwoSide,
  ];
  return (
    <div className="flex w-full gap-x-5">
      <div className="flex relative border-gray-500 border-4 aspect-[8/11] min-w-[150px] items-center justify-center">
        2x
      </div>
      <PlayerHand cards={cards} />
    </div>
  );
};

export default PlayerArea;
