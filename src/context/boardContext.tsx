import { Dispatch, createContext } from "react";
import { BoardClass, BoardLayer, layers } from "src/classes/BoardClass";
import { boardAction, boardState } from "./boardReducer";

export interface BoardContextProps {
  state: boardState;
  dispatch: Dispatch<boardAction>;
}

const dummyLayer: BoardLayer = Array.from(
  { length: 24 },
  () => 1
) as BoardLayer;

export const BoardContext = createContext<BoardContextProps>({
  state: {
    outerLayerArr: dummyLayer,
    secondLayerArr: dummyLayer,
    thirdLayerArr: dummyLayer,
    innerLayerArr: dummyLayer,
  },
  dispatch: (value) => {
    console.log(value);
  },
});
