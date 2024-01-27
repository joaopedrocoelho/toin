import { PlayerArrow } from "@assets/index";
import "./circle.css";
import { useContext } from "react";
import { PlayersContext } from "src/context/playersContext";

const PlayerArrowsCircle = () => {
  const { state } = useContext(PlayersContext);

  return (
    <div className="arrows-circle">
      {state.players.map((player, index) => {
        console.log("player", player.id, player.name);
        console.log("arrowIdx", player.arrow.arrowIndex);
        return (
          <div
            className="board-item"
            key={index}
            style={{
              transform: `rotate(${player.arrow.arrowIndex * 15}deg)`,
              fill: `hsl(${player.id + 1 * 90}, 100%, 50%)`,
            }}
          >
            <PlayerArrow className="fill-amber-400 !w-12 rotate-180" />
          </div>
        );
      })}
    </div>
  );
};

export default PlayerArrowsCircle;
