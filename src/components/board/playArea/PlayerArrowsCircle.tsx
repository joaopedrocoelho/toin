import { PlayerArrow } from "@assets/index";
import "./circle.css";
import { useContext } from "react";
import { PlayersContext } from "src/context/playersContext";

const PlayersArrowsCircle = () => {
  const { state } = useContext(PlayersContext);

  return (
    <div className="arrows-circle">
      {state.players.map((player, index) => {
        return (
          <div
            className="board-item"
            key={index}
            style={{
              transform: `rotate(${player.arrow.arrowIndex * 15}deg)`,
            }}
          >
            <PlayerArrow
              className=" !w-12 rotate-180"
              style={{
                fill: `hsl(${(player.id + 1) * 90}, 70%, 70%)`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PlayersArrowsCircle;
