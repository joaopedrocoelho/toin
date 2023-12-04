import { Reducer } from "react";
import { CardObj } from "./deckContext";

export enum playerActionKind {
  SET_HAND,
}

export interface PlayerArrowObj {
  playerId: number;
  arrowIndex: number; //relative to the board
  activeMatrix: number[][];
}

export interface PlayerObj {
  id: number;
  name: string;
  score: number;
  hand: CardObj[];
  arrow: PlayerArrowObj;
}

export interface playerAction {
  type: playerActionKind;
  payload: PlayerObj;
}

export const playerReducer: Reducer<PlayerObj, playerAction> = (
  state,
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case playerActionKind.SET_HAND:
      console.log("payload", payload);
      return {
        ...state,
        hand: payload.hand,
      };
  }
};
