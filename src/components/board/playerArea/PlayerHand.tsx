import React, { useContext } from "react";
import { CardClass } from "src/classes/Card";
import Card from "src/components/cards/Card";
import SelectedCardModal from "src/components/modals/SelectedCardModal";
import { ModalContext } from "src/context/modalContext";

export interface PlayerHandProps {
  cards: CardClass[];
}

const PlayerHand = ({ cards }: PlayerHandProps) => {
  const { setModal } = useContext(ModalContext);

  return (
    <div className="flex w-full relative">
      {cards.map((card, index) => {
        return (
          <div
            className="relative hover:-translate-y-7 cursor-pointer transition-transform"
            key={index}
            data-testid="player-hand-card"
            onClick={() => {
              setModal(<SelectedCardModal card={card} />);
            }}
          >
            <Card
              key={index}
              type={card.type}
              faceUp={true}
              cardProperties={card.getProperties()}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PlayerHand;
