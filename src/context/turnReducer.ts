import { Reducer } from "react";
import { ActionState, TurnContextState } from "./turnContext";

export enum turnActionKind {
  BUY_CARD,
  PLAY_CARD,
  PLAY_TOIN,
  SET_TOIN,
  TURN_BOARD,
  END_TURN,
}

export type buyCardAction = {
  type: turnActionKind.BUY_CARD;
  payload: {
    playerIdx: number;
  };
};

export type playCardAction = {
  type: turnActionKind.PLAY_CARD;
  payload: {
    playerIdx: number;
  };
};

export type playToinAction = {
  type: turnActionKind.PLAY_TOIN;
  payload: {
    playerIdx: number;
  };
};

export type setToinAction = {
  type: turnActionKind.SET_TOIN;
  payload: {
    playerIdx: number;
  };
};

export type turnBoardAction = {
  type: turnActionKind.TURN_BOARD;
  payload: {
    playerIdx: number;
  };
};

export type endTurnAction = {
  type: turnActionKind.END_TURN;
  payload: {
    playerIdx: number;
    nextPlayerIdx: number;
  };
};

export type turnAction =
  | buyCardAction
  | playCardAction
  | playToinAction
  | setToinAction
  | turnBoardAction
  | endTurnAction;

export const turnReducer: Reducer<TurnContextState, turnAction> = (
  state,
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case turnActionKind.BUY_CARD:
      return {
        currentTurn: {
          playerIdx: state.currentTurn.playerIdx,
          turnActions: {
            ...state.currentTurn.turnActions,
            buyCard: ActionState.done,
          },
        },
        currentTurnIdx: state.currentTurnIdx,
        turnRecords: state.turnRecords,
      };

    case turnActionKind.PLAY_CARD:
      return {
        currentTurn: {
          playerIdx: state.currentTurn.playerIdx,
          turnActions: {
            ...state.currentTurn.turnActions,
            playCard: ActionState.done,
          },
        },
        currentTurnIdx: state.currentTurnIdx,
        turnRecords: state.turnRecords,
      };

    case turnActionKind.PLAY_TOIN:
      return {
        currentTurn: {
          playerIdx: state.currentTurn.playerIdx,
          turnActions: {
            ...state.currentTurn.turnActions,
            playToin: ActionState.done,
          },
        },
        currentTurnIdx: state.currentTurnIdx,
        turnRecords: state.turnRecords,
      };

    case turnActionKind.SET_TOIN:
      return {
        currentTurn: {
          playerIdx: state.currentTurn.playerIdx,
          turnActions: {
            ...state.currentTurn.turnActions,
            setToin: ActionState.done,
          },
        },
        currentTurnIdx: state.currentTurnIdx,
        turnRecords: state.turnRecords,
      };

    case turnActionKind.TURN_BOARD:
      return {
        currentTurn: {
          playerIdx: state.currentTurn.playerIdx,
          turnActions: {
            ...state.currentTurn.turnActions,
            turnBoard: ActionState.done,
          },
        },
        currentTurnIdx: state.currentTurnIdx,
        turnRecords: state.turnRecords,
      };

    case turnActionKind.END_TURN:
      return {
        currentTurn: {
          playerIdx: payload.nextPlayerIdx,
          turnActions: {
            buyCard: ActionState.undone,
            playCard: ActionState.undone,
            playToin: ActionState.undone,
            turnBoard: ActionState.undone,
            setToin: ActionState.undone,
          },
        },
        currentTurnIdx: state.currentTurnIdx + 1,
        turnRecords: [
          ...state.turnRecords,
          {
            playerIdx: state.currentTurn.playerIdx,
            turnActions: state.currentTurn.turnActions,
          },
        ],
      };
  }
};
