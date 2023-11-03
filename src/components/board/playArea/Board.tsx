import React, { useContext } from "react";

import "./circle.css";
import Circle from "./Circle";
import PlayerArrowsCircle from "./PlayerArrowsCircle";
import { BoardContext } from "src/context/boardContext";

const Board = () => {
  const { state, dispatch } = useContext(BoardContext);
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
