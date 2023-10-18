import React from "react";

import "./circle.css";
import Circle from "./Circle";

const Board = () => {
  const buildLines = Array.from({ length: 24 }, () => "");
  return (
    <div className="board">
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <div
        className="flex justify-center absolute w-[800px] h-[800px] rounded-full"
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
