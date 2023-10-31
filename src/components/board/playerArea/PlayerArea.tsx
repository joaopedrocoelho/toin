import React, { useContext } from "react";
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
import ToinArea from "./ToinArea";
import { ToinContext } from "src/context/toinContext";

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

  const { card } = useContext(ToinContext);
  return (
    <div className="flex w-full gap-x-5">
      <ToinArea card={card} />
      <PlayerHand cards={cards} />
    </div>
  );
};

export default PlayerArea;
