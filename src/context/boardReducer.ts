import { Reducer } from "react";
import { BoardLayer } from "src/classes/BoardClass";

export enum boardActionKind {
  ROTATE_OUTER,
  ROTATE_SECOND,
  ROTATE_THIRD,
  ROTATE_INNER,
}

export interface boardState {
  rotateDirection: "clockwise" | "counterclockwise";
  outerLayerArr: BoardLayer;
  secondLayerArr: BoardLayer;
  thirdLayerArr: BoardLayer;
  innerLayerArr: BoardLayer;
}

export interface boardAction {
  type: boardActionKind;
  payload: BoardLayer;
}

export const boardReducer: Reducer<boardState, boardAction> = (
  state,
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case boardActionKind.ROTATE_OUTER:
      console.log("payload", payload);
      return {
        ...state,
        outerLayerArr: payload,
      };
    case boardActionKind.ROTATE_SECOND:
      console.log("payload", payload);
      return {
        ...state,
        secondLayerArr: payload,
      };
    case boardActionKind.ROTATE_THIRD:
      console.log("payload", payload);
      return {
        ...state,
        thirdLayerArr: payload,
      };
    case boardActionKind.ROTATE_INNER:
      console.log("payload", payload);

      return {
        ...state,
        innerLayerArr: payload,
      };
  }
};

export function rotateLayer(
  layer: BoardLayer,
  rotateDirection: "clockwise" | "counterclockwise"
) {
  const layerCopy = [...layer];
  rotateDirection === "clockwise"
    ? layerCopy.unshift(layerCopy.pop()!)
    : layerCopy.push(layerCopy.shift()!);

  return layerCopy as BoardLayer;
}

export function getActiveMatrix(state: boardState, arrowIdx: number) {
  const { outerLayerArr, secondLayerArr, thirdLayerArr, innerLayerArr } = state;

  //need 3 numbers : the arrowIdx, the arrowIdx-1 and arrowIdx+1
  const prevIdx = arrowIdx - 1 < 0 ? outerLayerArr.length - 1 : arrowIdx - 1;
  const nextIdx = arrowIdx + 1 > outerLayerArr.length - 1 ? 0 : arrowIdx + 1;

  const activeMatrix: number[][] = [
    [innerLayerArr[nextIdx], innerLayerArr[arrowIdx], innerLayerArr[prevIdx]],
    [
      secondLayerArr[nextIdx],
      secondLayerArr[arrowIdx],
      secondLayerArr[prevIdx],
    ],
    [thirdLayerArr[nextIdx], thirdLayerArr[arrowIdx], thirdLayerArr[prevIdx]],
    [outerLayerArr[nextIdx], outerLayerArr[arrowIdx], outerLayerArr[prevIdx]],
  ];

  return activeMatrix;
}
