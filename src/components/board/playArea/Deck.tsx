import React from "react";
import Card from "../../cards/Card";
import { CardObj } from "src/types/card";

const Deck = ({ cards }: { cards: CardObj[] }) => {
  return (
    <div className="relative aspect-[8/11] min-w-[150px] cursor-pointer">
      {cards.map((card, index) => {
        return (
          <div
            key={`${index}-${card.type}`}
            className="absolute w-[inherit] "
            style={{
              transform: `translateY(${index * -0.7}px)`,
              zIndex: index,
            }}
          >
            <Card
              type={card.type}
              faceUp={false}
              cardProperties={card.properties}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Deck;
