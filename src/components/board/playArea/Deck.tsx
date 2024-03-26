import Card from "@components/cards/Card";
import BoughtCardModal from "@components/modals/BoughtCardModal";
import Tooltip from "@components/other/Tooltip";
import { ModalContext } from "@context/modalContext";
import { PlayersContext } from "@context/playersContext";
import { ActionState, TurnContext } from "@context/turnContext";
import { useContext } from "react";
import { CardObj } from "src/types/card";

const Deck = ({ cards }: { cards: CardObj[] }) => {
  const { state } = useContext(PlayersContext);
  const { state: turnState } = useContext(TurnContext);
  const { setModal } = useContext(ModalContext);

  const canBuyCard = () => {
    if (turnState.currentTurn.playerIdx !== state.activePlayer) return false;
    if (turnState.currentTurn.turnActions.buyCard === ActionState.done)
      return false;

    return true;
  };

  return (
    <div className="relative flex flex-col h-full">
      <div
        className="relative cursor-pointer flex flex-col items-center h-full w-full"
        onClick={() => {
          if (canBuyCard()) setModal(<BoughtCardModal />);
        }}
      >
        {canBuyCard() && <Tooltip color="red-500">Buy a Card</Tooltip>}

        {cards.map((card, index) => {
          return (
            <div
              key={`${index}-${card.type}`}
              className="absolute w-fit h-fit left-0"
              style={{
                transform: `translateY(${index * -0.7}px)`,
                zIndex: index,
              }}
            >
              <Card
                type={card.type}
                faceUp={false}
                cardProperties={card.properties}
                variant="deck"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Deck;
