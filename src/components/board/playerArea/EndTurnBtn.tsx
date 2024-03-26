import { PlayersContext } from "@context/playersContext";
import { ActionState, TurnContext } from "@context/turnContext";
import { turnActionKind } from "@context/turnReducer";
import { useContext } from "react";

const EndTurnBtn = () => {
  /* Turn Actions
1. Buy a Card
2. Set card as toin
3. Play a Toin
4. Play a Regular Card or Action Card //not yet implemented
5. Turn the Board

steps 2~5 can be done in any order
steps 2~4 are optional

*/

  const { state, dispatch } = useContext(TurnContext);
  const { state: playersState } = useContext(PlayersContext);

  const hasBoughtCard =
    state.currentTurn.turnActions.buyCard === ActionState.done;
  const hasTurnedBoard =
    state.currentTurn.turnActions.turnBoard === ActionState.done;

  return (
    <button
      className={` p-4 rounded-lg font-bold w-fit text-green-950
        ${hasBoughtCard && hasTurnedBoard ? "bg-green-400" : "bg-gray-400"}`}
      disabled={hasBoughtCard && hasTurnedBoard}
      onClick={() => {
        dispatch({
          type: turnActionKind.END_TURN,
          payload: {
            playerIdx: state.currentTurn.playerIdx,
            nextPlayerIdx:
              (state.currentTurn.playerIdx + 1) % playersState.players.length,
          },
        });
      }}
    >
      End Turn
    </button>
  );
};

export default EndTurnBtn;
