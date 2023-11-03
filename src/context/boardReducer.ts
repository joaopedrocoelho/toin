import { Reducer } from "react";
import { BoardLayer } from "src/classes/BoardClass";

export enum boardActionKind {
  ROTATE_OUTER,
  ROTATE_SECOND,
  ROTATE_THIRD,
  ROTATE_INNER,
}

export interface boardState {
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
      return {
        ...state,
        outerLayerArr: payload,
      };
    case boardActionKind.ROTATE_SECOND:
      return {
        ...state,
        secondLayerArr: payload,
      };
    case boardActionKind.ROTATE_THIRD:
      return {
        ...state,
        thirdLayerArr: payload,
      };
    case boardActionKind.ROTATE_INNER:
      return {
        ...state,
        innerLayerArr: payload,
      };
  }
};
