import { Reducer } from "react";
import { CardObj } from "src/types/card";
import { playersContextState } from "./playersContext";

export interface PlayerArrowObj {
  playerId: number;
  arrowIndex: number; //relative to the board
}

export interface PlayerObj {
  id: number;
  name: string; //if name is null, not a valid player
  score: number;
  hand: CardObj[];
  toin: CardObj | null;
  arrow: PlayerArrowObj;
}

export enum playerActionKind {
  SET_PLAYER,
  SET_PLAYERS,
  SET_HAND,
  SET_HANDS,
  SET_TOIN,
  REMOVE_CARD,
  PLAY_CARD,
}

export type setPlayerAction = {
  type: playerActionKind.SET_PLAYER;
  payload: PlayerObj;
};

export type setPlayersAction = {
  type: playerActionKind.SET_PLAYERS;
  payload: PlayerObj[];
};

export type setHandAction = {
  type: playerActionKind.SET_HAND;
  payload: {
    hand: CardObj[];
    playerIdx: number;
  };
};

export type setHandsAction = {
  type: playerActionKind.SET_HANDS;
  payload: {
    hand: CardObj[];
    playerIdx: number;
  }[];
};

export type removeCardAction = {
  type: playerActionKind.REMOVE_CARD;
  payload: {
    cardIdx: number;
    playerIdx: number;
  };
};

export type setToinAction = {
  type: playerActionKind.SET_TOIN;
  payload: {
    card: CardObj | null;
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
  | setPlayersAction
  | setHandAction
  | setHandsAction
  | setToinAction
  | removeCardAction
  | playCardAction;

export const playersReducer: Reducer<playersContextState, playerAction> = (
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

    case playerActionKind.SET_PLAYERS:
      return {
        ...state,
        players: payload,
      };

    case playerActionKind.SET_HAND: {
      const newState = { ...state };
      newState.players[payload.playerIdx].hand = payload.hand;
      return newState;
    }

    case playerActionKind.SET_HANDS: {
      const newState = { ...state };
      payload.forEach((hand) => {
        newState.players[hand.playerIdx].hand = hand.hand;
      });
      return newState;
    }

    case playerActionKind.SET_TOIN: {
      const newState = { ...state };
      newState.players[payload.playerIdx].toin = payload.card;
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

export function calcInitArrowIdx(totalPlayers: number, playerId: number) {
  const BOARD_SPACES = 24;
  const playerSpace = BOARD_SPACES / totalPlayers;
  //24/1 = 24; 24/2 = 12; 24/3 = 8; 24/4 = 6;
  const initArrowIdx = playerSpace * playerId;

  return playerId === 0 ? initArrowIdx : initArrowIdx;
}
