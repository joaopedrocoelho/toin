import Card from "@components/cards/Card";
import { DeckContext, drawCard } from "@context/deckContext";
import { ModalContext } from "@context/modalContext";
import { PlayersContext } from "@context/playersContext";
import { playerActionKind } from "@context/playersReducer";
import { TurnContext } from "@context/turnContext";
import { turnActionKind } from "@context/turnReducer";
import { CardObj } from "@customTypes/card";
import { useCallback, useContext, useEffect, useState } from "react";
import ModalWrapperBlur from "./ModalWrapperBlur";

const BoughtCardModal = () => {
  const { deck, setDeck } = useContext(DeckContext);
  const { state, dispatch } = useContext(PlayersContext);
  const { state: turnState, dispatch: turnDispatch } = useContext(TurnContext);
  const [boughtCard, setBoughtCard] = useState<CardObj | null>(null);
  const { setModal } = useContext(ModalContext);

  const buyCard = useCallback(() => {
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

    setBoughtCard(card);
  }, [deck, dispatch, setDeck, state.activePlayer, turnDispatch]);

  useEffect(() => {
    buyCard();

    setTimeout(() => {
      setModal(null);
    }, 5000);
  }, [buyCard]);

  return (
    <ModalWrapperBlur>
      <div className="flex flex-col w-full h-full items-center justify-center">
        {boughtCard && (
          <Card
            type={boughtCard.type}
            faceUp={false}
            cardProperties={boughtCard.properties}
            variant="modal"
            animate
          />
        )}
      </div>
    </ModalWrapperBlur>
  );
};

export default BoughtCardModal;
