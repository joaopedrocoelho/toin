import React from "react";

import "./circle.css";
import Circle from "./Circle";
import PlayerArrowsCircle from "./PlayerArrowsCircle";

interface BoardProps {
  outerLayerArr?: Array<number>;
  secondLayerArr?: Array<number>;
  thirdLayerArr?: Array<number>;
  innerLayerArr?: Array<number>;
}

const Board = ({
  outerLayerArr,
  secondLayerArr,
  thirdLayerArr,
  innerLayerArr,
}: BoardProps) => {
  const buildLines = Array.from({ length: 24 }, () => "");
  return (
    <div className="board relative">
      <PlayerArrowsCircle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <div
        className="flex justify-center absolute w-full h-full rounded-full"
        style={{
          transform: `rotate(7.5deg)`,
        }}
      >
        {buildLines.map((value, index) => {
          return (
            <div
              className="h-full w-[0.5px] bg-white/30 absolute"
              style={{
                transform: `rotate(${index * 15}deg)`,
              }}
            ></div>
          );
        })}
      </div>
      <div className="board-center"></div>
    </div>
  );
};

export default Board;
