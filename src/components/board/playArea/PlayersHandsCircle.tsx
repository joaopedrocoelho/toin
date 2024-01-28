import { PlayersContext } from "@context/playersContext";
import { useContext } from "react";
import OpponentArea from "../opponentsArea/OpponentArea";

const PlayersHandsCircle = () => {
  const { state } = useContext(PlayersContext);

  return (
    <div className="oponents-circle">
      {state.players.map((player, index) => {
        return (
          <div
            className="board-item"
            key={`${player.name}-${index}`}
            style={{
              transform: `rotate(${player.arrow.arrowIndex * 15}deg)`,
            }}
          >
            <OpponentArea player={player} />
          </div>
        );
      })}
    </div>
  );
};

export default PlayersHandsCircle;
