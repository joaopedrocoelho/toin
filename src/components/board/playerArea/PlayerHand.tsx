import React, { useContext } from "react";
import Card from "src/components/cards/Card";
import SelectedCardModal from "src/components/modals/SelectedCardModal";
import { CardObj } from "src/context/deckContext";
import { ModalContext } from "src/context/modalContext";

export interface PlayerHandProps {
  hand: CardObj[];
}

const PlayerHand = ({ hand }: PlayerHandProps) => {
  const { setModal } = useContext(ModalContext);

  return (
    <div className="flex w-full pt-7 relative items-end">
      {hand.map((card, index) => {
        return (
          <div
            className="relative hover:-translate-y-7 cursor-pointer transition-transform"
            key={index}
            data-testid="player-hand-card"
            onClick={() => {
              setModal(<SelectedCardModal card={card} cardIdx={index} />);
            }}
          >
            <Card
              key={index}
              type={card.type}
              faceUp={true}
              cardProperties={card.properties}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PlayerHand;
