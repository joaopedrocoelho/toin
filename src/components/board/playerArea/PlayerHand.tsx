import React from "react";
import { CardClass } from "src/classes/Card";
import Card from "src/components/cards/Card";

export interface PlayerHandProps {
  cards: CardClass[];
}

const PlayerHand = ({ cards }: PlayerHandProps) => {
  return (
    <div className="flex">
      {cards.map((card, index) => {
        return (
          <Card
            key={index}
            type={card.type}
            faceUp={card.faceUp}
            cardProperties={card.getProperties()}
          />
        );
      })}
    </div>
  );
};

export default PlayerHand;
