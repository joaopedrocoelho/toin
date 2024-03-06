/* Turn Actions
1. Buy a Card
2. Set card as toin
3. Play a Toin
4. Play a Regular Card or Action Card //not yet implemented
5. Turn the Board

steps 2~5 can be done in any order
steps 2~4 are optional

*/

import { createContext } from "react";

export enum ActionState {
  "undone",
  "done",
  "skipped",
}

interface TurnActions {
  buyCard: ActionState;
  playCard: ActionState;
  setToin: ActionState;
  playToin: ActionState;
  turnBoard: ActionState;
}

export type TurnActionsNames = keyof TurnActions;

export interface TurnRecord {
  playerIdx: number;
  turnActions: TurnActions;
}

export interface TurnContextState {
  currentTurn: TurnRecord;
  currentTurnIdx: number;
  turnRecords: TurnRecord[];
}

const initialTurnContextState: TurnContextState = {
  currentTurn: {
    playerIdx: 0,
    turnActions: {
      buyCard: ActionState.undone,
      playCard: ActionState.undone,
      playToin: ActionState.undone,
      turnBoard: ActionState.undone,
      setToin: ActionState.undone,
    },
  },
  currentTurnIdx: 0,
  turnRecords: [],
};

export const TurnContext = createContext(initialTurnContextState);
