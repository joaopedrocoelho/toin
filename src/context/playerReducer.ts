import { Reducer } from "react";
import { CardObj } from "src/types/card";
import { playerContextState } from "./playerContext";

export interface PlayerArrowObj {
  playerId: number;
  arrowIndex: number; //relative to the board
}

export interface PlayerObj {
  id: number;
  name: string; //if name is null, not a valid player
  score: number;
  hand: CardObj[];
  arrow: PlayerArrowObj;
}

export enum playerActionKind {
  SET_PLAYER,
  SET_HAND,
  REMOVE_CARD,
  PLAY_CARD,
}

export type setPlayerAction = {
  type: playerActionKind.SET_PLAYER;
  payload: PlayerObj;
};

export type setHandAction = {
  type: playerActionKind.SET_HAND;
  payload: {
    hand: CardObj[];
    playerIdx: number;
  };
};

export type removeCardAction = {
  type: playerActionKind.REMOVE_CARD;
  payload: {
    cardIdx: number;
    playerIdx: number;
  };
};

export type playCardAction = {
  type: playerActionKind.PLAY_CARD;
  payload: {
    points: number;
    playerIdx: number;
  };
};

export type playerAction =
  | setPlayerAction
  | setHandAction
  | removeCardAction
  | playCardAction;

export const playerReducer: Reducer<playerContextState, playerAction> = (
  state,
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case playerActionKind.SET_PLAYER:
      return {
        ...state,
        players: [...state.players, payload],
      };

    case playerActionKind.SET_HAND: {
      const newState = { ...state };
      newState.players[payload.playerIdx].hand = payload.hand;
      return newState;
    }
    case playerActionKind.REMOVE_CARD: {
      const newState = { ...state };
      newState.players[payload.playerIdx].hand = removeCard(
        newState.players[payload.playerIdx].hand,
        payload.cardIdx
      );
      return newState;
    }
    case playerActionKind.PLAY_CARD: {
      const newState = { ...state };
      newState.players[payload.playerIdx].score += payload.points;
      return newState;
    }
  }
};

export function removeCard(hand: CardObj[], cardIdx: number) {
  const handCopy = [...hand];
  handCopy.splice(cardIdx, 1);
  return handCopy;
}

// export function playCard(hand: CardObj[], cardIdx: number) {
//   const score = hand[cardIdx].properties.points;

//   return score;
// }
