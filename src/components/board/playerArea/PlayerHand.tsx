import React from "react";
import { CardClass } from "src/classes/Card";
import Card from "src/components/cards/Card";

export interface PlayerHandProps {
  cards: CardClass[];
}

const PlayerHand = ({ cards }: PlayerHandProps) => {
  return (
    <div className="flex w-full relative h-[200px] overflow-y-clip pt-4">
      {cards.map((card, index) => {
        return (
          <div
            className="absolute"
            style={{
              left: `${index * 20}px`,
              zIndex: index,
            }}
            key={index}
            data-testid="player-hand-card"
          >
            <Card
              key={index}
              type={card.type}
              faceUp={card.faceUp}
              cardProperties={card.getProperties()}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PlayerHand;
