import React, { useContext } from "react";
import { PlayerContext } from "src/context/playerContext";
import PlayerInfo from "./PlayerInfo";

const ScoreBoard = () => {
  const { state: playerState } = useContext(PlayerContext);
  return (
    <div className="flex rounded-lg p-6">
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
