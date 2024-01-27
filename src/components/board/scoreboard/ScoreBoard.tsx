import React, { useContext } from "react";
import { PlayersContext } from "src/context/playersContext";
import PlayerInfo from "./PlayerInfo";

const ScoreBoard = () => {
  const { state: playerState } = useContext(PlayersContext);
  return (
    <div className="flex rounded-lg p-6 w-full gap-x-6">
      {playerState.players.map((player) => (
        <PlayerInfo
          name={player.name}
          score={player.score}
          key={`${player.id}-${player.name}`}
        />
      ))}
    </div>
  );
};

export default ScoreBoard;
