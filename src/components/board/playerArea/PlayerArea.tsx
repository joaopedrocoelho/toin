import React, { useContext } from "react";
import PlayerHand from "./PlayerHand";
import ToinArea from "./ToinArea";
import { ToinContext } from "src/context/toinContext";
import { Player } from "src/classes/Player";

const PlayerArea = ({ player }: { player: Player }) => {
  const { card } = useContext(ToinContext);
  return (
    <div className="flex w-full gap-x-5">
      <ToinArea card={card} />
      <PlayerHand hand={player.hand} />
    </div>
  );
};

export default PlayerArea;
