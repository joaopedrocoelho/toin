import React from "react";

import "./circle.css";
import Circle from "./Circle";
import PlayerArrowsCircle from "./PlayerArrowsCircle";
import { BoardClass } from "src/classes/BoardClass";

interface BoardProps {
  board: BoardClass;
}

const Board = ({ board }: BoardProps) => {
  const buildLines = Array.from({ length: 24 }, () => "");
  return (
    <div className="board relative">
      <PlayerArrowsCircle />
      <Circle
        circleArr={board.innerLayerArr}
        onClick={() => {
          board.rotateInnerLayer();
          console.log("clickedInner");
        }}
      />
      <Circle
        circleArr={board.thirdLayerArr}
        onClick={() => {
          console.log("clickedThird");
        }}
      />
      <Circle
        circleArr={board.secondLayerArr}
        onClick={() => {
          console.log("clickedSecond");
        }}
      />
      <Circle
        circleArr={board.outerLayerArr}
        onClick={() => {
          console.log("clickedOuter");
        }}
      />
      {/* <div
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
              key={`${index}-line`}
            ></div>
          );
        })}
      </div> */}
      <div className="board-center"></div>
    </div>
  );
};

export default Board;
