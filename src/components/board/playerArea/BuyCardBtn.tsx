import { DeckContext, drawCard } from "@context/deckContext";
import { PlayersContext } from "@context/playersContext";
import { playerActionKind } from "@context/playersReducer";
import { TurnContext } from "@context/turnContext";
import { turnActionKind } from "@context/turnReducer";
import { useContext } from "react";

const BuyCardBtn = () => {
  const { deck, setDeck } = useContext(DeckContext);
  const { state, dispatch } = useContext(PlayersContext);
  const { state: turnState, dispatch: turnDispatch } = useContext(TurnContext);

  const buyCard = () => {
    const { card, deck: newDeck } = drawCard(deck);

    setDeck(newDeck);
    dispatch({
      type: playerActionKind.BUY_CARD,
      payload: {
        card,
        playerIdx: state.activePlayer,
      },
    });
    turnDispatch({
      type: turnActionKind.BUY_CARD,
      payload: {
        playerIdx: state.activePlayer,
      },
    });
  };
  return (
    <button
      className={`bg-red-400 p-4 rounded-lg font-bold w-fit text-green-950`}
      onClick={buyCard}
    >
      Buy Card
    </button>
  );
};

export default BuyCardBtn;
