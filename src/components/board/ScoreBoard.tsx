import React, { useContext } from "react";
import { PlayerContext } from "src/context/playerContext";

const ScoreBoard = () => {
  const { state: playerState, dispatch: playerDispatch } =
    useContext(PlayerContext);
  return (
    <div className="flex rounded-lg p-6">
      <div className="flex flex-col gap-y-4">
        <h2 className="text-xl font-bold">🦁{playerState.name}</h2>
        <h1 className="text-4xl font-bold">{playerState.score}</h1>
      </div>
    </div>
  );
};

export default ScoreBoard;
