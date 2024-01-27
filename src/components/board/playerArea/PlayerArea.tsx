import React, { useContext, useEffect } from "react";
import PlayerHand from "./PlayerHand";
import ToinArea from "./ToinArea";
import { ToinContext } from "src/context/toinContext";
import { PlayerObj } from "src/context/playersReducer";

const PlayerArea = ({ player }: { player: PlayerObj | undefined }) => {
  console.log("player", player);
  return (
    <div className="flex w-full items-center gap-5 mt-4 pl-[16%]">
      {player && (
        <>
          <ToinArea />
          <div className="max-w-[50%] overflow-x-scroll overflow-y-visible">
            <PlayerHand hand={player.hand} />
          </div>
        </>
      )}
    </div>
  );
};

export default PlayerArea;
