import { useContext } from "react";

import { BoardContext } from "src/context/boardContext";
import { boardActionKind, rotateLayer } from "src/context/boardReducer";
import { PlayersContext } from "src/context/playersContext";
import Circle from "./Circle";
import PlayerArrowsCircle from "./PlayerArrowsCircle";
import PlayersHandsCircle from "./PlayersHandsCircle";
import "./circle.css";

const Board = () => {
  const { state, dispatch } = useContext(BoardContext);
  const { state: playersState } = useContext(PlayersContext);

  return (
    <div className="w-full py-8 px-4">
      <div className="board relative">
        <PlayersHandsCircle />
        <PlayerArrowsCircle />
        <Circle
          circleArr={state.outerLayerArr}
          onClick={() => {
            dispatch({
              type: boardActionKind.ROTATE_OUTER,
              payload: rotateLayer(state.outerLayerArr, state.rotateDirection),
            });
          }}
        />
        <Circle
          circleArr={state.thirdLayerArr}
          onClick={() => {
            dispatch({
              type: boardActionKind.ROTATE_THIRD,
              payload: rotateLayer(state.thirdLayerArr, state.rotateDirection),
            });
          }}
        />
        <Circle
          circleArr={state.secondLayerArr}
          onClick={() => {
            dispatch({
              type: boardActionKind.ROTATE_SECOND,
              payload: rotateLayer(state.secondLayerArr, state.rotateDirection),
            });
          }}
        />
        <Circle
          circleArr={state.innerLayerArr}
          onClick={() => {
            dispatch({
              type: boardActionKind.ROTATE_INNER,
              payload: rotateLayer(state.innerLayerArr, state.rotateDirection),
            });
          }}
        />
        <div className="board-center"></div>
      </div>
    </div>
  );
};

export default Board;
