import React from "react";
import Board from "./Board";
import PlayerArea from "./PlayerArea";

const PlayArea = () => {
  return (
    <div className="flex flex-col w-full h-full items-center ">
      <div className="flex w-full justify-center">
        <div className="w-full max-w-[35%] aspect-square">
          <Board />
        </div>
      </div>
      <div className="w-full max-w-[10%] aspect-square">
        <PlayerArea />
      </div>
    </div>
  );
};

export default PlayArea;
