import { Reducer } from "react";
import { CardObj } from "src/types/card";

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
  payload: CardObj[];
};

export type removeCardAction = {
  type: playerActionKind.REMOVE_CARD;
  payload: number;
};

export type playCardAction = {
  type: playerActionKind.PLAY_CARD;
  payload: number;
};

export type playerAction =
  | setPlayerAction
  | setHandAction
  | removeCardAction
  | playCardAction;

export const playerReducer: Reducer<PlayerObj, playerAction> = (
  state,
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case playerActionKind.SET_PLAYER:
      return payload;

    case playerActionKind.SET_HAND:
      console.log("payload", payload);
      return {
        ...state,
        hand: payload,
      };

    case playerActionKind.REMOVE_CARD:
      return {
        ...state,
        hand: removeCard(state.hand, payload),
      };

    case playerActionKind.PLAY_CARD:
      return {
        ...state,
        score: state.score + playCard(state.hand, payload),
        hand: removeCard(state.hand, payload),
      };
  }
};

export function removeCard(hand: CardObj[], cardIdx: number) {
  const handCopy = [...hand];
  handCopy.splice(cardIdx, 1);
  return handCopy;
}

export function playCard(hand: CardObj[], cardIdx: number) {
  const score = hand[cardIdx].properties.points;

  return score;
}

export function canPlay(card: CardObj, activeMatrix: number[][]): boolean {
  // [
  //   [4, 2, 3],
  //   [1, 1, 4],
  //   [4, 2, 3],
  //   [2, 3, 5],
  // ];

  const isSameTypePattern =
    card.properties.pattern[3].filter((x) => x != 0)[0] === 1;

  return false;
}
